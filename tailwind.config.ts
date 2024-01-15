import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "asset-banner-wide": "url('/assets/banner-wide.png')",
        "asset-image1": "url('/assets/image1.png')",
        "asset-image2": "url('/assets/image2.png')",
        "asset-location": "url('/assets/location.png')",
        "asset-banner": "url('/assets/banner.png')",
        "asset-banner-overlay": "url('/assets/bannerOverlay.png')",
        "asset-pattern": "url('/assets/pattern.jpg')",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
