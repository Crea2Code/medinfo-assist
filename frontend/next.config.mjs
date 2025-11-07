/** @type {import('next').NextConfig} */
const nextConfig = {
  // 📦 Génération statique pour GitHub Pages
  output: "export",

  // 🗂️ Base du projet (important pour GitHub Pages)
  basePath: "/medinfo-assist",

  // 🌐 Images et liens optimisés pour l’export
  images: {
    unoptimized: true
  },

  // 🔗 Compatibilité pour les chemins statiques
  trailingSlash: true,

  // ✅ Désactive certains checks React 19
  reactStrictMode: false,

  // 🧩 Réduit les risques d’erreurs avec Turbopack
  compiler: {
    removeConsole: false
  },

  // 🚫 Supprime les anciennes clés expérimentales non supportées
  eslint: {
    ignoreDuringBuilds: true
  },

  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
