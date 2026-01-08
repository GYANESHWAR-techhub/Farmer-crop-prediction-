// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import DroneUpload from "./pages/DroneUpload";
import ProfitCalculator from "./pages/ProfitCalculator";
import ChatAssistant from "./pages/ChatAssistant";
import FieldDetail from "./pages/FieldDetail";
import Navbar from "./components/Navbar";
import ChatFloat from "./components/ChatFloat";
import ForgotPassword from "./pages/ForgotPassword";
import RequestScan from "./pages/RequestScan";
import LastScanReport from "./pages/LastScanReport";
// test change 
const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/login", "/signup", "/forgot-password"];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-slate-50">
      {showNavbar && <Navbar />}

      <main className={showNavbar ? "max-w-6xl mx-auto mt-4 mb-8" : ""}>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<DroneUpload />} />
          <Route path="/profit" element={<ProfitCalculator />} />
          <Route path="/chat" element={<ChatAssistant />} />
          <Route path="/fields/:id" element={<FieldDetail />} />
          <Route path="/request-scan" element={<RequestScan />} />
          <Route path="/last-scan" element={<LastScanReport />} />
        </Routes>
      </main>

      {showNavbar && <ChatFloat />}
    </div>
  );
};

export default App;



