import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Add({ navigation, route }) {
    const { setCharacters, characters } = route.params;
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [rarity, setRarity] = useState(5);

    const addCharacter = () => {
        const newCharacter = {
            id: Date.now(), // Unique ID for the new character
            name,
            imageUrl,
            rarity,
        };

        // Copy the existing characters object and update the respective array
        const updatedCharacters = {
            ...characters,
            [rarity === 5 ? 'fiveStarCharacters' : 'sixStarCharacters']: [
                ...characters[rarity === 5 ? 'fiveStarCharacters' : 'sixStarCharacters'],
                newCharacter
            ]
        };

        // Update the characters state with the new object
        setCharacters(updatedCharacters);

        // Navigate back after adding
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Image URL" value={imageUrl} onChangeText={setImageUrl} style={styles.input} />

            <Text style={styles.label}>Select Rarity</Text>
            <Picker
                selectedValue={rarity}
                onValueChange={(itemValue) => setRarity(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="5-Star" value={5} />
                <Picker.Item label="6-Star" value={6} />
            </Picker>

            <Button title="Add Character" onPress={addCharacter} />
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
});
