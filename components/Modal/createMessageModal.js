import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  bigButtonColorA,
  bigButtonColorB,
  lightColor,
} from "../../Util/colors";
import { GetHeight, GetWidth, GetFontSize } from "../../Util/GetDimensions";
import FlatButton from "../button/button";
import PlainInput from "../Input/plainInput";

const CreateMessageModal = ({inputValue ,inputPlaceholder,onCancelAction, title, actionButtonTitle, onPressAction }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onCancelAction}
        style={styles.background}
      ></TouchableOpacity>
      <LinearGradient
        style={styles.container}
        colors={[bigButtonColorA, bigButtonColorB]}
        start={{
          x: 1,
          y: 1,
        }}
        end={{
          x: 1,
          y: 0,
        }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={{ marginTop: GetHeight(38) }}>

          <PlainInput placeholder={inputPlaceholder}/>
          </View>


          <View style={{ marginTop: GetHeight(51) }}>
            <FlatButton 
            onPress={onPressAction}
            title={actionButtonTitle} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CreateMessageModal;

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    opacity: 0.8,
    backgroundColor: "black",
  },
  container: {
    height: GetHeight(518),
    width: GetWidth(371),
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    opacity: 0.9,
    marginHorizontal: GetWidth(10),
  },
  innerContainer: {
    backgroundColor: "transparent",
    //backgroundColor: 'white',
    height: GetHeight(400),
    width: GetWidth(361),
    alignSelf: "center",
    //position: "absolute",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
    // marginTop: GetHeight(5),
    // marginBottom: GetHeight(18),
  },
  title: {
    textAlign: "center",
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: GetFontSize(20),
    lineHeight: GetFontSize(40),
    width: GetWidth(256),
    display: "flex",
    alignSelf: "center",
    height: GetHeight(50),

    color: "white",
  },
});
