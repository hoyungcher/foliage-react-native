import { View, Text, FlatList, TouchableOpacity, Keyboard } from "react-native";
import { useState } from "react";

const SearchableDropdown = (props) => {
    const updateLocation = props.updateLocation;
    const locationResults = props.locations;
    return (
            <View>
                {
                    // locationResults.length ? 
                    <FlatList
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
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>)
                        }}
                        ListEmptyComponent={<View><Text>No locations found.</Text></View>}
                        keyboardShouldPersistTaps='handled'
                    />
                    //  : 
                    // <View>
                    //     <Text>No locations found.</Text>
                    // </View>
                }
            </View>

    )
}

export default SearchableDropdown;