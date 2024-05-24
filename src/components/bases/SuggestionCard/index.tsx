import { theme } from "@/src/constants/Colors";
import { Box, Image, Pressable, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { Suggestion } from "../suggestions/type";
import { router } from "expo-router";

export const SuggestionCard = ({ data }: { data: Suggestion }) => {
  const { image, off, title, descrption } = data;
  return (
    <Pressable
      style={[{ transform: [{ scaleX: -1 }], gap: 10 }]}
      p="10px"
      shadow={1}
      borderRadius="10px"
      bg="#fff"
      width="300px"
      my="10px"
      onPress={() =>
        router.push({
          pathname: "/tours/[id]",
          params: { id: "bacon" },
        })
      }
    >
      <Image source={image} height={130} borderRadius="10px" />
      <View flexDirection="row-reverse" justifyContent="space-between" alignItems="center">
        <Text fontSize="18px" color="#2F6690" style={{ fontWeight: "700" }}>
          {title}
        </Text>
        <View
          flexDirection="row-reverse"
          justifyContent="center"
          alignItems="center"
          style={{ gap: 5 }}
        >
          <Text fontSize="18px" color="#2F6690" style={{ fontWeight: "700" }}>
            {off}
          </Text>
          <Iconify icon="streamline:discount-percent-circle-solid" size={20} color="#2F6690" />
        </View>
      </View>
      <Text fontSize="14px" color="#000" style={{ fontWeight: "500" }}>
        {descrption}
      </Text>
    </Pressable>
  );
};
