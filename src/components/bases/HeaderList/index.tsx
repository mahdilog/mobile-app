import { Pressable, Text, View } from "native-base";
import React from "react";
import SearchInput, { SearchInputProps } from "../searchInput";
import { Iconify } from "react-native-iconify";

interface HeaderListProps extends SearchInputProps {
  addHandler: () => void;
}

export default function HeaderList(props: HeaderListProps) {
  const { addHandler, ...rest } = props;

  return (
    <View flexDirection="row-reverse" alignItems="center" mb="15px" style={{ gap: 8 }}>
      <View style={{ flex: 1 }}>
        <SearchInput {...rest} />
      </View>
      <Pressable
        flexDirection="row-reverse"
        borderColor="#3282B8"
        borderWidth="1px"
        borderRadius="8px"
        height="full"
        alignItems="center"
        justifyContent="center"
        width="80px"
        onPress={addHandler}
      >
        <Iconify icon="ic:baseline-plus" size={20} color="#3282B8" />
        <Text color="#3282B8">افزودن</Text>
      </Pressable>
    </View>
  );
}
