/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ Important pour GitHub Pages
  basePath: '/medinfo-assist', // ⬅️ nom exact de ton repo GitHub
  images: {
    unoptimized: true, // nécessaire car pas de serveur d'images sur GH Pages
  },
};

export default nextConfig;
