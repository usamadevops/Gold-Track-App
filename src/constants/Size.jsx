import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const margin = {
    normal: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
    xxlarge: 40,
    xxxlarge: 48,
};
export const padding = {
    normal: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
    xxlarge: 40,
    xxxlarge: 48,
};

export const radius = {
    normal: 5,
    medium: 10,
    large:15,
}
export const fontSize = {
    display: 48,
    title: 32,
    header:24,
    largeText:20,
    mediumText: 16,
    smallText:12,
}
export const Screen = {
    width: width,
    height: height,
}
