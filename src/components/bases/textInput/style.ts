import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderColor: "#6C757D",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
    position: "relative",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 5,
  },
  label: {
    position: "absolute",
    lineHeight: 28,
    right: 8,
    paddingHorizontal: 2,
    backgroundColor: "#fff",
    textAlign: "center",
    color: "#6C757D",
  },
  input: {
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 1,
    direction: "rtl",
    height: 40,
    position: "absolute",
    left: 8,
    right: 8,
  },
  error: {
    color: "red",
    ...Platform.select({
      ios: {
        textAlign: "right",
      },
      android: {
        textAlign: "right",
      },
    }),
  },
});
