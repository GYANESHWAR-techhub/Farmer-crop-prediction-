// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { fields } from "../data/fields";
import { getScanStatusForField } from "../utils/scanPlanner";

const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const fieldsWithDueScan = fields.filter(
    (f) => getScanStatusForField(f).scanDueNow
  );

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Top greeting + status banner */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
            {t("welcome")}
          </h1>
          <p className="text-sm text-gray-600">{t("todaySnapshot")}</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl text-xs md:text-sm text-emerald-800">
          {t("droneUpdated")}
        </div>
      </div>

      {/* Global scan reminder banner */}
      {fieldsWithDueScan.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs md:text-sm px-4 py-2 rounded-xl">
          <p className="mt-1 text-xs text-gray-500">
Conduct high-value drone scans only at 2–3 critical stages of the season; there is no need to fly a drone every week.
</p>

          {`Scan recommended this week for ${
            fieldsWithDueScan[0].name
          } (key growth stage).`}
        </div>
      )}

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-emerald-100 border border-emerald-200 p-4 rounded-xl">
          <p className="text-xs text-emerald-800">{t("totalFields")}</p>
          <p className="text-2xl font-bold text-emerald-900">3</p>
        </div>
        <div className="bg-red-100 border border-red-200 p-4 rounded-xl">
          <p className="text-xs text-red-800">{t("atRiskFields")}</p>
          <p className="text-2xl font-bold text-red-900">1</p>
        </div>
        <div className="bg-blue-100 border border-blue-200 p-4 rounded-xl">
          <p className="text-xs text-blue-800">{t("avgYield")}</p>
          <p className="text-2xl font-bold text-blue-900">24.3</p>
        </div>
        <div className="bg-yellow-100 border border-yellow-200 p-4 rounded-xl">
          <p className="text-xs text-yellow-800">{t("expectedIncome")}</p>
          <p className="text-2xl font-bold text-yellow-900">75,200</p>
        </div>
      </div>

      {/* Primary actions row */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => navigate(`/request-scan?field=${fields[0].id}`)}
          className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold"
        >
          {t("requestScanButton")}
        </button>
        <button
          onClick={() => navigate("/last-scan")}
          className="px-4 py-2 rounded-full bg-white border border-emerald-600 text-emerald-700 text-sm font-semibold"
        >
          {t("viewLastScanButton")}
        </button>
      </div>
      <p className="mt-1 text-xs text-gray-500">{t("criticalScanTip")}</p>

      {/* Fields + mandi signal */}
      <div className="grid md:grid-cols-3 gap-5">
        {/* My fields */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">{t("myFields")}</h2>
            <button className="text-xs px-3 py-1 rounded-full border border-slate-200 hover:bg-slate-100">
              + {t("addNewField")}
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-3">{t("clickField")}</p>

          <div className="grid md:grid-cols-3 gap-3">
            {fields.map((field) => {
              const status = getScanStatusForField(field);
              const scansText = `${status.scansDone}/${status.totalRecommended} scans this season`;

              let nextText = "";
              if (status.scanDueNow && status.currentWindow) {
                nextText = `Scan due now (${status.currentWindow.label} stage)`;
              } else if (status.nextWindow) {
                const daysUntil =
                  status.nextWindow.start - status.daysSinceSowing;
                nextText = `Next scan: ${status.nextWindow.label} in ~${daysUntil} days`;
              }

              return (
                <div
                  key={field.id}
                  className="border rounded-xl p-3 hover:shadow cursor-pointer"
                  onClick={() =>
                    navigate(`/request-scan?field=${field.id}`)
                  }
                >
                  <p className="font-semibold text-sm">{field.name}</p>
                  <p className="text-xs text-gray-500">
                    {t(field.statusLabelKey)}
                  </p>
                  <p className="text-xs mt-1 text-gray-600">{scansText}</p>
                  {nextText && (
                    <p className="text-[11px] text-emerald-700 mt-1">
                      {nextText}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Today's mandi signal */}
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
          <h2 className="text-lg font-semibold">{t("todayMandi")}</h2>
          <p className="text-xs text-gray-500">{t("mandiDesc")}</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t("wheat")}</span>
              <span className="text-green-700 font-semibold">
                {t("sellNow")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>{t("mustard")}</span>
              <span className="text-yellow-700 font-semibold">
                {t("hold1Week")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>{t("paddy")}</span>
              <span className="text-red-700 font-semibold">
                {t("priceFalling")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;










