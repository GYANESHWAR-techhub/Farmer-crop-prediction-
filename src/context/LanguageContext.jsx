// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

// All translations
const translations = {
  en: {
    // Common
    appName: "AgriVistaar",
    tagline: "Kisan ka Sathi",
    precisionAg: "Precision agriculture • Drone analytics",
    login: "Login",
    signup: "Sign Up",
    welcome: "Namaste, Kisan ji 👋",
    welcomeFarmer: "Namaste, Kisan ji",

    // GetStarted Page
    getStarted: "Get Started",
    createAccount: "Create free account",
    heroText:
      "See pests, nutrient stress and yield from the sky, and know the best time and mandi to sell your crop for maximum profit.",
    droneInsights: "Drone insights",
    droneInsightsDesc: "Detect pests & stress early",
    mandiTiming: "Smart mandi timing",
    mandiTimingDesc: "Sell when prices are highest",
    yieldPrediction: "Yield prediction",
    yieldPredictionDesc: "Plan harvest perfectly",
    farmers: "Farmers",
    acresMonitored: "Acres monitored",
    accuracy: "Accuracy",
    aiSupport: "AI Support",
    liveMonitoring: "Live monitoring",
    updatedAgo: "Updated 2h ago",
    droneView: "Drone view of crop field",
    aiPowered: "(AI-powered analysis)",
    pestRisk: "Pest risk",
    nutrient: "Nutrient",
    yield: "Yield",
    low: "Low",
    onArea: "on 80% area",
    mediumN: "Medium N",
    stressNorth: "stress in north",
    perAcre: "per acre",

    // Login Page
    loginTo: "Login to",
    phone: "Phone number / Email",
    phonePlaceholder: "Enter phone number or email",
    password: "Password / OTP",
    passwordPlaceholder: "••••••",
    forgotPassword: "Forgot password?",
    support: "Support: 1800-XXX-XXXX",
    newTo: "New to",
    loginDesc:
      "Use your registered phone or email to see drone scans, crop health and mandi signals tailored to your farm.",

    // Signup Page
    join: "Join",
    newFarmerAccount: "New farmer account",
    signupDesc:
      "Get AI-powered pest alerts, nutrient stress maps and mandi timing suggestions for your fields.",
    name: "Name",
    namePlaceholder: "Farmer name",
    phoneNumber: "Phone number / Email",
    phoneDesc: "For OTP, login and crop alerts",
    district: "District",
    districtPlaceholder: "e.g. Sitapur",
    state: "State",
    statePlaceholder: "Uttar Pradesh",
    passwordLabel: "Password",
    passwordSignupPlaceholder: "Choose a strong password",
    createAccountBtn: "Create account",
    agreeText:
      "By signing up you agree to receive important crop alerts on your mobile number or email.",
    alreadyHaveAccount: "Already have an account?",
    confirmPasswordLabel: "Confirm password",
    confirmPasswordPlaceholder: "Re-enter password",

    // Home/Dashboard
    todaySnapshot: "Here is today's snapshot of your fields, health and income.",
    droneUpdated:
      "Drone scan updated 2 hours ago • Weather: Good for spraying",
    totalFields: "Total fields",
    atRiskFields: "At-risk fields",
    avgYield: "Avg yield (q/acre)",
    expectedIncome: "Expected income (₹)",
    myFields: "My fields",
    addNewField: "Add new field",
    clickField: "Click a field card to open its drone health map & yield.",
    wheatNorth: "Wheat – North plot",
    moderatePestRisk: "Moderate pest risk",
    mustardEast: "Mustard – East plot",
    healthy: "Healthy",
    paddySouth: "Paddy – South plot",
    nutrientStress: "Nutrient stress",
    todayMandi: "Today's mandi signal",
    mandiDesc: "Based on last 30 days mandi data and predicted prices.",
    wheat: "Wheat",
    sellNow: "Sell now ↑",
    mustard: "Mustard",
    hold1Week: "Hold 1 week",
    paddy: "Paddy",
    priceFalling: "Price falling ↓",
    logout: "Logout",
    dashboard: "dashboard",
    droneUpload: "droneUpload",
    profit: "profit",
    // In en:
profitCalculatorTitle: "Crop Profit Calculator",
profitCalculatorDesc: "Estimate yield, revenue and profit for your crop.",
uploadDroneTitle: "Upload Drone Images",
uploadDroneDesc: "Send field images to AI for pest, stress and yield analysis.",
aiAssistantTitle: "AI Farm Assistant",
chatWelcome: "Namaste! Ask me about your crop, yield or prices.",
chatDemoReply: "Demo reply: I will analyze your field and prices.",
chatPlaceholder: "Type your question in English/Hindi...",
send: "Send",
askSathi: "askSathi",
forgotPasswordTitle: "Forgot password?",
forgotPasswordDesc: "Create a new password for your AgriVistaar account.",
saveNewPassword: "Save new password",

  },

  hi: {
    // Common
    appName: "एग्रीविस्तार",
    tagline: "किसान का साथी",
    precisionAg: "सटीक कृषि • ड्रोन विश्लेषण",
    login: "लॉगिन",
    signup: "साइन अप",
    welcome: "नमस्ते, किसान जी 👋",
    welcomeFarmer: "नमस्ते, किसान जी",
// In hi:
profitCalculatorTitle: "फसल लाभ कैलकुलेटर",
profitCalculatorDesc: "अपनी फसल की उपज, आमदनी और लाभ का अनुमान लगाएं।",
uploadDroneTitle: "ड्रोन चित्र अपलोड करें",
uploadDroneDesc: "कीट, तनाव और उपज विश्लेषण के लिए खेत की तस्वीरें भेजें।",
aiAssistantTitle: "एआई खेती सहायक",
chatWelcome: "नमस्ते! अपनी फसल, उपज या मंडी कीमतों के बारे में पूछें।",
chatDemoReply: "डेमो जवाब: मैं आपके खेत और कीमतों का विश्लेषण करूंगा।",
chatPlaceholder: "अपना सवाल हिंदी/अंग्रेज़ी में लिखें...",
send: "भेजें",
askSathi: "आस्क साथी",
forgotPasswordTitle: "पासवर्ड भूल गए?",
forgotPasswordDesc: "अपने एग्रीविस्तार खाते के लिए नया पासवर्ड बनाएं।",
saveNewPassword: "नया पासवर्ड सेव करें",

    // GetStarted Page
    getStarted: "शुरू करें",
    createAccount: "मुफ्त खाता बनाएं",
    heroText:
      "आकाश से कीट, पोषक तनाव और उपज देखें, और अधिकतम लाभ के लिए अपनी फसल बेचने का सबसे अच्छा समय और मंडी जानें।",
    droneInsights: "ड्रोन जानकारी",
    droneInsightsDesc: "कीटों और तनाव का जल्दी पता लगाएं",
    mandiTiming: "स्मार्ट मंडी समय",
    mandiTimingDesc: "जब कीमतें सबसे अधिक हों तब बेचें",
    yieldPrediction: "उपज पूर्वानुमान",
    yieldPredictionDesc: "फसल की सही योजना बनाएं",
    farmers: "किसान",
    acresMonitored: "एकड़ निगरानी",
    accuracy: "सटीकता",
    aiSupport: "AI सहायता",
    liveMonitoring: "लाइव निगरानी",
    updatedAgo: "2 घंटे पहले अपडेट किया गया",
    droneView: "फसल के खेत का ड्रोन दृश्य",
    aiPowered: "(AI-संचालित विश्लेषण)",
    pestRisk: "कीट जोखिम",
    nutrient: "पोषक तत्व",
    yield: "उपज",
    low: "कम",
    onArea: "80% क्षेत्र पर",
    mediumN: "मध्यम N",
    stressNorth: "उत्तर में तनाव",
    perAcre: "प्रति एकड़",

    // Login Page
    loginTo: "लॉगिन करें",
    phone: "फोन नंबर / ईमेल",
    phonePlaceholder: "फोन नंबर या ईमेल दर्ज करें",
    password: "पासवर्ड / OTP",
    passwordPlaceholder: "••••••",
    forgotPassword: "पासवर्ड भूल गए?",
    support: "सहायता: 1800-XXX-XXXX",
    newTo: "नए हैं",
    loginDesc:
      "अपने पंजीकृत फोन या ईमेल से ड्रोन स्कैन, फसल स्वास्थ्य और मंडी संकेत देखें।",

    // Signup Page
    join: "शामिल हों",
    newFarmerAccount: "नया किसान खाता",
    signupDesc:
      "अपने खेतों के लिए AI-संचालित कीट अलर्ट, पोषक तनाव मानचित्र और मंडी समय सुझाव प्राप्त करें।",
    name: "नाम",
    namePlaceholder: "किसान का नाम",
    phoneNumber: "फोन नंबर / ईमेल",
    phoneDesc: "OTP, लॉगिन और फसल अलर्ट के लिए",
    district: "जिला",
    districtPlaceholder: "जैसे सीतापुर",
    state: "राज्य",
    statePlaceholder: "उत्तर प्रदेश",
    passwordLabel: "पासवर्ड",
    passwordSignupPlaceholder: "एक मजबूत पासवर्ड चुनें",
    createAccountBtn: "खाता बनाएं",
    agreeText:
      "साइन अप करके आप अपने मोबाइल नंबर या ईमेल पर महत्वपूर्ण फसल अलर्ट प्राप्त करने के लिए सहमत हैं।",
    alreadyHaveAccount: "पहले से खाता है?",
    confirmPasswordLabel: "पासवर्ड की पुष्टि करें",
    confirmPasswordPlaceholder: "पासवर्ड दोबारा लिखें",

    // Home/Dashboard
    todaySnapshot:
      "यहां आपके खेतों, स्वास्थ्य और आय का आज का स्नैपशॉट है।",
    droneUpdated:
      "ड्रोन स्कैन 2 घंटे पहले अपडेट किया गया • मौसम: छिड़काव के लिए अच्छा",
    totalFields: "कुल खेत",
    atRiskFields: "जोखिम वाले खेत",
    avgYield: "औसत उपज (क्विंटल/एकड़)",
    expectedIncome: "अपेक्षित आय (₹)",
    myFields: "मेरे खेत",
    addNewField: "नया खेत जोड़ें",
    clickField:
      "ड्रोन स्वास्थ्य मानचित्र और उपज खोलने के लिए खेत कार्ड पर क्लिक करें।",
    wheatNorth: "गेहूं – उत्तर प्लॉट",
    moderatePestRisk: "मध्यम कीट जोखिम",
    mustardEast: "सरसों – पूर्व प्लॉट",
    healthy: "स्वस्थ",
    paddySouth: "धान – दक्षिण प्लॉट",
    nutrientStress: "पोषक तनाव",
    todayMandi: "आज का मंडी संकेत",
    mandiDesc:
      "पिछले 30 दिनों के मंडी डेटा और अनुमानित कीमतों के आधार पर।",
    wheat: "गेहूं",
    sellNow: "अभी बेचें ↑",
    mustard: "सरसों",
    hold1Week: "1 सप्ताह रुकें",
    paddy: "धान",
    priceFalling: "कीमत गिर रही है ↓",
    logout: "लॉगआउट",
    dashboard: "डैशबोर्ड",
    droneUpload: "ड्रोन अपलोड",
    profit: "मुनाफ़ा",
  },

  ta: {
    appName: "அக்ரிவிஸ்தார்",
    tagline: "கிசான் கா சாத்தி",
    precisionAg: "துல்லிய வேளாண்மை • ட்ரோன் பகுப்பாய்வு",
    login: "உள்நுழைவு",
    signup: "பதிவு செய்யவும்",
    welcome: "வணக்கம், கிசான் ஜி 👋",
    welcomeFarmer: "வணக்கம், கிசான் ஜி",
    // keep rest same as your previous TA keys or copy EN and translate later
  },

  bn: {
    appName: "এগ্রিভিস্তার",
    tagline: "কিসান কা সাথী",
    precisionAg: "নির্ভুল কৃষি • ড্রোন বিশ্লেষণ",
    login: "লগইন",
    signup: "সাইন আপ",
    welcome: "নমস্কার, কিসান জি 👋",
    welcomeFarmer: "নমস্কার, কিসান জি",
    // keep rest same as your previous BN keys or copy EN and translate later
  },

  mr: {
    appName: "अ‍ॅग्रीविस्तार",
    tagline: "शेतकऱ्यांचा साथी",
    precisionAg: "प्रिसिजन शेती • ड्रोन विश्लेषण",
    login: "लॉगिन",
    signup: "साइन अप",
    welcome: "नमस्ते, किसान जी 👋",
    welcomeFarmer: "नमस्ते, किसान जी",
    // copy other keys from en for now
  },

  te: {
    appName: "అగ్రివిస్తార్",
    tagline: "కిసాన్ కా సాథీ",
    precisionAg: "సూక్ష్మ వ్యవసాయం • డ్రోన్ విశ్లేషణ",
    login: "లాగిన్",
    signup: "సైన్ అప్",
    welcome: "నమస్తే, కిసాన్ జీ 👋",
    welcomeFarmer: "నమస్తే, కిసాన్ జీ",
    // copy other keys from en for now
  },
};

export const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिंदी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
];

export const LanguageProvider = ({ children }) => {
  const stored =
    typeof window !== "undefined"
      ? localStorage.getItem("appLanguage")
      : null;

  const [language, setLanguage] = useState(stored || "en");

  const t = (key) => translations[language]?.[key] || key;

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem("appLanguage", langCode);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};




