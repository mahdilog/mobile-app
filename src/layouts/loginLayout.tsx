import { ScrollView, Text, View } from "native-base";
import React, { ReactNode } from "react";
import { StatusBar } from "react-native";

interface LoginLayoutProps {
  title: string;
  description?: string;
  email?: string;
  children: ReactNode;
}

export default function LoginLayout({ title, description, email, children }: LoginLayoutProps) {
  return (
    <View paddingX="20px" paddingY="120px" style={{ gap: 15 }}>
      <StatusBar backgroundColor="#fff" />
      <View flexDirection="row-reverse" style={{ gap: 5 }}>
        <Text fontSize="26px" color="#2F6690" style={{ fontFamily: "niconne" }}>
          N
        </Text>
        <Text fontSize="26px" color="#2F6690" style={{ fontWeight: 700 }}>
          نواسفر
        </Text>
      </View>
      <Text fontSize="24px" color="#000" style={{ fontWeight: 700 }}>
        {title}
      </Text>
      {description && (
        <Text fontSize="16px" color="#000">
          {description}
        </Text>
      )}
      <ScrollView>{children}</ScrollView>
    </View>
  );
}
