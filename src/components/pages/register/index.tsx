import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import {
  Alert,
  Box,
  Button,
  CloseIcon,
  Heading,
  HStack,
  IconButton,
  Text,
  View,
  VStack,
} from "native-base";
import { useState } from "react";
import { Iconify } from "react-native-iconify";
import * as Yup from "yup";
import { BaseInput } from "../../bases/inputs";

export const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const router = useRouter();
  const submitHandler = (values: { email: string; password: string }) => {
    axios
      .post("https://travelorganization.monster/api/User/Accounts/Login", {
        email: values.email,
        password: values.password,
      })
      .then((json) => {
        if (json.data.isSuccess) {
          console.log(json);
          AsyncStorage.setItem("token", json.data.data.token.token);
          router.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Alert shadow={2} maxW="400" w="100%" colorScheme="error"></Alert>
      <View p={4} mt={20}>
        <Formik
          validateOnMount={false}
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .test("email", "ایمیل را به درستی وارد کنید", function (value) {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  value as string
                );
              })
              .required("ایمیل خود را وارد نمایید!"),
            password: Yup.string()
              .min(8, "رمز عبور حداقل باید 8 کارکتر باشد!")
              .required("رمز عبور خود را وارد نمایید!")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,})/,
                "رمز عبور باید شامل حداقل یک عدد، یک حرف خاص،حرف انگلیسی کوچک و بزرگ باشد"
              ),
          })}
          onSubmit={submitHandler}
        >
          {({ handleSubmit, handleChange, errors, values }) => (
            <>
              <View
                display="flex"
                flexDirection="row-reverse"
                style={{
                  gap: 16,
                }}
              >
                <Iconify
                  icon="iconoir:arrow-right"
                  size={24}
                  onPress={() => router.navigate("/")}
                  color="#3282B8"
                />
                <Text textAlign="right">نوا سفر</Text>
              </View>
              <View mt={4}>
                {step === 1 && (
                  <>
                    <Text textAlign="right">ورود</Text>
                    <BaseInput
                      variant="underlined"
                      style={{
                        textAlign: "right",
                      }}
                      value={values.email}
                      placeholder="ایمیل"
                      onChangeText={handleChange("email")}
                    />
                    {errors.email && (
                      <Text color="red.900" textAlign="right">
                        {errors.email}
                      </Text>
                    )}
                    <View
                      display="flex"
                      flexDirection="row-reverse"
                      style={{
                        gap: 4,
                      }}
                      mt={5}
                    >
                      <Text textAlign="right">حساب کاربری ندارید؟</Text>
                      <Text textAlign="right" onPress={() => router.navigate("/register")}>
                        ثبت نام کنید
                      </Text>
                    </View>
                    <View width="1/4" mt={8}>
                      <Button
                        variant="outline"
                        onPress={() => setStep(2)}
                        disabled={!values.email && !!errors.email}
                      >
                        ادامه
                      </Button>
                    </View>
                  </>
                )}
                {step === 2 && (
                  <>
                    <Text textAlign="right">رمز عبور</Text>
                    <BaseInput
                      variant="underlined"
                      style={{
                        textAlign: "right",
                      }}
                      placeholder="رمز عبور"
                      onChangeText={handleChange("password")}
                    />
                    {values.password && errors.password && (
                      <Text color="red.900" textAlign="right">
                        {errors.password}
                      </Text>
                    )}
                    <View
                      display="flex"
                      flexDirection="row-reverse"
                      style={{
                        gap: 4,
                      }}
                      mt={5}
                    >
                      <Text textAlign="right">حساب کاربری ندارید؟</Text>
                      <Text textAlign="right" onPress={() => router.navigate("/register")}>
                        ثبت نام کنید
                      </Text>
                    </View>
                    <View
                      display="flex"
                      flexDirection="row"
                      style={{
                        gap: 8,
                      }}
                      mt={8}
                    >
                      <Button variant="outline" onPress={() => setStep(1)} width="1/4">
                        بازگشت
                      </Button>
                      <Button variant="outline" onPress={handleSubmit as any} width="1/4">
                        ورود
                      </Button>
                    </View>
                  </>
                )}
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};
