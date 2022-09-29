import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput } from 'react-native';
import SearchableDropdown from '../components/SearchableDropdown';
import { Context as LocationContext } from '../context/locationContext';

const LocationsScreen = ({navigation}) => {
    const [locationId, setLocationId] = useState('');
    const [locationName, setLocationName] = useState('');
    const { state: locationState, fetchLocationResults } = useContext(LocationContext); 
    const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
    
    const navigateToLocation = (id, name) => {
        // setLocationId(id);
        // setLocationName(name);
        navigation.push('Location', {
            locationId: id,
            locationName: name
        })
    }

    return (
        <SafeAreaView styles={styles.container}>
            <TextInput
                name="Location"
                placeholder='Search for a location'
                onChangeText={(text) => {
                    setLocationName(text);
                    if (text.length > 0) {
                        fetchLocationResults(text)
                    }
                }}
                style={styles.searchBar}
                value={locationName}
                onBlur={() => setShowLocationSuggestions(false)}
                onFocus={() => setShowLocationSuggestions(true)}
            
            />
            {showLocationSuggestions ? (
                <SearchableDropdown
                    locations={locationState}
                    updateLocation={navigateToLocation}
                />
                ) : <></>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    searchBar: {
        marginHorizontal: 20,
        backgroundColor: '#F7F7F7',
        fontSize: 16,
        padding: 10,
        borderRadius: 6,
        borderColor: '#E8E8E8',
        borderWidth: 1
    },
})

export default LocationsScreen;