import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { myStyle } from "../styles/myStyle";

export default function AddForm({ insertData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  return (
    <View>
      <TextInput
        placeholder="name of pop"
        keyboardType="default"
        style={myStyle.input}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="age of pop"
        keyboardType="number-pad"
        style={myStyle.input}
        onChangeText={(value) => setAge(value)}
      />
      <Button title="ADD DATA" onPress={() => insertData(name, age)} />
    </View>
  );
}
