import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { DateTime } from 'luxon';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BirdsIcon from './icons/BirdsIcon';
import HarvestIcon from './icons/HarvestIcon';
import MarineLifeIcon from './icons/MarineLifeIcon';
import LeavesIcon from './icons/LeavesIcon';
import BlossomsIcon from './icons/BlossomsIcon';

const ReportCard = (props) => {
    const { title, location, phenomenon, category, timestamp } = props;

    const timeDifferenceString = (timestamp) => {
        const currentTimestamp = DateTime.now();
        const previousTimestamp = DateTime.fromMillis(timestamp);
        const timeDifference = currentTimestamp.diff(previousTimestamp, 'seconds').toObject().seconds;
        console.log(timeDifference);
        if (timeDifference <= 10) { return "Just now"; }
        if (timeDifference <= 60) { return "Less than a minute ago"; }
        if (timeDifference <= 90) { return "One minute ago"; }
        if (timeDifference <= 3540) { return Math.round(timeDifference / 60) + " minutes ago"; }
        if (timeDifference <= 5400) { return "An hour ago"; }
        if (timeDifference <= 86400) { return Math.round(timeDifference / 3600) + " hours ago"; }
        return previousTimestamp.toLocaleString(DateTime.DATE_MED);
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
                    <Text>{timeDifferenceString(timestamp)}</Text>
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