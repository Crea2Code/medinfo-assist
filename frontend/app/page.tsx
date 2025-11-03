'use client';
import { useState } from 'react';
import { analyzeMedicalText } from './api/analyze';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { BrainCircuit } from 'lucide-react'; // Icône IA

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult(null); // Vide le précédent résultat avant analyse

    try {
      const data = await analyzeMedicalText(text);

      if (data.error) {
        setResult(`⚠️ Erreur : ${data.error}`);
      } else if (data.simplified_text) {
        setResult(data.simplified_text);
      } else {
        setResult("Aucune réponse disponible pour ce texte.");
      }
    } catch (error) {
      console.error('Erreur d’analyse :', error);
      setResult('❌ Une erreur est survenue lors de l’analyse du texte.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header />

      {/* SECTION INTRO */}
      <section className="flex flex-col items-center text-center mt-10 px-6">
        <BrainCircuit className="w-16 h-16 text-blue-600 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          L’IA qui vulgarise les informations médicales pour tous.
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

      {/* SECTION PRINCIPALE */}
      <section
        id="analyse"
        className="flex flex-col items-center w-full max-w-3xl mt-16 px-6 pb-20 bg-white shadow-sm rounded-2xl border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-6 mt-8">
          🩺 Analysez un texte médical
        </h3>

        <div className="w-full mb-4">
          <textarea
            className="w-full max-w-2xl p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            rows={5}
            placeholder="Collez ici un texte médical à vulgariser..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className="w-full sm:w-auto mb-4">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className={`mt-4 px-6 py-2 rounded-lg shadow-md font-semibold text-white transition ${
              loading
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Analyse en cours...' : 'Analyser'}
          </button>
        </div>

        {/* Loader pendant l’analyse */}
        {loading && <Loader />}

        {/* Résultat */}
        {result && !loading && (
          <div className="mt-8 bg-white shadow-md rounded-lg p-6 max-w-2xl border border-gray-100 animate-fadeIn">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              🩺 Résultat :
            </h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
              {result}
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
