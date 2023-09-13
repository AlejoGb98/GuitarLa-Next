/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    formats: ['image/avif', 'image/webp'],
    //Imagenes externas hay que aclarar a Next de que dominio vienen
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
