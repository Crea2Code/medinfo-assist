'use client';
import React from 'react';

interface Props {
  result: string;
}

export default function ResultCard({ result }: Props) {
  if (!result) return null;
  return (
    <div className="mt-6 bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full max-w-3xl">
      <h2 className="text-lg font-semibold text-blue-700 mb-3">🩺 Résultat de l’analyse</h2>
      <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{result}</p>
    </div>
  );
}
