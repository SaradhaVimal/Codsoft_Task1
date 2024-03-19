import {StyleSheet, TextInput, View} from "react-native";
import React from "react";

const Input = (props) => {
    return (
        <View style={styles.input}>
            <TextInput
                style={styles.text}
                onChangeText={props.handleChange}
                onSubmitEditing={props.handleSubmit}
                value={props.value}
                placeholder="What needs to be done"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 75,
        borderColor: '#555',
        borderWidth: 2,
        borderRadius: 12,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff', // Add this line to set background color to white
    },
    text: {
        fontSize: 23,
    },
});

export default Input;
