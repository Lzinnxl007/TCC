/** @type {import('next').NextConfig} */


const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ['upload.wikimedia.org', 'res.cloudinary.com', 'img.freepik.com', 'www.livrosabertos.sibi.usp.br'],
    },
    
}

module.exports = nextConfig
