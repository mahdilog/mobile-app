import React from "react";
import UserProfileLayout from "./layout";
import { Button, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";

export default function UserProfile() {
  return (
    <UserProfileLayout>
      <View position="relative" alignItems="center" top={-60}>
        <View
          backgroundColor="#fff"
          width="110px"
          height="110px"
          rounded="full"
          justifyContent="center"
          alignItems="center"
          shadow="5"
        >
          <Iconify
            icon="ph:user"
            size={85}
            color="#6C757D"
            onTouchEnd={() => console.log("object")}
          />
        </View>
        <View
          backgroundColor="#fff"
          shadow="3"
          mt="40px"
          mx="40px"
          p="10px"
          rounded="lg"
          style={{ gap: 10 }}
        >
          <View flexDir="row-reverse" alignItems="center" style={{ gap: 10 }}>
            <Iconify
              icon="solar:user-id-outline"
              size={30}
              color="#3282B8"
              onTouchEnd={() => console.log("object")}
            />
            <Text fontSize="17px" style={{ fontWeight: "900" }}>
              ورود / ثبت نام
            </Text>
          </View>
          <Text fontSize="16px" style={{ fontWeight: "400" }}>
            با ورود یا ثبت نام در اپلیکیشن از امکانات ویژه کاربری بهره مند شوید
          </Text>
          <Button
            variant="outline"
            colorScheme="blue"
            borderColor="#3282B8"
            _text={{
              color: "#3282B8",
            }}
            rounded="3xl"
            mx="60px"
            onPress={() => router.push("/login/")}
          >
            ورود یا ثبت نام
          </Button>
        </View>
      </View>
    </UserProfileLayout>
  );
}
