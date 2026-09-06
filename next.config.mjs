/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-wara',
  images: {
    unoptimized: true, // Necessário para o GitHub Pages aceitar imagens do Next.js
  },
};

export default nextConfig;
