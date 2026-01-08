
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ProfitCalculator = () => {
  const { t } = useLanguage();
  const [area, setArea] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [yieldPerAcre, setYieldPerAcre] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const totalYield = Number(area || 0) * Number(yieldPerAcre || 0);
    const revenue = totalYield * Number(price || 0);
    const totalCost = Number(cost || 0);
    setResult({
      totalYield,
      revenue,
      profit: revenue - totalCost,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-2xl font-semibold text-emerald-800">
        {t("profitCalculatorTitle")}
      </h1>
      <p className="text-sm text-slate-600">
        {t("profitCalculatorDesc")}
      </p>

      <form
        onSubmit={handleCalculate}
        className="bg-white shadow p-4 rounded-lg space-y-3"
      >
        <input
          type="number"
          placeholder={t("areaPlaceholder")}
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder={t("totalCostPlaceholder")}
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder={t("expectedPricePlaceholder")}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder={t("predictedYieldPlaceholder")}
          value={yieldPerAcre}
          onChange={(e) => setYieldPerAcre(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded font-semibold"
        >
          {t("profitCalculatorTitle")}
        </button>
      </form>

      {result && (
  <div className="bg-green-50 border border-green-200 p-4 rounded-lg space-y-1">
    {/* existing lines... */}

    <p className="text-xs text-amber-700 mt-2">
    A delay in spraying can cause around 10% yield loss (₹3,000 per acre), whereas the cost of a single drone scan is only about ₹150. This means the cost of scanning is much lower than the potential loss, making drone scanning a cost-effective solution.
    </p>
  </div>
)}

    </div>
  );
};

export default ProfitCalculator;

