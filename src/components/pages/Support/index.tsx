import BackLayout from "@/src/layouts/backLayout";
import { Image, Text, View } from "native-base";
import React from "react";

export default function SupportScreen() {
  return (
    <BackLayout title="پشتیبانی">
      <View justifyContent="center" alignItems="center">
        <Image
          source={require("@/src/assets/images/mail.png")}
          alt="support image"
          height={200}
          mt={"120px"}
        />
        <Text textAlign="center" color="#777" fontSize="16px">
          صندوق درخواست های پشتیبانی شما خالی است!
        </Text>
      </View>
    </BackLayout>
  );
}
