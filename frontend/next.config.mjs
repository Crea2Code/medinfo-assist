/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // ✅ active le mode static export
  basePath: "/medinfo-assist",   // ✅ nécessaire pour GitHub Pages
  images: { unoptimized: true }, // ✅ évite les erreurs d’optimisation
  trailingSlash: true,           // ✅ pour bien gérer les chemins relatifs
  reactStrictMode: false,        // ✅ évite certains warnings SSR/client
  compiler: {
    removeConsole: false,        // garde les logs utiles
  },
  experimental: {
    esmExternals: "loose",       // ✅ compatibilité avec les modules React 19
    serverComponentsExternalPackages: ["lucide-react"],
  },
};

export default nextConfig;
