import { LandingPage } from "@/src/components/pages/landing";

const App = () => {
  // const [showTut, setShowTut] = useState(true);
  // const getTutorialStatus = async () => {
  //   const getStorage = await AsyncStorage.getItem("guided");
  //   console.log(getStorage);
  //   setShowTut(getStorage && getStorage !== "show" ? false : true);
  // };
  // useEffect(() => {
  //   getTutorialStatus();
  // });
  // if (showTut) {
  //   return <Tutorial />;
  // } else {
  return <LandingPage />;
  // }
};

export default App;
