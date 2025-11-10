/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production';

const nextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/medinfo-assist" : "",
  assetPrefix: isProd ? "/medinfo-assist/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: false,
  compiler: { removeConsole: false },
};

export default nextConfig;
