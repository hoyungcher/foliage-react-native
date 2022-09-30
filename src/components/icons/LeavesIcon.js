import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LeavesIcon = () => {
    return (
        <View style={styles.iconCircle}>
             <Ionicons name="leaf-outline" size={20} color="black" />
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
        backgroundColor: '#9EBC9E'
    }
})

export default LeavesIcon;