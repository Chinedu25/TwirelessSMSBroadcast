import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  bigButtonColorA,
  bigButtonColorB,
  lightColor,
} from "../../Util/colors";
import { GetHeight, GetWidth, GetFontSize } from "../../Util/GetDimensions";
import FlatButton from "../button/button";
import SearchBar from "../searchbar/searchBar";
import AddTypeModal from "./addTypeModal";

const ModalB = ({ title, onCancelAction, data, oldSelectedItems, onSelectAction }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [showAddType, setShowAddType] = useState(false);

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onCancelAction}
        style={styles.background}
      ></TouchableOpacity>
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
      ></LinearGradient>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> Select {title}</Text>
        <View style={{ marginTop: GetHeight(22) }}>
          <SearchBar placeholder={title} />
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

                    const index = selectedItems.findIndex((obj) => obj === item);
                    // if (selectedItems.includes(item)) {

                        if (index !== -1) {
                    //   setSelectedItems(() => {
                    //     return selectedItems.filter(
                    //       (item, i) => item !== selectedItems[i]
                    //     );
                    //   });
            
                      // Item is already in the array, so remove it
                      const newSelectedObjects = [...selectedItems];
                  //    newSelectedObjects.splice(item, 1);
                      newSelectedObjects.splice(index, 1);
                      setSelectedItems(newSelectedObjects);
                    } else {
                      setSelectedItems([...selectedItems, item]);
                    }
                    console.log(item);

                    console.log(selectedItems);
                  }}
                  isCheckMark={true}
                  checkMarkStatus={selectedItems.includes(item)}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          ListFooterComponent={() => (
            <TouchableOpacity
            onPress={()=>{
                setShowAddType(true);
            }}
              style={{ marginVertical: GetHeight(36), alignSelf: "center" }}
            >
              <Text style={styles.addText}>+ Add a {title}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={{ marginTop: GetHeight(32), alignSelf: "center" }}>
          <FlatButton
            buttonStyle={"lightColor"}
            title={"Select"}
            onPress={()=>{onSelectAction(selectedItems);
            onCancelAction();
            }}
          />
        </View>
        <View style={{ marginBottom: GetHeight(40) }} />
      </View>
      {
          showAddType === true ?
          <AddTypeModal onCancelAction={()=>{setShowAddType(false)}} title={title}/>
          :
          <></>
      }

    </View>
  );
};

export default ModalB;

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
    height: GetHeight(648),
    width: GetWidth(371),
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    opacity: 0.8,
    marginHorizontal: GetWidth(10),
  },
  innerContainer: {
    backgroundColor: "transparent",
    height: GetHeight(648),
    width: GetWidth(371),
    alignSelf: "center",
    position: "absolute",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
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
    marginTop: GetHeight(49),
    color: "white",
  },
  list: {
    backgroundColor: "white",
    width: GetWidth(320),
    height: GetHeight(357),
    marginTop: GetHeight(34),
    borderRadius: 1
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
