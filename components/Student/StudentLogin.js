import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgimage from '../Images/bg.jpeg';
const { width: WIDTH } = Dimensions.get('window');

export default class StudentLogin extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            err: false,
            errorMessage: null
        };
        this.state.customStyles = {
            color: 'red'
        }
    }

    usernameChange = (e) => {
        this.setState({
            username: e
        })
    }

    passwordChange = (e) => {
        this.setState({
            password: e
        })
    }

    handleLogin = () => {
        const { auth } = this.props.navigation.state.params;
        const { db } = this.props.navigation.state.params;

        const promise = auth.signInWithEmailAndPassword(this.state.username, this.state.password);
        promise.then(() => this.props.navigation.navigate("StudentLandingScreen", { auth: auth, db: db }))
            .catch(err => this.setState({
                err: true,
                errorMessage: err.message
            }));
    }



    handleForgotPassword = () => {
        const { auth } = this.props.navigation.state.params;

        this.props.navigation.navigate("ForgotPasswordScreen", { auth: auth });
    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <Text> {this.state.err ? this.state.errorMessage : null} </Text>
                <View>
                    <TextInput
                        onChangeText={this.usernameChange}
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View>
                    <TextInput
                        onChangeText={this.passwordChange}
                        style={styles.input1}
                        placeholder='Password'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={this.handleLogin}>
                    <Text style={styles.text1}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text1} onPress={this.handleForgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
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
    input: {
        width: WIDTH - 65,
        height: 45,
        fontSize: 18,
        paddingLeft: 15,
        marginHorizontal: 5,
        backgroundColor: '#770A0A',
        color: 'white',
        marginTop: 225
    },
    input1: {
        width: WIDTH - 65,
        height: 45,
        fontSize: 18,
        paddingLeft: 15,
        marginHorizontal: 5,
        backgroundColor: '#770A0A',
        color: 'white',
        marginTop: 5
    },
    btn: {
        width: WIDTH - 150,
        height: 45,
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 15,
        backgroundColor: '#302E2E',
        alignItems: 'center'
    },
    text: {
        marginTop: 205,
        marginLeft: 20,
        marginBottom: 5,
        color: 'white',
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center'
    },
    text1: {
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center'
    },
});
