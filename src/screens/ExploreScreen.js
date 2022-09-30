import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import foliageApi from '../api/foliage'
import ReportCard from '../components/ReportCard';

const ExploreScreen = ({navigation}) => {
    const [exploreReports, setExploreReports] = useState({});

    const fetchExploreReports = () => {
        foliageApi
            .get('reports/explore')
            .then((response) => setExploreReports(response.data));
    }

    useEffect(() => {
        fetchExploreReports();
    }, []);

    const [loaded] = useFonts({
        BlackJack: require('../../assets/fonts/BlackJack.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Pressable>
                <View style={styles.headingBox}>
                    <Text style={styles.headingText}>Foliage</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity 
                        style={styles.buttonTouchable}
                        onPress={() => navigation.push('Locations')}
                    >
                        <View style={styles.buttonCircle}>
                            <MaterialIcons name="location-pin" size={24} color="white" />
                        </View>
                        <Text style={styles.buttonText}>Locations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonTouchable}
                        onPress={() => navigation.push('Phenomena')}
                    >
                        <View style={styles.buttonCircle}>
                            <MaterialCommunityIcons name="leaf-maple" size={24} color="white" />
                        </View>
                        <Text style={styles.buttonText}>Phenomena</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.reportsBox}>
                    <Text style={styles.subHeadingText}>Latest reports</Text>
                    <FlatList
                        data={exploreReports}
                        keyExtractor={report => report._id}
                        renderItem={(report) => {
                            console.log(report);
                            return (
                                <ReportCard
                                    title={report.item.title}
                                    location={report.item.location.name}
                                    phenomenon={report.item.phenomenon.name}
                                    category={report.item.phenomenon.category}
                                    timestamp={report.item.timestamp}
                                    showLocation={true}
                                />

                            )
                        }

                        }
                    
                    />
                </View>
            </Pressable>
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
        marginBottom: 10,
        alignItems: 'center'
    },
    headingText: {
        fontSize: 48,
        fontFamily: 'BlackJack'
    },
    buttonBox: {
        marginHorizontal: 20,
        marginBottom: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonCircle: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        backgroundColor: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
    },
    buttonTouchable: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    reportsBox: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    subHeadingText: {
        fontSize: 16,
        marginBottom: 4
    }

});

export default ExploreScreen;