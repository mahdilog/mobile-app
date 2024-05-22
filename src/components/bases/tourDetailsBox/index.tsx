import { Box, Text } from "native-base";

export default function TourDetailsBox({ title }: { title: string }) {
  return (
    <Box>
      <Text>{title}</Text>
    </Box>
  );
}
