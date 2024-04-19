import { ReactNode } from "react";
import { Platform, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { usePathname, useRouter } from "expo-router";
import { headerIcons, navigator } from "./constants";

export const RootContainer = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  Platform.OS === "ios";
  return (
    <View
      className={`${
        Platform.OS === "ios" ? "pb-6 px-6 pt-12 " : "p-6"
      } bg-primary h-screen w-screen`}
    >
      <View className="flex justify-between items-center flex-row w-full  mb-4">
        {headerIcons.map((item, index) => (
          <View
            key={index}
            className="w-11 h-11 bg-white flex justify-center items-center shadow-sm shadow-gray-400 rounded-full"
          >
            <Ionicons name={item.icon} color={item.color} size={item.size} />
          </View>
        ))}
      </View>
      <View>{children}</View>
      <View className="absolute bg-slate-50 h-24 w-screen bottom-0 rounded-3xl p-6 flex justify-between items-center flex-row z-50">
        {navigator.map((item, index) => (
          <View key={index} onTouchEnd={() => router.navigate(item.route)}>
            <Ionicons
              name={
                pathname === item.route
                  ? item.icon.active.iconName
                  : item.icon.default.iconName
              }
              size={24}
              color={
                pathname === item.route
                  ? item.icon.active.color
                  : item.icon.default.color
              }
            />
          </View>
        ))}
      </View>
    </View>
  );
};
