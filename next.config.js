/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态资源优化
  images: {
    unoptimized: true, // 避免图片优化API调用
  },
  
  // 压缩优化
  compress: true,
  
  // 禁用x-powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;
