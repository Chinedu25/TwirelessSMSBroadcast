import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { GetFontSize, GetHeight, GetWidth } from '../../Util/GetDimensions'
import { primaryColor } from '../../Util/colors'

const Tlogo = ({user}) => {
    const smallLogo = require("../../assets/icons/smallLogo.png");
  return (
      <View style={styles.container}>
    <View style={styles.logoBox}>
            <Image source={smallLogo} style={styles.image} />
    </View>
    <Text style={styles.text}>
        Hello, {user}
    </Text>
      </View>

  )
}

export default Tlogo

const styles = StyleSheet.create({
    container:{
        marginLeft: GetWidth(16),
        marginTop: GetHeight(36),
        justifyContent: 'center',
    },
    logoBox:{
        height: GetWidth(34),
        width: GetWidth(34),
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primaryColor,
        borderRadius: 8,
    
    },
    image: {
        height: GetHeight(51),
        width: GetWidth(51),
        resizeMode: "contain",
      },

      text:{
        fontFamily: 'Gothic A1',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: GetFontSize(12),
        lineHeight: GetFontSize(15),
        display: 'flex',
        alignItems: 'center',
        marginLeft: GetWidth(51),
        color: primaryColor,
      }
})