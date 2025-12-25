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
          placeholder="Area (acre)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Total cost (₹)"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Expected market price (₹ per quintal)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Predicted yield (quintal per acre)"
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
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <p>      {t("yield")}: {result.totalYield.toFixed(1)} q</p>
          <p>Expected revenue: ₹{result.revenue.toFixed(0)}</p>
          <p>
              {t("profit")} / Loss:{" "}
            <span
              className={
                result.profit >= 0 ? "text-green-700" : "text-red-700"
              }
            >
              ₹{result.profit.toFixed(0)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfitCalculator;
