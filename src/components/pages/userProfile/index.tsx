import UserProfileLayout from "../../../layouts/userProfile";
import { ScrollView, Spinner, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import ProfileItem from "../../bases/profileItem";
import { profileItemData } from "./constant";
import LoginBox from "../../bases/loginBox";
import { StatusBar, Switch } from "react-native";
import { useEffect, useState } from "react";
import { expo } from "@/app.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useProfileContext } from "@/src/context/profile-context";
import axios from "axios";
import UserPanelBox from "../../bases/UserPanelBox";

export default function UserProfile() {
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark((previousState) => !previousState);
  const { setUserDetails, setToken, userDetails, token } = useProfileContext();
  const [showlLoader, setShowlLoader] = useState(true);
  const [errorVisible, setErrorVisible] = useState(false);

  async function fetchToken() {
    setErrorVisible(false);
    setShowlLoader(true);
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      axios
        .get("https://travelorganization.monster/api/User/User/GetUserDetail", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((json) => {
          if (json.data.isSuccess) {
            setUserDetails(json.data.data);
          }
        })
        .catch((e) => {
          if (e.code === "ERR_NETWORK") {
            setErrorVisible(true);
          }
          if (e.response.status === 401) {
            // AsyncStorage.removeItem("token");
          }
        })
        .finally(() => setShowlLoader(false));
    } else {
      setShowlLoader(false);
    }
  }

  useEffect(() => {
    fetchToken();
  }, []);

  if (showlLoader) {
    return (
      <>
        <StatusBar backgroundColor="#fff" />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Spinner size="lg" color="#2F6690" />
        </View>
      </>
    );
  } else {
    return (
      <UserProfileLayout>
        <ScrollView
          position="relative"
          contentContainerStyle={{ alignItems: "center", paddingBottom: 100 }}
          top={-60}
        >
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
          {token ? <UserPanelBox /> : <LoginBox />}
          <View mt="30px" style={{ gap: 20 }} width="full">
            {profileItemData(token).map((item) => (
              <ProfileItem key={item.id} title={item.title} icon={item.icon} path={item.path} />
            ))}
            <View
              borderBottomColor="#6c757d51"
              borderBottomWidth={1}
              paddingBottom="20px"
              px="20px"
              width="full"
              flexDir="row-reverse"
              justifyContent="space-between"
              alignItems="center"
            >
              <View flexDir="row" alignItems="center" style={{ gap: 10 }}>
                <Text color="#6C757D" fontSize="18px">
                  حالت شب
                </Text>
                <Iconify icon="material-symbols:dark-mode-outline" size={26} color="#6C757D" />
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
        </ScrollView>
      </UserProfileLayout>
    );
  }
}
