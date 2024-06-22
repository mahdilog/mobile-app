import Logo from "@/src/components/bases/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "native-base";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Iconify } from "react-native-iconify";
import { ReserveTicket } from "./reserveTicket";

export const SearchPage = ({
  setShowSearchPage,
}: {
  setShowSearchPage: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("airplane");
  const [error, setError] = useState(false);
  const [currentData, setCurrentData] = useState<any>();
  const [data, setData] = useState<any>({
    train: [],
    bus: [],
    airplane: [],
  });

  useEffect(() => {
    axios
      .post(
        `https://travelorganization.monster/api/Common/Landing/SearchTickets?type=${activeTab}`,
        {
          origin: "تهران",
          destination: "گرگان",
          isBackAndForth: true,
          count: 2,
          departureDate: "",
          returnDate: "",
          isLastMomentTicket: false,
        }
      )
      .then((json) => {
        const storedToken = AsyncStorage.getItem("token");
        if (json.data.isSuccess) {
          setData({ ...data, [activeTab]: json.data.data });
        }
      });
  }, [activeTab]);

  return (
    <View>
      {!error ? (
        <>
          <View
            bg="#D9DCD6"
            fontFamily="body"
            h="100px"
            justifyContent="space-between"
            flexDir="row"
            alignItems="center"
            paddingX="20px"
            paddingTop="25px"
          >
            <Iconify
              icon="ep:arrow-left-bold"
              size={24}
              color="#2F6690"
              onPress={() => setShowSearchPage(false)}
            />
            <View
              bg="white"
              w="50px"
              h="50px"
              justifyContent="center"
              alignItems="center"
              borderRadius={999}
              shadow={1}
              onTouchEnd={() => router.navigate("/UserProfileScreen")}
            >
              <Text>
                <Iconify icon="mdi:user" size={24} color="#2F6690" />
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: -10,
            }}
            w="1/2"
            mx="1/4"
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                backgroundColor: "#fff",
                gap: 5,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#6C757DCC",
                padding: 8,
                elevation: 10,
                shadowOffset: {
                  height: 1,
                  width: 1,
                },
                shadowColor: "#6C757DCC",
                shadowOpacity: 1,
              }}
            >
              <View
                onTouchEnd={() => {
                  setActiveTab("airplane");
                }}
                style={{
                  backgroundColor: activeTab === "airplane" ? "#D9DCD6" : "#fff",
                  borderRadius: 4,
                }}
              >
                <Iconify icon="mdi:airplane" size={24} color="#6c757dcc" />
              </View>
              <Text>|</Text>
              <View
                onTouchEnd={() => {
                  setActiveTab("train");
                }}
                style={{
                  backgroundColor: activeTab === "train" ? "#D9DCD6" : "#fff",
                  borderRadius: 16,
                }}
              >
                <Iconify icon="material-symbols:train" size={24} color="#6c757dcc" />
              </View>
              <Text>|</Text>
              <View
                onTouchEnd={() => {
                  setActiveTab("bus");
                }}
                style={{
                  backgroundColor: activeTab === "bus" ? "#D9DCD6" : "#fff",
                  borderRadius: 16,
                }}
              >
                <Iconify icon="mdi:bus" size={24} color="#6c757dcc" />
              </View>
            </View>
          </View>
          <ScrollView p={4}>
            {data[activeTab].map((item: any, index: number) => {
              return (
                <View
                  key={index}
                  style={{
                    borderRadius: 8,
                    shadowColor: "#000000",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    backgroundColor: "#fff",
                    padding: 8,
                  }}
                  mb={41}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        gap: 8,
                      }}
                    >
                      <Iconify icon="solar:earth-bold-duotone" size={24} />
                      <Text textAlign="right" fontFamily="body">
                        {item.agencyName}
                      </Text>
                    </View>
                    <Text>{item.capacity} صندلی باقی مانده</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                      marginTop: 48,
                    }}
                  >
                    <Text textAlign="right" fontFamily="body">
                      رفت
                    </Text>
                    <Text>{item.deaprtureTime}</Text>
                    <Text>{item.departureDate}</Text>
                  </View>
                  <View
                    style={{
                      height: 2,
                      marginTop: 24,
                      backgroundColor: "#00000033",
                    }}
                  >
                    <Iconify
                      icon="fluent:arrow-swap-16-regular"
                      size={30}
                      color="#3282B8"
                      style={{
                        position: "absolute",
                        top: -14,
                        left: 170,
                        backgroundColor: "#fff",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                      marginTop: 24,
                    }}
                  >
                    <Text textAlign="right" fontFamily="body">
                      برگشت
                    </Text>
                    <Text>{item.returnTime}</Text>
                    <Text>{item.returnDate}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                      marginTop: 36,
                    }}
                  >
                    <Text>هزینه بلیط:</Text>
                    <Text>{item.price} ریال</Text>
                  </View>
                  <Button
                    variant="outline"
                    style={{
                      marginTop: 36,
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setError(true);
                      setCurrentData(item);
                    }}
                  >
                    رزرو بلیط
                  </Button>
                </View>
              );
            })}
          </ScrollView>
        </>
      ) : (
        <ReserveTicket item={currentData} type={activeTab} setError={setError} />
      )}
    </View>
  );
};
