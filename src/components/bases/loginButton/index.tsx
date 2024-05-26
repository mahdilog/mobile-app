import { Button } from "native-base";
import React from "react";

export default function LoginButton({
  value,
  clickHandler,
  isLoading = false,
}: {
  value: string;
  clickHandler: () => void;
  isLoading?: boolean;
}) {
  return (
    <Button
      variant="unstyled"
      borderWidth="1.5px"
      borderColor="#2F6690"
      _text={{ color: "#2F6690" }}
      width="100px"
      isLoading={isLoading}
      onPress={clickHandler}
    >
      {value}
    </Button>
  );
}
