import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.index)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#ccc',
        borderRadius: 5,
      },
})

export default ListItem;
