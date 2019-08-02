import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class HomeScreen extends Component{
    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('5%'),
        backgroundColor: 'white',
    },
    wrapContent: {
        width: wp('90%'),
        height: wp('90%'),
        paddingBottom: wp('5%'),
        
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#46c3ad",
    }
})