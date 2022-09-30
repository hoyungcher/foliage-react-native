import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import foliageApi from '../api/foliage';
import ReportCard from '../components/ReportCard';

const LocationScreen = ({route, navigation}) => {
    const { locationName, locationId } = route.params
    const [locationData, setLocationData] = useState({});

    const fetchLocationData = (id) => {
        foliageApi
            .get(`locations/${id}`)
            .then((response) => setLocationData(response.data));
    }
    const navigateToReport = (id) => {
        navigation.push('Report', {
            // reportTitle = title,
            reportId: id
        });
    }

    const navigateToLocations = () => {
        navigation.pop();
    }


    // Retrieve Location and associated reports from API
    useEffect(() => {
        fetchLocationData(locationId);
    }, [])
    console.log(locationData);
    console.log(locationName);
    


    return (
        <SafeAreaView styles={styles.container}>
            <View style={styles.headingBox}>
                <Ionicons 
                    style={styles.backButton}
                    name="chevron-back-circle-outline" size={24} color="black" 
                    onPress={navigateToLocations}
                />
                <Text style={styles.headingText}>{locationName}</Text>
            </View>
            <View
                style={styles.descriptionBox}
            >
                {Object.keys(locationData).length ? <Text
                    style={styles.descriptionText}
                >{locationData.location.description}</Text> : <></>}
            </View>
            <View style={styles.reportsBox}>
                <Text style={styles.subHeadingText}>Latest reports</Text>
                <FlatList
                    style={styles.reportsContainer}
                    data={locationData.reports}
                    keyExtractor={report => report._id}
                    renderItem={(report) => {
                        return (
                            <ReportCard
                                title={report.item.title}
                                location={locationName}
                                phenomenon={report.item.phenomenon.name}
                                category={report.item.phenomenon.category}
                                timestamp={report.item.timestamp}
                                showLocation={true}
                            />
                        )
                    }}
                    ListEmptyComponent={<></>}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // paddingHorizontal: 20
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
    descriptionBox: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    reportsBox: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    descriptionText: {
        fontSize: 16
    },
    subHeadingText: {
        fontSize: 16,
        marginBottom: 4
    }
})

export default LocationScreen;