import { router } from "expo-router";
import { ScrollView, Spinner, Text, View } from "native-base";
import React, { ReactNode } from "react";
import { Pressable, StatusBar } from "react-native";
import { Iconify } from "react-native-iconify";

export default function BackLayout({
  title,
  backgroundColor = "#fff",
  children,
  isLoading = false,
}: {
  title: string;
  backgroundColor?: string;
  children: ReactNode;
  isLoading?: boolean;
}) {
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <View
        backgroundColor="#fff"
        h="100px"
        flexDir="row"
        alignItems="flex-end"
        justifyContent="flex-end"
        pb="20px"
        shadow="2"
        zIndex={100}
        pr="20px"
        style={{ gap: 15 }}
      >
        <Text color="#000" fontSize="18px">
          {title}
        </Text>
        <Pressable onPress={() => router.back()}>
          <Iconify icon="radix-icons:arrow-right" size={24} color="#000" />
        </Pressable>
      </View>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Spinner size="lg" color="#2F6690" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 30,
            paddingHorizontal: 20,
          }}
          backgroundColor={backgroundColor}
        >
          {children}
        </ScrollView>
      )}
    </>
  );
}
