import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

const Signup = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    contact: "",
    district: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.contact.trim()) newErrors.contact = "Required";
    if (!form.district.trim()) newErrors.district = "Required";
    if (!form.state.trim()) newErrors.state = "Required";
    if (!form.password) newErrors.password = "Required";
    if (!form.confirmPassword) newErrors.confirmPassword = "Required";
    if (!newErrors.password && !newErrors.confirmPassword && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
 localStorage.setItem("farmerPassword", form.password);
    // TODO: call signup API here

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-lime-500 to-yellow-300 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-1 bg-gradient-to-tr from-slate-900 via-emerald-700 to-yellow-400 opacity-40 blur-2xl" />
        <div className="relative bg-slate-950/95 text-slate-50 rounded-2xl shadow-2xl p-8 space-y-6 border border-emerald-500/40">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">
              {t("join")}{" "}
              <span className="text-yellow-300">{t("appName")}</span>
            </h1>
            <p className="text-xs text-slate-300">
              {t("signupDesc")}
            </p>
          </div>

          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-xs mb-1 text-slate-200">
                {t("name")} <span className="text-red-400">*</span>
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                  errors.name ? "border-red-500" : "border-slate-600"
                }`}
                placeholder={t("namePlaceholder")}
              />
              {errors.name && (
                <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone / Email */}
            <div>
              <label className="block text-xs mb-1 text-slate-200">
                {t("phoneNumber")}  <span className="text-red-400">*</span>
              </label>
              <input
                name="contact"
                type="text"
                value={form.contact}
                onChange={handleChange}
                className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                  errors.contact ? "border-red-500" : "border-slate-600"
                }`}
                placeholder={t("phoneDesc")}
              />
              {errors.contact && (
                <p className="text-[11px] text-red-400 mt-1">{errors.contact}</p>
              )}
            </div>

            {/* District + State */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs mb-1 text-slate-200">
                  {t("district")} <span className="text-red-400">*</span>
                </label>
                <input
                  name="district"
                  type="text"
                  value={form.district}
                  onChange={handleChange}
                  className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                    errors.district ? "border-red-500" : "border-slate-600"
                  }`}
                  placeholder={t("districtPlaceholder")}
                />
                {errors.district && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.district}</p>
                )}
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-200">
                  {t("state")} <span className="text-red-400">*</span>
                </label>
                <input
                  name="state"
                  type="text"
                  value={form.state}
                  onChange={handleChange}
                  className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                    errors.state ? "border-red-500" : "border-slate-600"
                  }`}
                  placeholder={t("statePlaceholder")}
                />
                {errors.state && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.state}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs mb-1 text-slate-200">
                {t("passwordLabel")} <span className="text-red-400">*</span>
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                  errors.password ? "border-red-500" : "border-slate-600"
                }`}
                placeholder={t("Create Password ")}
              />
              {errors.password && (
                <p className="text-[11px] text-red-400 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs mb-1 text-slate-200">
                {t("Confirm Password") || "Confirm password"}{" "}
                <span className="text-red-400">*</span>
              </label>
              <input
  name="confirmPassword"              // must match state key
  type="password"
  value={form.confirmPassword}        // controlled value
  onChange={handleChange}             // updates state
  className={`w-full rounded-lg bg-slate-900/70 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
    errors.confirmPassword ? "border-red-500" : "border-slate-600"
  }`}
  placeholder={t("Confirm Password ") || "Re-enter password"}
/>

              {errors.confirmPassword && (
                <p className="text-[11px] text-red-400 mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-lime-400 via-yellow-300 to-emerald-400 text-slate-900 shadow-md hover:brightness-110 transition"
            >
              {t("createAccountBtn")}
            </button>
          </form>

          <p className="text-[11px] text-slate-300 text-center">
            {t("agreeText")}
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

          <p className="text-xs text-center text-slate-200">
            {t("alreadyHaveAccount")}{" "}
            <Link
              to="/login"
              className="text-yellow-300 font-semibold hover:text-emerald-300"
            >
              {t("login")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;





