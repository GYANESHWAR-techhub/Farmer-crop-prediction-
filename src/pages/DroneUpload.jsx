import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
const DroneUpload = () => {
  const [file, setFile] = useState(null);
 const { t } = useLanguage();
  const handleSubmit = (e) => {
    e.preventDefault();
    // later call backend with FormData
    alert(t("uploadDroneDesc"));
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold"> {t("uploadDroneTitle")}</h1>
 <p className="text-sm text-slate-600">
        {t("uploadDroneDesc")}
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-4 space-y-3"
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
        />
        <button
          disabled={!file}
          className="bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded"
        >
          Analyze field
        </button>
      </form>
    </div>
  );
};

export default DroneUpload;
