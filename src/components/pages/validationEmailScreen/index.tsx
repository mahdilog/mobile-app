import LoginLayout from "@/src/layouts/loginLayout";
import { Formik } from "formik";
import { Text, View } from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";
import { BaseInput } from "../../bases/inputs";
import { Link, router, useLocalSearchParams } from "expo-router";
import LoginButton from "../../bases/loginButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ValidationEmailScreen() {
  const [responseStatus, setResponseStatus] = useState<"error" | "success" | undefined>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [resError, setResError] = useState<string>("");
  const item = useLocalSearchParams();

  const submitHandler = (values: { code: string }) => {
    setShowSpinner(true);
    axios
      .post(
        `https://travelorganization.monster/api/User/Email/SignUpEmailValidation?code=${values.code}&email=${item.email}`,
        {
          userName: item.userName,
          email: item.email,
          password: item.password,
        }
      )
      .then((json) => {
        setShowSpinner(false);
        console.log(json);
        if (json.status === 200) {
          AsyncStorage.setItem("token", json.data.data.token.token);
          router.replace("/UserProfileScreen/");
        }
      })
      .catch((error) => {
        setShowSpinner(false);
        setResError(error.response.data.message);
      });
  };
  return (
    <LoginLayout
      title="تایید ایمیل"
      description="ما به ایمیل وارد شده کدی را فرستاده ایم. لطفا برای ادامه ثبت نام کد را وارد کنید."
    >
      <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={submitHandler}
      >
        {({ handleSubmit, values }) => (
          <View style={{ gap: 40 }}>
            {resError && (
              <Text fontSize="16px" color="red.500">
                {resError}
              </Text>
            )}
            <BaseInput value={values.code} placeholder="کد تایید" type="text" name="code" />
            <View flexDirection="row" style={{ gap: 10 }}>
              <LoginButton value="ورود" isLoading={showSpinner} clickHandler={handleSubmit} />
              <LoginButton value="بازگشت" clickHandler={() => router.back()} />
            </View>
          </View>
        )}
      </Formik>
    </LoginLayout>
  );
}
