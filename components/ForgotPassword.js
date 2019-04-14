import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
//type Props = {};
import bgimage from './Images/1.jpeg';
const { width: WIDTH } = Dimensions.get('window');

export default class ForgotPassword extends Component {

    constructor() {
        super();
        this.state = {
            email: null
        }
    }

    handleEmailChange = (email) => {
        this.setState({ email })
    }

    handleEnter = () => {
        const { auth } = this.props.navigation.state.params;

        auth.sendPasswordResetEmail(this.state.email).then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <View>
                    <Text style={styles.text}>
                        Enter your E-Mail
                    </Text>
                    <TextInput
                        style={styles.input1}
                        placeholder='E-Mail ID'
                        placeholderTextColor='#a5a9af'
                        placholderTextAlign='center'
                        underlineColorAndroid='transparent'
                        onChangeText={this.handleEmailChange}
                    />
                    <Button title="Enter" onPress={this.handleEnter} />
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
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    input1: {
        width: WIDTH - 35,
        height: 45,
        fontSize: 20,
        backgroundColor: '#770A0A',
        color: '#a5a9af',
        marginVertical: 15,
        textAlign: 'center'
    },
});