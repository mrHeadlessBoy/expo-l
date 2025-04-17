import { View, Text, Image, Button, Alert } from "react-native";
import { useState } from "react";
//import from file
import { myStyle } from "./styles/myStyle";

const logo = require("./assets/boob.jpg");

export default function App() {
  const [dev, setDev] = useState({name:"Apo",year:2020})

  return (
    <View style={myStyle.container}>
      <Image 
      source={logo} 
      style={myStyle.image}></Image>
      <Image
        source={{ uri: "https://picsum.photos/id/20/367/267" }}
        style={myStyle.image}
      ></Image>
      <Text style={myStyle.header}>hi girls</Text>
      <Text style={myStyle.content}>hey me: {dev.name} {dev.year} </Text>
      <Button title="updated" color="red" onPress={()=>
        setDev({name:"Nattarisa", year:2025})
      } 
      ></Button>
    </View>
  );
}
