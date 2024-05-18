import { Image, Pressable, Text, View } from "native-base";
import React from "react";
import { Iconify } from "react-native-iconify";

export default function TourCard({
  title,
  details,
  price,
}: {
  title: string;
  details: string;
  price: number;
}) {
  return (
    <Pressable
      p="10px"
      pb="15px"
      backgroundColor="#fff"
      shadow="2"
      borderRadius="md"
      style={{ gap: 15 }}
    >
      <Image
        source={require("@/src/assets/images/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg")}
        h={150}
        borderRadius="md"
      />
      <View style={{ gap: 10 }}>
        <Text fontSize="18px" color="#2F6690">
          {title}
        </Text>
        <View flexDir="row-reverse" alignItems="center">
          <Iconify icon="basil:map-location-outline" size={24} color="#2F6690" />
          <Text fontSize="14px" style={{ flex: 1 }}>
            {details}
          </Text>
        </View>
      </View>
      <Text textAlign="left" fontSize="20px" color="#2F6690">
        {price}
        ریال
      </Text>
    </Pressable>
  );
}
