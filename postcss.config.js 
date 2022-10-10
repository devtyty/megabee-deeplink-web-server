const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./node_modules/@brainhubeu/react-carousel/lib/style.css",
      "./node_modules/@brainhubeu/react-carousel/lib/style.css.map",
      "./node_modules/react-toastify/dist/*.css",
      "./components/**/*.js",
      "./pages/**/*.js",
    ],
    defaultExtractor: (content) => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
      return broadMatches.concat(innerMatches);
    },
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};