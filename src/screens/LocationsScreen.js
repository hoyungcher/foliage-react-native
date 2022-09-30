import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

    const navigateToExplore = () => {
        navigation.pop();
    }

    return (
        <SafeAreaView styles={styles.container}>
            <Pressable
                style={{minHeight: '100%'}} 
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <View style={styles.headingBox}>
                    <Ionicons 
                        style={styles.backButton}
                        name="chevron-back-circle-outline" size={24} color="black" 
                        onPress={navigateToExplore}
                    />
                    <Text style={styles.headingText}>Explore Locations</Text>
                </View>
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
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // paddingHorizontal: 20
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
    headingBox: {
        margin: 20
    },
    backButton: {
        position: 'absolute'
    },
    headingText: {
        fontSize: 20,
        alignSelf: 'center'
    },
})

export default LocationsScreen;