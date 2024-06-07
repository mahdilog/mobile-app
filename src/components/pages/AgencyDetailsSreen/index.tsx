import { agencyDataType } from "@/app/agency/[id]";
import { Text, View } from "native-base";
import React from "react";

export default function AgencyDetailsSreen({ data }: { data: agencyDataType }) {
  return (
    <View>
      <Text>{data.agencyName}</Text>
    </View>
  );
}
