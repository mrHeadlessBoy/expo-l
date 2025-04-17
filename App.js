import { View, Text, Image, Button, Alert, FlatList } from "react-native";
import { useState } from "react";

import Kon from "./components/Kon";
//import from file
import { myStyle } from "./styles/myStyle";

export default function App() {

  const [data, setData] = useState([
    {id:1,name:"Jo",age:20},
    {id:2,name:"Jonathan",age:19},
    {id:3,name:"Jane",age:18},
    {id:4,name:"Jolyne",age:17},
    {id:5,name:"Josuke",age:16},
  ])

  const deleteData=(id)=>{
    setData((prevData)=>{
      return prevData.filter((item)=>item.id !==id);
    })
  }

  return (
    <View style={myStyle.container}>
        <FlatList
          data={data}
          renderItem={({item})=>(
            <Kon item={item} deleteData={deleteData}/>
          )}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={<Text
        style={{alignSelf:"center",fontSize:30,fontWeight:"bold"}}>population data</Text>}
        ListEmptyComponent={<Text style={{alignSelf:"center",fontSize:18}}>data not found</Text>}
        />
    </View>
  );
}
