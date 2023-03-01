import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';

const refWidth = 390;
const refHeight = 844;

export function GetHeight(value) {
  const ratio = value / refHeight;
  return Dimensions.get('window').height * ratio;
}

export function GetWidth(value) {
  const ratio = value / refWidth;
  // const newVal = PixelRatio.getPixelSizeForLayoutSize(Math.round(Dimensions.get("window").width * ratio))
  return Math.round(Dimensions.get('window').width * ratio);
  //return PixelRatio.roundToNearestPixel(newVal)
}

export function GetFontSize(value) {
  const ratio = value / refWidth; // get ratio based on your standard scale
  const newSize = Math.round(ratio * Dimensions.get('window').width);
  return newSize;
}
