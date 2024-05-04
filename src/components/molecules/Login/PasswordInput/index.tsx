import { BaseInput } from '@/src/components/atoms/Input';
import { str } from '@/src/constants/strings';
import { useFormikContext } from 'formik';
import { View } from 'native-base';

export const PasswordInput = () => {
  const formik = useFormikContext();
  return (
    <View>
      <BaseInput placeholder={str.password} onChangeText={formik.handleChange('email')} />
    </View>
  );
};
