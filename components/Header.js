import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>To Do List</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:'coral',
        height:80,
        paddingTop:40,
    },
    title:{
        textAlign:'center',
        alignItems:'center',
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
    }
})