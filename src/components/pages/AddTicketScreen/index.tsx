import React, { ReactNode, useState } from "react";
import { TextInput } from "../../bases/textInput";
import BackLayout from "@/src/layouts/backLayout";
import { Formik } from "formik";
import { Button, Checkbox, Select, Text, View } from "native-base";
import BaseDivider from "../../bases/BaseDivider";
import { Iconify } from "react-native-iconify";
import BaseButton from "../../bases/BaseButton";
import axios from "axios";
import { useProfileContext } from "@/src/context/profile-context";

type inputDataType = {
  id: number;
  label: string;
  name:
    | "agencyName"
    | "origin"
    | "destination"
    | "departureDate"
    | "departureTime"
    | "capacity"
    | "price"
    | "returnDate"
    | "returnTime"
    | "flightType"
    | "airline";
};

export default function AddTicketScreen() {
  const [ticketType, setTicketType] = useState<"airplane" | "bus" | "train">("airplane");
  const [sweep, setSweep] = useState(false);
  const { token } = useProfileContext();

  const inputData: (inputDataType | inputDataType[])[] = [
    { id: 1, label: "نام آژانس", name: "agencyName" },
    [
      { id: 2, label: "مبدا", name: "origin" },
      { id: 3, label: "مقصد", name: "destination" },
    ],
    [
      { id: 4, label: "تاریخ رفت", name: "departureDate" },
      { id: 5, label: "ساعت رفت", name: "departureTime" },
    ],
    [{ id: 6, label: "ظرفیت", name: "capacity" }],
    { id: 7, label: "قیمت بلیط", name: "price" },
  ];

  if (sweep) {
    inputData.splice(4, 0, [
      { id: 8, label: "تاریخ برگشت", name: "returnDate" },
      { id: 9, label: "ساعت برگشت", name: "returnTime" },
    ]);
  }

  if (ticketType === "airplane") {
    inputData.splice(1, 0, [
      { id: 10, label: "ایرلاین", name: "airline" },
      { id: 11, label: "نوع پرواز", name: "flightType" },
    ]);
  }

  const submitHandler = (values: {
    agencyName: string;
    origin: string;
    destination: string;
    departureDate: string;
    departureTime: string;
    capacity: string;
    price: string;
    returnDate: string;
    returnTime: string;
    flightType: string;
    airline: string;
  }) => {
    axios({
      url: `https://travelorganization.monster/api/Admin/TicketsManagement/AddTicket?type=${ticketType}`,
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        type: values.flightType,
        airLine: values.airline,
        agencyName: values.agencyName,
        origin: values.origin,
        destination: values.destination,
        backAndForth: sweep,
        departureDate: values.departureDate,
        departureTime: values.departureTime,
        returnDate: values.returnDate,
        returnTime: values.returnTime,
        capacity: values.capacity,
        price: values.price,
      },
    });
  };

  return (
    <BackLayout title="افزودن بلیط">
      <Formik
        initialValues={{
          agencyName: "",
          origin: "",
          destination: "",
          departureDate: "",
          departureTime: "",
          capacity: "",
          price: "",
          returnDate: "",
          returnTime: "",
          flightType: "",
          airline: "",
        }}
        enableReinitialize
        onSubmit={(values, { resetForm }) => submitHandler(values)}
      >
        {({ handleSubmit, values, resetForm }) => (
          <View style={{ gap: 20 }}>
            <Select
              selectedValue={ticketType}
              variant="unstyled"
              borderColor="#6C757D"
              borderWidth="0.5px"
              borderRadius="8px"
              color="#6C757D"
              _selectedItem={{
                bg: "#eee",
                borderRadius: 8,
              }}
              onValueChange={(itemValue) =>
                setTicketType(itemValue as "airplane" | "bus" | "train")
              }
              _item={{ flexDir: "row-reverse" }}
            >
              <Select.Item label="هواپیما" value="airplane" />
              <Select.Item label="قطار" value="train" />
              <Select.Item label="اتوبوس" value="bus" />
            </Select>
            <BaseDivider title="اطلاعات بلیط" />
            {inputData.map((item) => {
              if (Array.isArray(item)) {
                return (
                  <View flexDirection="row-reverse" alignItems="center" style={{ gap: 10 }}>
                    {item.map((item2) => (
                      <>
                        <View key={item2.id} style={{ flex: 1 }}>
                          <TextInput
                            label={item2.label}
                            name={item2.name}
                            value={values[item2.name]}
                          />
                        </View>
                        {item2.name === "capacity" && (
                          <View key="capacity" style={{ flex: 1 }}>
                            <Checkbox
                              value=""
                              flexDirection="row-reverse"
                              _checked={{ backgroundColor: "#3A7CA5", borderColor: "#3A7CA5" }}
                              _pressed={{ borderColor: "#3A7CA5" }}
                              onChange={(e) => setSweep(e)}
                              _text={{ color: "#6C757D" }}
                            >
                              رفت و برگشت
                            </Checkbox>
                          </View>
                        )}
                      </>
                    ))}
                  </View>
                );
              } else {
                return (
                  <TextInput
                    key={item.id}
                    label={item.label}
                    name={item.name}
                    value={values[item.name]}
                  />
                );
              }
            })}
            <BaseButton label="افزودن بلیط" pressHandler={handleSubmit} />
          </View>
        )}
      </Formik>
    </BackLayout>
  );
}
