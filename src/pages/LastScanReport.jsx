import { useLanguage } from "../context/LanguageContext";

const LastScanReport = () => {
  const { t } = useLanguage();

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">
        {t("lastScanTitle")}
      </h1>
      <p className="text-sm text-slate-600">
        {t("lastScanDesc")}
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">
            {t("dronePlaceholder")}
          </span>
        </div>
<div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg mt-3 text-xs">
  <p>
    From the last scan, early pest detection was achieved in one field. With timely spraying, a loss of 4–5 quintals was prevented (approximately ₹X saved).
  </p>
</div>

        <div className="space-y-3">
          <div className="bg-white shadow rounded-lg p-3">
            <h2 className="font-semibold mb-1 text-sm">
              {t("healthSummaryTitle")}
            </h2>
            <p className="text-sm">{t("pestRiskMedium")}</p>
            <p className="text-sm">{t("nutrientStressLow")}</p>
          </div>

          <div className="bg-white shadow rounded-lg p-3">
            <h2 className="font-semibold mb-1 text-sm">
              {t("yieldPredictionTitle")}
            </h2>
            <p className="text-sm">{t("expectedYieldLine")}</p>
            <p className="text-sm text-gray-500 mt-1">
              {t("profitHint")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastScanReport;


