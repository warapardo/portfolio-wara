/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Se estiver em produção (GitHub), usa a subpasta. Se for local, usa a raiz.
  basePath: isProd ? '/portfolio-wara' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
