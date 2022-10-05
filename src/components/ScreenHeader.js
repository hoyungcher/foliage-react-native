import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ScreenHeader = (props) => {
    const { handleBackButton, pageTitle } = props;
    return (
        <View style={styles.headingBox}>
            <Ionicons 
                style={styles.backButton}
                name="chevron-back-circle-outline" size={24} color="black" 
                onPress={() => handleBackButton()}
            />
            <Text style={styles.headingText}>{pageTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingBox: {
        margin: 20
    },
    backButton: {
        position: 'absolute'
    },
    headingText: {
        fontSize: 20,
        alignSelf: 'center'
    }
})

export default ScreenHeader;