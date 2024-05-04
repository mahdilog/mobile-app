import { theme } from '@/src/constants/Colors';
import { IInputProps, Input } from 'native-base';

export const BaseInput = (props: IInputProps) => {
  return <Input {...props} placeholderTextColor={theme.grey[300]} />;
};
