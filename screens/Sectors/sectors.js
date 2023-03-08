import { StyleSheet, Text, View, FlatList } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { lightColor, bigButtonColorA, primaryColor } from "../../Util/colors";
import React, { useState } from "react";
import BackButton from "../../components/button/backButton";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import SearchBar from '../../components/searchbar/searchBar';

const Sectors = ({navigation, data}) => {
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
        <Text style={styles.title}>Sectors</Text>
        </View>
        <View style={{marginTop:GetHeight(20)}}>
            <SearchBar placeholder={'sector'} />
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
                  onPress={() => {
                  }}
                />
              </View>
            );
          }}
          />

          <Text style={styles.textButton}>
              + Create new sector
          </Text>
      </View>
    </View>
  </LinearGradient>
  )
}

export default Sectors;

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
        borderRadius: 8
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
        marginTop:GetHeight(32)
      },
      
})