import { useRouter } from "expo-router";
import { Box, ScrollView, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { Footer } from "../components/bases/navigation";
import { ReactNode } from "react";

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <ScrollView marginBottom="12" bg="#f5f5f5">
        <View p={8} bg="#D9DCD6" fontFamily="body" h="208px">
          <Box justifyContent="space-between" flexDir="row" alignItems="center">
            <View bg="white" p={3} borderRadius={999} shadow={1}>
              <Text>
                <Iconify
                  icon="mdi:user"
                  size={24}
                  color="#2F6690"
                  onTouchEnd={() => router.navigate("/login")}
                />
              </Text>
            </View>
            <View>
              <Text fontFamily="heading">نوا</Text>
            </View>
            <View bg="white" p={3} borderRadius={999} shadow={1}>
              <Text>
                <Iconify icon="mingcute:search-3-line" size={24} color="#2F6690" />
              </Text>
            </View>
          </Box>
        </View>
        <View bg="#f5f5f5">{children}</View>
      </ScrollView>
      <View position="absolute" w="full" h="60px" bottom="0">
        <Footer />
      </View>
    </>
  );
};
