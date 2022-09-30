import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BirdsIcon = () => {
    return (
        <View style={styles.iconCircle}>
             <MaterialCommunityIcons name="bird" size={20} color="black" />
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
        backgroundColor: '#E2C044'
    }
})

export default BirdsIcon;