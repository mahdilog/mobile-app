import { Button, Text, View } from "native-base";
import React from "react";
import { TourDetailsType } from "./type";
import TourDetailsBox from "../../bases/tourDetailsBox";
import { Iconify } from "react-native-iconify";
import { Linking } from "react-native";

export default function TourDetailsScreen({ data }: { data: TourDetailsType }) {
  const phoneNumber = "+989100526551";
  const information = [
    {
      id: 1,
      icon: <Iconify icon="ph:airplane" size={20} color="#2F6690" />,
      title: `رفت: ${data.origin} ، ${data.agencyName}`,
    },
    {
      id: 2,
      icon: <Iconify icon="formkit:date" size={20} color="#2F6690" />,
      title: data.departureDate,
    },
    {
      id: 3,
      icon: <Iconify icon="ph:airplane" size={20} color="#2F6690" />,
      title: `ّبرگشت: ${data.destination} ، ${data.agencyName}`,
    },
    {
      id: 4,
      icon: <Iconify icon="formkit:date" size={20} color="#2F6690" />,
      title: data.returnDate,
    },
  ];
  const documents = [];
  if (data.hasPassport) {
    documents.push(
      data.hasPassport && {
        id: 1,
        icon: <Iconify icon="carbon:circle-filled" size={20} color="#2F6690" />,
        title: "پاسپورت",
      }
    );
  }
  if (data.hasNationalCard) {
    documents.push({
      id: 2,
      icon: <Iconify icon="carbon:circle-filled" size={20} color="#2F6690" />,
      title: "کارت ملی",
    });
  }
  if (data.hasPrivacyDocument) {
    documents.push({
      id: 3,
      icon: <Iconify icon="carbon:circle-filled" size={20} color="#2F6690" />,
      title: "شناسنامه",
    });
  }
  if (data.hasBirthCertificate) {
    documents.push({
      id: 4,
      icon: <Iconify icon="carbon:circle-filled" size={20} color="#2F6690" />,
      title: "گواهی تولد",
    });
  }
  if (data.hasHealthEnsuranceCard) {
    documents.push({
      id: 5,
      icon: <Iconify icon="carbon:circle-filled" size={20} color="#2F6690" />,
      title: "گواهی سلامت",
    });
  }
  if (data.hasDrivingCertificate) {
    documents.push({
      id: 6,
      icon: <Iconify icon="carbon:circle-filled" size={20} color="#2F6690" />,
      title: "گواهینامه",
    });
  }
  const services = [{ id: 1, icon: "", title: data.services }];
  const moreInformation = [
    {
      id: 1,
      icon: <Iconify icon="mdi:dollar" size={20} color="#2F6690" />,
      title: `هزینه تور: ${data.price} ریال`,
    },
    {
      id: 2,
      icon: <Iconify icon="mdi:hashtag" size={20} color="#2F6690" />,
      title: `کد تور: ${data.tourCode}`,
    },
    {
      id: 3,
      icon: <Iconify icon="ph:airplane-takeoff" size={20} color="#2F6690" />,
      title: `آژانس مسافرتی ${data.agencyName}`,
    },
    {
      id: 4,
      icon: <Iconify icon="carbon:information" size={20} color="#2F6690" />,
      title: "برای اطلاعات بیشتر تماس بگیرید",
    },
  ];
  return (
    <View style={{ gap: 20 }}>
      <TourDetailsBox data={information} title="اطلاعات سفر" />
      <TourDetailsBox data={documents} title="مدارک مورد نیاز" />
      <TourDetailsBox data={services} title="خدمات تور" />
      <TourDetailsBox data={moreInformation} title="اطلاعات بیشتر" />
      <Button
        variant="unstyled"
        borderWidth="1px"
        borderRadius="10px"
        borderColor="#2F6690"
        _text={{ color: "#2F6690" }}
        onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
        startIcon={<Iconify icon="ic:round-phone" size={20} color="#2F6690" />}
      >
        مشاوره رایگان
      </Button>
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
    </View>
  );
}
