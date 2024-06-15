import { useEffect, useState } from "react";
import { Checkbox, Radio, Text, useDisclose, View } from "native-base";

import { LandingLayout } from "@/src/layouts";
import { BaseInput } from "../../bases/inputs";
import { Formik } from "formik";
import { Iconify } from "react-native-iconify";
import axios from "axios";
import { CitiesActionSheet } from "./components/actionSheet";
import { PassengersSheet } from "./components/passengersSheet";
import BaseButton from "../../bases/BaseButton";
import { SearchPage } from "./components/searchPage";

export const UserTicket = () => {
  const [value, setValue] = useState("one");
  const { isOpen, onOpen, onClose } = useDisclose();
  const { isOpen: passOpen, onOpen: passOnOpen, onClose: PassOnClose } = useDisclose();
  const [passengers, setPassengers] = useState({
    adult: 0,
    teen: 0,
    kid: 0,
  });
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<string[]>([]);
  const [showSearchPage, setShowSearchPage] = useState(false);

  const getCities = () => {
    setLoading(true);
    axios.get(`https://travelorganization.monster/api/Admin/Helper/GetCities`).then((json) => {
      if (json.data.isSuccess) {
        setLoading(false);
        setCities(json.data.data);
      }
    });
  };
  useEffect(() => {
    getCities();
  }, []);

  return (
    <>
      {!showSearchPage ? (
        <LandingLayout>
          <View bg={"#D9DCD6"} height="32" />
          <View
            width="5/6"
            height="457px"
            bg="#fff"
            zIndex={3}
            style={{
              marginTop: -50,
              borderRadius: 10,
              marginHorizontal: "auto",
              padding: 8,
            }}
          >
            <Text
              textAlign="right"
              style={{
                fontSize: 22,
                lineHeight: 32,
                fontWeight: "500",
              }}
            >
              بلیط
            </Text>
            <View>
              <Radio.Group
                name=""
                accessibilityLabel=""
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  gap: 8,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <Radio value="one" my={1} />
                  <Text>یک طرفه</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <Radio value="two" my={1} />
                  <Text>رفت و برگشت</Text>
                </View>
              </Radio.Group>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 8,
                  marginTop: 24,
                }}
              >
                <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
                <Text>پرواز لحظه آخری</Text>
              </View>
              <Formik
                initialValues={{
                  dis: "",
                  name: "",
                }}
                onSubmit={(e) => console.log(e)}
              >
                {({ values }) => (
                  <>
                    <View
                      style={{
                        borderWidth: 1,
                        borderBlockColor: "#6C757D",
                        borderRadius: 10,
                        paddingHorizontal: 8,
                        marginTop: 24,
                      }}
                    >
                      <View onTouchEnd={onOpen} my={3} width="full">
                        <Text textAlign="right">مبدا</Text>
                      </View>
                      <View width="full" height="0.5" bg="#6C757D" />
                      <Iconify
                        icon="lets-icons:sort-arrow"
                        size={30}
                        color="#6C757DCC"
                        style={{
                          backgroundColor: "#fff",
                          position: "absolute",
                          top: 24,
                          left: 8,
                        }}
                      />
                      <View onTouchEnd={onOpen} my={3} width="full">
                        <Text textAlign="right">مبدا</Text>
                      </View>
                      <CitiesActionSheet isOpen={isOpen} onClose={onClose} data={cities} />
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 24,
                      }}
                    >
                      <View
                        width="2/5"
                        style={{
                          borderWidth: 1,
                          borderBlockColor: "#6C757D",
                          borderRadius: 10,
                        }}
                      >
                        <BaseInput
                          name="name"
                          placeholder="تاریخ رفت"
                          type="text"
                          value={values.name}
                        />
                      </View>
                      <View
                        width="2/5"
                        style={{
                          borderWidth: 1,
                          borderBlockColor: "#6C757D",
                          borderRadius: 10,
                        }}
                      >
                        <BaseInput
                          name="name"
                          placeholder="تاریخ رفت"
                          type="text"
                          value={values.name}
                        />
                      </View>
                    </View>
                    <View
                      onTouchEnd={passOnOpen}
                      mt="6"
                      borderWidth={1}
                      borderColor="#6C757D"
                      p={"2.5"}
                      style={{
                        borderRadius: 10,
                      }}
                    >
                      <Text textAlign="right">
                        {passengers.adult || passengers.kid || passengers.teen
                          ? (passengers.adult
                              ? passengers.adult +
                                "بزرگسال" +
                                (passengers.teen || passengers.kid ? "," : "")
                              : "") +
                            (passengers.teen
                              ? passengers.teen + "خردسال" + (passengers.kid ? "," : "")
                              : "") +
                            (passengers.kid ? passengers.kid + "نوزاد" : "")
                          : " مسافرین"}
                      </Text>
                      <PassengersSheet
                        isOpen={passOpen}
                        onClose={PassOnClose}
                        passengers={passengers}
                        setPassengers={setPassengers}
                      />
                    </View>
                    <View mt="6">
                      <BaseButton
                        label="جست‌وجو"
                        pressHandler={() => {
                          setShowSearchPage(true);
                        }}
                        outlined
                      />
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </LandingLayout>
      ) : (
        <SearchPage setShowSearchPage={setShowSearchPage} />
      )}
    </>
  );
};
