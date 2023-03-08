import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BigButton from '../../components/button/bigButton';
import BroadCastSend from '../../assets/icons/broadcastSend.svg';
import SphereSVG from '../../assets/icons/sphere-svg.svg';
import { GetFontSize, GetHeight, GetWidth } from '../../Util/GetDimensions';
import GroupsIcon from "../../assets/icons/groups-icon.svg"
import BroadCastTower from "../../assets/icons/broadcast-tower.svg"
import BroadCastComIcon from "../../assets/icons/broadcastComIcon.svg"
import { SectorsData } from '../../components/DummyData/data';


const HomeGrid = ({navigation}) => {

    const GoToQuickBroadcast = ()=>{
        navigation.navigate("quickBroadcast");
    }

    const GoToNewBroadcast = ()=>{
        navigation.navigate("newBroadcast");
    }

    const GoToTypePage = (type, data)=>{
        console.log('Entered ', type);
        navigation.navigate("sectors", {
            data: data
        });
    }

  return (
    <View style={styles.grid}>
        <View style={styles.row}>
            <View style={styles.gridItem}>
            <BigButton onPress={GoToQuickBroadcast} icon={<BroadCastSend width={GetWidth(58)} height={GetHeight(58)}/>} label={"Quick Broadcast" } labelHeight={GetHeight(32)}/>
            </View>
            <View style={styles.gridItem}>
            <BigButton onPress={GoToNewBroadcast} icon={<BroadCastComIcon width={GetWidth(72)} height={GetHeight(72)}/>} label={" New Broadcast"} labelHeight={GetHeight(32)}/>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.gridItem}>
            <BigButton onPress={()=>{GoToTypePage('Sectors', SectorsData)}} icon={<SphereSVG width={GetWidth(64)} height={GetHeight(64)}/>} label={"Sectors"}/>
            </View>
            <View style={styles.gridItem}>
            <BigButton icon={<BroadCastTower width={GetWidth(58)} height={GetHeight(58)}/>} label={"Towers"}/>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.gridItem}>
            <BigButton icon={<GroupsIcon width={GetWidth(58)} height={GetHeight(58)}/>} label={"Groups"}/>
            </View>
            <View style={styles.gridItem}>
            <BigButton icon={<BroadCastSend width={GetWidth(58)} height={GetHeight(58)}/>} label={"Quick Broadcast"}/>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.gridItem}>
            <BigButton icon={<BroadCastSend width={GetWidth(58)} height={GetHeight(58)}/>} label={"Quick Broadcast"}/>
            </View>
            <View style={styles.gridItem}>
            {/* <BigButton icon={<BroadCastSend width={GetWidth(58)} height={GetHeight(58)}/>} label={"Quick Broadcast"}/> */}
            </View>
        </View>

    </View>
  )
}

export default HomeGrid

const styles = StyleSheet.create({
    grid:{
        alignItems: "center",
        alignSelf: "center",
        width: GetWidth(320)
    },
    row:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        marginTop: GetWidth(36),

    },
    gridItem: {
        width: '50%',
        alignItems: 'center',
        },
})