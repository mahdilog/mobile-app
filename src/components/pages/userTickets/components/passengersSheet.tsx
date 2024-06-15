import { Actionsheet, Pressable, ScrollView, Text, View } from "native-base";

export const PassengersSheet = ({
  isOpen,
  onClose,
  setPassengers,
  passengers,
}: {
  isOpen: any;
  onClose: any;
  setPassengers: any;
  passengers: any;
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <ScrollView width="full" padding={1}>
          <View
            mb={3}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Text>بزرگسال</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: 4,
              }}
            >
              <Pressable
                borderColor="#6C757D"
                borderWidth="1"
                width="6"
                height="6"
                borderRadius="md"
                onPress={() =>
                  setPassengers({
                    ...passengers,
                    adult: passengers.adult + 1,
                  })
                }
              >
                <Text textAlign={"center"} mt={0.5}>
                  +
                </Text>
              </Pressable>
              <Text>{passengers.adult}</Text>
              <Pressable
                borderColor="#6C757D"
                borderWidth="1"
                width="6"
                height="6"
                borderRadius="md"
                onPress={() =>
                  setPassengers({
                    ...passengers,
                    adult: passengers.adult > 0 ? passengers.adult - 1 : 0,
                  })
                }
              >
                <Text textAlign={"center"} mt={0.5}>
                  -
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            mb={3}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Text>خردسال</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: 4,
              }}
            >
              <Pressable
                borderColor="#6C757D"
                borderWidth="1"
                width="6"
                height="6"
                borderRadius="md"
                onPress={() =>
                  setPassengers({
                    ...passengers,
                    teen: passengers.teen + 1,
                  })
                }
              >
                <Text textAlign={"center"} mt={0.5}>
                  +
                </Text>
              </Pressable>
              <Text>{passengers.teen}</Text>
              <Pressable
                borderColor="#6C757D"
                borderWidth="1"
                width="6"
                height="6"
                borderRadius="md"
                onPress={() =>
                  setPassengers({
                    ...passengers,
                    teen: passengers.teen > 0 ? passengers.teen - 1 : 0,
                  })
                }
              >
                <Text textAlign={"center"} mt={0.5}>
                  -
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            mb={3}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Text>نوزاد</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: 4,
              }}
            >
              <Pressable
                borderColor="#6C757D"
                borderWidth="1"
                width="6"
                height="6"
                borderRadius="md"
                onPress={() =>
                  setPassengers({
                    ...passengers,
                    kid: passengers.kid + 1,
                  })
                }
              >
                <Text textAlign={"center"} mt={0.5}>
                  +
                </Text>
              </Pressable>
              <Text>{passengers.kid}</Text>
              <Pressable
                borderColor="#6C757D"
                borderWidth="1"
                width="6"
                height="6"
                borderRadius="md"
                onPress={() =>
                  setPassengers({
                    ...passengers,
                    kid: passengers.kid > 0 ? passengers.kid - 1 : 0,
                  })
                }
              >
                <Text textAlign={"center"} mt={0.5}>
                  -
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
