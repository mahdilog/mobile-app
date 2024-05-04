import { IInputProps, Input } from "native-base";

export const BaseInput = (props: IInputProps) => {
  return (
    <Input
      {...props}
      variant="underlined"
      placeholderTextColor="#949494"
      borderColor="red.100"
      focusOutlineColor="#3A7CA5"
      style={{
        direction: "rtl",
        fontFamily: "iranSans",
      }}
    />
  );
};
