/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["image.tmdb.org", "photos.google.com"],
  },
  env: {
    API_KEY: "aa0ebc34aeda48a1293cae35585884cf",
  },
};
