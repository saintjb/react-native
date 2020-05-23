import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = (props) =>{
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar:{
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'goldenrod',
         paddingBottom: 10,
        paddingTop: 20
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Zapfino'
    }
})