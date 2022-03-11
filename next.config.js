/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/logs", destination: "/logs/all", permanent: true }];
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       net: false,
  //       tls: false,
  //       fs: false,
  //       buffer: false,
  //       crypto: false,
  //       events: false,
  //       util: false,
  //       process: false,
  //       stream: false,
  //       timers: false,
  //       querystring: false,
  //       zlib: false,
  //     };
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
