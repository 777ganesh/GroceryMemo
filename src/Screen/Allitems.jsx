import { FlatList, StyleSheet, Text, View } from 'react-native'


const Allitems = ({data}) => {
  return (
    <View>
        <View style={styles.headingCtn}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>

        </View>

        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <View style={[styles.itemCtn,{backgroundColor:item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF"}]}>  
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.stock}</Text>
            </View>
        )}
         
        contentContainerStyle = {{gap:10}}
        />

    </View>
  )
}

export default Allitems

const styles = StyleSheet.create({
    headingCtn:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:10
    },

    headingText:{
        fontWeight:"500",
        fontSize:16
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