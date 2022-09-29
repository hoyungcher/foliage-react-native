import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const ExploreScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable>
                <View style={styles.headingBox}>
                    <Text style={styles.headingText}>Explore</Text>
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
        marginBottom: 20,
        marginHorizontal: 20
    },
    headingText: {
        fontSize: 28
    },
    buttonBox: {
        marginHorizontal: 20,
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
    }

});

export default ExploreScreen;