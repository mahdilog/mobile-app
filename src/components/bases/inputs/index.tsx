import { theme } from "@/src/constants/Colors";
import { FormikTouched, useFormikContext } from "formik";
import { Input, Text, View } from "native-base";
import { InputModeOptions } from "react-native";

interface BaseInputProps {
  placeholder: string;
  value: string;
  name: string;
  type: "text" | "password";
  inputMode?: InputModeOptions;
  readOnly?: boolean;
}

export const BaseInput = (props: BaseInputProps) => {
  const { placeholder, value, name, type, inputMode = "text", readOnly = false } = props;
  const { handleChange, handleBlur, errors, touched } = useFormikContext();

  const invalidInput =
    errors[name as keyof FormikTouched<unknown>] && touched[name as keyof FormikTouched<unknown>];

  return (
    <View>
      <Input
        variant="underlined"
        value={value}
        placeholder={placeholder}
        onChangeText={handleChange(name)}
        secureTextEntry={false}
        onBlur={handleBlur(name)}
        readOnly={readOnly}
        placeholderTextColor={theme.grey[300]}
        inputMode={inputMode}
        isInvalid={invalidInput}
        size="lg"
        textAlign="right"
        _focus={{ borderColor: "#777" }}
        _invalid={{ borderColor: "red.500" }}
      />
      {invalidInput && (
        <Text color="red.500" textAlign="right">
          {errors[name as keyof FormikTouched<unknown>]}
        </Text>
      )}
    </View>
  );
};
