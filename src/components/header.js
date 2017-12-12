import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>

            <Text style={header}>
            Cryptocurrency App 
            </Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    headerContainer :{
        display :"flex",
        marginTop : 10,
        alignItems : "center",
        borderRadius: 50,
    borderWidth: 2,
    borderColor: '#d6d7da'
    },
    header  : {
        fontWeight : "bold",
        fontSize : 25,
    }
})

const { headerContainer,header} =styles;
export default Header;