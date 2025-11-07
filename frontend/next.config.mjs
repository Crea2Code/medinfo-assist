/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // 📦 génération statique
  basePath: "/medinfo-assist",   // 📍 chemin GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: false,
  compiler: { removeConsole: false },

  // 🧩 Ajoute ceci :
  experimental: {
    turbo: {
      rules: {},
    },
  },
  distDir: "out", // 👈 ajoute cette ligne !
};

export default nextConfig;
