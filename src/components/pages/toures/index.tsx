import BackLayout from "@/src/layouts/backLayout";
import { Input, Text, View } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { Iconify } from "react-native-iconify";
import { ToursData } from "./constant";
import TourCard from "../../bases/tourCard";

export default function Toures() {
  return (
    <BackLayout title="تورهای گردشگری" backgroundColor="#f5f5f5">
      <View mb="50px" px="5px" style={{ gap: 20 }}>
        {ToursData.map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.image}
            title={tour.title}
            details={tour.details}
            price={tour.price}
          />
        ))}
      </View>
    </BackLayout>
  );
}
