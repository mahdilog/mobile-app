import { Button } from "native-base";
import React from "react";

export default function BaseButton({
  label,
  pressHandler,
  outlined,
}: {
  label: string;
  pressHandler: () => void;
  outlined?: boolean;
}) {
  return (
    <Button
      variant="unstyled"
      // borderWidth="1px"
      backgroundColor={outlined ? "#fff" : "#2F6690"}
      borderRadius={outlined ? "25px" : "8px"}
      borderColor={!outlined ? "#fff" : "#2F6690"}
      borderWidth={2}
      _text={{ color: !outlined ? "#fff" : "#2F6690" }}
      // startIcon={<Iconify icon="ic:sharp-plus" size={25} color="#2F6690" />}
      onPress={pressHandler}
    >
      {label}
    </Button>
  );
}
