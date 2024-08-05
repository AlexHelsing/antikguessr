/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.cloudfront.net',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }

export default nextConfig;
