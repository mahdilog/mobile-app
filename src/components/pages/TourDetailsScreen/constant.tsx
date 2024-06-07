import { Iconify } from "react-native-iconify";
import { TourDetailsType } from "./type";
import { ReactNode } from "react";

export function informationData(data: TourDetailsType) {
  return [
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
}

export function moreInformationData(data: TourDetailsType) {
  return [
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
}

const documentsElemnts: { id: number; key: keyof TourDetailsType; value: string }[] = [
  { id: 1, key: "hasPassport", value: "پاسپورت" },
  { id: 2, key: "hasNationalCard", value: "کارت ملی" },
  { id: 3, key: "hasPrivacyDocument", value: "شناسنامه" },
  { id: 4, key: "hasBirthCertificate", value: "گواهی تولد" },
  { id: 5, key: "hasHealthEnsuranceCard", value: "گواهی سلامت" },
  { id: 6, key: "hasDrivingCertificate", value: "گواهینامه" },
];

export function documentsData(data: TourDetailsType) {
  const documents: { id: number; icon: ReactNode; title: string }[] = [];

  documentsElemnts.map((item) => {
    if (data[item.key]) {
      documents.push({
        id: item.id,
        icon: <Iconify icon="carbon:circle-filled" size={20} color="#2F6690" />,
        title: item.value,
      });
    }
  });

  return documents;
}

export function servicesData(data: TourDetailsType) {
  return [{ id: 1, icon: "", title: data.services }];
}

export const phoneNumber = "+989100526551";
