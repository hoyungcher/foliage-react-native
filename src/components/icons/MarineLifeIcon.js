import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MarineLifeIcon = () => {
    return (
        <View style={styles.iconCircle}>
             <MaterialCommunityIcons name="waves" size={20} color="black" />
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
        backgroundColor: '#1F7A8C'
    }
})

export default MarineLifeIcon;