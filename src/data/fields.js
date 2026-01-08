// src/data/fields.js
export const fields = [
  {
    id: "wheat-north",
    name: "North wheat field",
    crop: "Wheat",
    cropKey: "wheat", // must match cropScanWindows.wheat
    area: 2.5,
    sowingDate: "1 Nov 2025",
    sowingDateIso: "2025-11-01",
    scanHistory: ["2025-12-05"],
    statusLabelKey: "fieldHealthy",
  },
  {
    id: "paddy-lowland",
    name: "Lowland paddy",
    crop: "Paddy",
    cropKey: "paddy", // must match cropScanWindows.paddy
    area: 1.8,
    sowingDate: "15 Nov 2025",
    sowingDateIso: "2025-11-15",
    scanHistory: [],
    statusLabelKey: "fieldHealthy",
  },
];



