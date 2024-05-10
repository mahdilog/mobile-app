import { theme } from "@/src/constants/Colors";
import { Box, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";

export const Card = ({ children }: { children?: any }) => {
  return (
    <View
      style={[{ transform: [{ scaleX: -1 }] }]}
      p="8px"
      m={2}
      width="309px"
      height="213px"
      shadow={1}
      borderRadius="md"
      bg="#fff"
    >
      {children}
    </View>
  );
};
