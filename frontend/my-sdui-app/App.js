import "./global.css"; //import the TailWind styles
import { View, Text } from "react-native"; 
import Renderer from "./components/Renderer" // importing the Renderer component
import { SafeAreaView } from "react-native";

export default function App() {

  const layout = {
    type: "container",
    props: {
      style: "flex-1 justify-center items-centre space-y-4 bg-white",
    },
    children: [
      {
        type: "Text",
        props: {
          content: "Welcome to your personal economic liberator!👋",
          style: "text-xl font-bold text-blue-600",
        },
      },
      {
        type: "Text",
        props: {
          content: "This is a dynamic layout (SDUI) powered by the one and the only JSON!!!",
          style: "text-base text-gray-600",
        },
      },
    ],
  };
  return (
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-2xl font-bold text-blue-500">
    //     NativeWind is working properly!
    //   </Text>
    // </View>
    <SafeAreaView className = "flex-1 bg-white">
      <Renderer data ={layout} />
    </SafeAreaView>
  );
}