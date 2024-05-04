import { ReactElement } from "react";

export type TStepByStepProps = {
  steps: {
    children: ReactElement;
    title: string;
    helperText: ReactElement | string;
  }[];
  secondaryTitle: string;
  initialValues: {
    [key: string]: unknown;
  };
  submitHandler: () => void;
};
