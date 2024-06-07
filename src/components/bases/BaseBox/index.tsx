import { View } from "native-base";
import React, { ReactNode } from "react";

export default function BaseBox({ children }: { children: ReactNode }) {
  return (
    <View padding="10px" borderRadius="10px" shadow="3">
      {children}
    </View>
  );
}
