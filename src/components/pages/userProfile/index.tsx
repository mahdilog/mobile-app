import UserProfileLayout from "../../../layouts/userProfile";
import { Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import ProfileItem from "../../bases/profileItem";
import { profileItemData } from "./constant";
import LoginBox from "../../bases/loginBox";
import { Switch } from "react-native";
import { useState } from "react";
import { expo } from "@/app.json";

export default function UserProfile() {
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark((previousState) => !previousState);
  return (
    <UserProfileLayout>
      <View position="relative" alignItems="center" top={-60}>
        <View
          backgroundColor="#fff"
          width="110px"
          height="110px"
          rounded="full"
          justifyContent="center"
          alignItems="center"
          shadow="5"
        >
          <Iconify
            icon="ph:user"
            size={85}
            color="#6C757D"
            onTouchEnd={() => console.log("object")}
          />
        </View>
        <LoginBox />
        <View mt="70px" style={{ gap: 20 }} width="full">
          {profileItemData("").map((item) => (
            <ProfileItem key={item.id} title={item.title} icon={item.icon} path={item.path} />
          ))}
          <View
            borderBottomColor="#6c757d51"
            borderBottomWidth={1}
            paddingBottom="10px"
            px="20px"
            width="full"
            flexDir="row-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            <View flexDir="row" alignItems="center" style={{ gap: 10 }}>
              <Text color="#6C757D" fontSize="20px">
                حالت شب
              </Text>
              <Text>
                <Iconify icon="material-symbols:dark-mode-outline" size={30} color="#6C757D" />
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#D9D9D9", true: "#00AB73" }}
              thumbColor="#FFFFFF"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isDark}
              style={{ height: 15 }}
            />
          </View>
        </View>
        <View mt="60px" alignItems="center" style={{ gap: 10 }}>
          <Text>{`Version ${expo.version}`}</Text>
          <Text>Made with ❤️ in Iran</Text>
        </View>
      </View>
    </UserProfileLayout>
  );
}
