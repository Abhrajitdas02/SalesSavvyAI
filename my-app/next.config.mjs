/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ucarecdn.com',
        },
        {
          protocol: 'https',
          hostname: 'wordpress-1278948-4626258.cloudwaysapps.com',
        },
      ],
    },
  }
  
  export default nextConfig
  