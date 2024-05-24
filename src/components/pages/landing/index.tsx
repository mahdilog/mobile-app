import { LandingLayout } from "@/src/layouts";
import { Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import { useRouter } from "expo-router";
import Carousel from "../../bases/Carousel";
import NavigationCard from "../../bases/navigationCard";
import Suggestions from "../../bases/suggestions";
import LandingFooter from "../../bases/landingFooter";

export const LandingPage = () => {
  const router = useRouter();
  return (
    <View h="full" w="full">
      <LandingLayout>
        <View h="130px" backgroundColor="#D9DCD6" />
        <View marginTop="-80px">
          <Carousel />
          <View marginTop="40px" marginBottom="100px" style={{ gap: 40 }}>
            <View px="15px" style={{ gap: 15 }}>
              <NavigationCard
                title="گردشگری در ایران"
                description="مقصد بعدی تو از اینجا انتخاب کن"
                icon={<Iconify icon={"fluent:building-mosque-48-filled"} size={35} color="#fff" />}
                clickHandler={() => router.push("/iranTourism/")}
              />
              <NavigationCard
                title="پرواز لحظه آخری"
                description="دیرت شده؟حتما این پرواز ها رو چک کن"
                icon={<Iconify icon="dashicons:airplane" size={35} color="#fff" />}
                clickHandler={() => router.push("/iranTourism/")}
              />
            </View>
            <Suggestions
              data={[
                {
                  id: 1,
                  image: require("@/src/assets/images/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg"),
                  title: "تور گردشگری دبی",
                  descrption: "اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید",
                  off: "10%",
                },
                {
                  id: 2,
                  image: require("@/src/assets/images/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg"),
                  title: "تور گردشگری دبی",
                  descrption: "اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید",
                  off: "10%",
                },
                {
                  id: 3,
                  image: require("@/src/assets/images/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg"),
                  title: "تور گردشگری دبی",
                  descrption: "اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید",
                  off: "10%",
                },
                {
                  id: 4,
                  image: require("@/src/assets/images/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg"),
                  title: "تور گردشگری دبی",
                  descrption: "اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید",
                  off: "10%",
                },
                {
                  id: 5,
                  image: require("@/src/assets/images/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg"),
                  title: "تور گردشگری دبی",
                  descrption: "اقامت 5 روزه در هتلی با ویوی دریا را با ما تجربه کنید",
                  off: "10%",
                },
              ]}
            />
            <View
              backgroundColor="#fff"
              borderRadius="10px"
              mx="15px"
              px="40px"
              flexDirection="row-reverse"
              justifyContent="space-between"
              alignItems="center"
              shadow="3"
            >
              <Iconify icon="fluent-emoji-flat:beach-with-umbrella" size={80} />
              <Text textAlign={"center"} fontSize="20px" color="#2F6690" style={{ flex: 1 }}>
                دیدنی های شهرتو با ما به اشتراک بگذار!
              </Text>
            </View>
            <LandingFooter />
          </View>
        </View>
      </LandingLayout>
    </View>
  );
};
