import { Button, Text, View } from "native-base";
import React, { ReactNode } from "react";
import { TourDetailsType } from "./type";
import TourDetailsBox from "../../bases/tourDetailsBox";
import { Iconify } from "react-native-iconify";
import { Alert, Linking } from "react-native";
import {
  documentsData,
  informationData,
  moreInformationData,
  phoneNumber,
  servicesData,
} from "./constant";
import { useProfileContext } from "@/src/context/profile-context";
import axios from "axios";
import { router } from "expo-router";

type tourPropsType = {
  children: ReactNode;
  icon: JSX.Element | JSX.Element[] | undefined;
  pressHandler: () => void;
};

function TourButton(props: tourPropsType) {
  const { children, icon, pressHandler } = props;
  return (
    <Button
      variant="unstyled"
      borderWidth="1px"
      borderRadius="10px"
      borderColor="#2F6690"
      _text={{ color: "#2F6690" }}
      onPress={pressHandler}
      startIcon={icon}
      style={{ flex: 1 }}
    >
      {children}
    </Button>
  );
}

export default function TourDetailsScreen({ data }: { data: TourDetailsType }) {
  const {
    userDetails: { role },
    token,
  } = useProfileContext();

  const deleteHandler = () => {
    axios
      .get(
        `https://travelorganization.monster/api/TourManagment/DeleteTour?tourcode=${data.tourCode}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((json) => {
        router.navigate("/tourList/");
      });
  };

  const DeleteAlert = () =>
    Alert.alert(
      "حذف تور",
      "آیا از حذف تور اطمینان دارید؟",
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
    <View style={{ gap: 20 }}>
      <TourDetailsBox data={informationData(data)} title="اطلاعات سفر" />
      <TourDetailsBox data={documentsData(data)} title="مدارک مورد نیاز" />
      <TourDetailsBox data={servicesData(data)} title="خدمات تور" />
      <TourDetailsBox data={moreInformationData(data)} title="اطلاعات بیشتر" />
      {role === "Customer" ? (
        <>
          <TourButton
            pressHandler={() => Linking.openURL(`tel:${phoneNumber}`)}
            icon={<Iconify icon="ic:round-phone" size={20} color="#2F6690" />}
          >
            مشاوره رایگان
          </TourButton>
          <Button
            variant="unstyled"
            borderRadius="10px"
            backgroundColor="#2F6690"
            borderWidth="1px"
            borderColor="#2F6690"
            _text={{ color: "#fff" }}
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
          >
            خرید بلیط
          </Button>
        </>
      ) : (
        <>
          <View flexDirection="row-reverse" style={{ gap: 20 }}>
            <TourButton
              pressHandler={() => Linking.openURL(`tel:${phoneNumber}`)}
              icon={<Iconify icon="mdi:edit" size={20} color="#2F6690" />}
            >
              ویرایش
            </TourButton>
            <TourButton
              pressHandler={() => Linking.openURL(`tel:${phoneNumber}`)}
              icon={<Iconify icon="bxs:offer" size={20} color="#2F6690" />}
            >
              ثبت تخفیف
            </TourButton>
          </View>
          <TourButton
            pressHandler={DeleteAlert}
            icon={<Iconify icon="bi:trash-fill" size={20} color="#2F6690" />}
          >
            حذف تور
          </TourButton>
        </>
      )}
    </View>
  );
}
