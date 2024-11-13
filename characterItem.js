import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterItem = ({ name, image }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.characterName}>{name}</Text>
            <Image source={image} style={styles.characterImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    characterName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    characterImage: {
        width: 250,
        height: 250,
        borderRadius: 8,
    },
});

export default CharacterItem;
