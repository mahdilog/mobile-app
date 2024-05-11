import { LoginPage } from "@/src/components/pages/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        router.navigate("/");
      }
    })();
  }, []);

  return <LoginPage />;
};

export default Login;
