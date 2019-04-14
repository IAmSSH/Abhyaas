import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ImageBackground, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import bgimage from '../Images/bg2.jpeg';
const { width: WIDTH } = Dimensions.get('window');

export default class DisplayFacultyReport extends Component {

    render() {
        console.log(this.props.navigation.state.params.subjectReport);
        var results = this.props.navigation.state.params.subjectReport.map(result => {
            return (
                <View style={styles.displayTable}>
                    <View style={styles.subjectName}>
                        <Text style={styles.text}>{result.name}</Text>
                    </View>
                    <View style={styles.marks}>
                        <Text style={styles.text}>{result.marks}/10</Text>
                    </View>
                </View>
            )
        });

        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <ScrollView style={styles.scroll}>
                    {
                        results
                    }
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
    },
    scroll: {
        marginTop: 140, backgroundColor: '#494949', marginBottom: 40, marginHorizontal: 5, width: '90%', height: null,
    },
    displayTable: {
        flexDirection: "row"
    },
    subjectName: {
        backgroundColor: '#770A0A', flex: 2, padding: 15, alignItems: 'center'
    },
    marks: {
        flex: 1, alignItems: 'center', padding: 15, backgroundColor: '#494949'
    },
    text: {
        color: 'white', fontSize: 20
    }
});