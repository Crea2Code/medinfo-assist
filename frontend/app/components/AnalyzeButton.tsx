'use client';
import React from 'react';

interface Props {
  onClick: () => void;
  loading: boolean;
}

export default function AnalyzeButton({ onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`mt-4 w-full sm:w-auto px-6 py-2 rounded-lg text-white font-semibold transition ${
        loading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {loading ? 'Analyse en cours...' : 'Analyser'}
    </button>
  );
}
