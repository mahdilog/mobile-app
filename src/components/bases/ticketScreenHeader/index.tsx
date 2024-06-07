import { router } from "expo-router";
import { CheckIcon, Input, Pressable, Select, Text, View } from "native-base";
import React, { ReactNode, useState } from "react";
import { Iconify } from "react-native-iconify";
import SearchInput from "../searchInput";

function TicketHeaderItem({
  show,
  setIsShow,
  name,
  icon,
  component,
  color,
}: {
  show: string;
  setIsShow: any;
  name: string;
  icon: ReactNode;
  component: ReactNode;
  color: string;
}) {
  if (show === name) {
    return <View style={{ flex: 1 }}>{component}</View>;
  } else {
    return (
      <Pressable
        borderColor={color}
        borderWidth="1px"
        padding="5px"
        borderRadius="50px"
        onPress={() => setIsShow(name)}
      >
        {icon}
      </Pressable>
    );
  }
}

export default function TicketScreenHeader({
  service,
  setService,
  search,
  setSearch,
  submitSearch,
}: {
  service: string;
  setService: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  submitSearch: () => void;
}) {
  const [show, setShow] = useState("select");

  const SelectOption = (
    <Select
      selectedValue={service}
      variant="unstyled"
      borderColor="#6C757D"
      borderWidth="0.5px"
      borderRadius="8px"
      color="#6C757D"
      _selectedItem={{
        bg: "#eee",
        borderRadius: 8,
      }}
      onValueChange={(itemValue) => setService(itemValue)}
      _item={{ flexDir: "row-reverse" }}
    >
      <Select.Item label="همه" value="any" />
      <Select.Item label="هواپیما" value="airplane" />
      <Select.Item label="قطار" value="train" />
      <Select.Item label="اتوبوس" value="bus" />
    </Select>
  );

  return (
    <View flexDirection="row-reverse" alignItems="center" style={{ gap: 10 }}>
      <TicketHeaderItem
        show={show}
        setIsShow={setShow}
        name="select"
        icon={<Iconify icon="heroicons:ticket-solid" size={25} color="#6C757D" />}
        component={SelectOption}
        color="#6C757D"
      />
      <TicketHeaderItem
        show={show}
        setIsShow={setShow}
        name="search"
        icon={<Iconify icon="ic:baseline-search" size={25} color="#3282B8" />}
        color="#3282B8"
        component={
          <SearchInput search={search} setSearch={setSearch} submitSearch={submitSearch} />
        }
      />
      <Pressable
        borderColor="#00A693"
        borderWidth="1px"
        padding="5px"
        borderRadius="50px"
        onPress={() => router.push("/tickets/addTicket")}
      >
        <Iconify icon="ic:baseline-plus" size={25} color="#00A693" />
      </Pressable>
    </View>
  );
}
