import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SectionHeader = ({ title, icon, color }) => (
    <View style={[styles.sectionHeader, { backgroundColor: color }]}>
        <Icon name={icon} size={30} color="#fff" />
        <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    sectionHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
});

export default SectionHeader;
