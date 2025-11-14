// frontend/app/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-50 border-b border-blue-100">
      <div className="mx-auto max-w-5xl px-4 py-4">
        {/* Bannière cliquable vers ton portfolio */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/medinfo-banner.png"
              alt="MedInfo Assist – L’IA qui simplifie le langage médical pour tous"
              width={1200}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              priority
            />
          </div>
        

        {/* Petit sous-header pratique */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-blue-900">
          <div className="font-medium">
            Application IA déployée dans le Cloud • Forum Santé 2025
          </div>

          <a
            href="#analyse"
            className="text-blue-700 hover:text-blue-900 underline-offset-2 hover:underline"
          >
            ↓ Accéder directement à l’analyse
          </a>
        </div>
      </div>
    </header>
  );
}
