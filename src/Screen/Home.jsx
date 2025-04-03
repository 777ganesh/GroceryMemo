import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Allitems from './Allitems'
import Create from './Create'

const Home = () => {

  const[view,setview] = useState(0)
  const [data, setdata] = useState([{id : 1, name : "Wheat", stock : 5, unit : "kg"},
    {id : 2, name : "Rice", stock : 15, unit : "kg"},
    {id : 3, name : "Basmati Special", stock : 25, unit : "kg"},
    {id : 4, name : "Pulse", stock : 50, unit : "kg"},
    {id : 5, name : "Corn", stock : 19, unit : "kg"},          
  ])

  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>

        <Pressable style={[styles.button, view==0 ? {backgroundColor:"#72C37AFF"} :null]} onPress={() =>setview(0)}>
          <Text style={[styles.btnText, view==0 ? {color:"white"} : null]}>All Items</Text>
        </Pressable>

        <Pressable style={[styles.button, view==1 ? {backgroundColor:"#72C37AFF"} : null]} onPress={() => setview(1)}>
          <Text style={[styles.btnText, view==1 ? {color:"white"} : null]}>Low Stock</Text>
        </Pressable>

        <Pressable style={[styles.button, view==2 ? {backgroundColor:"#72C37AFF"} : null]} onPress={() => setview(2)}>
          <Text style={[styles.btnText, view==2 ? {color:"white"} : null]}>Create </Text>
        </Pressable>

      </View>

    {view==0 && <Allitems data={data}/>}
    {view==1 && <Allitems data={data.filter((item) => item.stock<20)}/>}
    {view==2 && <Create data={data} setdata={setdata}/>}

    </View>
  )
}



export default Home

const styles = StyleSheet.create({
        container:{
        width:"100%",
        height:"100%",
        backgroundColor:"#ffffff",
        padding: "4%"
        },

        title:{
          fontSize:24,
          fontWeight:"bold",
          color:"333",
          marginVertical:10

        },

       btnContainer:{
        flexDirection:"row",
        gap:10,
        marginVertical:5
       },

       button:{
        paddingHorizontal:10,
        paddingVertical:6,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#72C37AFF"
       },

       btnText:{
        color:"#72C37AFF",
        fontSize:13
       }


})