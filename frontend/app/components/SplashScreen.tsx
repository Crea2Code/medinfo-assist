'use client';
import { useEffect, useState } from 'react';
import { BrainCircuit } from 'lucide-react';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);
  const ENABLE_SOUND = true;


  useEffect(() => {
    // 🩺 Joue le bip dès que l’écran s’affiche
    const audio = new Audio('/sounds/bip_medical.mp3');
    audio.volume = 0.5; // volume doux
    
    if (ENABLE_SOUND) {
  audio.play().catch(() => {
    console.warn("🔇 Lecture automatique bloquée — en attente d’un clic utilisateur.");
    // ✅ Dès que l’utilisateur clique ou tape une touche → on rejoue le son une seule fois
    const unlockAudio = () => {
      audio.play();
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
  });
}

    // ⏱️ Disparaît après 2 secondes
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-blue-50 z-50 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 💙 Logo MedInfo Assist */}
      <div className="flex items-center space-x-2 animate-fade-in">
        <BrainCircuit className="w-12 h-12 text-blue-600 animate-pulse" />
        <span className="text-2xl font-semibold text-blue-700 tracking-wide">
          MedInfo Assist <span className="text-emerald-600">💙</span>
        </span>
      </div>

      {/* 🩺 Points animés */}
      <div className="flex mt-6">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </div>
  );
}
