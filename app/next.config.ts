/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  /**
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  // output: "export",
  /**
   * @see https://nextjs.org/docs/pages/api-reference/next-config-js/basepath
   */
  basePath: "/urtranslit",
  /**
   *
   * @see https://nextjs.org/docs/pages/api-reference/next-config-js/react-strict-mode
   */
  // reactStrictMode: false,

  /**
   * @see https://nextjs.org/docs/pages/api-reference/next-config-js/eslint
   */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
