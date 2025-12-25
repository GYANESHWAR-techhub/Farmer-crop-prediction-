





// src/pages/Login.jsx
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

const Login = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    contact: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.contact.trim()) newErrors.contact = "Required";
    if (!form.password) newErrors.password = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // demo password check against Signup
    const savedPassword = localStorage.getItem("farmerPassword");
    if (!savedPassword || form.password !== savedPassword) {
      setErrors((prev) => ({
        ...prev,
        password: "Wrong password",
      }));
      return;
    }

    // demo auth token
    localStorage.setItem("authToken", "demo-token");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-800 to-lime-500 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 via-lime-400 to-yellow-300 opacity-40 blur-2xl" />
        <div className="relative bg-slate-950/95 text-slate-50 rounded-2xl shadow-2xl p-8 space-y-6 border border-emerald-500/40">
          {/* Heading */}
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">
              {t("loginTo")}{" "}
              <span className="text-yellow-300">{t("appName")}</span>
            </h1>
            <p className="text-xs text-slate-300">
              {t("loginDesc")}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 text-sm" onSubmit={handleLogin}>
            {/* Phone / Email */}
            <div>
              <label className="block text-xs mb-1 text-slate-200">
                {t("phone")} <span className="text-red-400">*</span>
              </label>
              <input
                name="contact"
                type="text"
                value={form.contact}
                onChange={handleChange}
                className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                  errors.contact ? "border-red-500" : "border-slate-600"
                }`}
                placeholder={t("phonePlaceholder")}
              />
              {errors.contact && (
                <p className="text-[11px] text-red-400 mt-1">{errors.contact}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs mb-1 text-slate-200">
                {t("password")} <span className="text-red-400">*</span>
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                  errors.password ? "border-red-500" : "border-slate-600"
                }`}
                placeholder={t("passwordPlaceholder")}
              />
              {errors.password && (
                <p className="text-[11px] text-red-400 mt-1">
                  {errors.password}
                </p>
              )}
              <p className="text-[11px] text-right mt-1">
                <Link
                  to="/forgot-password"
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  {t("forgotPassword")}
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-lime-400 via-yellow-300 to-emerald-400 text-slate-900 shadow-md hover:brightness-110 transition"
            >
              {t("login")}
            </button>
          </form>

          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

          {/* Signup link */}
          <p className="text-xs text-center text-slate-200">
            {t("newTo")}{" "}
            <span className="font-semibold">{t("appName")}</span>?{" "}
            <Link
              to="/signup"
              className="text-yellow-300 font-semibold hover:text-emerald-300"
            >
              {t("signup")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


