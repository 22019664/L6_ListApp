import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Edit({ navigation, route }) {
    const { character, setCharacters, characters } = route.params;
    const [name, setName] = useState(character.name);
    const [imageUrl, setImageUrl] = useState(character.imageUrl);

    const saveEdit = () => {
        const updatedCharacters = { ...characters };

        if (character.rarity === 5) {
            updatedCharacters.fiveStarCharacters = updatedCharacters.fiveStarCharacters.map((item) =>
                item.id === character.id ? { ...item, name, imageUrl } : item
            );
        } else {
            updatedCharacters.sixStarCharacters = updatedCharacters.sixStarCharacters.map((item) =>
                item.id === character.id ? { ...item, name, imageUrl } : item
            );
        }

        setCharacters(updatedCharacters);
        navigation.goBack();
    };

    const deleteCharacter = () => {
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this character?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        const updatedCharacters = { ...characters };

                        if (character.rarity === 5) {
                            updatedCharacters.fiveStarCharacters = updatedCharacters.fiveStarCharacters.filter((item) => item.id !== character.id);
                        } else {
                            updatedCharacters.sixStarCharacters = updatedCharacters.sixStarCharacters.filter((item) => item.id !== character.id);
                        }

                        setCharacters(updatedCharacters);
                        navigation.goBack();
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Image URL" value={imageUrl} onChangeText={setImageUrl} style={styles.input} />
            <Button title="Save Changes" onPress={saveEdit} />
            <Button title="Delete Character" onPress={deleteCharacter} color="red" />
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
});
