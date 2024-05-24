import { Text, View } from "native-base";
import { ReactNode } from "react";
import { Iconify } from "react-native-iconify";

interface TourDetailsBoxProps {
  title: string;
  data: { id: number; title: string; icon: ReactNode }[];
}

export default function TourDetailsBox({ title, data }: TourDetailsBoxProps) {
  return (
    <View backgroundColor="#fff" shadow="3" padding="15px" borderRadius="10px" style={{ gap: 10 }}>
      <View flexDirection="row-reverse">
        <Text
          fontSize="18px"
          display="inline"
          color="#2F6690"
          borderBottomWidth="1px"
          borderBottomColor="#aaa"
          pb="8px"
          pl="10px"
          style={{ fontWeight: 700 }}
        >
          {title}
        </Text>
        <Iconify
          icon="ph:diamond-fill"
          size={10}
          color="#aaa"
          style={{ position: "absolute", bottom: -4.5, right: -5 }}
        />
      </View>
      <View style={{ gap: 10 }}>
        {data.map((item) => (
          <View key={item.id} flexDirection="row-reverse" alignItems="center" style={{ gap: 5 }}>
            {item.icon}
            <Text color="#333" fontSize="14px">
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
