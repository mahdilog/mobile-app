import { Heading, Pressable, Text, View } from "native-base";
import React from "react";
import { DataTicketType } from "../../pages/TicketsScreen";
import { Iconify } from "react-native-iconify";

function TicketDivider() {
  return (
    <View flexDirection="row-reverse" alignItems="center">
      <Iconify
        icon="material-symbols-light:circle"
        size={10}
        color="#2F6690"
        style={{ marginLeft: -3 }}
      />
      <View width="60px" height="1px" backgroundColor="#2F6690" />
      <Iconify
        icon="material-symbols-light:circle"
        size={10}
        color="#2F6690"
        style={{ marginRight: -3 }}
      />
    </View>
  );
}

export default function AdminTicketCard(props: DataTicketType) {
  const { agencyName, departureDate, departureTime, destination, origin } = props;
  return (
    <Pressable
      backgroundColor="#fff"
      shadow="2"
      padding="10px"
      borderRadius="10px"
      style={{ gap: 15 }}
    >
      <Text fontSize="20px" color="#2F6690">
        {agencyName}
      </Text>
      <View flexDirection="row-reverse" alignItems="center" justifyContent="space-between">
        <View flexDirection="row-reverse" alignItems="center" style={{ gap: 5 }}>
          <Text color="#000" fontSize="16px">
            {origin}
          </Text>
          <TicketDivider />
          <Text color="#000" fontSize="16px">
            {destination}
          </Text>
        </View>
        <Text fontSize="14px">{departureTime + " ، " + departureDate}</Text>
      </View>
    </Pressable>
  );
}
