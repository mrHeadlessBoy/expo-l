import { View, Text, Image, Button, Alert } from "react-native";
import Kon from "./components/Kon";
//import from file
import { myStyle } from "./styles/myStyle";

export default function App() {

  return (
    <View style={myStyle.container}>
      <Kon name={"Jo"} age={20} />
      <Kon name={"Jonathan"} age={21}/>
      <Kon name={"Jane"} age={18}/>
      <Kon name={"Jolyne"} age={18}/>
    </View>
  );
}
