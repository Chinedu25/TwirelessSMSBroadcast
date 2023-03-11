import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { lightColor, bigButtonColorA, primaryColor } from "../../Util/colors";
import React, { useState, useEffect } from "react";
import BackButton from "../../components/button/backButton";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import SearchBar from "../../components/searchbar/searchBar";
import FlatButton from "../../components/button/button";

const OpenedType = ({ navigation, route }) => {
  const data = route.params.data;
  const selectedType = route.params.selectedType;

  useEffect(() => {
    console.log(data);
  }, []);

  return (
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
      <View style={{ justifyContent: "space-around" }}>
        <BackButton navigation={navigation} />
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.title}>{selectedType}</Text>
          </View>
          <View style={{ marginTop: GetHeight(20) }}>
            <SearchBar placeholder={"client"} />
          </View>
          <FlatList
            persistentScrollbar={true}
            style={styles.list}
            data={data}
            renderItem={({ item, i }, index) => {
              return (
                <View style={{ marginTop: GetHeight(27), alignSelf: "center" }}>
                  <FlatButton
                    buttonStyle={"labelColor"}
                    title={item}
                    onPress={() => {}}
                   
                  />
                </View>
              );
            }}
            ListFooterComponent={() => (
                <TouchableOpacity
                onPress={()=>{
                   // setShowAddType(true);
                }}
                  style={{ marginVertical: GetHeight(36), alignSelf: "center" }}
                >
                  <Text style={styles.addText}>+ Add a client</Text>
                </TouchableOpacity>
              )}
          />
          <TouchableOpacity>
            <Text style={styles.textButton}>Send broadcast -{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default OpenedType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: GetFontSize(24),
    lineHeight: GetFontSize(40),
    marginTop: GetHeight(76),
    width: GetWidth(256),
    display: "flex",
    height: GetHeight(50),
    color: primaryColor,
  },
  subContainer: {
    alignItems: "center",
  },
  list: {
    backgroundColor: "white",
    width: GetWidth(320),
    height: GetHeight(439),
    marginTop: GetHeight(34),
    borderRadius: 8,
  },
  textButton: {
    textAlign: "right",
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: GetFontSize(14),
    lineHeight: GetFontSize(18),
    color: primaryColor,
    marginLeft: GetWidth(193),
    marginTop: GetHeight(32),
  },
  addText: {
    textAlign: "center",
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: GetFontSize(14),
    lineHeight: GetFontSize(18),
    display: "flex",
    alignSelf: "center",
    color: lightColor,
  },
});
