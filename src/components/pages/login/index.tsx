import { useState } from "react";
import { Formik } from "formik";
import { Alert, Button, Text, View } from "native-base";
import { BaseInput } from "../../bases/inputs";
import { Iconify } from "react-native-iconify";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Yup from "yup";
import LoginLayout from "@/src/layouts/loginLayout";
import LoginButton from "../../bases/loginButton";

export const LoginPage = () => {
  const [responseStatus, setResponseStatus] = useState<"error" | "success" | undefined>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [resError, setResError] = useState<string>("");

  const router = useRouter();

  const submitHandler = (values: { email: string; password: string }) => {
    setShowSpinner(true);
    axios
      .post("https://travelorganization.monster/api/User/Accounts/Login", {
        email: values.email,
        password: values.password,
      })
      .then((json) => {
        if (json.data.isSuccess) {
          setShowSpinner(false);
          AsyncStorage.setItem("token", json.data.data.token.token);
          setResponseStatus("success");
          router.navigate("/");
        }
      })
      .catch((error) => {
        setShowSpinner(false);
        setResponseStatus("error");
        setResError(error.response.data);
        console.log(error);
      });
  };

  return (
    <LoginLayout title="ورود">
      {/* {responseStatus && (
        <Alert shadow={2} maxW="400" w="100%" colorScheme={responseStatus}>
          <Text textAlign="right">
            {responseStatus === "error"
              ? "نام کاربری یا رمز عبور نادرست است."
              : "با موفقیت وارد شدید"}
          </Text>
        </Alert>
      )} */}
      <Formik
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
          <View style={{ gap: 10 }}>
            {resError && (
              <Text fontSize="16px" color="red.500">
                {resError}
              </Text>
            )}
            <BaseInput value={values.email} placeholder="ایمیل" type="text" name="email" />
            <BaseInput value={values.password} placeholder="رمز عبور" type="text" name="password" />
            <View mt="10px" flexDirection="row-reverse" alignItems="center" style={{ gap: 3 }}>
              <Text color="#777" fontSize="16px">
                حساب کاربری ندارید؟
              </Text>
              <Link
                href={"/register/"}
                style={{ fontFamily: "iransans", fontSize: 16, color: "#2F6690" }}
              >
                ثبت نام
              </Link>
            </View>
            <Link
              href={"/rules/"}
              style={{ fontFamily: "iransans", fontSize: 16, color: "#2F6690", marginTop: -8 }}
            >
              رمزعبور خود را فراموش کرده اید؟
            </Link>
            <View flexDirection="row" style={{ gap: 10 }}>
              <LoginButton value="ورود" isLoading={showSpinner} clickHandler={handleSubmit} />
              <LoginButton value="بازگشت" clickHandler={() => router.back()} />
            </View>
          </View>
        )}
      </Formik>
    </LoginLayout>
    // <>
    //   {responseStatus && (
    //     <Alert shadow={2} maxW="400" w="100%" colorScheme={responseStatus}>
    //       <Text textAlign="right">
    //         {responseStatus === "error"
    //           ? "نام کاربری یا رمز عبور نادرست است."
    //           : "با موفقیت وارد شدید"}
    //       </Text>
    //     </Alert>
    //   )}
    //   <View p={4} mt={20}>
    //     <Formik
    //       validateOnMount={false}
    //       initialValues={{
    //         email: "",
    //         password: "",
    //       }}
    //       validationSchema={Yup.object({
    //         email: Yup.string()
    //           .test("email", "ایمیل را به درستی وارد کنید", function (value) {
    //             return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //               value as string
    //             );
    //           })
    //           .required("ایمیل خود را وارد نمایید!"),
    //         password: Yup.string()
    //           .min(8, "رمز عبور حداقل باید 8 کارکتر باشد!")
    //           .required("رمز عبور خود را وارد نمایید!")
    //           .matches(
    //             /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,})/,
    //             "رمز عبور باید شامل حداقل یک عدد، یک حرف خاص،حرف انگلیسی کوچک و بزرگ باشد"
    //           ),
    //       })}
    //       onSubmit={submitHandler}
    //     >
    //       {({ handleSubmit, handleChange, errors, values }) => (
    //         <>
    //           <View
    //             display="flex"
    //             flexDirection="row-reverse"
    //             style={{
    //               gap: 16,
    //             }}
    //           >
    //             <Iconify
    //               icon="iconoir:arrow-right"
    //               size={24}
    //               onPress={() => router.navigate("/")}
    //               color="#3282B8"
    //             />
    //             <Text textAlign="right">نوا سفر</Text>
    //           </View>
    //           <View mt={4}>
    //             {step === 1 && (
    //               <>
    //                 <Text textAlign="right">ورود</Text>
    //                 <BaseInput
    //                   variant="underlined"
    //                   style={{
    //                     textAlign: "right",
    //                   }}
    //                   value={values.email}
    //                   placeholder="ایمیل"
    //                   onChangeText={handleChange("email")}
    //                 />
    //                 {errors.email && (
    //                   <Text color="red.900" textAlign="right">
    //                     {errors.email}
    //                   </Text>
    //                 )}
    //                 <View
    //                   display="flex"
    //                   flexDirection="row-reverse"
    //                   style={{
    //                     gap: 4,
    //                   }}
    //                   mt={5}
    //                 >
    //                   <Text textAlign="right">حساب کاربری ندارید؟</Text>
    //                   <Text textAlign="right" onPress={() => router.navigate("/register")}>
    //                     ثبت نام کنید
    //                   </Text>
    //                 </View>
    //                 <View width="1/4" mt={8}>
    //                   <Button
    //                     variant="outline"
    //                     onPress={() => setStep(2)}
    //                     disabled={!values.email && !!errors.email}
    //                   >
    //                     ادامه
    //                   </Button>
    //                 </View>
    //               </>
    //             )}
    //             {step === 2 && (
    //               <>
    //                 <Text textAlign="right">رمز عبور</Text>
    //                 <BaseInput
    //                   variant="underlined"
    //                   style={{
    //                     textAlign: "right",
    //                   }}
    //                   placeholder="رمز عبور"
    //                   onChangeText={handleChange("password")}
    //                   type="password"
    //                 />
    //                 {values.password && errors.password && (
    //                   <Text color="red.900" textAlign="right">
    //                     {errors.password}
    //                   </Text>
    //                 )}
    //                 <View
    //                   display="flex"
    //                   flexDirection="row-reverse"
    //                   style={{
    //                     gap: 4,
    //                   }}
    //                   mt={5}
    //                 >
    //                   <Text textAlign="right">حساب کاربری ندارید؟</Text>
    //                   <Text textAlign="right" onPress={() => router.navigate("/register")}>
    //                     ثبت نام کنید
    //                   </Text>
    //                 </View>
    //                 <View
    //                   display="flex"
    //                   flexDirection="row"
    //                   style={{
    //                     gap: 8,
    //                   }}
    //                   mt={8}
    //                 >
    //                   <Button
    //                     variant="outline"
    //                     onPress={() => {
    //                       setStep(1);
    //                       setResponseStatus(undefined);
    //                     }}
    //                     width="1/4"
    //                   >
    //                     بازگشت
    //                   </Button>
    //                   <Button variant="outline" onPress={handleSubmit as any} width="1/4">
    //                     ورود
    //                   </Button>
    //                 </View>
    //               </>
    //             )}
    //           </View>
    //         </>
    //       )}
    //     </Formik>
    //   </View>
    // </>
  );
};
