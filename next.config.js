/** @type {import('next').NextConfig} */
const nextConfig = {
  // 优化中国大陆访问
  experimental: {
    optimizeCss: true,
  },
  
  // 静态资源优化
  images: {
    unoptimized: true, // 避免图片优化API调用
  },
  
  // 压缩优化
  compress: true,
  
  // 减少JavaScript包大小
  swcMinify: true,
  
  // 静态导出优化（可选）
  output: 'standalone',
  
  // 禁用x-powered-by header
  poweredByHeader: false,
  
  // 优化字体加载
  optimizeFonts: false, // 禁用Google Fonts优化
  
  // 环境变量
  env: {
    CUSTOM_KEY: 'my-value',
  },
};

module.exports = nextConfig;
