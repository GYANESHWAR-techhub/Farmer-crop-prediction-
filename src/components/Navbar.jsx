// src/components/Navbar.jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Agrilogo from "../assets/Agrilogo.png";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded text-sm font-medium ${
      isActive ? "bg-green-600 text-white" : "text-gray-800 hover:bg-gray-100"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    // clear any extra local storage keys if needed
    navigate("/"); // back to GetStarted page
  };

  return (
    <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 py-2">
        {/* Logo + app name */}
        <Link to="/home" className="flex items-center gap-2">
          <img
            src={Agrilogo}
            alt="AgriVistaar logo"
            className="h-14 w-14 object-contain"
            width={56}
            height={56}
          />
          <div className="leading-tight">
            <div className="text-base font-bold text-emerald-800">
              {t("appName")}
            </div>
            <div className="text-[11px] text-yellow-500">
              {t("tagline")}
            </div>
          </div>
        </Link>

        {/* Links + logout */}
        <div className="flex items-center gap-2">
          <NavLink to="/home" className={linkClass}>
            {t("Dashboard")}
          </NavLink>
          <NavLink to="/upload" className={linkClass}>
            {t("Drone Upload")}
          </NavLink>
          <NavLink to="/profit" className={linkClass}>
            {t("Profit")}
          </NavLink>

          <button
            onClick={handleLogout}
            className="ml-1 inline-flex items-center gap-1 px-3 py-2 rounded text-sm font-medium text-gray-800 hover:bg-red-50 hover:text-red-600 border border-transparent hover:border-red-200"
            title={t("Logout")}
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden md:inline">{t("logout")}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






