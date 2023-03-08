import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import { placeholderColor, primaryColor } from "../../Util/colors";
import SearchIcon from "../../assets/icons/search-icon.svg";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={[styles.background]}>
      <View style={styles.box}>
        <View>
          <SearchIcon width={GetWidth(18)} height={GetHeight(18)} />
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholderTextColor={placeholderColor}
        placeholder={"search " + placeholder}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    borderRadius: 8,
    height: GetHeight(36),
    width: GetWidth(320),
    justifyContent: "center",
  },
  box: {
    position: "absolute",
    backgroundColor: primaryColor,
    borderRadius: 8,
    height: GetHeight(36),
    width: GetWidth(50),
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginLeft: GetWidth(68),
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: GetFontSize(12),
    lineHeight: GetFontSize(15),
    display: "flex",
    alignItems: "center",
    color: primaryColor,
  },
});
