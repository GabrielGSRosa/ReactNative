import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const AddButton = ({onAdd}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAdd}><Text style={styles.sinal}>+</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: "#4e4e4e",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    sinal: {
        color: "#FFF",
        fontSize: 34,
    }
})

export default AddButton