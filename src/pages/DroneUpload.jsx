import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const DroneUpload = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");   // new
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setStatus("analyzing");

    // TODO: replace with real backend call using FormData
    // const formData = new FormData();
    // formData.append("image", file);
    // await fetch("/api/analyze", { method: "POST", body: formData });

    setTimeout(() => {
      setStatus("done");
    }, 2000);
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">{t("uploadDroneTitle")}</h1>
      <p className="text-sm text-slate-600">{t("uploadDroneDesc")}</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-4 space-y-3"
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0] || null);
            setStatus("");
          }}
          className="w-full"
        />
        <button
          type="submit"
          disabled={!file || status === "analyzing"}
          className="bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded"
        >
          {status === "analyzing" ? "Analyzing..." : "Analyze field"}
        </button>
      </form>

      {status === "done" && (
        <p className="text-sm text-green-700 mt-2">
          Analysis complete. (Later this will show pest, stress and yield map.)
        </p>
      )}
    </div>
  );
};

export default DroneUpload;

