import { View, Text, StyleSheet, Image } from "react-native";
import React, {useEffect} from "react";

import { primaryColor } from "../Util/colors";
import { GetFontSize, GetHeight, GetWidth } from "../Util/GetDimensions";
import { Appname } from "../Util/GlobalValues";

const Preloader = ({navigation}) => {
  const logo = require("../assets/icons/small.png");

  const NavigateToScreen = screen => {
    setTimeout(() => {
      navigation.replace(screen);
    }, 1200);
  };
  useEffect(() => {
      NavigateToScreen('home');
  }, [])
  

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>{Appname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: "center"
  },
  image: {
    marginTop: GetHeight(336),
    height: GetHeight(72),
    width: GetWidth(206),
    resizeMode: "contain",
  },
  title: {
    width: GetWidth(191),
    height: GetHeight(42),
    fontFamily: "Gothic A1",
    fontStyle: 'normal',
    fontWeight: "800",
    fontSize: GetFontSize(16),
    lineHeight: 20,
    textAlign: "center",
    marginTop: GetHeight(14),
    color: "#FFFFFF",
  },
});

export default Preloader;
