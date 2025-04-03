import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'


const Create = ({data,setdata}) => {

    const [itemName,setitemName] = useState('')
    const [stockAmt,setstockAmt] = useState('')
    const [isEdit, setisEdit] = useState(false)
    const [editID,seteditID] = useState(null)

    const handlerAddItem = () =>{

        if (!itemName.trim()) {
            alert('Please enter an item name');
            return;
        }
    
        if (!stockAmt || isNaN(stockAmt) || stockAmt <= 0) {
            alert('Please enter a valid stock amount (must be a positive number)');
            return;
        }


        const newItem = {
                id: Date.now(),
                name:itemName,
                stock: stockAmt
        }

        setdata([...data,newItem])
        setitemName('')
        setstockAmt('')
        setisEdit(false)
    }

    const deleteHandlerItem = (id) => {

        setdata(data.filter((item) => item.id !== id))
    }

    const editHandlerItem = (item) => {
        setisEdit(true)
        setitemName(item.name) 
        seteditID(item.id)
        
    }

    const updateItemHandler = () => {

        if (!itemName.trim()) {
            alert('Please enter an item name');
            return;
        }
    
        if (!stockAmt || isNaN(stockAmt) || stockAmt <= 0) {
            alert('Please enter a valid stock amount (must be a positive number)');
            return;
        }

        setdata(data.map((item) => (
         item.id === editID ? {...item,name:itemName,stock:stockAmt} : item    
         ) ) )
         setitemName('')
         setstockAmt('')
    }

  return (
    <View style={styles.ctn}>
    <TextInput
     placeholder='Enter an item name...'
     placeholderTextColor="#999"
     
     style={styles.input}
     
     value={itemName}
     onChangeText={(item) => setitemName(item)}
    />

    <TextInput
    placeholder='Enter stock amount...'
    placeholderTextColor="#999"
    
    style={styles.input}
    
    value={stockAmt}
    onChangeText={(item) => setstockAmt(item)}
   />

   <Pressable style={styles.btn} onPress={()=> isEdit ? updateItemHandler(): handlerAddItem()}>
    <Text style= {styles.btnText}> {isEdit ? 'EDIT ITEM IN STOCK' : 'ADD ITEM IN STOCK'} </Text>
   </Pressable>

        <View style= {{marginTop:10}}>
        <Text style={styles.headingText}>Items in the Stock</Text>
        
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <View style={[styles.itemCtn,{backgroundColor:item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF"}]}>  
                <Text style={styles.itemText}>{item.name}</Text>
                
        
            <View style={{flexDirection:"row",gap:20}} > 

            <Text style={styles.itemText}>{item.stock}</Text>

            <Pressable onPress={()=> editHandlerItem(item)}>
            <Text style={styles.itemText}>Edit</Text>
            </Pressable>
           
           <Pressable onPress={() => deleteHandlerItem(item.id)}>
           <Text style={styles.itemText}>Delete</Text>
           </Pressable>

            </View>
        
            </View>

        )}
         
        contentContainerStyle = {{gap:10}}
        />

    </View>


    </View>
  )
}

export default Create

const styles = StyleSheet.create({
    ctn:{
        paddingVertical:"4%",
        gap:10
    },

    input:{
    borderWidth:1.5,
    borderColor:"#D7F6BFFF",
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:10
    },

    btn:{
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:"#CABFEEFF",
        alignItems:"center",
        justifyContent:"center"
    },

    btnText:{
        color:"white",
        fontWeight:"bold",
        fontSize:15
    },
    headingCtn:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:10
    },

    headingText:{
        fontWeight:"500",
        fontSize:16,
        marginVertical:10
    },
    itemCtn:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:7
    },
    
    itemText:{
        fontWeight:"400",
        fontSize:16
    }

})