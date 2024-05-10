import { Box, Center, Pressable, Text } from "native-base";
import { Iconify } from "react-native-iconify";
import { navigationItems } from "./constant";
import { usePathname, useRouter } from "expo-router";
import { theme } from "@/src/constants/Colors";

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Box
      bg={"#cccf"}
      alignItems="center"
      flexDirection="row"
      justifyContent="space-around"
      w="full"
      pl={8}
      pr={8}
      shadow={6}
      borderTopRadius={16}
    >
      {navigationItems.map((item, index) => (
        <Pressable
          opacity={pathname.includes(item.route) ? 1 : 0.5}
          py="3"
          onPress={() => router.navigate(item.route)}
          key={index}
        >
          <Center
            borderWidth={pathname.includes(item.route) ? 4 : 0}
            padding="2"
            borderRadius="9999"
            w="60px"
            borderColor={"#fff"}
            h="60px"
            style={{
              marginTop: pathname.includes(item.route) ? -50 : -10,
            }}
            bg={"#cccf"}
          >
            {index === 0 ? (
              <Iconify icon="mdi:earth" size={24} color={theme.blue[100]} />
            ) : index === 1 ? (
              <Iconify icon="mdi:home" size={24} color={theme.blue[100]} />
            ) : (
              <Iconify icon="heroicons:ticket" size={24} color={theme.blue[100]} />
            )}
            <Text color={theme.blue[100]} fontSize="12">
              {item.text}
            </Text>
          </Center>
        </Pressable>
      ))}
    </Box>
  );
}
