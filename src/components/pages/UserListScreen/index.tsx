import { useProfileContext } from "@/src/context/profile-context";
import BackLayout from "@/src/layouts/backLayout";
import axios from "axios";
import { router } from "expo-router";
import { Pressable, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Iconify } from "react-native-iconify";

type dataType = {
  email: string;
  phoneNo: string;
  userName: string;
};

function UserCard(props: dataType) {
  const { email, phoneNo, userName } = props;
  return (
    <Pressable
      flexDirection="row-reverse"
      backgroundColor="#fff"
      alignItems="center"
      paddingY="5px"
      paddingX="10px"
      borderRadius="10px"
      style={{ gap: 10 }}
      shadow="2"
      overflow="hidden"
      onPress={() =>
        router.push({
          pathname: "/userDetails/[email]",
          params: { email },
        })
      }
    >
      <Iconify icon="solar:user-bold" size={40} color="#2F6690" />
      <View>
        <Text color="#2F6690">نام کاربری :</Text>
        <Text color="#2F6690">ایمیل :</Text>
        <Text color="#2F6690">تلفن :</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text textAlign="right">{userName}</Text>
        <Text textAlign="right" numberOfLines={1}>
          {email}
        </Text>
        <Text textAlign="right">{phoneNo ? phoneNo : "یافت نشد"}</Text>
      </View>
    </Pressable>
  );
}

export default function UserListScreen() {
  const { token } = useProfileContext();
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    console.log(token);
    (function () {
      axios
        .get("https://travelorganization.monster/api/Admin/UserManagment/GetUsersList", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((json) => {
          if (json.data.isSuccess) {
            setData(json.data.data);
            console.log(json.data.data);
          }
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <BackLayout title="لیست کاربران" backgroundColor="#f5f5f5">
      <View style={{ gap: 15 }}>
        {data.length ? (
          data.map((item) => <UserCard key={item.email} {...item} />)
        ) : (
          <Text>کاربری وجود ندارد</Text>
        )}
      </View>
    </BackLayout>
  );
}
