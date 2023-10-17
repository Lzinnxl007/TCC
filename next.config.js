/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ['upload.wikimedia.org', 'res.cloudinary.com', 'img.freepik.com'],
    },
}

module.exports = nextConfig
