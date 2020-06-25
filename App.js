import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar, Dimensions } from 'react-native';
import Video from 'react-native-video';
import {LIVE_URL} from 'react-native-dotenv';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
export default class App extends Component {

    state = {
      url : LIVE_URL
    }

    componentDidMount(){
      console.log(this.state.url)
    }
    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent ></StatusBar>
                <View style={styles.header}>
                    <View style={styles.innerheader}>
                        <Text style={styles.heading}>Highlight</Text>
                    </View>
                </View>
                <View style={styles.bottomview}>
                    <Video source = {{uri:this.state.url}}
                        ref={(ref)=> this.player = ref}
                        style={styles.video}
                        controls
                    >
                    </Video>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    video : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height
    },
    header:
    {
        height: responsiveHeight(12),
        width: responsiveWidth(100),
        backgroundColor: '#ff0000'
    },
    innerheader:
    {
        marginTop: responsiveWidth(10),
        flexDirection: 'row',
        width: responsiveWidth(90),
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    heading:
    {
        fontSize: responsiveWidth(5),
        color: '#ffffff',
        fontWeight: 'bold',
    },
    bottomview:
    {
        width: responsiveWidth(100),
        backgroundColor: '#ffffff'
    }
})