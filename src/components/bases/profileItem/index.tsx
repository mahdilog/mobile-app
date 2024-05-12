import { router } from "expo-router";
import { Pressable, Text, View } from "native-base";
import React, { ReactNode } from "react";
import { Iconify } from "react-native-iconify";

export default function ProfileItem({
  title,
  icon,
  path,
}: {
  title: string;
  icon: ReactNode;
  path: string;
}) {
  return (
    <Pressable
      borderBottomColor="#6c757d51"
      borderBottomWidth={1}
      onPress={() => router.push(`/${path}`)}
      paddingBottom="20px"
      px="20px"
      width="full"
      flexDir="row-reverse"
      justifyContent="space-between"
      alignItems="center"
    >
      <View flexDir="row" alignItems="center" style={{ gap: 10 }}>
        <Text color="#6C757D" fontSize="18px">
          {title}
        </Text>
        {icon}
      </View>
      <Iconify icon="ep:arrow-left" size={24} color="#6c757d51" />
    </Pressable>
  );
}
