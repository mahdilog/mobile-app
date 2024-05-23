import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  Extrapolate,
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
  currentIndex: number;
}

function Item({ index, scrollX, currentIndex }: itemProps) {
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
          marginRight: index === 2 ? SIDECARD_LENGTH : SPACING,
          height: 150,
          opacity: 1,
          transform: [{ scaleY: 1 }],
        },
      ]}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "#3282B8CC"]}
        style={styles.background}
      />
      <Image
        source={require("@/src/assets/images/landing/azadi.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
}

export default function Carousel() {
  const [scrollx, setScrollx] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    let listOffset = scrollx;
    const intarval = setTimeout(() => {
      if (listOffset + 10 < (CARD_LENGTH + SPACING * 2.3) * 2) {
        listOffset = scrollx;
        listOffset += CARD_LENGTH + SPACING * 2.3;
      } else {
        listOffset = 0;
      }
      ref.current?.scrollToOffset({ offset: listOffset, animated: true });
    }, 5000);
    return () => {
      clearInterval(intarval);
    };
  }, [scrollx]);

  const DATA = [
    { id: "1", title: "one Item" },
    { id: "2", title: "two Item" },
    { id: "3", title: "three Item" },
  ];

  return (
    <Animated.View>
      <Animated.FlatList
        ref={ref}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 2.3}
        disableIntervalMomentum
        disableScrollViewPanResponder
        contentContainerStyle={{ alignItems: "center" }}
        data={DATA}
        horizontal
        renderItem={({ item, index }) => {
          return <Item index={index} scrollX={scrollx} currentIndex={currentIndex} />;
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
          left: 60,
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
    top: 0,
    height: 300,
    zIndex: 100,
  },
});
