import { Pressable, Text, View } from "native-base";
import React, { useState } from "react";
import { Iconify } from "react-native-iconify";

export default function FAQItem(props: { title: string; description: string }) {
  const { title, description } = props;
  const [isShown, setIsShown] = useState(false);

  const pressHandler = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <Pressable
      onPress={pressHandler}
      pb="15px"
      mt="15px"
      borderBottomColor="#6c757d51"
      borderBottomWidth={1}
      style={{ gap: 15 }}
    >
      <View flexDir="row-reverse" justifyContent="space-between">
        <Text fontSize="18px" color="#2F6690">
          {title}
        </Text>
        {isShown ? (
          <Iconify icon="ep:arrow-down" size={20} color="#6c757d51" />
        ) : (
          <Iconify icon="ep:arrow-left" size={20} color="#6c757d51" />
        )}
      </View>
      {isShown && (
        <Text fontSize="16px" color="#000">
          <Text color="#2F6690">
            پاسخ:{" "}
          </Text>
          {description}
        </Text>
      )}
    </Pressable>
  );
}
