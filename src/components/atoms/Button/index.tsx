import { Button, IButtonProps } from "native-base";

export const BaseButton = (props: IButtonProps) => {
  return (
    <Button
      {...props}
      variant="outline"
      borderColor="primary.400"
      color="primary.400"
    />
  );
};
