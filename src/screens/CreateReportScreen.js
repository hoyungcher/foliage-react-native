import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, View, TouchableOpacity, Button, Keyboard } from 'react-native';

import Spacer from '../components/Spacer';
import foliageApi from '../api/foliage';
import SearchableDropDown from '../components/SearchableDropdown';
import Dropdown from '../components/Dropdown';
import { Context as LocationContext } from '../context/locationContext';
import { Context as PhenomenonContext } from '../context/phenomenonContext';


const CreateReportScreen = () => {
    const [description, setDescription] = useState('');
    const [locationId, setLocationId] = useState('');
    const [locationName, setLocationName] = useState('');
    const [phenomenonId, setPhenomenonId] = useState('');
    const [phenomenonName, setPhenomenonName] = useState('Select a phenomenon')
    const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

    const [phenomenonOpen, setPhenomenonOpen] = useState(false);
    const [phenomenonValue, setPhenomenonValue] = useState(null);
    // Set value of outer textinput field to selection
    const { state: locationState, fetchLocationResults } = useContext(LocationContext);
    const { state: phenomenonState, fetchAllPhenomena } = useContext(PhenomenonContext);
    
    const selectLocationId = (id, name) => {
        setLocationId(id);
        setLocationName(name);
    }

    const selectPhenomenonId = (id, name) => {
        setPhenomenonId(id);
        setPhenomenonName(name);
        setPhenomenonOpen(!phenomenonOpen)
    }

    const submitReport = async () => {
        const report = {
            description, 
            phenomenon: phenomenonId,
            location: locationId,
            timestamp: 12020303
        };
        const response = await foliageApi.post('reports', report);
        // navigate to reports
    }

    // Retrieve Phenomena from API
    useEffect(() => {
        fetchAllPhenomena();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingBox}>
                <Text style={styles.headingText}>Create New Report</Text>
            </View>
            <Text style={styles.inputLabel}>Location</Text>
            <TextInput
                name="Location"
                placeholder='Search for a location'
                onChangeText={(text) => {
                    setLocationName(text);
                    if (text.length > 0) {
                        fetchLocationResults(text)
                    }
                }}
                style={styles.input}
                value={locationName}
                onBlur={() => setShowLocationSuggestions(false)}
                onFocus={() => {
                    setShowLocationSuggestions(true);
                    setPhenomenonOpen(false);
                }}
            />
            {showLocationSuggestions ? (

                <SearchableDropDown
                    style={styles.searchableDropdown}
                    locations={locationState}
                    updateLocation={selectLocationId}
                />
            ) : <></>}
            <Text style={styles.inputLabel}>Phenomenon</Text>
            <TouchableOpacity
                onPress={() => {
                    setPhenomenonOpen(!phenomenonOpen);
                    setShowLocationSuggestions(false);
                    Keyboard.dismiss();
                }}
            >
                <Text
                    style={styles.input}
                >
                    {phenomenonName}
                </Text>
            </TouchableOpacity>
            { phenomenonOpen ? 
                <Dropdown
                    phenomena={phenomenonState}
                    updatePhenomenon={selectPhenomenonId}
                /> : <></>
            }
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
                name="Description"
                multiline={true}
                style={styles.input}
                value={description}
                onChangeText={setDescription}
            />
            <Spacer/>
            <TouchableOpacity 
                style={styles.submitButton}
                onPress={submitReport}
            >
                <Text style={styles.buttonText}>Submit Report</Text>
            </TouchableOpacity>
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
    inputLabel: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 8,
        marginTop: 10
    },
    input: {
        marginHorizontal: 20,
        backgroundColor: '#F7F7F7',
        fontSize: 16,
        padding: 10,
        borderRadius: 6,
        borderColor: '#E8E8E8',
        borderWidth: 1,

    },
    searchableDropdown: {

    },
    submitButton: {
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 6,
        backgroundColor: "firebrick",
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    }
})

export default CreateReportScreen;