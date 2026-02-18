import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({value, onChange}: any) => {

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Tarefa..."
        placeholderTextColor={"#838282"}
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '65%',
        height: 50, 
        backgroundColor: '#4e4e4e',
        paddingHorizontal: 24,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center', 
    },
    input: {
        height: '100%',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 16,
        paddingVertical: 0,
        color: '#fff'
    }
})

export default Input