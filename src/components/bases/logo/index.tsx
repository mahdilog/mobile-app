import { Heading, View } from "native-base";
import React from "react";

export default function Logo() {
  return (
    <View flexDirection="row" justifyContent="center" alignItems="center">
      <Heading style={{ fontFamily: "niconne" }} color="#2F6690" fontSize="24px">
        NOVA
      </Heading>
      <Heading style={{ fontFamily: "niconne" }} color="#224763" fontSize="20px">
        safar
      </Heading>
    </View>
  );
}
