/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/logs", destination: "/logs/all", permanent: true }];
  },
};

module.exports = nextConfig;
