import { Actionsheet, ScrollView } from "native-base";

export const CitiesActionSheet = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: any;
  onClose: any;
  data: string[];
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <ScrollView width="full">
          {data.map((item, index) => (
            <Actionsheet.Item
              key={index}
              style={{
                width: "100%",
              }}
            >
              {item}
            </Actionsheet.Item>
          ))}
        </ScrollView>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
