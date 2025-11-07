/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // ✅ mode statique pour GitHub Pages
  basePath: "/medinfo-assist",   // ✅ chemin correspondant à ton dépôt GitHub
  images: { unoptimized: true }, // ✅ éviter l’erreur d’optimisation d’images
};

export default nextConfig;
