/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: "/archive",
      destination: "/archive/f8d1d615-8b7c-41ad-a951-88510df79a8f",
      permanent: true,
    }
    ]
  }
};

export default nextConfig;