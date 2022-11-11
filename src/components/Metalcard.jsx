import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors, Size } from '../constants';
const Metalcard = ({metal}) => {
  console.log(new Date(metal.timestamp));
  return (
    <View style={styles.container}>
      <View style={styles.container_left}>
        <Text style={styles.LargeText}>
          {metal.metalName}
        </Text>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <Text style={styles.smallText}>
            24k
            {' '}
            •
          </Text>
          <Text style={styles.smallText}>
            {' '}
            {moment(new Date(metal.timestamp)).fromNow()}
          </Text>
        </View>
      </View>
      <View style={styles.container_center}>
      </View>
      <View style={styles.container_right}>
      <View style={{ flexDirection: 'column',alignItems:'flex-end' }}>
          <Text style={styles.mediumText}>
          $ {metal.price.toFixed(2)}
          </Text>
          <Text style={styles.smallText}>
          +{metal.chp}%
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Metalcard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Size.margin.large,
    paddingVertical: Size.margin.medium,
    width: ('100%'),
    height: 95,
    elevation: 2,
    backgroundColor: `${Colors.secondary}10`,
    justifyContent: 'space-between',
    borderRadius: Size.radius.medium,
    marginBottom: Size.margin.medium,
  },
  container_left: {
    flex: 1,
    justifyContent: 'space-between'
  },
  LargeText: {
    fontFamily: 'DMSerifDisplay-Regular',
    color: Colors.White,
    fontSize: Size.fontSize.largeText
  },
  container_center: {
    flex: 1,
  },
  container_right: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'flex-end'
  },
  mediumText: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: Size.fontSize.largeText,
    color: Colors.White,
    fontWeight: '500',
    marginBottom:4
  },
  smallText: {
    fontFamily: 'DMSans-Regular',
    fontSize: Size.fontSize.mediumText/1.2,
    color: Colors.Tertiary,
    fontWeight:'300'
  }
})