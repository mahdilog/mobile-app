import { BaseInput } from "@/components/atoms/Input";
import { str } from "@/constants/strings";
import { useFormikContext } from "formik";
import { View } from "native-base";

export const PasswordInput = () => {
  const formik = useFormikContext();
  return (
    <View>
      <BaseInput
        placeholder={str.password}
        onChangeText={formik.handleChange("email")}
      />
    </View>
  );
};
