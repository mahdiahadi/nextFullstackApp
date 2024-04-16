/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "images.freeimages.com"
            }
        ]
    }
}

module.exports = nextConfig
