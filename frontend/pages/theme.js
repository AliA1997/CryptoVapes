import { extendTheme } from '@chakra-ui/react';
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    black: {
      100: "#1E1E1E",
    },
    gray: {
      100: "#E8E6E6",
    },
    yellow: {
      100: "#FCDC3C",
    },
    orange: {
      100: "#FCA334",
      200: "#FC632C",
    },
  },
  components: {
    Text: {
      defaultProps: {
        color: "#1E1E1E",
        fontFamily: "Nunito",
      },
    },
  },
});

export default theme;
