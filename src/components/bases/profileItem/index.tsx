import { router } from "expo-router";
import { Pressable, Text } from "native-base";
import React, { ReactNode } from "react";

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
      paddingBottom="10px"
      px="20px"
      width="full"
      flexDir="row"
      justifyContent="flex-end"
      alignItems="center"
      style={{ gap: 10 }}
    >
      <Text color="#6C757D" fontSize="20px">
        {title}
      </Text>
      <Text>{icon}</Text>
    </Pressable>
  );
}
