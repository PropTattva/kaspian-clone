// Served from a sub-path on GitHub Pages (NEXT_PUBLIC_BASE_PATH=/kaspian-clone); at the root locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};
export default nextConfig;
