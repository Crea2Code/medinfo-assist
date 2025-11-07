/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // 📦 génération statique
  basePath: "/medinfo-assist",   // 📍 chemin GitHub Pages
  images: { unoptimized: true }, // 🖼️ évite les erreurs d'optimisation
  trailingSlash: true,           // 🔗 compatibilité GitHub Pages
  reactStrictMode: false,        // ✅ évite les warnings React 19
  serverExternalPackages: ["lucide-react"], // 🔄 nouvelle syntaxe officielle
  compiler: {
    removeConsole: false,
  },
};

export default nextConfig;
