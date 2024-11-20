import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { fiveStarCharacters, sixStarCharacters } from './characterData';

export default function Home({ navigation }) {
    const [characters, setCharacters] = useState({
        fiveStarCharacters,
        sixStarCharacters,
    });

    return (
        <View style={styles.container}>
            <Button title="Add Character" onPress={() => navigation.navigate('Add', { setCharacters, characters })} />

            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>5-Star Characters</Text>
                <FlatList
                    data={characters.fiveStarCharacters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigation.navigate('Edit', { character: item, setCharacters, characters })}
                        >
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>6-Star Characters</Text>
                <FlatList
                    data={characters.sixStarCharacters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => navigation.navigate('Edit', { character: item, setCharacters, characters })}
                        >
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    categoryContainer: {
        marginBottom: 20,
    },
    categoryTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
    },
});
