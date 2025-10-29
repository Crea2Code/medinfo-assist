'use client';
import { useState } from 'react';
import Header from './components/Header';
import TextAreaInput from './components/TextAreaInput';
import AnalyzeButton from './components/AnalyzeButton';
import ResultCard from './components/ResultCard';
import { BrainCircuit } from 'lucide-react'; // icône IA
import Footer from './components/Footer';


export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setResult(data.explanation || data.message || 'Analyse indisponible.');
    } catch (error) {
      setResult('Erreur de connexion au serveur.');
    }
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header />

      {/* Section d’intro */}
      <section className="flex flex-col items-center text-center mt-10 px-6">
        <BrainCircuit className="w-16 h-16 text-blue-600 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          L’intelligence artificielle au service de la santé
        </h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed mb-6">
          MedInfo Assist vous aide à comprendre les termes médicaux complexes
          grâce à l’analyse de texte alimentée par l’IA.  
          Une solution conçue pour patients, étudiants et professionnels de santé.
        </p>
        <a
          href="#analyse"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
        >
          En savoir plus
        </a>
      </section>

      {/* Section principale d’analyse */}
      <section
        id="analyse"
        className="flex flex-col items-center w-full max-w-3xl mt-16 px-6 pb-20 bg-white shadow-sm rounded-2xl border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-6 mt-8">
          🩺 Analysez un texte médical
        </h3>

        <div className="w-full mb-4">
          <TextAreaInput text={text} setText={setText} />
        </div>

        <div className="w-full sm:w-auto mb-4">
          <AnalyzeButton onClick={handleAnalyze} loading={loading} />
        </div>

        <ResultCard result={result} />
      </section>
      <Footer />
    </main>
  );
}
