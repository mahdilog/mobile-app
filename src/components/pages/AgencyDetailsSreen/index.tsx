import { agencyDataType } from "@/app/agency/[id]";
import { Image, Pressable, Text, View } from "native-base";
import React from "react";
import { Iconify } from "react-native-iconify";

export default function AgencyDetailsSreen({ data }: { data: agencyDataType }) {
  const AgencyDetailsData: { id: number; key: keyof agencyDataType; value: string }[] = [
    { id: 1, key: "agencyName", value: "نام آژانس" },
    { id: 2, key: "managerName", value: "مدیر" },
    { id: 3, key: "email", value: "ایمیل شرکت" },
    { id: 4, key: "phoneNo", value: "تلفن" },
    { id: 5, key: "address", value: "آدرس دفتر" },
    { id: 6, key: "startDate", value: "تاریخ شروع همکاری" },
  ];

  return (
    <View backgroundColor="#fff" borderRadius="10px" shadow="3" padding="15px">
      <View flexDirection="row-reverse" justifyContent="space-between" alignItems="flex-start">
        <View style={{ gap: 15 }}>
          {AgencyDetailsData.map((item) => (
            <View key={item.id}>
              <Text fontSize="18px" textAlign="right" color="#2F6690">
                {item.value} :
              </Text>
              <Text fontSize="14px" textAlign="right">
                {data[item.key]}
              </Text>
            </View>
          ))}
        </View>
        <View borderColor="#ddd" borderWidth="1px" borderRadius="50px" padding="5px">
          <Image
            source={require("@/src/assets/images/Iranair_logo.jpg")}
            alt="Agency Logo"
            height="70px"
            width="70px"
            borderRadius="50px"
          />
        </View>
      </View>
      <View
        mt="15px"
        alignItems="center"
        justifyContent="center"
        flexDirection="row-reverse"
        style={{ gap: 10 }}
      >
        <Pressable
          borderColor="#2F6690"
          borderWidth="1.5px"
          borderRadius="10px"
          width="50px"
          height="50px"
          justifyContent="center"
          alignItems="center"
        >
          <Iconify icon="bi:trash" size={25} color="#2F6690" />
        </Pressable>
        <Pressable
          borderColor="#2F6690"
          borderWidth="1.5px"
          borderRadius="10px"
          width="50px"
          height="50px"
          justifyContent="center"
          alignItems="center"
        >
          <Iconify icon="mdi:edit-outline" size={25} color="#2F6690" />
        </Pressable>
      </View>
    </View>
  );
}
