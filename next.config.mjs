/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/writing',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
