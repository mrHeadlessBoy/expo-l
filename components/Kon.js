import { View, Text } from "react-native"

//use props or specific variable
export default function Kon(props){
    return(
        <View>
            <Text>Name {props.name} , Age {props.age}  </Text>
        </View>
    )
}