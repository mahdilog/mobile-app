import { router } from "expo-router";
import { ScrollView, Text, View } from "native-base";
import React, { ReactNode } from "react";
import { StatusBar } from "react-native";
import { Iconify } from "react-native-iconify";

export default function BackLayout({
  title,
  backgroundColor = "#fff",
  children,
}: {
  title: string;
  backgroundColor?: string;
  children: ReactNode;
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
        pr="20px"
        style={{ gap: 15 }}
      >
        <Text color="#000" fontSize="18px">
          {title}
        </Text>
        <Iconify
          icon="radix-icons:arrow-right"
          size={24}
          color="#000"
          onPress={() => router.back()}
        />
      </View>
      <ScrollView px="20px" pt="30px" backgroundColor={backgroundColor}>
        {children}
      </ScrollView>
    </>
  );
}
