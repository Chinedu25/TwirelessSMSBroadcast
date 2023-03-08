import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import { placeholderColor, primaryColor } from "../../Util/colors";
import DropDownIcon from "../../assets/icons/dropdown-icon.svg";


const DropDown = ({ iconImage, placeholder, onPress, value}, ...rest) => {

  return (
    <TouchableOpacity onPress={onPress} style={[styles.background]} {...rest}>
      <View style={styles.box}>
        <View>{iconImage}</View>
      </View>
      <Text style={[styles.placeholder, {color: value == null ? placeholderColor : primaryColor}]}> { value == null ? placeholder : value}</Text>
      <View style={styles.drop}>
        <DropDownIcon height={GetHeight(25)} width={GetWidth(25)} />
      </View>
    </TouchableOpacity>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    borderRadius: 8,
    height: GetHeight(50),
    width: GetWidth(320),
    justifyContent: "center",
  },
  box: {
    position: "absolute",
    backgroundColor: primaryColor,
    borderRadius: 8,
    height: GetHeight(50),
    width: GetWidth(50),
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    marginLeft: GetWidth(68),
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "500",
    width: '77%',
    fontSize: GetFontSize(12),
    lineHeight: GetFontSize(15),
    display: "flex",
    alignItems: "center",
    color: placeholderColor,
  },
  drop:{
      position: "absolute",
      right: GetWidth(6)
  }

});
