import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import foliageApi from '../api/foliage';

const CreateReportScreen = () => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [phenomenon, setPhenomenon] = useState('');
    const [suggestedLocations, setSuggestedLocations] = useState([]);
    

    return (
        <SafeAreaView style={styles.container}>
            <Text>Create New Report</Text>
            <TextInput 
                name="Location"
                style={styles.dropdownSearch}/>
            {/* <SearchableDropdown
                onTextChange={ async (text) => {
                    try {
                        const results = await foliageApi.get(`locationautocomplete?name=${text}`);
                        console.log(results);
                    } catch (err) {
                        console.log(err);
                    }
                }}
            /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    dropdownSearch: {
        backgroundColor: '#E3E3E3',
        width: '80%'
    }
})

export default CreateReportScreen;