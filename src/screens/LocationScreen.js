import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { Context as LocationContext } from '../context/locationContext';
import foliageApi from '../api/foliage';
import { useFocusEffect } from '@react-navigation/native';

const LocationScreen = ({route, navigation}) => {
    const { locationName, locationId } = route.params
    const [locationData, setLocationData] = useState({});

    const fetchLocationData = (id) => {
        foliageApi
            .get(`locations/${id}`)
            .then((response) => setLocationData(response.data));
    }



    // Retrieve Location and associated reports from API
    useEffect(() => {
        fetchLocationData(locationId);
    }, [])
    


    return (
        <SafeAreaView styles={styles.container}>
            <View style={styles.headingBox}>
                <Text style={styles.headingText}>{locationName}</Text>
            </View>
            <View >
                {console.log(locationData.location.coordinates)}
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headingBox: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20
    },
    headingText: {
        fontSize: 28
    },
})

export default LocationScreen;