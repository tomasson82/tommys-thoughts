// example theme file
// https://marketplace.visualstudio.com/items?itemName=liviuschera.noctis
const noctisLightColors = {
  jade: "#00b368", //Strings
  green_haze: "#009456", //Interpolated Strings
  cascade: "#8ca6a6", //Comments for Lux & Hibernus variant
  amethyst_smoke: "#9995b7", //Comments for Lilac variant
  bondi_blue: "#0095a8", //Function Calls
  robins_egg_blue: "#00bdd6", //Method Calls
  azure_radiance: "#0094f0", //Code that needs to stand out
  electric_violet: "#5842ff", //Numbers & Booleans
  pbrink_pink: "#ff5792", //Keywords & Operators
  trinidad: "#e64100", //Function & Variable Declaration, Tags & this
  santa_fe: "#b3694d", //Object properties, ID selectors in CSS & Type annotations
  dark_goldenrod: "#a88c00", //Attributes, Constants
  yellow_sea: "#f49725", //Variables & Parameters
}

// styling a Gatsby theme with theme ui
// https://www.gatsbyjs.org/docs/theme-ui/#using-theme-ui-in-a-gatsby-theme

export default {
  colors: {
    text: noctisLightColors.cascade,
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // MDX content --> https://www.gatsbyjs.org/docs/theme-ui/#styling-mdx-content
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      // the style object for each element
      // can reference other values in the theme
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
    a: {
      color: "primary",
      ":hover, :focus": {
        color: "secondary",
      },
    },
    // more styles can be added as needed
  },
}
