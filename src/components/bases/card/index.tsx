import { theme } from "@/src/constants/Colors";
import { Box, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";

export const Card = ({ variant }: { variant: "option" | "suggest" }) => {
  if (variant === "suggest") {
    return (
      <View p="8px" m={1} width="309px" height="213px" shadow={1} borderRadius="md" bg="#fff">
        <View width="293px" height="134px" bg={theme.tabIconDefault}></View>
        <View display="flex" justifyContent="space-between" flexDirection="row" w="full" p={0}>
          <Text>123</Text>
          <Text>456</Text>
        </View>
        <Text textAlign="right">SmapleText</Text>
      </View>
    );
  }
  if (variant === "option") {
    return (
      <View
        p="8px"
        mt="8px"
        mb="8px"
        width="full"
        height="72px"
        shadow={1}
        borderRadius="md"
        bg="#fff"
        style={{
          paddingBottom: 50,
        }}
      >
        <Box
          flexDirection="row-reverse"
          alignItems="center"
          justifyContent="space-between"
          style={{
            gap: 16,
          }}
        >
          <View bg={theme.blue[100]} borderRadius="full" p="8px">
            <Iconify icon="mdi:airplane" size={28} color="#fff" />
          </View>
          <View w="1/2">
            <Text textAlign="right">123</Text>
            <Text textAlign="right">456</Text>
          </View>
          <View>
            <Iconify icon="iconamoon:arrow-left-2-bold" size={28} color="#2F6690" />
          </View>
        </Box>
      </View>
    );
  }
};
