import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { Footer } from "../components/bases/navigation";
import { ReactNode } from "react";
import { StatusBar } from "react-native";
import Logo from "../components/bases/logo";

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <StatusBar backgroundColor="#D9DCD6" />
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
          onTouchEnd={() => router.navigate("/UserProfileScreen")}
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
        <Logo />
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
      <ScrollView bg="#D9DCD6" contentContainerStyle={{ flexGrow: 1 }}>
        <View bg="#f5f5f5" style={{ flex: 1 }}>
          {children}
        </View>
      </ScrollView>
      <View position="absolute" w="full" h="60px" bottom="0">
        <Footer />
      </View>
    </>
  );
};
