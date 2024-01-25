
// import nextMDX from '@next/mdx'

// const withMDX = nextMDX({
//   extension : /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   }
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// export default withMDX(nextConfig)
// module.exports = nextConfig;

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);

