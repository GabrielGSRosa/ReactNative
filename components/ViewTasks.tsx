import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ViewTasks = ({tarefas, onDelete}: any) => {
    const handleDelete = (nomeItem: any) => {
        console.log('deletado')
        onDelete(prevTarefa => prevTarefa.filter(tarefa => tarefa !== nomeItem))
    }

  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <FlatList
                style={styles.container}
                data={tarefas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.text}>{item}</Text>
                        <View>
                            <TouchableOpacity onPress={() => handleDelete(item)}>
                                <Text style={styles.delBtn}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,

        //justifyContent: 'flex-start',

        // Debug
        borderWidth: 2,
        borderColor: 'red'
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 5,
        marginVertical: 10,
        backgroundColor: '#4e4e4e',
        borderRadius: 10,
    },
    text: {
        height: 50,
        fontSize: 16,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'left',
        paddingHorizontal: 10,
    },
    delBtn: {
        width: 50,
        height: 50,
        fontSize: 36,
        borderRadius: 10,
        textAlign: 'center',
        color: "#fff",
        backgroundColor: "red",
    },
})

export default ViewTasks