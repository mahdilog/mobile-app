import { Auth } from "@/components/auth";
import { useRouter } from "expo-router";
import { Box, Text, useDisclose, View } from "native-base";
import { Iconify } from "react-native-iconify";

export const LandingLayout = () => {
  const router = useRouter();
  return (
    <>
      <View p={8} bg="#D9DCD6" fontFamily="body">
        <Box justifyContent="space-between" flexDir="row" alignItems="center">
          <View bg="white" p={3} borderRadius={999} shadow={1}>
            <Iconify
              icon="mdi:user"
              size={24}
              color="#2F6690"
              onTouchEnd={() => router.navigate("/login")}
            />
          </View>
          <View>
            <Text fontFamily="heading">نوا</Text>
          </View>
          <View bg="white" p={3} borderRadius={999} shadow={1}>
            <Iconify icon="mingcute:search-3-line" size={24} color="#2F6690" />
          </View>
        </Box>
      </View>
    </>
  );
};
