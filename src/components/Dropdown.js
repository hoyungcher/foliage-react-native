import { View, Text, FlatList, TouchableOpacity, Keyboard, StyleSheet } from "react-native";

const Dropdown = (props) => {
    const updatePhenomenon = props.updatePhenomenon;
    const phenomenonResults = props.phenomena;
    return (
        <View>
            <FlatList
                style={styles.listContainer}
                data={phenomenonResults}
                keyExtractor={phenomenon => phenomenon._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                updatePhenomenon(item._id, item.name);
                                Keyboard.dismiss();
                            }}
                        >
                            <View style={styles.itemContainer}>
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>)
                }}
                ListEmptyComponent={<></>}
                keyboardShouldPersistTaps='handled'
            />
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
        backgroundColor: 'white',
        maxHeight: 300
    }
})

export default Dropdown;