/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use Next.js defaults; no custom turbopack root to avoid relative path issues
  compiler: {
    styledComponents: true,
  },
  images: {
    // Allow trusted external image hosts used by certificate images
    remotePatterns: [
      { protocol: 'https', hostname: 'images.credly.com', pathname: '/**' },
      { protocol: 'https', hostname: 'img-a.udemycdn.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.codecademy.com', pathname: '/**' }
    ]
  },
};

export default nextConfig;
