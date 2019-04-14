import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
//type Props = {};
import bgimage from './Images/1.jpeg';
const { width: WIDTH } = Dimensions.get('window');



export default class SignInChoice extends Component {

    asStudent = () => {
        const { db } = this.props.navigation.state.params;
        const { auth } = this.props.navigation.state.params;

        this.props.navigation.navigate("StudentLoginScreen", { auth: auth, db: db });
    }

    asFaculty = () => {
        const { db } = this.props.navigation.state.params;
        const { auth } = this.props.navigation.state.params;

        this.props.navigation.navigate("FacultyLoginScreen", { auth: auth, db: db });
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
                        Login
                     </Text>
                    <TouchableOpacity style={styles.btn} onPress={this.asStudent} >
                        <Text style={styles.text}>Student</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.asFaculty} >
                        <Text style={styles.text}>Faculty</Text>
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
