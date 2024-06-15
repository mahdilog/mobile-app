import { useState } from "react";
import { Image, Pressable, Text, View } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { theme } from "@/src/constants/Colors";
import { Iconify } from "react-native-iconify";

export const Tutorial = () => {
  const [activeItem, setActiveItem] = useState(1);
  const setTutorialStatus = async () => {
    await AsyncStorage.setItem("guided", "show");
  };
  const array = [1, 2, 3, 4, 5];
  return (
    <View
      style={{
        backgroundColor: theme.blue[100],
        height: "100%",
        paddingTop: 60,
      }}
    >
      <Image
        source={require("@/src/assets/images/airplane.svg")}
        width={80}
        height={80}
        alt="airplane"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          justifyContent: "center",
          height: "60%",
          alignItems: "flex-end",
          paddingBottom: 80,
        }}
      >
        <Pressable onPress={() => setActiveItem(activeItem === 1 ? 1 : activeItem - 1)}>
          <Iconify icon="ep:arrow-left-bold" size={20} color="#fff" />
        </Pressable>
        {array.map((item, index) => (
          <View
            style={{
              backgroundColor: theme.background,
              width: 10,
              height: 10,
              borderRadius: 10,
              opacity: item === activeItem ? 1 : 0.5,
            }}
          />
        ))}
        <Pressable onPress={() => setActiveItem(activeItem === 5 ? 5 : activeItem + 1)}>
          <Iconify icon="ep:arrow-right-bold" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};
