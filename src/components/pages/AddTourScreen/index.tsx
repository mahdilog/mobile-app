import { useProfileContext } from "@/src/context/profile-context";
import BackLayout from "@/src/layouts/backLayout";
import axios from "axios";
import { Formik } from "formik";
import { Checkbox, Select, Text, TextArea, View } from "native-base";
import React, { useEffect, useState } from "react";
import BaseDivider from "../../bases/BaseDivider";
import { TextInput } from "../../bases/textInput";

type agencyType = {
  id: number;
  agencyName: string;
};

type inputDataType = {
  id: number;
  label: string;
  name:
    | "title"
    | "agencyName"
    | "origin"
    | "departureDate"
    | "departureTime"
    | "destination"
    | "returnDate"
    | "returnTime"
    | "services"
    | "price"
    | "phoneNo1"
    | "phoneNo2";
};

export default function AddTourScreen() {
  const { token } = useProfileContext();

  const [agencyList, setAgencyList] = useState<agencyType[]>();
  const [agency, setAgency] = useState("");
  const [hasBirthCertificate, setHasBirthCertificate] = useState(false);
  const [hasNationalCard, setHasNationalCard] = useState(false);
  const [hasPrivacyDocument, setHasPrivacyDocument] = useState(false);
  const [hasPassport, setHasPassport] = useState(false);
  const [hasDestinationVisa, setHasDestinationVisa] = useState(false);
  const [hasHealthEnsuranceCard, setHasHealthEnsuranceCard] = useState(false);

  const inputData: (inputDataType | inputDataType[])[] = [
    { id: 1, label: "نام تور", name: "title" },
    [
      { id: 2, label: "مبدا", name: "origin" },
      { id: 3, label: "مقصد", name: "destination" },
    ],
    [
      { id: 4, label: "تاریخ رفت", name: "departureDate" },
      { id: 5, label: "ساعت رفت", name: "departureTime" },
    ],
    [
      { id: 8, label: "تاریخ برگشت", name: "returnDate" },
      { id: 9, label: "ساعت برگشت", name: "returnTime" },
    ],
  ];

  const inputData2: inputDataType[] = [
    { id: 101, label: "قیمت تور", name: "price" },
    { id: 102, label: "تلفن1", name: "phoneNo1" },
    { id: 103, label: "تلفن2", name: "phoneNo2" },
  ];

  const checkBoxData = [
    {
      id: 201,
      label: "شناسنامه",
      changeHandler: (e: boolean) => setHasBirthCertificate(e),
    },
    {
      id: 202,
      label: "ویزا مقصد",
      changeHandler: (e: boolean) => setHasDestinationVisa(e),
    },
    {
      id: 203,
      label: "مدارک محرمیت",
      changeHandler: (e: boolean) => setHasPrivacyDocument(e),
    },
    {
      id: 204,
      label: "پاسپورت",
      changeHandler: (e: boolean) => setHasPassport(e),
    },
    {
      id: 205,
      label: "بیمه نامه",
      changeHandler: (e: boolean) => setHasHealthEnsuranceCard(e),
    },
    {
      id: 206,
      label: "کارت ملی",
      changeHandler: (e: boolean) => setHasNationalCard(e),
    },
  ];

  useEffect(() => {
    axios
      .get("https://travelorganization.monster/api/Admin/AgencyManagment/GetAllAgencies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((json) => setAgencyList(json.data.data));
  }, []);

  return (
    <BackLayout title="افزودن تور" isLoading={!agencyList}>
      <Formik
        initialValues={{
          title: "",
          agencyName: "",
          origin: "",
          departureDate: "",
          departureTime: "",
          destination: "",
          returnDate: "",
          returnTime: "",
          services: "",
          price: "",
          phoneNo1: "",
          phoneNo2: "",
        }}
        enableReinitialize
        onSubmit={(values, { resetForm }) => console.log("object")}
      >
        {({ handleSubmit, values, resetForm, handleChange, handleBlur }) => (
          <View style={{ gap: 20 }}>
            <BaseDivider title="اطلاعات سفر" />
            <Select
              selectedValue={agency}
              variant="unstyled"
              borderColor="#6C757D"
              borderWidth="0.5px"
              borderRadius="8px"
              color="#6C757D"
              _selectedItem={{
                bg: "#eee",
                borderRadius: 8,
              }}
              onValueChange={(itemValue) => setAgency(itemValue)}
              _item={{ flexDir: "row-reverse" }}
              placeholder="نام آژانس"
              placeholderTextColor="#6C757D"
            >
              {agencyList?.map((agency) => (
                <Select.Item key={agency.id} label={agency.agencyName} value={agency.agencyName} />
              ))}
            </Select>
            {inputData.map((item, index) => {
              if (Array.isArray(item)) {
                return (
                  <View
                    key={"box" + index}
                    flexDirection="row-reverse"
                    alignItems="center"
                    style={{ gap: 10 }}
                  >
                    {item.map((item2) => (
                      <>
                        <View key={item2.id} style={{ flex: 1 }}>
                          <TextInput
                            label={item2.label}
                            name={item2.name}
                            value={values[item2.name]}
                          />
                        </View>
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
            <BaseDivider title="مدارک مورد نیاز" />
            <View flexDirection="row-reverse">
              <View style={{ flex: 1, gap: 10 }}>
                {checkBoxData.map((item, index) => {
                  if (index <= 2) {
                    return (
                      <Checkbox
                        key={item.id}
                        value=""
                        flexDirection="row-reverse"
                        _checked={{ backgroundColor: "#3A7CA5", borderColor: "#3A7CA5" }}
                        _pressed={{ borderColor: "#3A7CA5" }}
                        onChange={(e) => item.changeHandler(e)}
                        _text={{ color: "#6C757D" }}
                      >
                        {item.label}
                      </Checkbox>
                    );
                  }
                })}
              </View>
              <View style={{ flex: 1, gap: 10 }}>
                {checkBoxData.map((item, index) => {
                  if (index > 2) {
                    return (
                      <Checkbox
                        key={item.id}
                        value=""
                        flexDirection="row-reverse"
                        _checked={{ backgroundColor: "#3A7CA5", borderColor: "#3A7CA5" }}
                        _pressed={{ borderColor: "#3A7CA5" }}
                        onChange={(e) => item.changeHandler(e)}
                        _text={{ color: "#6C757D" }}
                      >
                        {item.label}
                      </Checkbox>
                    );
                  }
                })}
              </View>
            </View>
            <BaseDivider title="خدمات تور" />
            <View style={{ gap: 10 }}>
              <Text color="#6C757D">توضیحات و خدمات تور را اینجا وارد کنید :</Text>
              <TextArea
                autoCompleteType={""}
                variant="unstyled"
                value={values.services}
                h={20}
                placeholder="خدمات تور"
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                borderColor="#6C757D"
                borderWidth="0.5px"
                _focus={{
                  borderColor: "#6C757D",
                }}
                borderRadius="8px"
                textAlign="right"
                placeholderTextColor="#6C757D"
              />
            </View>
            <BaseDivider title="اطلاعات تکمیلی" />
            {inputData2.map((item) => (
              <TextInput
                key={item.id}
                label={item.label}
                name={item.name}
                value={values[item.name]}
              />
            ))}
          </View>
        )}
      </Formik>
    </BackLayout>
  );
}
