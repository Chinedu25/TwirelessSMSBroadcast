import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import GoBackIcon from "../../assets/icons/go_back.svg"
import { GetWidth, GetHeight } from '../../Util/GetDimensions'

const BackButton = ({navigation}) => {

    const GoBack = ()=>{
        navigation.goBack();
    }
  return (
    <TouchableOpacity style={styles.button} onPress={GoBack}>
      <GoBackIcon width ={GetWidth(50)} height={GetHeight(50)}/>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        marginTop: GetHeight(32),
        marginLeft: GetWidth(26)
    }
})