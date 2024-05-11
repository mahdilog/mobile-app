import React, { ReactNode } from "react";
import { Badge, Button, Text, VStack, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";

export default function UserProfileLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <View
        h="140px"
        pt="50px"
        px="20px"
        backgroundColor="#D9DCD6"
        flexDir="row-reverse"
        justifyContent="space-between"
      >
        <View>
          <View
            w="10px"
            h="10px"
            borderRadius={999}
            backgroundColor="#FF0000"
            position="absolute"
            right={1}
            top={-3}
            zIndex={2}
            borderColor="#D9DCD6"
            borderWidth={2}
          />
          <Text>
            <Iconify
              icon="fluent:alert-16-regular"
              size={30}
              color="#2F6690"
              onTouchEnd={() => router.navigate("/UserProfileScreen")}
            />
          </Text>
        </View>
        <Text>
          <Iconify
            icon="fe:arrow-left"
            size={24}
            color="#2F6690"
            onTouchEnd={() => router.back()}
          />
        </Text>
      </View>
      <View backgroundColor="#f5f5f5" h="full">
        {children}
      </View>
    </>
  );
}
