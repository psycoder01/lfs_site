module.exports = {
  purge:{
    enabled:true,
    content:['./src/**/*.js']
  },
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "hsl(207, 73%, 52%)",
          default: "hsl(207, 73%, 57%)",
          darker: "hsl(207, 73%, 44%)",
        },
      },
      height: {
        72: "20rem",
        80: "24rem",
        88: "28rem",
        96: "32rem",
      },
      width: {
        72: "20rem",
        80: "24rem",
        88: "28rem",
        96: "32rem",
      },
      letterSpacing: {
        widest: "1rem",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
