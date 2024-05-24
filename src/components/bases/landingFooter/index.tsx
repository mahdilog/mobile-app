import { router } from "expo-router";
import { Divider, Flex, Pressable, Text, View } from "native-base";
import React from "react";

function FooterItem({ title, clickHandler }: { title: string; clickHandler: () => void }) {
  return (
    <Pressable onPress={clickHandler}>
      <Text color="#2F6690" fontSize="16px">
        {title}
      </Text>
    </Pressable>
  );
}

export default function LandingFooter() {
  return (
    <Flex direction="row-reverse" justifyContent="center">
      <FooterItem title="قوانین و مقررات" clickHandler={() => router.push("/rules/")} />
      <Divider orientation="vertical" mx="10px" />
      <FooterItem title="پشتیبانی" clickHandler={() => router.push("/support/")} />
      <Divider orientation="vertical" mx="10px" />
      <FooterItem title="سوالات متداول" clickHandler={() => router.push("/FAQScreen/")} />
    </Flex>
  );
}
