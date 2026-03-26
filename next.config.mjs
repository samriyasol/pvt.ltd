/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  // यहाँ basePath या assetPrefix जैसी कोई लाइन नहीं होनी चाहिए
};

export default nextConfig;

