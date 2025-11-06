'use client';
import { useState } from 'react';
import { analyzeMedicalText } from "./api/analyze";
import { getHealthAdvice } from "./api/advice";
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import HealthDisclaimer from './components/HealthDisclaimer';
import { BrainCircuit } from 'lucide-react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SplashScreen from "./components/SplashScreen";


export default function Home() {
  const [loadingSplash, setLoadingSplash] = useState(true);
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  

    if (loadingSplash) {
    return <SplashScreen onFinish={() => setLoadingSplash(false)} />;
  }


  // 🔍 Analyse IA
  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setAdvice(null);
    try {
      const data = await analyzeMedicalText(text);
      setResult(data.simplified_text || data.error || "Aucune réponse disponible");
    } catch (error) {
      console.error("Erreur analyse :", error);
      setResult("⚠️ Erreur : impossible d’analyser le texte pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  // 💡 Conseil santé IA
  const handleAdvice = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await getHealthAdvice(text);
      setAdvice(data.advice || data.error || "Aucun conseil disponible");
    } catch (error) {
      console.error("Erreur conseil :", error);
      setAdvice("⚠️ Erreur : impossible d’obtenir un conseil santé pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fonction de rendu Markdown
  const renderMarkdown = (content: string) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ children }) => <p className="mb-2 text-gray-800">{children}</p>,
        h2: ({ children }) => (
          <h2 className="text-blue-700 font-semibold text-lg mt-4 mb-2">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-blue-600 font-semibold text-md mt-3 mb-2">{children}</h3>
        ),
        ul: ({ children }) => <ul className="list-disc pl-6 mb-3">{children}</ul>,
        li: ({ children }) => <li className="mb-1">{children}</li>,
        strong: ({ children }) => <strong className="text-blue-800">{children}</strong>,
      }}
    >
      {content}
    </ReactMarkdown>
  );

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header />

      {/* 💙 Section d’introduction */}
      <section className="text-center mt-10 px-6">
        <BrainCircuit className="w-16 h-16 text-blue-600 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          L’IA qui vulgarise et conseille pour une meilleure santé 💙
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
          MedInfo Assist vous aide à comprendre les textes médicaux et à obtenir
          des conseils santé personnalisés grâce à l’intelligence artificielle.
        </p>
      </section>

      {/* 🧠 Zone d'analyse */}
      <section
        id="analyse"
        className="w-full max-w-3xl mt-8 px-6 pb-20 bg-white shadow-sm rounded-2xl border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-6 mt-8">
          🩺 Analysez un texte médical ou demandez un conseil santé
        </h3>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={5}
          placeholder="Saisissez un texte médical ou une question santé..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* 🔘 Boutons d’action */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
          >
            {loading ? "Analyse en cours..." : "Analyser le texte médical"}
          </button>

          <button
            onClick={handleAdvice}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
          >
            {loading ? "Chargement..." : "Demander un conseil de prévention"}
          </button>
        </div>

        {/* ⏳ Loader */}
        {loading && <Loader />}

        {/* 🩺 Résultat de vulgarisation */}
        {result && (
          <div className="mt-8 bg-white shadow-md rounded-lg p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">🩺 Résultat :</h2>
            {renderMarkdown(result)}
            <HealthDisclaimer />
          </div>
        )}

        {/* 💡 Conseil santé */}
        {advice && (
          <div className="mt-8 bg-white shadow-md rounded-lg p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">💡 Conseil Santé :</h2>
            {renderMarkdown(advice)}
            <HealthDisclaimer />
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
