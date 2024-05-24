import { Pressable, Text, View } from "native-base";
import React, { ReactNode } from "react";
import { Iconify } from "react-native-iconify";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  clickHandler: () => void;
}

export default function NavigationCard({
  title,
  description,
  icon,
  clickHandler,
}: NavigationCardProps) {
  return (
    <Pressable
      flexDirection="row-reverse"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#fff"
      shadow="3"
      padding="10px"
      borderRadius="10px"
      onPress={clickHandler}
    >
      <View style={{ flexDirection: "row-reverse", gap: 10 }}>
        <View
          width="50px"
          height="50px"
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          backgroundColor="#2F6690"
        >
          {icon}
        </View>
        <View>
          <Text fontSize="18px" color="#2F6690" style={{ fontWeight: 700 }}>
            {title}
          </Text>
          <Text fontSize="14px" color="#2F6690" style={{ fontWeight: 400 }}>
            {description}
          </Text>
        </View>
      </View>
      <Iconify icon="ep:arrow-left-bold" size={20} color="#2F6690" />
    </Pressable>
  );
}
