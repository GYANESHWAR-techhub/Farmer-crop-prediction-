const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Page title */}
      <h1 className="text-2xl font-semibold">Farmer Drone Dashboard</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total fields</p>
          <p className="mt-1 text-2xl font-semibold">3</p>
        </div>

        <div className="bg-red-100 p-4 rounded-lg">
          <p className="text-sm text-gray-600">At-risk fields</p>
          <p className="mt-1 text-2xl font-semibold">1</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Avg yield (q/acre)</p>
          <p className="mt-1 text-2xl font-semibold">24</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Expected income</p>
          <p className="mt-1 text-2xl font-semibold">₹75k</p>
        </div>
      </div>

      {/* Primary action for farmer */}
      <div>
        <button
          className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700 transition"
        >
          Request drone scan
        </button>
        <p className="mt-1 text-xs text-gray-500">
          Plan scans only at critical stages: early growth, mid-season, and before harvest.
        </p>
      </div>

      {/* Fields section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">My fields</h2>
        <p className="text-sm text-gray-600">
          Select a field to view its drone health map and yield prediction.
        </p>
        {/* later map over field cards here */}
      </div>
    </div>
  );
};

export default Dashboard;

