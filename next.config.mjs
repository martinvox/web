/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure basePath if your site is not deployed at the root level
  // basePath: '/repo-name',
};

export default nextConfig;
