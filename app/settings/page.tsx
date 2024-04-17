"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-hot-toast";

function SettingsPage() {
  const [active, setActive] = useState("");
  const { data: session } = useSession();

  const setTemp = async (mode: string, temp: number) => {
    if (!mode) return;
    if (!temp) return;
    if (!session) return;

    const loading = toast.loading("Saving Settings...");

    const settings = {
      answerStyle: temp,
    };

    await setDoc(
      doc(db, "users", session?.user?.email!, "settings", "answerType"),
      settings
    );

    toast.success("Settings successfully saved", {
      id: loading,
    });

    setActive(mode);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">Settings</h1>

      {/* Temperature */}
      <div className="flex justify-center items-center space-x-4">
        <p className="font-bold text-white mr-4">Answer-Style:</p>
        <button
          id="rational"
          onClick={() => setTemp("rational", 0.2)}
          className={`settingsButton ${
            active === "rational" ? "bg-slate-600" : ""
          }`}
        >
          Rational
        </button>
        <button
          onClick={() => setTemp("default", 0.8)}
          className={`settingsButton ${
            active === "default" ? "bg-slate-600" : ""
          }`}
        >
          Default
        </button>
        <button
          onClick={() => setTemp("creative", 1.6)}
          className={`settingsButton ${
            active === "creative" ? "bg-slate-600" : ""
          }`}
        >
          Creative
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
