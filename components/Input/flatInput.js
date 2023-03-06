import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { GetFontSize, GetHeight, GetWidth } from '../../Util/GetDimensions'
import { placeholderColor, primaryColor } from '../../Util/colors'

const FlatInput = ({iconImage, placeholder, type, ...rest}) => {
  return (
    <View style={[styles.background]}{...rest}>
        <View style={styles.box}>
            <View>
            {iconImage}
            </View>
        </View>
      <TextInput secureTextEntry = {type == 'password'} 
      style={[styles.input, {
          letterSpacing: type == 'password' ? GetFontSize(3) : 0
          }]} placeholderTextColor= {placeholderColor} placeholder={placeholder}/>
    </View>
  )
}

export default FlatInput

const styles = StyleSheet.create({
    background:{
        backgroundColor: 'white',
        borderRadius: 8,
        height: GetHeight(50),
        width: GetWidth(320),
        justifyContent: 'center'
    },
    box:{
        position: 'absolute',
        backgroundColor: primaryColor,
        borderRadius: 8,
        height: GetHeight(50),
        width: GetWidth(50),
        alignItems: 'center',
        justifyContent: 'center', 
    },
    input:{
        marginLeft:GetWidth(68),
        fontFamily: 'Gothic A1',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: GetFontSize(12),
        lineHeight: GetFontSize(15),
        display: 'flex',
        alignItems: 'center',
        color: primaryColor
    }

})