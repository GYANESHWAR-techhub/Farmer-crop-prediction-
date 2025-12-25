import { useParams } from "react-router-dom";

const FieldDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Field #{id} – Health & Yield</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Placeholder for map / image */}
        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Drone map placeholder</span>
        </div>

        <div className="space-y-3">
          <div className="bg-white shadow p-3 rounded-lg">
            <h2 className="font-semibold mb-1">Health summary</h2>
            <p>Pest risk: Medium</p>
            <p>Nutrient stress: Low</p>
          </div>

          <div className="bg-white shadow p-3 rounded-lg">
            <h2 className="font-semibold mb-1">Yield prediction</h2>
            <p>Expected yield: 22–26 q/acre</p>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
              Open profit calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetail;
