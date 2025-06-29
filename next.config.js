/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {

  eslint: {
      ignoreDuringBuilds: true,
  },

  typescript: {
      ignoreBuildErrors: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/relay-vC2c/static/:path*",
  //       destination: "https://us-assets.i.posthog.com/static/:path*",
  //     },
  //     {
  //       source: "/relay-vC2c/:path*",
  //       destination: "https://us.i.posthog.com/:path*",
  //     },
  //     {
  //       source: "/relay-vC2c/flags",
  //       destination: "https://us.i.posthog.com/flags",
  //     },
  //   ];
  // },
  // // This is required to support PostHog trailing slash API requests
  // skipTrailingSlashRedirect: true, 
};

export default config;
