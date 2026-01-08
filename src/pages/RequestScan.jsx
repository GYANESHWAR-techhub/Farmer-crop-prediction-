// src/pages/RequestScan.jsx
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { fields } from "../data/fields";
import { getScanStatusForField } from "../utils/scanPlanner";

const RequestScan = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const fieldId = params.get("field");
  const initialField = fields.find((f) => f.id === fieldId) || fields[0];

  const status = getScanStatusForField(initialField);
  const defaultStage =
    (status.currentWindow && status.currentWindow.label) ||
    (status.nextWindow && status.nextWindow.label) ||
    "Early vegetative";

  const [selectedField, setSelectedField] = useState(initialField.id);
  const [stage, setStage] = useState(defaultStage);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!selectedField)
      newErrors.field = t("fieldRequired") || "Field is required";
    if (!stage)
      newErrors.stage = t("stageRequired") || "Stage is required";
    if (!date)
      newErrors.date = t("dateRequired") || "Preferred date is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    alert("Scan request submitted to FPO");
    navigate("/home");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-lg font-semibold mb-3">
        {t("requestScanTitle") || "Request drone scan"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        {/* Field */}
        <div>
          <label className="block mb-1">
            {t("fieldLabel") || "Field"}
          </label>
          <select
            value={selectedField}
            onChange={(e) => {
              setSelectedField(e.target.value);
              setErrors((prev) => ({ ...prev, field: "" }));
            }}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="">
              {t("selectFieldPlaceholder") || "Select field"}
            </option>
            {fields.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
          {errors.field && (
            <p className="text-xs text-red-600 mt-0.5">{errors.field}</p>
          )}
        </div>

        {/* Stage */}
        <div>
          <label className="block mb-1">
            {t("stageLabel") || "Growth stage"}
          </label>
          <select
            value={stage}
            onChange={(e) => {
              setStage(e.target.value);
              setErrors((prev) => ({ ...prev, stage: "" }));
            }}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="">
              {t("selectStagePlaceholder") || "Select stage"}
            </option>
            <option value="Early vegetative">
              {t("stageEarly") || "Early vegetative"}
            </option>
            <option value="Mid-season">
              {t("stageMid") || "Mid-season"}
            </option>
            <option value="Pre-harvest">
              {t("stagePreHarvest") || "Pre-harvest"}
            </option>
          </select>
          {errors.stage && (
            <p className="text-xs text-red-600 mt-0.5">{errors.stage}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1">
            {t("dateLabel") || "Preferred scan date"}
          </label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2 text-sm"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setErrors((prev) => ({ ...prev, date: "" }));
            }}
          />
          {errors.date && (
            <p className="text-xs text-red-600 mt-0.5">{errors.date}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-1">
            {t("notesLabel") || "Notes for FPO (optional)"}
          </label>
          <textarea
            className="w-full border rounded px-3 py-2 text-sm"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={
              t("notesPlaceholder") ||
              "E.g. focus on yellow patches in north side"
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded-md text-sm font-medium"
        >
          {t("submitScanRequest") || "Submit request"}
        </button>
      </form>
    </div>
  );
};

export default RequestScan;




