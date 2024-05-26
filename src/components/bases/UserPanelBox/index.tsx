import { useProfileContext } from "@/src/context/profile-context";
import { Divider, Flex, Text, View } from "native-base";
import React from "react";

function UserTravel({ count, value }: { count: string; value: string }) {
  return (
    <View alignItems="center">
      <Text fontSize="18px">{count}</Text>
      <Text fontSize="18px" color="#2F6690">
        {value}
      </Text>
    </View>
  );
}

export default function UserPanelBox() {
  const { userDetails } = useProfileContext();
  return (
    <View mt="30px" alignItems="center" style={{ gap: 10 }}>
      <Text color="#000" fontSize="22px" style={{ fontWeight: "700" }}>
        {userDetails.userName}
      </Text>
      <Text color="#6C757D" fontSize="16px">
        {userDetails.email}
      </Text>
      <Flex direction="row-reverse" mt="20px">
        <UserTravel count=" 0" value="استرداد" />
        <Divider orientation="vertical" mx="10px" />
        <UserTravel count="0" value="بلیط‌ها" />
        <Divider orientation="vertical" mx="10px" />
        <UserTravel count="0" value="تورها" />
      </Flex>
    </View>
  );
}
