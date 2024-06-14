import { Button } from "native-base";
import React from "react";

export default function BaseButton({
  label,
  pressHandler,
}: {
  label: string;
  pressHandler: () => void;
}) {
  return (
    <Button
      variant="unstyled"
      // borderWidth="1px"
      backgroundColor="#2F6690"
      borderRadius="8px"
      _text={{ color: "#fff" }}
      // startIcon={<Iconify icon="ic:sharp-plus" size={25} color="#2F6690" />}
      onPress={pressHandler}
    >
      {label}
    </Button>
  );
}
