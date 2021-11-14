import { Dimensions, PixelRatio } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const fontScale = PixelRatio.getFontScale();

export { width, height, fontScale };
