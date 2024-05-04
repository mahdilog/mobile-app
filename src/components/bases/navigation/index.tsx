import { Box, Center, HStack, Pressable, Text, View } from "native-base";
import { useState } from "react";
import { Iconify } from "react-native-iconify";
import { navgationItems } from "./constant";
import { usePathname, useRouter } from "expo-router";
import { theme } from "@/src/constants/Colors";

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Box
      bg={theme.grey[200]}
      alignItems="center"
      flexDirection="row"
      justifyContent="space-around"
      w="full"
      shadow={6}
      borderTopRadius={16}
    >
      {navgationItems.map((item, index) => (
        <Pressable
          opacity={pathname.includes(item.route) ? 1 : 0.5}
          py="3"
          onPress={() => router.navigate(item.route)}
          key={index}
        >
          <Center>
            <Text>
              {index === 0 ? (
                <Iconify icon="mdi:earth" size={24} color={theme.blue[100]} />
              ) : index === 1 ? (
                <Iconify icon="mdi:home" size={24} color={theme.blue[100]} />
              ) : (
                <Iconify icon="heroicons:ticket" size={24} color={theme.blue[100]} />
              )}
            </Text>
            <Text color={theme.blue[100]} fontSize="12">
              {item.text}
            </Text>
          </Center>
        </Pressable>
      ))}
    </Box>
  );
}
