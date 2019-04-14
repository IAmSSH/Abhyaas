import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgimage from '../Images/1.jpeg';

const { width: WIDTH } = Dimensions.get('window');

export default class ForgotPassword extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            id: null,
            loaded: false
        }
    }

    handleNameChange = (name) => {
        this.setState({ name })
    }

    handleEnter = () => {
        const { db } = this.props.navigation.state.params;
        db.collection("Question-Papers").where('name', '==', this.state.name).get()
            .then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    this.setState({
                        id: doc.id,
                        loaded: true
                    })
                })
            })
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
                        Enter name of the test
                    </Text>
                    <TextInput
                        style={styles.input1}
                        placeholder='Test name'
                        placeholderTextColor='#a5a9af'
                        placholderTextAlign='center'
                        underlineColorAndroid='transparent'
                        onChangeText={this.handleNameChange}
                    />
                    <Button title="Enter" onPress={this.handleEnter} />
                </View>

                {
                    this.state.loaded ? (
                        <Text style={{ fontSize: 20, color: 'white', marginTop: 15 }}>{this.state.id}</Text>
                    ) : (
                            null
                        )
                }

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