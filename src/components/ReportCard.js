import { DateTime } from 'luxon';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BirdsIcon from './icons/BirdsIcon';
import HarvestIcon from './icons/HarvestIcon';
import MarineLifeIcon from './icons/MarineLifeIcon';
import LeavesIcon from './icons/LeavesIcon';
import BlossomsIcon from './icons/BlossomsIcon';

const ReportCard = (props) => {
    const { id, title, location, phenomenon, category, timestamp, showLocation, navigateToReport } = props;
    const timeDifferenceString = (timestamp) => {
        const currentTimestamp = DateTime.now();
        const previousTimestamp = DateTime.fromMillis(timestamp);
        const timeDifference = currentTimestamp.diff(previousTimestamp, 'seconds').toObject().seconds;
        if (timeDifference <= 10) { return "Just now"; }
        if (timeDifference <= 60) { return "Less than a minute ago"; }
        if (timeDifference <= 90) { return "One minute ago"; }
        if (timeDifference <= 3540) { return Math.round(timeDifference / 60) + " minutes ago"; }
        if (timeDifference <= 5400) { return "An hour ago"; }
        if (timeDifference <= 86400) { return Math.round(timeDifference / 3600) + " hours ago"; }
        return previousTimestamp.toLocaleString(DateTime.DATE_MED);
    }

    return (
        <TouchableOpacity 
            style={styles.cardContainer}
            onPress={() => navigateToReport(id)}
        >
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
            <View style={styles.infoContainer}>
                <View style={styles.topLine}>
                    <Text style={styles.timeText}>{timeDifferenceString(timestamp)}</Text>
                    {showLocation ? <Text style={styles.locationText}>{location}</Text> : null}
                </View>
                <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                <Text style={styles.phenomenonText}>{phenomenon}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F7F7F7',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1
    },
    topLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeText: {
        fontSize: 12

    },
    locationText: {
        fontSize: 12
    },
    titleText: {
        fontSize: 16,
    },
    phenomenonText: {
        fontSize: 12
    },
    iconContainer: {
        marginRight: 8
    }
});

export default ReportCard;