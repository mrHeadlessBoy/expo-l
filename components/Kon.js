import { View, Text } from "react-native"
import { myStyle } from "../styles/myStyle"

//use props or specific variable
export default function Kon(props){
    return(
        <View style={myStyle.content}>
            <Text style={myStyle.header}>Name {props.name} , Age {props.age}  </Text>
        </View>
    )
}