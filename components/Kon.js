import { View, Text, TouchableOpacity } from "react-native"
import { myStyle } from "../styles/myStyle"

//use props or specific variable
export default function Kon({item, deleteData}){
    return(
        <TouchableOpacity onPress={()=>deleteData(item.id)}>
            <View style={myStyle.content}>
            <Text style={myStyle.header}>Name {item.name} , Age {item.age}y  </Text>
        </View>
        </TouchableOpacity>
    )
}