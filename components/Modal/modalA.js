import { StyleSheet, Text, View, TouchableOpacity  } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { bigButtonColorA, bigButtonColorB } from "../../Util/colors";
import { GetHeight, GetWidth, GetFontSize } from "../../Util/GetDimensions";
import FlatButton from "../button/button";


const ModalA = ({ noBottomPadding, title, onCancelAction, data }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onCancelAction} style={styles.background}></TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
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
          {data}

          {noBottomPadding == true ? (
            <></>
          ) : (
            <View style={{ marginBottom: GetHeight(40) }} />
          )}
        </View>
      </LinearGradient>

      <View style={{ marginTop: GetHeight(32), alignSelf: "center" }}>
        <FlatButton
          buttonStyle={"lightColor"}
          title={"Cancel"}
          onPress={onCancelAction}
        />
      </View>
    </View>
  );
};

export default ModalA;

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
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: GetWidth(10),
    maxHeight: GetHeight(440),
  },
  innerContainer: {
    backgroundColor: "white",
    alignSelf: "center",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "98%",
    marginTop: GetHeight(5),
    marginBottom: GetHeight(18),
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
    marginBottom: GetHeight(26),
    color: "white",
  },
});
