import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()){
            onSubmit(value)
            setValue('')
        }
        else {
            Alert.alert("Name of the deal can't be an empty")
        }
    }
    return(
        <View style={styles.block}>
            <TextInput style= {styles.input}
            onChangeText={setValue}
            value={value}
            placeholder='Enter your deal...'
            autoCorrect={false}/>
            <Button title='Add' onPress={pressHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input:{
        width:'70%',
        paddingTop: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#800000',
    }
});