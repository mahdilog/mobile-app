import { Actionsheet, Text, View } from "native-base";
import { Login } from "./Login";

export const Auth = ({ isOpen, onClose }: any) => {
  return (
    <View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content h={450}>
          <View w="full">
            <Login />
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};
