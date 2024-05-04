import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { extendTheme, NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "@/src/redux/store";
import { routes } from "../src/constants/routes";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    iransans: require("../assets/fonts/iransans.ttf"),
    niconne: require("../assets/fonts/Niconne-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const theme = extendTheme({
  fontConfig: {
    iranSans: {
      100: {
        normal: "iransans",
        bold: "iransans",
      },
      200: {
        normal: "iransans",
        bold: "iransans",
      },
      300: {
        normal: "iransans",
        bold: "iransans",
      },
      400: {
        normal: "iransans",
        bold: "iransans",
      },
      500: {
        normal: "iransans",
        bold: "iransans",
      },
      600: {
        normal: "iransans",
        bold: "iransans",
      },
      700: {
        normal: "iransans",
        bold: "iransans",
      },
      800: {
        normal: "iransans",
        bold: "iransans",
      },
      900: {
        normal: "iransans",
        bold: "iransans",
      },
    },
  },
  fonts: {
    heading: "iranSans",
    body: "iranSans",
    mono: "iranSans",
  },
});

function RootLayoutNav() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Stack>
          {routes.map((route) => (
            <Stack.Screen
              name={route}
              options={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: "#fff",
                },
              }}
            />
          ))}
        </Stack>
      </NativeBaseProvider>
    </Provider>
  );
}
