import { ScrollView, Text, View } from "native-base";
import React from "react";
import { Suggestion } from "./type";
import { SuggestionCard } from "../SuggestionCard";

export default function Suggestions({ data }: { data: Suggestion[] }) {
  return (
    <View>
      <Text mr="15px" fontSize="22px" style={{ fontWeight: "700" }}>
        پیشنهادهای نوا سفر
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, gap: 15 }}
        style={[{ transform: [{ scaleX: -1 }] }]}
      >
        {data.map((item) => (
          <SuggestionCard key={item.id} data={item} />
        ))}
      </ScrollView>
    </View>
  );
}
