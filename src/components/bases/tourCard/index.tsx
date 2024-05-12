import { Image, Pressable, Text, View } from "native-base";
import React from "react";

export default function TourCard({
  image,
  title,
  details,
  price,
}: {
  image: any;
  title: string;
  details: string;
  price: string;
}) {
  return (
    <Pressable p="5px" backgroundColor="#fff" shadow="2" borderRadius="md">
      <Image source={image} h={150} borderRadius="md" />
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
}
