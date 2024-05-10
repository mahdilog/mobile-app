import { LandingLayout } from "@/src/layouts";
import { Footer } from "../../bases/navigation";
import { ScrollView, Text, View } from "native-base";
import { str } from "@/src/constants/strings";
import { Card } from "../../bases/card";

export const LandingPage = () => {
  return (
    <View h="full" w="full">
      <LandingLayout>
        <View
          style={{
            marginTop: -120,
            zIndex: 100,
          }}
          mb={10}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              transform: [{ scaleX: -1 }],
            }}
          >
            <Card variant="suggest"></Card>
            <Card variant="suggest"></Card>
            <Card variant="suggest"></Card>
          </ScrollView>
        </View>
        <View>
          <Text textAlign="right" fontSize="22px">
            {str.attractions}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              transform: [{ scaleX: -1 }],
            }}
            mb={10}
          >
            <Card variant="suggest"></Card>
            <Card variant="suggest"></Card>
            <Card variant="suggest"></Card>
          </ScrollView>
        </View>
        <View>
          <Text textAlign="right" fontSize="22px">
            {str.suggestions + " " + str.nova + " " + str.travel}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              transform: [{ scaleX: -1 }],
            }}
            mb={10}
          >
            <Card variant="suggest"></Card>
            <Card variant="suggest"></Card>
            <Card variant="suggest"></Card>
          </ScrollView>
          <View>
            <Card variant="option"></Card>
            <Card variant="option"></Card>
            <Card variant="option"></Card>
          </View>
        </View>
      </LandingLayout>
    </View>
  );
};
