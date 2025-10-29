'use client';
import React from 'react';

interface Props {
  text: string;
  setText: (value: string) => void;
}

export default function TextAreaInput({ text, setText }: Props) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Collez ici un texte médical à analyser..."
      className="w-full h-48 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
    />
  );
}
