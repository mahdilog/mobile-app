import { EmailInput } from '@/src/components/molecules/Login/EmailInput';
import { PasswordInput } from '@/src/components/molecules/Login/PasswordInput';
import { str } from '@/src/constants/strings';

export const steps = {
  steps: [
    {
      children: <EmailInput />,
      title: str.login,
      helperText: 'asdf',
    },
    {
      children: <PasswordInput />,
      title: str.login,
      helperText: 'asdf',
    },
  ],
  initialValues: {
    email: '',
    password: '',
  },
  secondaryTitle: '45',
  submitHandler: () => console.log('123'),
};
