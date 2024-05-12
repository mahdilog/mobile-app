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
  const [resError, setResError] = useState<string>("");
  const router = useRouter();

  const registerHandler = (values: {
    userName: string;
    email: string;
    password: string;
    code: string;
  }) => {
    axios
      .post(
        `https://travelorganization.monster/api/User/Email/SignUpEmailValidation?code=${values.code}&email=${values.email}`,
        {
          userName: values.userName,
          email: values.email,
          password: values.password,
        }
      )
      .then((json) => {
        if (json.status === 200) {
          AsyncStorage.setItem("token", json.data.data.token.token);
          router.navigate("/");
        }
      })
      .catch((error) => {
        setResError(error.response.data.message);
      });
  };

  return (
    <>
      <View p={4} mt={20}>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            code: "",
          }}
          validationSchema={Yup.object({
            userName: Yup.string()
              .max(15, "نام کاربری باید حداکثر 15 کارکتر باشد")
              .required("نام کاربری خود را وارد کنید!"),
            email: Yup.string()
              .email("ایمیل صحبح نیست!")
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
          onSubmit={(values) => {
            console.log(values);
            axios
              .post("https://travelorganization.monster/api/User/Accounts/SignUp", {
                userName: values.userName,
                email: values.email,
                password: values.password,
              })
              .then((json) => {
                console.log(json);
              })
              .catch((error) => {
                setResError(error.response.data.message);
              });
          }}
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
                    <Text textAlign="right">ایجاد حساب</Text>
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
                      <Text textAlign="right">حساب کاربری دارید؟</Text>
                      <Text textAlign="right" onPress={() => router.navigate("/register")}>
                        وارد شوید
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
                    <Text textAlign="right">ایجاد حساب</Text>
                    <BaseInput
                      variant="underlined"
                      style={{
                        textAlign: "right",
                      }}
                      placeholder="رمز عبور"
                      type="password"
                      onChangeText={handleChange("password")}
                    />
                    {values.password && errors.password && (
                      <Text color="red.900" textAlign="right">
                        {errors.password}
                      </Text>
                    )}
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
                      <Button variant="outline" onPress={() => setStep(3)} width="1/4">
                        ادامه
                      </Button>
                    </View>
                  </>
                )}

                {step === 3 && (
                  <>
                    <Text textAlign="right">ایجاد حساب</Text>
                    <BaseInput
                      variant="underlined"
                      style={{
                        textAlign: "right",
                      }}
                      placeholder="نام کاربری"
                      onChangeText={handleChange("userName")}
                    />
                    {values.userName && errors.userName && (
                      <Text color="red.900" textAlign="right">
                        {errors.userName}
                      </Text>
                    )}
                    <View
                      display="flex"
                      flexDirection="row"
                      style={{
                        gap: 8,
                      }}
                      mt={8}
                    >
                      <Button variant="outline" onPress={() => setStep(2)} width="1/4">
                        بازگشت
                      </Button>
                      <Button
                        variant="outline"
                        onPress={handleSubmit as any}
                        onTouchEnd={() => setStep(4)}
                        width="1/4"
                      >
                        ادامه
                      </Button>
                    </View>
                  </>
                )}

                {step === 4 && (
                  <>
                    <Text textAlign="right">ایجاد حساب</Text>
                    <BaseInput
                      variant="underlined"
                      style={{
                        textAlign: "right",
                      }}
                      placeholder="کد فعال سازی"
                      onChangeText={handleChange("code")}
                    />
                    {values.code && errors.code && (
                      <Text color="red.900" textAlign="right">
                        {errors.code}
                      </Text>
                    )}
                    <View
                      display="flex"
                      flexDirection="row"
                      style={{
                        gap: 8,
                      }}
                      mt={8}
                    >
                      <Button variant="outline" onPress={() => setStep(2)} width="1/4">
                        بازگشت
                      </Button>
                      <Button variant="outline" onPress={() => registerHandler(values)} width="1/4">
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
