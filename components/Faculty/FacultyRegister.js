import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import bgimage from '../Images/bg2.jpeg';

const { width: WIDTH } = Dimensions.get('window');

export default class FacultyRegister extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            branch: null,
            subject: null,
            username: null,
            password: null,
        }
    }

    handleName = (name) => {
        this.setState({ name });
    }

    handleBranch = (branch) => {
        this.setState({ branch });
    }

    handleSubject = (subject) => {
        this.setState({ subject });
    }

    handleUsername = (username) => {
        this.setState({ username });
    }

    handlePassword = (password) => {
        this.setState({ password });
    }

    handleSubmit = () => {
        this.props.navigation.state.params.createUser(this.state);
    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <ScrollView>
                    <View>
                        <Text style={styles.text}> REGISTER AS TEACHER </Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Name'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            onChangeText={this.handleName}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Branch'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            onChangeText={this.handleBranch}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Subject'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            onChangeText={this.handleSubject}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            onChangeText={this.handleUsername}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='white'
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={this.handlePassword}
                        />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={this.handleSubmit} >
                        <Text style={styles.text1}>REGISTER</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        textAlign: 'center'
    },
    input: {
        width: WIDTH - 25,
        height: 45,
        fontSize: 24,
        paddingLeft: 45,
        marginHorizontal: 25,
        backgroundColor: '#770A0A',
        color: 'white',
        marginTop: 15
    },
    btn: {
        width: WIDTH - 25,
        height: 45,
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#302E2E',
        alignItems: 'center'
    },
    text: {
        marginTop: 125,
        marginBottom: 25,
        color: 'white',
        fontSize: 24,
        justifyContent: 'center',
        textAlign: 'center'
    },
    text1: {
        color: 'white',
        fontSize: 24
    },
});
