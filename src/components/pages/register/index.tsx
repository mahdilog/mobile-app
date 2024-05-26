import axios from "axios";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import { Checkbox, Text, View } from "native-base";
import { useState } from "react";
import * as Yup from "yup";
import { BaseInput } from "../../bases/inputs";
import LoginLayout from "@/src/layouts/loginLayout";
import LoginButton from "../../bases/loginButton";

export const RegisterPage = () => {
  const [resError, setResError] = useState<string>("");
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean | undefined>();
  const [validCheckbox, setValidCheckbox] = useState(false);
  const router = useRouter();

  const registerHandler = (values: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    if (!agreement) {
      setAgreement(true);
      return;
    }
    setShowSpinner(true);
    axios
      .post("https://travelorganization.monster/api/User/Accounts/SignUp", {
        userName: values.userName,
        email: values.email,
        password: values.password,
      })
      .then((json) => {
        setShowSpinner(false);
        if (json.data.isSuccess) {
          console.log(json.data.data.code);
          router.push({
            pathname: "/validation-email/",
            params: { type: "register", ...values },
          });
        }
      })
      .catch((error) => {
        setShowSpinner(false);
        setResError(error.response.data.message);
      });
  };

  return (
    <LoginLayout title="ُساخت حساب">
      <Formik
        initialValues={{
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(15, "نام کاربری باید حداکثر 15 کارکتر باشد")
            .required("نام کاربری خود را وارد کنید!"),
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
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "تاییده رمز عبور مطابقت ندارد!")
            .required("تایید رمز عبور خود را وارد نمایید!"),
        })}
        onSubmit={registerHandler}
      >
        {({ handleSubmit, handleChange, errors, values, setErrors }) => (
          <View style={{ gap: 10 }}>
            {resError && (
              <Text fontSize="16px" color="red.500">
                {resError}
              </Text>
            )}
            <BaseInput
              value={values.userName}
              placeholder="نام کاربری"
              type="text"
              name="userName"
            />
            <BaseInput value={values.email} placeholder="ایمیل" type="text" name="email" />
            <BaseInput value={values.password} placeholder="رمز عبور" type="text" name="password" />
            <BaseInput
              value={values.confirmPassword}
              placeholder="تکرار رمز عبور"
              type="text"
              name="confirmPassword"
            />
            <View mt="10px" flexDirection="row-reverse" alignItems="center" style={{ gap: 3 }}>
              <Text color="#777" fontSize="16px">
                حساب کاربری دارید؟
              </Text>
              <Link
                href={"/login/"}
                style={{ fontFamily: "iransans", fontSize: 16, color: "#2F6690", lineHeight: 20 }}
              >
                ورود
              </Link>
            </View>
            <Checkbox
              value={""}
              name="rules"
              flexDirection="row-reverse"
              _checked={{ backgroundColor: "#3A7CA5", borderColor: "#3A7CA5" }}
              _pressed={{ borderColor: "#3A7CA5" }}
              isInvalid={agreement}
              _invalid={{ borderColor: "red.500" }}
              onChange={(e) => setAgreement(e)}
            >
              <Text
                fontSize="16px"
                color="#3A7CA5"
                style={{
                  textDecorationLine: "underline",
                }}
                onPress={() => router.push("/rules/")}
              >
                قوانین
              </Text>
              <Text fontSize="16px" color="#777">
                نواسفر را مطالعه کرده ام و قبول دارم.
              </Text>
            </Checkbox>
            <View flexDirection="row" style={{ gap: 10 }}>
              <LoginButton value="ادامه" isLoading={showSpinner} clickHandler={handleSubmit} />
              <LoginButton value="بازگشت" clickHandler={() => router.back()} />
            </View>
          </View>
        )}
      </Formik>
    </LoginLayout>
    // <>
    //   <View p={4} mt={20}>
    //     <Formik
    //       initialValues={{
    //         userName: "",
    //         email: "",
    //         password: "",
    //         code: "",
    //       }}
    //       validationSchema={Yup.object({
    //         userName: Yup.string()
    //           .max(15, "نام کاربری باید حداکثر 15 کارکتر باشد")
    //           .required("نام کاربری خود را وارد کنید!"),
    //         email: Yup.string()
    //           .email("ایمیل صحبح نیست!")
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
    //       onSubmit={(values) => {
    //         console.log(values);
    //         axios
    //           .post("https://travelorganization.monster/api/User/Accounts/SignUp", {
    //             userName: values.userName,
    //             email: values.email,
    //             password: values.password,
    //           })
    //           .then((json) => {
    //             console.log(json);
    //           })
    //           .catch((error) => {
    //             setResError(error.response.data.message);
    //           });
    //       }}
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
    //                 <Text textAlign="right">ایجاد حساب</Text>
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
    //                   <Text textAlign="right">حساب کاربری دارید؟</Text>
    //                   <Text textAlign="right" onPress={() => router.navigate("/register")}>
    //                     وارد شوید
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
    //                 <Text textAlign="right">ایجاد حساب</Text>
    //                 <BaseInput
    //                   variant="underlined"
    //                   style={{
    //                     textAlign: "right",
    //                   }}
    //                   placeholder="رمز عبور"
    //                   type="password"
    //                   onChangeText={handleChange("password")}
    //                 />
    //                 {values.password && errors.password && (
    //                   <Text color="red.900" textAlign="right">
    //                     {errors.password}
    //                   </Text>
    //                 )}
    //                 <View
    //                   display="flex"
    //                   flexDirection="row"
    //                   style={{
    //                     gap: 8,
    //                   }}
    //                   mt={8}
    //                 >
    //                   <Button variant="outline" onPress={() => setStep(1)} width="1/4">
    //                     بازگشت
    //                   </Button>
    //                   <Button variant="outline" onPress={() => setStep(3)} width="1/4">
    //                     ادامه
    //                   </Button>
    //                 </View>
    //               </>
    //             )}

    //             {step === 3 && (
    //               <>
    //                 <Text textAlign="right">ایجاد حساب</Text>
    //                 <BaseInput
    //                   variant="underlined"
    //                   style={{
    //                     textAlign: "right",
    //                   }}
    //                   placeholder="نام کاربری"
    //                   onChangeText={handleChange("userName")}
    //                 />
    //                 {values.userName && errors.userName && (
    //                   <Text color="red.900" textAlign="right">
    //                     {errors.userName}
    //                   </Text>
    //                 )}
    //                 <View
    //                   display="flex"
    //                   flexDirection="row"
    //                   style={{
    //                     gap: 8,
    //                   }}
    //                   mt={8}
    //                 >
    //                   <Button variant="outline" onPress={() => setStep(2)} width="1/4">
    //                     بازگشت
    //                   </Button>
    //                   <Button
    //                     variant="outline"
    //                     onPress={handleSubmit as any}
    //                     onTouchEnd={() => setStep(4)}
    //                     width="1/4"
    //                   >
    //                     ادامه
    //                   </Button>
    //                 </View>
    //               </>
    //             )}

    //             {step === 4 && (
    //               <>
    //                 <Text textAlign="right">ایجاد حساب</Text>
    //                 <BaseInput
    //                   variant="underlined"
    //                   style={{
    //                     textAlign: "right",
    //                   }}
    //                   placeholder="کد فعال سازی"
    //                   onChangeText={handleChange("code")}
    //                 />
    //                 {values.code && errors.code && (
    //                   <Text color="red.900" textAlign="right">
    //                     {errors.code}
    //                   </Text>
    //                 )}
    //                 <View
    //                   display="flex"
    //                   flexDirection="row"
    //                   style={{
    //                     gap: 8,
    //                   }}
    //                   mt={8}
    //                 >
    //                   <Button variant="outline" onPress={() => setStep(2)} width="1/4">
    //                     بازگشت
    //                   </Button>
    //                   <Button variant="outline" onPress={() => registerHandler(values)} width="1/4">
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
