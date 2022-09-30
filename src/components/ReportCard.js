import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BirdsIcon from './icons/BirdsIcon';
import HarvestIcon from './icons/HarvestIcon';
import MarineLifeIcon from './icons/MarineLifeIcon';
import LeavesIcon from './icons/LeavesIcon';
import BlossomsIcon from './icons/BlossomsIcon';

const ReportCard = (props) => {
    const { title, location, phenomenon, category, timestamp } = props;

    const renderIcon = (category) => {
        switch(category) {
            case 'Blossoms':
                return <BlossomsIcon/>;
            case 'Birds':
                return <BirdsIcon/>;
            case 'Harvest':
                return <HarvestIcon/>;
            case 'Marine Life':
                return <MarineLifeIcon/>;
            case 'Leaves':
                return <LeavesIcon/>
            default:
                return null;
        }
    }

    return (
        <TouchableOpacity style={styles.cardContainer}>
                <View style={styles.iconContainer}>
                    {
                        {
                            'Birds': <BirdsIcon/>,
                            'Blossoms': <BlossomsIcon/>,
                            'Harvest': <HarvestIcon/>,
                            'Leaves': <LeavesIcon/>,
                            'MarineLife': <MarineLifeIcon/>,
                        }[category]
                    }
                </View>
                <View>
                    <Text>{timestamp}</Text>
                    <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                    <Text style={styles.phenomenonText}>{phenomenon}</Text>
                </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F7F7F7',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 16,
        marginBottom: 4
    },
    phenomenonText: {
        fontSize: 12
    },
    iconContainer: {
        marginRight: 8
    }
});

export default ReportCard;