// next.config.js (if using `.ts`, rename to `next.config.mjs` or use `next.config.js` for CommonJS)

const nextConfig = {
  images: {
    domains: ['image01-in.oneplus.net', 'i.pinimg.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent build failure due to lint errors on Vercel
  },
};

export default nextConfig;
