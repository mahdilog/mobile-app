import { useEffect, useState } from "react";
import { Button, Text, View } from "native-base";
import { Iconify } from "react-native-iconify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";

export const ReserveTicket = ({
  item,
  setError,
  type,
}: {
  item: any;
  setError: any;
  type: string;
}) => {
  const [userDetails, setUserDetails] = useState<any>();
  const [token, setToken] = useState("");
  const [infoError, setInfoError] = useState("");
  const router = useRouter();
  const userInfo = [
    {
      label: "نام:",
      key: "name",
    },
    {
      label: "نام خانوادگی:",
      key: "lastName",
    },
    {
      label: "کد ملی:",
      key: "nationalID",
    },
    {
      label: "تاریخ تولد:",
      key: "birthDate",
    },
    {
      label: "شماره تلفن:",
      key: "phoneNo",
    },
    {
      label: "ایمیل:",
      key: "email",
    },
  ];

  async function fetchToken() {
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      axios
        .get("https://travelorganization.monster/api/Common/Common/GetUserDetail", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((json) => {
          if (json.data.isSuccess) {
            setUserDetails(json.data.data);
          }
        });
    } else {
      setInfoError("برای ادامه فرایند خرید لطفا وارد شوید.");
    }
  }

  useEffect(() => {
    fetchToken();
  }, []);

  const getInfoError = () => {
    const values = userDetails ? Object.values(userDetails).filter((detail) => !detail) : [];
    if (values?.length) {
      setInfoError("لطفا اطلاعات خود را در بخش پروفایل کامل کنید.");
    }
  };

  useEffect(() => {
    getInfoError();
  }, [userDetails]);

  const submitHandler = () => {
    const data = [
      {
        sex: "man",
        nationalId: userDetails.nationalID,
        persianName: userDetails.name,
        persianFamilyName: userDetails.lastName,
        isForMe: true,
        name: userDetails.name,
        family: userDetails.lastName,
        birthDate: userDetails.birthDate,
      },
    ];

    axios({
      url: `https://travelorganization.monster/api/Common/Landing/Reserve${type.slice(0, 1).toUpperCase() + type.slice(1)}Ticket?ticketid=${item.ticketId}`,
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then(() => router.navigate("/"))
      .catch((error) => {
        setInfoError("مشکلی پیش آمده لطفا چند دقیقه دیگر مجددا تلاش کنید.");
      });
  };

  return (
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
        onTouchEnd={() => setError(false)}
      >
        <Iconify icon="ep:arrow-left-bold" size={24} color="#2F6690" />
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
          paddingHorizontal: 24,
          paddingTop: 32,
        }}
      >
        <View
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
                {item?.agencyName}
              </Text>
            </View>
            <Text>{item?.capacity} صندلی باقی مانده</Text>
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
            <Text>{item?.deaprtureTime}</Text>
            <Text>{item?.departureDate}</Text>
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
            <Text>{item?.returnTime}</Text>
            <Text>{item?.returnDate}</Text>
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
            <Text>{item?.price} ریال</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#6C757D",
            borderRadius: 10,
          }}
        >
          <Text
            textAlign="right"
            color="#3282B8"
            style={{
              position: "absolute",
              top: -10,
              backgroundColor: "#fff",
              right: 10,
            }}
          >
            مشخصات
          </Text>
          {userInfo?.map((info, index) => (
            <View
              key={info.key}
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: 8,
                borderBottomColor: "#6C757D",
                borderBottomWidth: index === userInfo.length - 1 ? 0 : 1,
                paddingHorizontal: 16,
                paddingVertical: 10,
              }}
            >
              <Text textAlign="right">{info.label}</Text>

              <Text textAlign="right">{userDetails?.[info.key] ?? "-"}</Text>
            </View>
          ))}
        </View>
        {infoError && (
          <View mt={2}>
            <Text textAlign={"right"} fontSize="xs" color="red.500">
              {infoError}
            </Text>
          </View>
        )}
        <Button
          variant="outline"
          style={{
            marginTop: 36,
            borderRadius: 10,
          }}
          disabled={!!infoError || !token}
          onPress={() => {
            token ? submitHandler() : router.navigate("/login");
          }}
        >
          خرید بلیط
        </Button>
      </View>
    </>
  );
};
