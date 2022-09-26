import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationsScreen = () => {

    return (
        <View styles={styles.container}>
            <SearchBar/>
            <Text>LocationsScreen</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default LocationsScreen;