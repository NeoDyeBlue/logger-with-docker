/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  redirects: async () => {
    return [{ source: "/logs", destination: "/logs/all", permanent: true }];
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      buffer: false,
      crypto: false,
      events: false,
      util: false,
      process: false,
      stream: false,
      timers: false,
      querystring: false,
      zlib: false,
    };

    return config;
  },
};

module.exports = nextConfig;
