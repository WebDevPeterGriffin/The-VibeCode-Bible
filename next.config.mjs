/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removed output: 'export' to support Server Actions in src/app/actions/skills.ts
    // If you need static export, you must move skill files to the /public directory and use fetch() instead.
    trailingSlash: true,
};

export default nextConfig;
