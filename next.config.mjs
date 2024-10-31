/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.emersonbroga.com',
            },
            {
                hostname: 'github.com',
            }
        ]
    }
};

export default nextConfig;
