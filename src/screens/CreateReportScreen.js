import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, View } from 'react-native';
import SearchableDropDown from '../components/SearchableDropdown';
import foliageApi from '../api/foliage';
import { Context as LocationContext } from '../context/locationContext';

const CreateReportScreen = () => {
    const [description, setDescription] = useState('');
    const [locationId, setLocationId] = useState('');
    const [locationName, setLocationName] = useState('');
    const { state, fetchLocationResults } = useContext(LocationContext);


    const [phenomenon, setPhenomenon] = useState('');
    const [suggestedLocations, setSuggestedLocations] = useState([]);
    const selectLocationId = (id, name) => {
        setLocationId(id);
        setLocationName(name);
        console.log(locationId);
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingBox}>
                <Text style={styles.headingText}>Create New Report</Text>
            </View>
            <Text style={styles.formLabel}>Location</Text>
            <TextInput
                name="Location"
                onChangeText={(text) => {
                    setLocationName(text);
                    if (text.length > 0) {
                        fetchLocationResults(text)
                        console.log(state);
                    }
                }}
                style={styles.input}
                value={locationName}
            />
            <SearchableDropDown
                style={styles.searchableDropdown}
                locations={state}
                updateLocation={selectLocationId}

            />
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
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headingBox: {
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 2,
        marginBottom: 20
    },
    headingText: {
        fontSize: 24,
        marginLeft: 12
    },
    formLabel: {
        fontSize: 14,
        marginLeft: 20
    },
    input: {
        marginHorizontal: 20,
        backgroundColor: '#F3F3F3',
        fontSize: 20

    },
    searchableDropdown: {
        marginHorizontal: 20,
        backgroundColor: '#E3E3E3'
    }
})

export default CreateReportScreen;