import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DateTime } from "luxon";
import foliageApi from '../api/foliage';

const ReportScreen = ({route, navigation}) => {
    const { reportId } = route.params
    const [reportData, setReportData] = useState({});
    console.log(reportData);
    
    const fetchReportData = (id) => {
        foliageApi
            .get(`reports/${reportId}`)
            .then((response) => setReportData(response.data))
            .catch((error) => console.log(error));

            // TO DO: display error message (i.e. something went wrong)
        
    }

    const navigateToExplore = () => {
        navigation.push('Explore');
    }

    useEffect(() => {
        fetchReportData(reportId);
    }, [])

    return (
        <SafeAreaView styles={styles.container}>
            <View style={styles.headingBox}>
                <Ionicons 
                    style={styles.backButton}
                    name="chevron-back-circle-outline" size={24} color="black" 
                    onPress={navigateToExplore}
                />
                <Text style={styles.headingText}>{reportData.title}</Text>
            </View>
            <View
                style={styles.descriptionBox}
            >
                <Text>{DateTime.fromMillis(reportData.timestamp).toLocaleString(DateTime.DATETIME_MED)}</Text>
                <Text>{reportData.location.name}</Text>
                <Text>{reportData.description}</Text>
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
})

export default ReportScreen;