import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/gpon-software",
        destination: "/software",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/products/ONT-P4200R",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/products/ONT-P4200R",
        permanent: true,
      },
      {
        source: "/product/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/solutions/optimized-fiber-optic-solution",
        permanent: true,
      },
      {
        source: "/solution",
        destination: "/solutions/optimized-fiber-optic-solution",
        permanent: true,
      },
      {
        source: "/solution/:slug",
        destination: "/solutions/:slug",
        permanent: true,
      },
      {
        source: "/industries",
        destination: "/industries/hospitality",
        permanent: true,
      },
      {
        source: "/indistries",
        destination: "/industries/hospitality",
        permanent: true,
      },
      {
        source: "/indistries/:slug",
        destination: "/industries/:slug",
        permanent: true,
      },
      {
        source: "/industries/hospitality-solutions",
        destination: "/industries/hospitality",
        permanent: true,
      },
      {
        source: "/industries/corporate-workspaces-solutions",
        destination: "/industries/corporate-workspaces",
        permanent: true,
      },
      {
        source: "/industries/residential-real-estate-solutions",
        destination: "/industries/residential-real-estate",
        permanent: true,
      },
      {
        source: "/industries/student-living-solutions",
        destination: "/industries/student-living",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
