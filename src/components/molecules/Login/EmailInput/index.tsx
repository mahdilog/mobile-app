import { BaseInput } from '@/src/components/atoms/Input';
import { str } from '@/src/constants/strings';
import { useFormikContext } from 'formik';
import { View } from 'native-base';

export const EmailInput = () => {
  const formik = useFormikContext();
  return (
    <View>
      <BaseInput placeholder={str.email} onChangeText={formik.handleChange('email')} />
    </View>
  );
};
