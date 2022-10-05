import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DateTime } from "luxon";
import foliageApi from '../api/foliage';
import ScreenHeader from '../components/ScreenHeader';

const ReportScreen = ({route, navigation}) => {
    const { reportId } = route.params
    const [reportData, setReportData] = useState({
        title: "",
        description: "",
        timestamp: 0,
        location: {name: ""}
    });
    
    const fetchReportData = (id) => {
        foliageApi
            .get(`reports/${id}`)
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
            <ScreenHeader
                pageTitle={reportData.title}
                handleBackButton={navigateToExplore}
            />
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
    descriptionBox: {
        marginHorizontal: 20,
        marginBottom: 20
    },
})

export default ReportScreen;