import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'
import BoxChart from '../../assets/svg/BoxChart';
import { useNavigation } from '@react-navigation/native';


const Metalbox = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Calculator')} style={styles.container} android_ripple={{ borderless: true, color: Colors.primary, radius: 200 }}>
            <View style={styles.container_Text}>
                <Text style={styles.largeText}>
                    Gold
                </Text>
                <View style={{ flexDirection: 'row', marginTop: Size.margin.normal }}>
                    <Text style={styles.smallText}>
                        22k
                        {' '}
                        ▪
                    </Text>
                    <Text style={styles.smallText}>
                        {' '}
                        $890
                    </Text>
                </View>
            </View>
            <View style={{ display:'flex',bottom:0}}>


                {
                    props.chart === 'Bullish' ? (
                        <BoxChart color="#42940F"/>
                    ) : (
                        <BoxChart color="#EF1E37"/>
                    )
                }
            </View>

        </Pressable>
    )
}

export default Metalbox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: ('48%'),
        overflow: 'hidden',
        backgroundColor: `${Colors.secondary}10`,
        borderRadius: Size.radius.medium,
        marginBottom: Size.margin.medium,
    },
    container_Text: {
        flexDirection: 'column',
        paddingHorizontal: Size.margin.medium,
        paddingVertical: Size.margin.normal,
    },
    largeText: {
        fontFamily: 'DSDRegular',
        color: Colors.primary,
        fontSize: Size.fontSize.header
    },
    smallText: {
        fontFamily: 'DMSansRegular',
        fontSize: Size.fontSize.mediumText,
        color: Colors.Tertiary,
        fontWeight: 'bold'
    },

})