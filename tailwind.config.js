module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "390px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1600px",
        "3xl": "2160px",
      },
      fontSize: {
        "6xl": "56px",
      },
      colors: {
        primary: "var(--primary)",
        primaryAlt: "var(--primary-alt)",
        secondary: "var(--secondary)",
        darkBlue: "var(--dark-blue)",
        dark: "var(--dark)",
        darkAlt: "var(--dark-alt)",
        gray: "var(--gray)",
        darkGray: "var(--dark-gray)",
        darkGrayAlt: "var(--dark-gray-alt)",
      },
      fontFamily: {
        harmoniaSans: [`'HarmoniaSans', sans-serif`],
        circularStd: [`'CircularStd', sans-serif`],
      },
      backgroundImage: {
        pageCover: "var(--bg-page-cover)",
        primaryGradient: "var(--primary-gradient)",
        radialGradient: "var(--radial-gradient)",
        bannerGradient1: "var(--banner-gradient-1)",
        bannerGradient2: "var(--banner-gradient-2)",
        bannerGradient3: "var(--banner-gradient-3)",
        badgeGradient: "var(--badge-gradient)",
      },
      shadow: {
        heroTextShadow: "var(--hero-text-shadow)",
      },
      animation: {
        "fade-in": "fade-in .3s ease-in",
      },
    },
  },
};
