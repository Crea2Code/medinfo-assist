'use client';
import React from 'react';
import { BrainCircuit } from 'lucide-react'; // icône IA

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-6 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">     
        <BrainCircuit className="w-16 h-16 text-white-600 mb-4"/> 
        <h1 className="text-3xl  font-bold">IA MedInfo Assist</h1>
        <p className="text-blue-100 mt-2">
          L’IA qui simplifie le langage médical pour tous
        </p>
      </div>
    </header>
  );
}
