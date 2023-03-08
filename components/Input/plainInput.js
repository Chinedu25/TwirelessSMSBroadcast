import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { GetHeight, GetWidth, GetFontSize } from '../../Util/GetDimensions'
import { primaryColor } from '../../Util/colors'

const PlainInput = ({placeholder, value, onValueChanged}) => {
  return (
    <View style={styles.background}>
     <TextInput
     value={value}
     style={styles.input}
     onChangeText={onValueChanged}
     underlineColorAndroid='transparent'
     multiline={true}
    placeholder={placeholder}
     />
    </View>
  )
}

export default PlainInput

const styles = StyleSheet.create({
    background:{
        backgroundColor: 'white',
        borderRadius: 8,
        height: GetHeight(226),
        width: GetWidth(308),
    },
    input:{
        height: GetHeight(210),
        width: GetWidth(290),
        marginHorizontal:GetWidth(10),
        marginVertical: GetHeight(10),
        textDecorationLine: 'none',
        textAlign: 'left',
        textAlignVertical: 'top',
        fontFamily: 'Gothic A1',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: GetFontSize(12),
        lineHeight: GetFontSize(15),
        
        color: primaryColor
    }
})