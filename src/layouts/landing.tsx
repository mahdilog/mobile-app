import { useRouter } from "expo-router";
import { Box, ScrollView, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { Footer } from "../components/bases/navigation";
import { ReactNode } from "react";

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <View
        bg="#D9DCD6"
        fontFamily="body"
        h="100px"
        justifyContent="space-between"
        flexDir="row"
        alignItems="center"
        paddingX="20px"
        paddingTop="25px"
      >
        <View
          bg="white"
          w="50px"
          h="50px"
          justifyContent="center"
          alignItems="center"
          borderRadius={999}
          shadow={1}
        >
          <Text>
            <Iconify
              icon="mdi:user"
              size={24}
              color="#2F6690"
              onTouchEnd={() => router.navigate("/UserProfileScreen")}
            />
          </Text>
        </View>
        <View>
          <Text fontFamily="heading">نوا</Text>
        </View>
        <View
          bg="white"
          w="50px"
          h="50px"
          justifyContent="center"
          alignItems="center"
          borderRadius={999}
          shadow={1}
        >
          <Text>
            <Iconify icon="mingcute:search-3-line" size={24} color="#2F6690" />
          </Text>
        </View>
      </View>
      <ScrollView marginBottom={16} pt={"32"} bg="#f5f5f5">
        <View bg="#f5f5f5">{children}</View>
      </ScrollView>
      <View position="absolute" w="full" h="60px" bottom="0">
        <Footer />
      </View>
    </>
  );
};
