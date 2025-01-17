import { useRouter } from "expo-router";
import { Button, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";

export default function LoginBox() {
  const router = useRouter();
  return (
    <View
      backgroundColor="#fff"
      shadow="3"
      my="40px"
      mx="40px"
      p="10px"
      rounded="lg"
      style={{ gap: 10 }}
    >
      <View flexDir="row-reverse" alignItems="center" style={{ gap: 10 }}>
        <Iconify icon="solar:user-id-outline" size={30} color="#3282B8" />
        <Text fontSize="17px" style={{ fontWeight: "900" }}>
          ورود / ثبت نام
        </Text>
      </View>
      <Text fontSize="16px" style={{ fontWeight: "400" }}>
        با ورود یا ثبت نام در اپلیکیشن از امکانات ویژه کاربری بهره مند شوید
      </Text>
      <Button
        variant="outline"
        colorScheme="blue"
        borderColor="#3282B8"
        _text={{
          color: "#3282B8",
        }}
        rounded="3xl"
        mx="60px"
        onPress={() => router.navigate("/login")}
      >
        ورود یا ثبت نام
      </Button>
    </View>
  );
}
