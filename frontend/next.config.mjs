/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // génération statique
  basePath: "/medinfo-assist",   // chemin GitHub Pages
  assetPrefix: "/medinfo-assist/", // corrige les imports JS/CSS
  images: { unoptimized: true }, // pas d'optimisation d’images
  trailingSlash: true,
  reactStrictMode: false,
  compiler: {
    removeConsole: false,
  },
};

export default nextConfig;
