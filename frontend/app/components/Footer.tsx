'use client';
import React from 'react';
import { BrainCircuit } from 'lucide-react'; // icône IA

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <BrainCircuit className="w-4 h-4 text-blue-600" />
          <span>
            <strong className="font-semibold text-gray-800">MedInfo Assist</strong> © 2025
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-right">
          <span>Développé par <strong className="text-blue-600">Sonia Chalal</strong></span>
          <a
            href="https://crea2code.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            crea2code.fr
          </a>
          <span className="text-gray-500">Forum Santé pour Tous 2025</span>
        </div>
      </div>
    </footer>
  );
}
