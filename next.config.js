/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.hennesseysalonspa.com',
            },
        ],
    },
}

module.exports = nextConfig
