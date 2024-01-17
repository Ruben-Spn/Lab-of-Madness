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
        "asset-banner-wide": "url('https://d24zzkq8.tinifycdn.com/assets/banner-wide-compressed.png')",
        "asset-image1": "url('https://d24zzkq8.tinifycdn.com/assets/image1.png')",
        "asset-image2": "url('https://d24zzkq8.tinifycdn.com/assets/image2.png')",
        "asset-location": "url('https://d24zzkq8.tinifycdn.com/assets/location.png')",
        "asset-banner": "url('https://d24zzkq8.tinifycdn.com/assets/banner.png')",
        "asset-banner-overlay": "url('https://d24zzkq8.tinifycdn.com/assets/bannerOverlay.png')",
        "asset-pattern": "url('https://d24zzkq8.tinifycdn.com/assets/pattern.jpg')",
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
