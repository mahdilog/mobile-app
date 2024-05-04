import { Box, Button, Text, View } from "native-base";
import { steps } from "./steps";
import { useState } from "react";

export const Login = () => {
  const [visible, setVisible] = useState(1);
  return (
    <View w="full">
      {steps.map(
        (item, index) =>
          visible === index + 1 && (
            <View key={index} w="full">
              <View>
                <Text fontWeight="extrabold" fontSize="22px" fontFamily="body">
                  {item.title}
                </Text>
              </View>
              <View>{item.children}</View>
            </View>
          )
      )}
      <Box
        w="1/2"
        flexDirection="row"
        mt={10}
        style={{
          gap: 4,
        }}
      >
        <Button
          onPress={() =>
            setVisible(visible + 1 > steps.length ? visible : visible + 1)
          }
          w="1/2"
          variant="outline"
        >
          ادامه
        </Button>
        {visible !== 1 && (
          <Button
            onPress={() => setVisible(visible - 1 > 0 ? visible - 1 : visible)}
            w="1/2"
            variant="outline"
          >
            بازگشت
          </Button>
        )}
      </Box>
    </View>
  );
};
