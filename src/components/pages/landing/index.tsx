import { LandingLayout } from "@/src/layouts";
import { Divider, ScrollView, Text, View } from "native-base";
import { str } from "@/src/constants/strings";
import { Card } from "../../bases/card";
import { Image, Pressable } from "react-native";
import { theme } from "@/src/constants/Colors";
import { Iconify } from "react-native-iconify";
import { useRouter } from "expo-router";

export const LandingPage = () => {
  const router = useRouter();
  return (
    <View h="full" w="full">
      <LandingLayout>
        <View
          style={{
            marginTop: -120,
          }}
          mb={10}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              transform: [{ scaleX: -1 }],
            }}
          >
            <Card>
              <Image
                source={require("@/src/assets/images/landing/azadi.jpg")}
                style={{
                  width: 293,
                  height: 160,
                }}
              />
            </Card>
            <Card>
              <Image
                source={require("@/src/assets/images/landing/azadi.jpg")}
                style={{
                  width: 293,
                  height: 160,
                }}
              />
            </Card>
            <Card>
              <Image
                source={require("@/src/assets/images/landing/azadi.jpg")}
                style={{
                  width: 293,
                  height: 160,
                }}
              />
            </Card>
          </ScrollView>
        </View>
        <View paddingX={8} paddingY={4} mb={8}>
          <Pressable
            style={{
              width: "100%",
              backgroundColor: "#fff",
              height: 72,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 8,
              borderRadius: 16,
              elevation: 8,
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowOffset: {
                width: 8,
                height: 8,
              },
              shadowOpacity: 1,
            }}
          >
            <Iconify icon="fluent-emoji-flat:beach-with-umbrella" size={20} />
            <View>
              <Text textAlign="right" color="#3A7CA5" fontSize="sm">
                پرواز لحظه آخری
              </Text>
              <Text textAlign="right" color="#3A7CA5" fontSize="sm">
                برای مشاهده لیست پروازها کلیک کنید
              </Text>
            </View>
            <Iconify icon="ri:arrow-left-s-line" size={24} />
          </Pressable>
        </View>
        <View>
          <Text textAlign="right" fontSize="22px" px={8}>
            {str.suggestions + " " + str.nova + " " + str.travel}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              transform: [{ scaleX: -1 }],
            }}
            mb={10}
          >
            <Card>
              <Image
                source={require("@/src/assets/images/landing/azadi.jpg")}
                style={{
                  width: 293,
                  height: 160,
                }}
              />
              <View display="flex" justifyContent="space-between" flexDirection="row">
                <Text>10% off</Text>
                <Text>تور گردشگری دبی</Text>
              </View>
              <Text fontSize="xs" textAlign="right">
                اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید
              </Text>
            </Card>
            <Card>
              <Image
                source={require("@/src/assets/images/landing/azadi.jpg")}
                style={{
                  width: 293,
                  height: 160,
                }}
              />
              <View display="flex" justifyContent="space-between" flexDirection="row">
                <Text>10% off</Text>
                <Text>تور گردشگری دبی</Text>
              </View>
              <Text fontSize="xs" textAlign="right">
                اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید
              </Text>
            </Card>
            <Card>
              <Image
                source={require("@/src/assets/images/landing/azadi.jpg")}
                style={{
                  width: 293,
                  height: 160,
                }}
              />
              <View display="flex" justifyContent="space-between" flexDirection="row">
                <Text>10% off</Text>
                <Text>تور گردشگری دبی</Text>
              </View>
              <Text fontSize="xs" textAlign="right">
                اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید
              </Text>
            </Card>
          </ScrollView>
          <View mb={"32"} display="flex" justifyContent="center" alignItems="center">
            <View
              width={360}
              height={20}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                backgroundColor: "#fff",
                elevation: 5,
                gap: 16,
              }}
              display="flex"
              justifyContent={"center"}
              flexDirection="row-reverse"
            >
              <Text>
                <Iconify icon="fluent-emoji-flat:beach-with-umbrella" size={80} />
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"xl"}
                style={{
                  width: 260,
                  color: "#3282B8",
                }}
              >
                دیدنی های شهرتو با ما به اشتراک بگذار!
              </Text>
            </View>
            <View
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row-reverse"}
              width={360}
              height={20}
              style={{
                gap: 8,
              }}
            >
              <Text>قوانین و مقررات</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  height: 9,
                }}
              ></View>
              <Text>پشتیبانی </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  height: 9,
                }}
              ></View>
              <Text>سوالات متداول </Text>
            </View>
          </View>
        </View>
      </LandingLayout>
    </View>
  );
};
