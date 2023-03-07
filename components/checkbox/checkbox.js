import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CheckMark from "../../assets/icons/checkMark.svg";
import CheckMarkFilled from "../../assets/icons/checkMarkFilled.svg";
import { bigButtonColorA } from '../../Util/colors';
import { GetHeight, GetWidth, GetFontSize } from '../../Util/GetDimensions';

const Checkbox = ({label, onPress, isChecked}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View>
            {
                isChecked === true ?
                <CheckMarkFilled width={GetWidth(15)} height={GetHeight(15)}/>
                :
                <CheckMark width={GetWidth(15)} height={GetHeight(15)}/>
            }
    
        </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Checkbox

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        textAlign: "right",
        fontFamily: "Gothic A1",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: GetFontSize(12),
        lineHeight: GetFontSize(18),
        color: bigButtonColorA,
        marginLeft: GetWidth(8),
      },
})