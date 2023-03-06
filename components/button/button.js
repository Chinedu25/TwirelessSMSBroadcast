import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { labelButtonColor, lightColor, primaryColor } from "../../Util/colors";
import { GetWidth, GetHeight } from "../../Util/GetDimensions";
import CheckMark from "../../assets/icons/checkMark.svg";
import CheckMarkFilled from "../../assets/icons/checkMarkFilled.svg";

const FlatButton = ({
  onPress,
  title,
  buttonStyle,
  isCheckMark,
  checkMarkStatus,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            buttonStyle == "lightColor"
              ? lightColor
              : buttonStyle == "labelColor"
              ? labelButtonColor
              : primaryColor,

          borderWidth: buttonStyle == "labelColor" ? 1 : 0,
          borderColor: primaryColor,
          width: buttonStyle == "labelColor" ? GetWidth(287) : GetWidth(320),
        },
      ]}
      onPress={onPress}
      {...rest}
    >
      {isCheckMark === true ? (
        <View style={styles.checkMark}>
          {checkMarkStatus === true ? <CheckMarkFilled /> : <CheckMark />}
        </View>
      ) : (
        <></>
      )}

      <Text
        style={[
          styles.text,
          {
            color:
              buttonStyle == "lightColor"
                ? primaryColor
                : buttonStyle == "labelColor"
                ? primaryColor
                : "white",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    width: GetWidth(320),
    height: GetHeight(50),
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    elevation: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  checkMark: {
    position: "absolute",
    left: GetWidth(9),
    top: GetHeight(9),
  },
});

export default FlatButton;
