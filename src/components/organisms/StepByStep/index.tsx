import { Box, Text, View } from "native-base";
import { useState } from "react";
import { TStepByStepProps } from "./type";
import { BaseButton } from "@/components/atoms/Button";
import { Formik, FormikProvider } from "formik";

export const StepByStep = ({
  steps,
  initialValues,
  submitHandler,
  secondaryTitle,
}: TStepByStepProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={(e) => console.log(e)}>
        {({ handleSubmit, values }) => (
          <View bg="white" padding="24px">
            {steps.map(
              ({ children, title, helperText }, i) =>
                i + 1 === currentStep && (
                  <View>
                    <Text>{i === 0 ? title : secondaryTitle}</Text>
                    <View>{children}</View>
                    <Text>{helperText}</Text>
                  </View>
                )
            )}
            <Box w="1/2" flexWrap="nowrap" flexDirection="row">
              <BaseButton
                onTouchEnd={() =>
                  currentStep === steps.length
                    ? handleSubmit()
                    : setCurrentStep(currentStep + 1)
                }
                w="1/2"
                m={4}
              >
                بعدی
              </BaseButton>
              <BaseButton
                onTouchEnd={() =>
                  setCurrentStep(currentStep > 1 ? currentStep - 1 : 1)
                }
                w="1/2"
                m={4}
              >
                بازگشت
              </BaseButton>
            </Box>
          </View>
        )}
      </Formik>
    </View>
  );
};
