import React from 'react';
import { View, Button, SectionList, Text, StyleSheet } from 'react-native';
import CharacterItem from './characterItem';
import SectionHeader from './sectionHeader';
import characterData from './characterData';

const App = () => {
    const handleAddCharacter = () => {
        console.log('Add Character button clicked');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Arknights List</Text>

            <Button title="Add Character" onPress={handleAddCharacter} style={styles.addButton} />

            <SectionList
                sections={characterData}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <CharacterItem name={item.name} image={item.image} />}
                renderSectionHeader={({ section }) => (
                    <SectionHeader title={section.title} icon={section.icon} color={section.color} />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#060270',
    },
    addButton: {
        marginBottom: 10,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
});

export default App;
