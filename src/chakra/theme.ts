import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: { Icon: { defaultProps: { focusable: true } } },
  colors: {
    bg: "#e8e8e8",
    midbg: "#b0aeae",
    darkbg: "#161616",
  },
  fonts: {
    body: "Azeret Mono Variable",
  },
  textStyles: {
    t1: {
      fontSize: "28px",
      fontWeight: "600",
    },
    t2: {
      fontSize: "25px",
      fontWeight: "600",
    },
    b1: {
      fontSize: "20px",
      fontWeight: "bold",
    },
  },
  breakpoints: {
    mobile: "650",
  },
});

export default theme;
