import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.module.rules
      .find((rule: { oneOf: unknown }) => typeof rule.oneOf === "object")
      .oneOf.filter((rule: { use: unknown }) => Array.isArray(rule.use))
      .forEach(
        (rule: {
          use: {
            loader: string | string[];
            options: { modules: { exportLocalsConvention: string } };
          }[];
        }) => {
          rule.use.forEach(
            (moduleLoader: {
              loader: string | string[];
              options: { modules: { exportLocalsConvention: string } };
            }) => {
              if (
                moduleLoader.loader?.includes("css-loader") &&
                !moduleLoader.loader?.includes("postcss-loader")
              ) {
                if (moduleLoader.options.modules) {
                  moduleLoader.options.modules.exportLocalsConvention =
                    "camelCase";
                }
              }
            }
          );
        }
      );

    return config;
  },
};

export default nextConfig;
