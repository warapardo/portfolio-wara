/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio-wara' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

// Exportar o basePath junto para poder usar nos códigos das páginas
export { basePath };
export default nextConfig;
