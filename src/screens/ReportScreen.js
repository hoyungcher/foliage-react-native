import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const ReportScreen = ({route, navigation}) => {
    const { reportId } = route.params
    const [reportData, setReportData] = useState({});
    const fetchReportData = (id) => {
        foliageApi
            .get(`reports/${reportId}`)
            .then((response) => setReportData(response.data))
            .catch((error) => console.log(error));

            // TO DO: display error message (i.e. something went wrong)
    }
    return (
        <SafeAreaView styles={styles.container}>
            <Text>ReportScreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'

    }
})

export default ReportScreen;