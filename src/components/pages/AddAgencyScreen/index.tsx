import BackLayout from "@/src/layouts/backLayout";
import { Formik } from "formik";
import { TextArea, View } from "native-base";
import React from "react";
import { TextInput } from "../../bases/textInput";
import BaseButton from "../../bases/BaseButton";
import axios from "axios";
import { useProfileContext } from "@/src/context/profile-context";

type inputDataType = {
  id: number;
  label: string;
  name:
    | "agencyName"
    | "agencyAdminFullName"
    | "phoneNo1"
    | "phoneNo2"
    | "email"
    | "address"
    | "startDate";
};

export default function AddAgencyScreen() {
  const { token } = useProfileContext();

  const inputData: inputDataType[] = [
    { id: 1, label: "نام آژانس", name: "agencyName" },
    { id: 2, label: "نام کامل مدیر", name: "agencyAdminFullName" },
    { id: 3, label: "تلفن 1", name: "phoneNo1" },
    { id: 4, label: "تلفن 2", name: "phoneNo2" },
    { id: 5, label: "ایمیل", name: "email" },
    { id: 6, label: "تاریخ شروع همکاری", name: "startDate" },
  ];

  const submitHandler = (values: {
    agencyName: string;
    agencyAdminFullName: string;
    phoneNo1: string;
    phoneNo2: string;
    email: string;
    address: string;
    startDate: string;
  }) => {
    axios({
      url: "https://travelorganization.monster/api/Admin/AgencyManagment/AddNewAgency",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        agencyName: values.agencyName,
        agencyAdminFullName: values.agencyAdminFullName,
        phoneNo1: values.phoneNo1,
        phoneNo2: values.phoneNo2,
        email: values.email,
        address: values.address,
        startDate: values.startDate,
      },
    });
  };

  return (
    <BackLayout title="اضافه کردن آژانس">
      <Formik
        initialValues={{
          agencyName: "",
          agencyAdminFullName: "",
          phoneNo1: "",
          phoneNo2: "",
          email: "",
          address: "",
          startDate: "",
        }}
        enableReinitialize
        onSubmit={(values, { resetForm }) => submitHandler(values)}
      >
        {({ handleSubmit, values, resetForm, handleChange, handleBlur }) => (
          <View style={{ gap: 20 }}>
            {inputData.map((item) => (
              <TextInput
                key={item.id}
                label={item.label}
                name={item.name}
                value={values[item.name]}
              />
            ))}
            <TextArea
              autoCompleteType={""}
              variant="unstyled"
              value={values.address}
              h={20}
              placeholder="آدرس"
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
            <BaseButton label="افزودن آژانس" pressHandler={handleSubmit} />
          </View>
        )}
      </Formik>
    </BackLayout>
  );
}
