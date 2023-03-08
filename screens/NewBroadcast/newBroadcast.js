import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { lightColor, bigButtonColorA, primaryColor } from "../../Util/colors";
  import React, { useState } from "react";
  import BackButton from "../../components/button/backButton";
  import { GetFontSize, GetHeight, GetWidth } from "../../Util/GetDimensions";
  import DropDown from "../../components/dropDown/dropDown";
  import UserIcon from "../../assets/icons/UserIcon.svg";
  import ModalA from "../../components/Modal/modalA";
  import FlatButton from "../../components/button/button";
  import ModalB from "../../components/Modal/modalB";
  import { SectorsData } from "../../components/DummyData/data";
  import GroupsIcon from "../../assets/icons/groups-icon.svg";
  import SphereSVG from "../../assets/icons/sphere-svg.svg";
  import BroadCastTower from "../../assets/icons/broadcast-tower.svg";
  import ListIcon from "../../assets/icons/list-icon.svg";
  import PlainInput from "../../components/Input/plainInput";
  import MessageTemplateModal from "../QuickBroadcast/messageTemplateModal";
  import Checkbox from "../../components/checkbox/checkbox";
import { ScrollView } from "react-native-gesture-handler";
  
  const NewBroadcast = ({ navigation }) => {
    const [typeSelectionModalOpen, setTypeSelectionModalOpen] = useState(false);
    const [areaSelectionModalOpen, setAreaSelectionModalOpen] = useState(false);
    const [messageTempModalOpen, setMessageTempModalOpen] = useState(false);
  
    const [saveTemplateOnSend, setSaveTemplateOnSend] = useState(false);
  
    const [selectedType, setSelectedType] = useState(null);
  
    const [message, setMessage] = useState('');
  
    const typeSelectionOption = ["Group", "Sector", "Tower"];
  
    const [typeSelectedList, setTypeSelectedList] = useState([]);
  
  
  
    const TypeSelectionData = (item, i) => {
      return (
        <View style={{ marginTop: GetHeight(19) }} key={i}>
          <FlatButton
            buttonStyle={"labelColor"}
            title={item}
            onPress={() => {
              setSelectedType(item);
              setTypeSelectionModalOpen(false);
            }}
          />
        </View>
      );
    };
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
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
                <Text style={styles.title}>New Broadcast</Text>
  
                <View style={{ marginTop: GetHeight(48) }}>
                  <DropDown
                    value={selectedType}
                    onPress={() => {
                      setTypeSelectionModalOpen(!typeSelectionModalOpen);
                    }}
                    iconImage={
                      selectedType == null || "" ? (
                        <></>
                      ) : selectedType == "Group" ? (
                        <GroupsIcon width={GetWidth(24)} height={GetHeight(24)} />
                      ) : selectedType == "Sector" ? (
                        <SphereSVG width={GetWidth(24)} height={GetHeight(24)} />
                      ) : selectedType == "Tower" ? (
                        <BroadCastTower
                          width={GetWidth(24)}
                          height={GetHeight(24)}
                        />
                      ) : (
                        <UserIcon width={GetWidth(24)} height={GetHeight(24)} />
                      )
                    }
                    placeholder={"Select type"}
                  />
                </View>
  
                <View
                  style={{
                    marginTop: GetHeight(19),
                    opacity: selectedType != null || "" ? 1 : 0.4,
                  }}
                >
                  <DropDown
                    onPress={() => {
                      if (selectedType == null || "") return;
                      setAreaSelectionModalOpen(true);
                    }}
                    iconImage={
                      <ListIcon width={GetWidth(34)} height={GetHeight(34)} />
                    }
                    value={typeSelectedList}
                    placeholder={
                      selectedType != null || ""
                        ? "Select " + selectedType
                        : "...."
                    }
                  />
                </View>
                <View style={{ marginTop: GetHeight(34) }}>
                  <PlainInput 
                  onValueChanged={(value)=>{
                    setMessage(value);
                  }}
                  value={message}
                  placeholder={"Write a message"} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setMessageTempModalOpen(true);
                  }}
                  style={{ marginTop: GetHeight(16) }}
                >
                  <Text style={styles.miniTextButton}>Message Template</Text>
                </TouchableOpacity>
                <View style={{ marginTop: GetHeight(41) }}>
                  <FlatButton title={"Send"} />
                </View>
                <View
                  style={{
                    marginLeft: GetWidth(200),
                    marginVertical: GetHeight(12),
                  }}
                >
                  <Checkbox
                    isChecked={saveTemplateOnSend}
                    label={"Save template"}
                    onPress={() => {
                      setSaveTemplateOnSend(!saveTemplateOnSend);
                    }}
                  />
                </View>
              </View>
            </View>
  
            {typeSelectionModalOpen === true ? (
              <ModalA
                onCancelAction={() => {
                  setTypeSelectionModalOpen(!typeSelectionModalOpen);
                }}
                title={"Select Type"}
                data={typeSelectionOption.map(TypeSelectionData)}
              />
            ) : (
              <></>
            )}
  
            {areaSelectionModalOpen === true ? (
              <ModalB
                onCancelAction={() => {
                  setAreaSelectionModalOpen(!areaSelectionModalOpen);
                }}
                onSelectAction={(list) => {
                  setTypeSelectedList(list);
                  //   setAreaSelectionModalOpen(!areaSelectionModalOpen);
                }}
                title={selectedType}
                data={SectorsData}
              />
            ) : (
              <></>
            )}
  
            {messageTempModalOpen === true ? (
              <MessageTemplateModal
                onCancelAction={() => {
                  setMessageTempModalOpen(false);
                }}
                onSelectTemplate={(_item)=>{
                 setMessage(_item);
               
                }}
              />
            ) : (
              <></>
            )}
          </LinearGradient>
            </ScrollView>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default NewBroadcast;
  
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
      fontSize: GetFontSize(32),
      lineHeight: GetFontSize(40),
      marginTop: GetHeight(92),
      width: GetWidth(256),
      display: "flex",
      height: GetHeight(50),
      color: primaryColor,
    },
    subContainer: {
      alignItems: "center",
    },
    miniTextButton: {
      textAlign: "right",
      fontFamily: "Gothic A1",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: GetFontSize(13),
      lineHeight: GetFontSize(18),
      color: bigButtonColorA,
      marginLeft: GetWidth(193),
    },
  });
  