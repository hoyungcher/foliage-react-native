import React, { useEffect, useState } from 'react';
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


    // Retrieve Location and associated reports from API
    useEffect(() => {
        fetchLocationData(locationId);
    }, [])
    


    return (
        <SafeAreaView styles={styles.container}>
            <View style={styles.headingBox}>
                <Text style={styles.headingText}>{locationName}</Text>
            </View>
            <View style={styles.reportsBox}>
                <FlatList
                    style={styles.reportsContainer}
                    data={locationData.reports}
                    keyExtractor={report => report._id}
                    renderItem={(report) => {
                        console.log(report);
                        return (
                            <ReportCard
                                title={report.item.title}
                                location={locationName}
                                phenomenon={report.item.phenomenon.name}
                                category={report.item.phenomenon.category}
                                timestamp={report.item.timestamp}
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
    reportsBox: {

    },
    reportsContainer: {

    }
})

export default LocationScreen;