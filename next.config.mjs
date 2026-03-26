/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // यह स्टेटिक साइट बनाने के लिए जरूरी है
  images: {
    unoptimized: true, // GitHub Pages इमेज ऑप्टिमाइजेशन सपोर्ट नहीं करता
  },
  eslint: {
    ignoreDuringBuilds: true, // छोटी कोडिंग गलतियों की वजह से बिल्ड नहीं रुकेगा
  },
};

export default nextConfig;
