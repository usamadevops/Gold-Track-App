import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Size } from '../constants'
const Metalcard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_left}>
        <Text style={styles.LargeText}>
          Gold
        </Text>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <Text style={styles.smallText}>
            22k
            {' '}
            ▪
          </Text>
          <Text style={styles.smallText}>
            {' '}
            5 mins Ago
          </Text>
        </View>
      </View>
      <View style={styles.container_center}>

      </View>
      <View style={styles.container_right}>
      <View style={{ flexDirection: 'column',alignItems:'center' }}>
          <Text style={styles.mediumText}>
          $780
          </Text>
          <Text style={styles.smallText}>
          +3.21%
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
    height: 110,
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
    fontFamily: 'DSDRegular',
    color: Colors.White,
    fontSize: Size.fontSize.header
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
    fontFamily: 'DSDRegular',
    fontSize: Size.fontSize.header,
    color: Colors.White,
    fontWeight: '500',
    marginBottom:4
  },
  smallText: {
    fontFamily: 'DMSansRegular',
    fontSize: Size.fontSize.mediumText,
    color: Colors.Tertiary,
    fontWeight:'500'
  }
})