import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
//type Props = {};
import bgimage from '../Images/1.jpeg';
const { width: WIDTH } = Dimensions.get('window');
export default class TestID extends Component {

    handleIDInput = () => {

    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <View style={styles.div}>
                    <Text style={styles.text}>
                        Please Enter Test ID
                    </Text>
                    <TextInput
                        style={styles.input1}
                        placeholder='Test ID'
                        placeholderTextColor='#a5a9af'
                        placholderTextAlign='center'
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity onPress={this.handleIDInput}>
                        <Text>Enter</Text>
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
        marginTop: 120,
        marginHorizontal: 10
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
    input1: {
        width: WIDTH - 35,
        height: 45,
        fontSize: 24,
        marginHorizontal: 45,
        backgroundColor: '#770A0A',
        color: '#a5a9af',
        marginTop: 15,
        textAlign: 'center'
    },
});
