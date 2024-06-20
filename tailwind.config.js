/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const positions = [
  "0",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
];
const afterColor = [
  "#0242ff", // primary
  "#1e3e92", // primary_100
  "#007bff80", // primary_200

  "#b40105", // secondary
  "#dd4b4f", // secondary_100
  "#310092", // secondary2
  "#230438", // secondary3
  "#7fffd4", // secondary4

  "#c8d5f9", // aboutBg

  "#ffffff", // white
  "#f0f0f0", // gray-100
  "#333333", // gray-200
  "#000000", // black
];

const safelist = [
  ...positions.map((position) => `right-[${position}]`),
  ...positions.map((position) => `right-[-${position}]`),
  ...positions.map((position) => `left-[${position}]`),
  ...positions.map((position) => `top-[${position}]`),
  ...positions.map((position) => `top-[-${position}]`),
  ...positions.map((position) => `bottom-[${position}]`),
  ...positions.map((position) => `w-[${position}%]`),
  ...afterColor.map((color) => `after:border-r-color-[${color}]`),
  // `after:border-r-color-[${primary}]`,
  "animate-[fade-in_1s_ease-in-out]",
  "animate-[fade-in-down_1s_ease-in-out]",
  "animate-[slide-in_0.5s_ease-in-out]",
  "animate-[slide-in-right_0.5s_ease-in-out]",
  "animate-[slide-in-up_0.5s_ease-in-out]",
  "animate-[slide-in-down_0.5s_ease-in-out]",
];
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  safelist,
  theme: {
    screens: {
      sm: "640px", // Small devices (phones, 640px and up)
      md: "768px", // Medium devices (tablets, 768px and up)
      lg: "1024px", // Large devices (desktops, 1024px and up)
      xl: "1280px", // Extra large devices (large desktops, 1280px and up)
    },
    colors: {
      // Primary Color
      primary: "#0047FF", //#1e3e9
      primary_100: "#1e3e92", //#1e3e9
      primary_200: "#007bff80", //007bff80

      // Complementary Colors
      secondary: "#B90000", //#dd4b4f
      secondary_100: "#dd4b4f", //#dd4b4f
      secondary2: "#310092", //007bff80
      secondary3: "#230438",
      secondary4: "#7fffd4", //#29FF52 7fbdff //#7fbdff

      //container Background
      aboutBg: "#c8d5f9",

      // Neutral Colors
      white: "#ffffff",
      "gray-100": "#f0f0f0",
      "gray-200": "#333333",
      black: "#000000",
    },
    fontSize: {
      xxs: "0.625rem", // 10px
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
      "8xl": "5.5rem", // 96px
      "9xl": "8rem", // 128px
      // Add custom font sizes
      tiny: "0.7rem", // Custom tiny size
      huge: "5rem", // Custom huge size
      massive: "10rem", // Custom massive size
    },
    padding: {
      0: "0rem", // 0px
      2: "0.5rem", //8px
      4: "1rem", // 16px
      6: "1.5rem", // 24px
      8: "2rem", // 32px
      10: "2.5rem", // 40px
      12: "3rem", // 48px
      16: "4rem", // 64px
      20: "5rem", // 80px
      24: "6rem", // 96px
      28: "12rem", // 192px
    },
    extend: {
      backgroundImage: {
        primaryBtn:
          "linear-gradient(to right, #B90000 50%, hsl(241.65deg 100% 50% / 100%) 0%)", //linear-gradient(to right, hsl(352deg 100% 61.66%) 30%, hsl(241.65deg 100% 50% / 61%) 100%)
        navSidebar: "rgba(187, 190, 207, 0.2)",
        secondaryBtn:
          "linear-gradient(to right, #2b5876 0%, #4e4376  51%, #2b5876  100%)",
        heroImage: 'url("/src/assets/doctors.png")',
        heroMockup: 'url("/src/assets/mockup_hero.png")',
        stepBlob: 'url("/src/assets/stepblob2.png")', //2493.jpg
        bg: 'url("/src/assets/2493.jpg")', //2493.jpg
        scrollmodern:
          "linear-gradient(0deg, rgb(20 20 17 / 60%), rgb(35 44 57 / 90%)), url('/src/assets/scrollmodern.jpg')",
        heroGradient:
          "linear-gradient(340deg, rgb(27 39 106), rgb(29 0 233 / 0%)), url(/src/assets/doctor6.jpg)",
        waitList:
          "linear-gradient(91deg, rgb(255 255 255 / 90%), rgb(235 234 248 / 80%)), url(/src/assets/mockup_hero.png)",
        notFoundbg:
          "linear-gradient(91deg, rgb(255 255 255 / 90%), rgb(235 234 248 / 80%)), url(/src/assets/notfoundbg.jpg)", //footerBg.jpg//footerBg.jpg
        footerBg: "url(/src/assets/footerBg.jpg)",
        mockupBg:"url(/src/assets/Mockups/magicpattern-starry-night-1717534673666.png)"
      }, //notfoundbg.jpg
      backgroundSize: {
        'full': '100% 100%',
        'fullAuto':'auto 100%',
        '100':'100%',
        '150':'150%',
        '200':'200%'
      },
      backgroundPosition: {
        'center-center': 'center center',
      },

      gridTemplateColumns: {
        grid1Mobile: "repeat(auto-fill, minmax(300px, auto))",
        grid2: "repeat(auto-fill, minmax(auto, 2fr))",
      },
      gridTemplateRows: {
        grid1RowMobile: "2fr min-content",
        grid2: "repeat(auto, minmax(100px, 100px))",
      },
      boxShadow: {
        red_custom: "inset 5px 5px 10px 0px rgba(0, 0, 0, 0.3)",
        green_custom: "inset 5px 5px 10px 0px rgb(27 214 95 / 50%)",
        featuresCardShadow: "5px 5px 10px #ababab, -5px -5px 10px #ffffff",
        featuresCardHover: " 5px 5px 15px #7d7d7d, -5px -5px 15px #ffffff;",
        testimonialCardShadow: "5px 5px 10px #ededed, -5px -5px 10px #ffffff;",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          // '50%': { transform: 'translateX(50%)', opacity: 0.5 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-up": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-in-down": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "pop-up": {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "80%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "pop-up-infinite": {
          // '0%, 100%': { transform: 'scale(0.7)', opacity: 0 },
          '33%': { transform: 'scale(1.05)', opacity: 1 },
          '66%': { transform: 'scale(0.9)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        "shine-left": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "0% center" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-in-down": "fade-in-down 1s ease-in-out",
        "slide-in": "slide-in 0.3s ease-in-out",
        "slide-in-right": "slide-in-right 0.3s ease-in-out",
        "slide-in-up": "slide-in-up 0.3s ease-in-out",
        "slide-in-down": "slide-in-down 0.3s ease-in-out",
        "pop-up": "pop-up 0.3s ease-out forwards",
        "pop-up-infinite": "pop-up-infinite 0.6s ease-out infinite",
        "shine-left": "shine 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-no-repeat': {
          'background-repeat': 'no-repeat',
        },
        '.bg-cover': {
          'background-size': 'cover',
        },
      })
    }
  ],
};
