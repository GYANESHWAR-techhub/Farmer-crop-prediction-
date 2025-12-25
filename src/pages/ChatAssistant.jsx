import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
const ChatAssistant = () => {
   const { t } = useLanguage();
  const [messages, setMessages] = useState([
    { from: "bot", text: "Namaste! Ask me about your crop, yield or prices." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    // later: call backend /api/chat
    setMessages((prev) => [
      ...prev,
      userMsg,
      { from: "bot", text: "Demo reply: I will analyze your field and prices." },
    ]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold"> {t("aiAssistantTitle")}</h1>

      <div className="bg-white shadow rounded-lg p-4 h-80 overflow-y-auto">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`mb-2 flex ${
              m.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-xs ${
                m.from === "user"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder={t("chatPlaceholder")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
            {t("send")}
            
        </button>
      </form>
    </div>
  );
};

export default ChatAssistant;
