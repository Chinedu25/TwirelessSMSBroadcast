import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ModalA from "../../components/Modal/modalA";
import { messageTemplateData } from "../../components/DummyData/data";
import { GetHeight, GetFontSize, GetWidth } from "../../Util/GetDimensions";
import { primaryColor, lightColor } from "../../Util/colors";
import FlatButton from "../../components/button/button";
import DeleteIcon from "../../assets/icons/deleteIcon.svg";
import EditFileIcon from "../../assets/icons/editFileIcon.svg";
import CreateMessageModal from "../../components/Modal/createMessageModal";

const MessageTemplateModal = ({ onCancelAction, onSelectTemplate }) => {
  const [showAddMessageTemp, setShowAddMessageTemp] = useState(false);
  const [showEditMessageTemp, setShowEditMessageTemp] = useState(false);

  const messageDataPrefab = ({ item, i }, index) => {
    return (
      <TouchableOpacity
        onPress={onSelectTemplate}
        style={styles.container}
        key={i}
      >
        <Text style={styles.message}>{item}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
          onPress={()=>{
              setShowEditMessageTemp(true);
          }}
          style={{ marginRight: GetWidth(5) }}>
            <EditFileIcon width={GetWidth(18)} height={GetHeight(18)} />
          </TouchableOpacity>
          <TouchableOpacity>
            <DeleteIcon width={GetWidth(18)} height={GetHeight(18)} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <ModalA
        noBottomPadding={true}
        data={
          <FlatList
            data={messageTemplateData}
            renderItem={messageDataPrefab}
            ListFooterComponent={() => (
              <TouchableOpacity
                onPress={() => {
                  setShowAddMessageTemp(true);
                }}
                style={{ marginVertical: GetHeight(36), alignSelf: "center" }}
              >
                <Text style={styles.addText}>+ Add new message</Text>
              </TouchableOpacity>
            )}
          />
        }
        onCancelAction={onCancelAction}
        title={"Message Template"}
      />
      {
          showAddMessageTemp == true ?
          <CreateMessageModal 
          title={"Create Message Template"}
          inputPlaceholder={'Write new message'}
          actionButtonTitle={"Add Message"}
          onCancelAction={()=>{
              setShowAddMessageTemp(false);
          }}
          />
          :
          <></>
      }

{
          showEditMessageTemp == true ?
          <CreateMessageModal 
          title={"Edit Message Template"}
          inputPlaceholder={'Write new message'}
          actionButtonTitle={"Confirm"}
          onCancelAction={()=>{
              setShowEditMessageTemp(false);
          }}
          />
          :
          <></>
      }
    </View>
  );
};

export default MessageTemplateModal;

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  container: {
    backgroundColor: "white",
    width: GetWidth(320),
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: primaryColor,
    elevation: 5,
    marginTop: GetHeight(19),
    marginHorizontal: GetWidth(20),
  },
  message: {
    // height: GetHeight(226),
    width: GetWidth(290),
    // marginHorizontal:GetWidth(10),
    // marginVertical: GetHeight(10),
    textDecorationLine: "none",
    textAlign: "left",
    textAlignVertical: "top",
    fontFamily: "Gothic A1",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: GetFontSize(12),
    lineHeight: GetFontSize(15),
    color: primaryColor,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginVertical: GetHeight(5),
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
