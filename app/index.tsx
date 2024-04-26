//@ts-nocheck
import React from "react";
import { RootContainer } from "@/components/layouts/defaultLayout";
import { Landing } from "@/pages/landing";
import { Pressable, Text } from "react-native";
import { styled, useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <RootContainer>
      <Pressable
        onPress={toggleColorScheme}
        className="flex-1 items-center justify-center"
      >
        <Text selectable={false} className="text-purple-500 dark:text-white">
          {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
        </Text>
      </Pressable>
      <Landing />
    </RootContainer>
  );
}
