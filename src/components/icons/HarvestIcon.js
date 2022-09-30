import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HarvestIcon = () => {
    return (
        <View style={styles.iconCircle}>
             <MaterialCommunityIcons name="pumpkin" size={20} color="black" />
        </View>
    )
}

// DE6E4B orange


const styles = StyleSheet.create({
    iconCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DE6E4B'
    }
})

export default HarvestIcon;