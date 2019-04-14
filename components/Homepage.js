import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgimage from './Images/1.jpeg';
const { width: WIDTH } = Dimensions.get('window');

import * as firebase from 'firebase';
import '@firebase/firestore'

var config = {
    apiKey: "AIzaSyDnAVOCVPYHFD1nIzZnUBAAECZ4ntsfZOw",
    authDomain: "minor-abhyas.firebaseapp.com",
    databaseURL: "https://minor-abhyas.firebaseio.com",
    projectId: "minor-abhyas",
    storageBucket: "minor-abhyas.appspot.com",
    messagingSenderId: "723673013454"
};
firebase.initializeApp(config);

var auth = firebase.auth();
var db = firebase.firestore();

export default class Homepage extends Component {

    // static navigationOptions = {
    //     title: 'Home',
    //     headerStyle: {
    //         backgroundColor: '#494949',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };

    loginPress = () => {
        this.props.navigation.navigate("SignInChoiceScreen", { auth: auth, db: db });
    }

    registerPress = () => {
        this.props.navigation.navigate("RegisterChoiceScreen", { auth: auth, db: db });
    }

    render() {

        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <View style={styles.div}>
                    <TouchableOpacity style={styles.btn} onPress={this.loginPress}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.registerPress}>
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    div: {
        marginTop: 240,
        marginHorizontal: 70
    },
    btn: {
        width: WIDTH - 65,
        height: 75,
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#302E2E',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
});
