import { Input, Pressable } from "native-base";
import React from "react";
import { Iconify } from "react-native-iconify";

export interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  submitSearch: () => void;
}

export default function SearchInput({ search, setSearch, submitSearch }: SearchInputProps) {
  return (
    <Input
      variant="unstyled"
      InputLeftElement={
        search ? (
          <Pressable onPress={() => setSearch("")}>
            <Iconify icon="charm:cross" size={25} color="#3282B8" />
          </Pressable>
        ) : (
          <Iconify icon="ic:baseline-search" size={25} color="#3282B8" />
        )
      }
      textAlign="right"
      placeholder="جست و جو"
      borderColor="#3282B8"
      borderWidth="1px"
      borderRadius="8px"
      // autoFocus
      inputMode="search"
      enterKeyHint="search"
      onChangeText={(newText) => setSearch(newText)}
      defaultValue={search}
      onSubmitEditing={submitSearch}
    />
  );
}
