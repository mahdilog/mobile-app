import { userDetailsType } from "@/app/userDetails/[email]";
import { Button, Text, View } from "native-base";
import React from "react";
import { Iconify } from "react-native-iconify";
import { userData } from "./constant";
import { Alert } from "react-native";
import axios from "axios";
import { useProfileContext } from "@/src/context/profile-context";
import { router } from "expo-router";

export default function UserDetailsScreen(props: userDetailsType) {
  const { token } = useProfileContext();
  const deleteHandler = () => {
    axios
      .get(
        `https://travelorganization.monster/api/Admin/UserManagment/DeleteUser?email=${props.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((json) => {
        router.navigate("/userList/");
      });
    // .finally(() => setLoading(false));
  };
  const DeleteAlert = () =>
    Alert.alert(
      "حذف کاربر",
      "آیا از حذف کاربر اطمینان دارید؟",
      [
        {
          text: "لغو",
        },
        { text: "حذف", onPress: deleteHandler },
      ],
      {
        cancelable: true,
      }
    );

  return (
    <View backgroundColor="#fff" shadow="2" padding="15px" borderRadius="10px" style={{ gap: 10 }}>
      {userData.map((item) => (
        <View key={item.id}>
          <Text color="#2F6690" textAlign="right">
            {item.value}
          </Text>
          <Text color="#000" textAlign="right">
            {props[item.key] ? props[item.key] : "یافت نشد"}
          </Text>
        </View>
      ))}
      <View flexDirection="row-reverse" justifyContent="center" style={{ gap: 10 }}>
        <Button
          variant="unstyled"
          borderColor="#2F6690"
          borderWidth="1px"
          borderRadius="10px"
          height="40px"
          width="40px"
          onPress={DeleteAlert}
        >
          <Iconify icon="mingcute:user-x-line" size={30} color="#2F6690" />
        </Button>
        <Button
          variant="unstyled"
          borderColor="#2F6690"
          borderWidth="1px"
          borderRadius="10px"
          height="40px"
          width="40px"
        >
          <Iconify icon="mingcute:user-edit-line" size={30} color="#2F6690" />
        </Button>
      </View>
    </View>
  );
}
