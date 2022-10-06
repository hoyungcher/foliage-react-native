import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import ScreenHeader from '../components/ScreenHeader';
import foliageApi from '../api/foliage';

const PhenomenaScreen = ({ navigation }) => {
    const navigateToExplore = () => {
        navigation.pop();
    }

    const [phenomenaData, setPhenomenaData] = useState({

    })
    const [categories, setCategories] = useState([])

    const fetchPhenomenaData = () => {
        foliageApi.get('phenomena')
            .then((response) => {
                const categories = [...new Set(response.data.map((phenomenon) => phenomenon.category))];
                setCategories(categories);
                setPhenomenaData(response.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => fetchPhenomenaData(), [] )

    console.log(phenomenaData)

    return (
        <SafeAreaView styles={styles.container}>
            <ScreenHeader
                pageTitle="Explore Phenomena"
                handleBackButton={navigateToExplore}
            />
            <View>
                <FlatList
                    data={categories}
                    keyExtractor={category => category}
                    renderItem={(category) => {
                        return (
                            <View style={styles.categoryBox}>
                                <View style={styles.categoryHeaderBox}>
                                    <Text style={styles.categoryText}>{category.item}</Text>
                                </View>
                                <FlatList
                                    data={phenomenaData.filter(phenomenon => phenomenon.category === category.item)}
                                    keyExtractor={phenomenon => phenomenon._id}
                                    renderItem={(phenomenon) => {
                                        return (
                                            <View>
                                                <Text>
                                                    {phenomenon.item.name}
                                                </Text>
                                            </View>

                                        )
                                    }

                                    }

                                />
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoryBox: {
        marginHorizontal: 20
    },
    categoryText: {
        fontSize: 20
    },
    categoryHeaderBox: {
        paddingVertical: 4
    }
})

export default PhenomenaScreen;