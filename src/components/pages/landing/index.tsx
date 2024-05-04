import { LandingLayout } from "@/src/layouts";
import { Footer } from "../../bases/navigation";
import { ScrollView, Text, View } from "native-base";
import { str } from "@/src/constants/strings";
import { Card } from "../../bases/card";

export const LandingPage = () => {
  return (
    <View h="full" w="full">
      <LandingLayout>
        <View>
          <Text>Slider Should Implement Here</Text>
        </View>
        <View>
          <Text textAlign="right" height="146px">
            {str.attractions}
          </Text>
          <Text>Slider Should Implement Here</Text>
        </View>
        <View>
          <Text textAlign="right" fontSize="22px">
            {str.suggestions + " " + str.nova + " " + str.travel}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
