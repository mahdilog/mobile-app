import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useSharedValue,
  Extrapolation,
  useAnimatedStyle,
} from "react-native-reanimated";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

interface itemProps {
  index: number;
  scrollX: number;
  image: ImageSourcePropType;
  title: string;
}

function Item({ index, scrollX, title, image }: itemProps) {
  const size = useSharedValue(0.8);
  const inputRange = [(index - 1) * CARD_LENGTH, index * CARD_LENGTH, (index + 1) * CARD_LENGTH];

  size.value = interpolate(scrollX, inputRange, [0.8, 1, 0.8], Extrapolation.CLAMP);

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginLeft: index === 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index === 3 ? SIDECARD_LENGTH : SPACING,
          height: 150,
          opacity: 1,
          transform: [{ scaleY: 1 }],
        },
      ]}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "#000"]}
        style={styles.background}
      />
      <ImageBackground source={image} style={{ width: "100%", height: "100%" }}>
        <Text
          style={{
            transform: [{ scaleX: -1 }],
            marginTop: 110,
            marginLeft: 15,
            color: "#fff",
            zIndex: 100,
          }}
        >
          {title}
        </Text>
      </ImageBackground>
    </Animated.View>
  );
}

export default function Carousel() {
  const [scrollx, setScrollx] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    let listOffset = scrollx;
    const timeout = setTimeout(() => {
      if (listOffset + 100 < (CARD_LENGTH + SPACING * 1.6) * 2) {
        listOffset = scrollx;
        listOffset += CARD_LENGTH + SPACING * 1.6;
      } else {
        listOffset = 0;
      }
      ref.current?.scrollToOffset({ offset: listOffset, animated: true });
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [scrollx]);

  const DATA = [
    {
      id: "1",
      title: "پل خواجو - اصفهان",
      image: require("@/src/assets/images/landing/Khaju-Bridge-01.jpg"),
    },
    {
      id: "2",
      title: "موزه نصیر الملک - شیراز",
      image: require("@/src/assets/images/landing/nasi-almulk.jpg"),
    },
    {
      id: "3",
      title: "موزه امیر چخماق - یزد",
      image: require("@/src/assets/images/landing/yazd.jpg"),
    },
    {
      id: "4",
      title: "موزه فاجار - تبریز",
      image: require("@/src/assets/images/landing/AmirNezam.jpg"),
    },
  ];

  return (
    <Animated.View style={[{ transform: [{ scaleX: -1 }] }]}>
      <Animated.FlatList
        ref={ref}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 1.6}
        disableIntervalMomentum
        disableScrollViewPanResponder
        contentContainerStyle={{ alignItems: "center" }}
        data={DATA}
        horizontal
        renderItem={({ item, index }) => {
          return <Item index={index} title={item.title} image={item.image} scrollX={scrollx} />;
        }}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          setScrollx(event.nativeEvent.contentOffset.x);
          setCurrentIndex(+(scrollx / CARD_LENGTH).toFixed(0));
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 15,
          right: 60,
        }}
      >
        {DATA.map((item, index) => (
          <View
            key={index}
            style={
              currentIndex == index
                ? {
                    width: 20,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "white",
                    marginLeft: 5,
                  }
                : {
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "grey",
                    marginLeft: 5,
                  }
            }
          ></View>
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 150,
    overflow: "hidden",
    borderRadius: 15,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 90,
    zIndex: 1,
  },
});
