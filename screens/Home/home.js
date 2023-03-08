import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { lightColor, primaryColor} from "../../Util/colors";
import Tlogo from "./Tlogo";
import { Appname } from "../../Util/GlobalValues";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import HomeGrid from "./homeGrid";

const Home = ({ navigation }) => {
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
        <Tlogo user={"Ikenna"} />
        <Text style={styles.appname}>{Appname}</Text>
        <HomeGrid navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
  },
  appname: {
    textAlign: "center",
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: GetFontSize(24),
    lineHeight: GetFontSize(30),
    marginTop: GetHeight(50),
    width: GetWidth(159),
    alignSelf: "center",
    display: "flex",
    height: GetHeight(70),
    color: primaryColor,
  },
});
