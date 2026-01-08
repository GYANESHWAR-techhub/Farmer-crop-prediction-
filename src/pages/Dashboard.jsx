const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Farmer Drone Dashboard</h1>

      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-100 p-4 rounded-lg">Total Fields: 3</div>
        <div className="bg-red-100 p-4 rounded-lg">At-Risk Fields: 1</div>
        <div className="bg-blue-100 p-4 rounded-lg">Avg Yield: 24 q/acre</div>
        <div className="bg-yellow-100 p-4 rounded-lg">Expected Income: ₹75k</div>
      </div>

      {/* Primary actions */}
      <div className="flex flex-wrap gap-3">
        <button
          className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold"
        >
          Request drone scan
        </button>

        {/* extra: you can add more actions later */}
        <button
          className="px-4 py-2 rounded-full bg-white border border-emerald-600 text-emerald-700 text-sm font-semibold"
        >
          View last scan report
        </button>
      </div>

      {/* Info below button stays same */}
      <p className="mt-1 text-xs text-gray-500">
        Critical stages pe hi scan karwayen: shuruat, beech crop aur harvest se pehle.
      </p>

      {/* Fields section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">My Fields</h2>
        <p className="text-sm text-gray-600">
          Select a field to view drone health map and yield prediction.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;



