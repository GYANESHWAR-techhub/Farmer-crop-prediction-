// src/utils/cropScanWindows.js
export const cropScanWindows = {
  wheat: [
    { id: "early", label: "Early vegetative", start: 15, end: 30 },
    { id: "mid", label: "Mid-season", start: 45, end: 70 },
    { id: "preHarvest", label: "Pre-harvest", start: 100, end: 120 },
  ],
  paddy: [
    { id: "early", label: "Early vegetative", start: 10, end: 25 },
    { id: "mid", label: "Mid-season", start: 40, end: 65 },
    { id: "preHarvest", label: "Pre-harvest", start: 90, end: 110 },
  ],
};

