import { View, Text, FlatList, TouchableOpacity, Keyboard, StyleSheet } from "react-native";
import { ListItem } from "@rneui/base";
import { useState } from "react";

const SearchableDropdown = (props) => {
    const updateLocation = props.updateLocation;
    const locationResults = props.locations;
    return (
            <View>
                {
                    <FlatList
                        style={styles.listContainer}
                        data={locationResults}
                        keyExtractor={location => location._id}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        updateLocation(item._id, item.name)
                                        Keyboard.dismiss();
                                    }}
                                >
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.item}>{item.name + ", " + item.city.name}</Text>
                                    </View>
                                </TouchableOpacity>)
                        }}
                        ListEmptyComponent={
                            <View style={styles.itemContainer}>
                                <Text style={styles.item}>No locations found</Text>
                            </View>
                        }
                        keyboardShouldPersistTaps='handled'
                    />
                }
            </View>

    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 16
    },
    itemContainer: {
        paddingVertical: 6
    },
    listContainer: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E8E8E8',
        padding: 10,
        marginHorizontal: 20,
        opacity: 1,
        backgroundColor: 'white'
    }
});

export default SearchableDropdown;