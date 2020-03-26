module.exports = {
  theme: {
    textColor: theme => ({
      ...theme("colors")
    }),
    borderColor: theme => ({
      ...theme("colors")
    }),
    backgroundColor: theme => ({
      ...theme("colors")
    }),
    extend: {
      colors: {
        primary: {
          light: "#feeee7",
          default: "#f75d20",
          dark: "#e04406"
        },
        secondary: {
          default: "#2c3549"
        }
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%"
      }
    }
  },
  variants: {},
  plugins: [
    function({ addComponents, addUtilities }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px"
          },
          "@screen md": {
            maxWidth: "768px"
          },
          "@screen lg": {
            maxWidth: "1024px"
          },
          "@screen xl": {
            maxWidth: "1024px"
          }
        }
      });

      addUtilities(
        {
          ".px-00": {
            paddingLeft: 0,
            paddingRight: 0
          }
        },
        ["responsive"]
      );
    }
  ]
};
