/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    async rewrites() {
        return [
          {
            source: '/api/recipes', // Padrão de URL que será redirecionado para a API
            destination: 'http://localhost:3000/api/recipes', // URL da sua API local
          },
        ];
      },
}

module.exports = nextConfig
