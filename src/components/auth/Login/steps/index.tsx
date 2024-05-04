import { BaseInput } from "@/components/atoms/Input";

const Email = () => {
  return <BaseInput placeholder="Email" type="text" />;
};
const Password = () => {
  return <BaseInput placeholder="Password" type="password" />;
};

export const steps = [
  {
    title: "ورود",
    children: <Email />,
  },
  {
    title: "رمزعبور را وارد کنید",
    children: <Password />,
  },
];
