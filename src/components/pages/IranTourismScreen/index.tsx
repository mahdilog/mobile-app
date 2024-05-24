import BackLayout from "@/src/layouts/backLayout";
import { Image, Text, View } from "native-base";
import React from "react";
import { IranTourismData } from "./constant";

export default function IranTourismScreen() {
  return (
    <BackLayout title="جاذبه های گردشگری ایران" backgroundColor="#f5f5f5">
      <View style={{ gap: 20 }}>
        {IranTourismData.map((item) => (
          <View
            key={item.id}
            backgroundColor="#fff"
            borderRadius="10px"
            padding="10px"
            shadow="3"
            style={{ gap: 10 }}
          >
            <Image source={item.image} height="200px" borderRadius="10px" />
            <Text fontSize="20px" color="#2F6690" style={{ fontWeight: "700" }}>
              {item.title}
            </Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </View>
    </BackLayout>
  );
}
