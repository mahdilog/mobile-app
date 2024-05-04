import { StepByStep } from "@/components/organisms/StepByStep";
import { steps } from "./constant";

export const Login = () => {
  return (
    <StepByStep
      initialValues={steps.initialValues}
      steps={steps.steps}
      submitHandler={steps.submitHandler}
    />
  );
};
