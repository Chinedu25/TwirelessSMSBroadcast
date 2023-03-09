import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { lightColor, bigButtonColorA, primaryColor } from "../../Util/colors";
import React, { useState, useEffect } from "react";
import BackButton from "../../components/button/backButton";
import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
import SearchBar from '../../components/searchbar/searchBar';
import FlatButton from "../../components/button/button";
import AddTypeModal from '../../components/Modal/addTypeModal';


const Type = ({navigation, route}) => {

  const data = route.params.data;
  const type = route.params.type;

  const [showAddType, setShowAddType] = useState(false);

  const GoToOpenedType = (selectedType, data)=>{
    navigation.navigate('opened-type',{
      selectedType: selectedType
    })
  }

  useEffect(()=>{
console.log(data);
  },[])

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
        <Text style={styles.title}>{type}</Text>
        </View>
        <View style={{marginTop:GetHeight(20)}}>
            <SearchBar placeholder={type} />
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
                    GoToOpenedType(item);
                  }}
                />
              </View>
            );
          }}
          />
<TouchableOpacity onPress={()=>{
  setShowAddType(true);
}}>
<Text style={styles.textButton}>
              + Create new {type}
          </Text>
</TouchableOpacity>

      </View>

    </View>
    {
          showAddType === true ?
          <AddTypeModal onCancelAction={()=>{setShowAddType(false)}} title={type}/>
          :
          <></>
      }
  </LinearGradient>
  )
}

export default Type;

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