import { ImageSourcePropType } from "react-native";

export interface Suggestion {
  id: number;
  image: ImageSourcePropType;
  title: string;
  descrption: string;
  off: string;
}
