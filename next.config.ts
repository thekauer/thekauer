import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/setup",
        destination:
          "https://raw.githubusercontent.com/thekauer/dots/refs/heads/main/setup.sh",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
