'use client';
import { BrainCircuit } from "lucide-react";

export default function Loader() {
  return (
    <div className="loader flex flex-col items-center justify-center mt-10">
      {/* 💙 Logo animé */}
      <div className="flex items-center space-x-2 animate-fade-in">
        <BrainCircuit className="w-8 h-8 text-blue-600 animate-pulse" />
        <span className="text-xl font-semibold text-blue-700 tracking-wide">
          MedInfo Assist <span className="text-emerald-600">💙</span>
        </span>
      </div>

      {/* 🩺 Points animés */}
      <div className="flex mt-4">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </div>
  );
}
