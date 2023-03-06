import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { lightColor, primaryColor } from "../../Util/colors";
import { Appname } from "../../Util/GlobalValues";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import FlatInput from "../../components/Input/flatInput";
import UserIcon from "../../assets/icons/UserIcon.svg";
import KeyPass from "../../assets/icons/keypass.svg";
import FlatButton from "../../components/button/button";

const Login = ({ navigation }) => {
  const logo = require("../../assets/icons/small.png");

  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["white", lightColor]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.box}
      >
        <Image source={logo} style={styles.image} />
        <Text style={styles.Appname}>{Appname}</Text>
        <Text style={styles.title}>Login</Text>
        <View style={{ marginTop: GetHeight(64) }}>
          <FlatInput
            iconImage={<UserIcon width={GetWidth(24)} height={GetHeight(24)} />}
            placeholder={"johndoe123"}
          />
        </View>
        <View style={{ marginTop: GetHeight(33) }}>
          <FlatInput
            iconImage={<KeyPass width={GetWidth(24)} height={GetHeight(24)} />}
            placeholder={"*********"}
            type={"password"}
          />
        </View>
        <View style={{ marginTop: GetHeight(48) }}>
          <FlatButton
            onPress={() => {
              console.log("Hello");
            }}
            title={"Log In"}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: GetHeight(83),
    height: GetHeight(44.04),
    width: GetWidth(126),
    resizeMode: "contain",
  },
  Appname: {
    width: GetWidth(116.83),
    height: GetHeight(25.69),
    fontFamily: "Gothic A1",
    marginTop: GetHeight(8.56),
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: GetFontSize(11),
    lineHeight: GetFontSize(14),
    textAlign: "center",
    color: primaryColor,
  },
  title: {
    width: GetWidth(86),
    height: GetHeight(50),
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "800",
    marginTop: GetHeight(70.7),
    fontSize: GetFontSize(32),
    lineHeight: GetFontSize(40),
    textAlign: "center",
    color: primaryColor,
  },
});
