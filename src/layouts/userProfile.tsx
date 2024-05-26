import React, { ReactNode } from "react";
import { Badge, Button, Pressable, Text, VStack, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import { useProfileContext } from "../context/profile-context";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserProfileLayout({ children }: { children: ReactNode }) {
  const { token, setToken } = useProfileContext();

  const logOutHandler = () => {
    AsyncStorage.removeItem("token");
    setToken("");
  };

  const logOutAlert = () =>
    Alert.alert(
      "خروج از حساب",
      "آیا میخواهید از حساب خود خارج شوید؟",
      [
        {
          text: "لغو",
        },
        { text: "خروج", onPress: logOutHandler },
      ],
      {
        cancelable: true,
      }
    );

  return (
    <>
      <View h="140px" pt="50px" px="20px" backgroundColor="#D9DCD6">
        {/* <View>
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
        </View> */}
        <View flexDir="row" justifyContent="space-between" alignItems="center">
          <Text>
            <Iconify
              icon="fe:arrow-left"
              size={24}
              color="#2F6690"
              onTouchEnd={() => router.back()}
            />
          </Text>
          {token && (
            <Pressable onPress={logOutAlert}>
              <Iconify icon="iconamoon:exit" size={30} color="#2F6690" />
            </Pressable>
          )}
        </View>
      </View>
      <View backgroundColor="#f5f5f5" h="full">
        {children}
      </View>
    </>
  );
}
