import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "skillicons.dev" },
            { protocol: "https", hostname: "go-skill-icons.vercel.app" },
        ],
    },
};

export default nextConfig;
