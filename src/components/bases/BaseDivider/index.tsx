import { Heading, Text, View } from "native-base";
import React from "react";

export default function BaseDivider({ title }: { title: string }) {
  return (
    <View flexDirection="row" alignItems="center" style={{ gap: 5 }}>
      <View h="1px" backgroundColor="#2F6690" style={{ flex: 1 }}></View>
      <Heading size="md" color="#2F6690">
        {title}
      </Heading>
    </View>
  );
}
