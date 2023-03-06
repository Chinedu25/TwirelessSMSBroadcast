import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import { bigButtonColorA, bigButtonColorB } from "../../Util/colors";
import { LinearGradient } from "expo-linear-gradient";

const BigButton = ({ icon, label, onPress, labelHeight }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[bigButtonColorB, bigButtonColorA]}
        start={{
          x: 1,
          y: 1,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        style={styles.container}
      >
        <View style={styles.icon}>{icon}</View>
        <Text style={[styles.label, {height: labelHeight != null ? labelHeight : GetHeight(16)}]}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  container: {
    width: GetWidth(111),
    height: GetHeight(107),
    borderRadius: 8,
    alignItems: "center",
  },
  label: {
    width: GetWidth(80),
    // height: GetHeight(38),
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: GetFontSize(11),
    lineHeight: GetFontSize(14),
    textAlign: "center",
    bottom: GetHeight(14),
    position: 'absolute',
    alignSelf: "center",
    color: "white",
  },
  icon: {
    position: "absolute",
    marginTop: GetHeight(15),
  },
});
