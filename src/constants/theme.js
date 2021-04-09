import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#465BFE", // Blue
    warning: "#EA5A7E", // Red
    mutedGray: "#B6B7BA",
    darkgray: "#454545",
    darkBlue: "#21252B",

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    transparent: "transparent",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 10,
    padding: 10,
    padding2: 12,
    padding3: 16,
    padding4: 24,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 18,
    body1: 24,
    body2: 18,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontSize: SIZES.h4, lineHeight: 20 },

    body1: { fontSize: SIZES.body1, lineHeight: 26 },
    body2: { fontSize: SIZES.body2, lineHeight: 20 },
    body3: { fontSize: SIZES.body3, lineHeight: 18 },
    body4: { fontSize: SIZES.body4, lineHeight: 16 },
    body5: { fontSize: SIZES.body5, lineHeight: 14 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
