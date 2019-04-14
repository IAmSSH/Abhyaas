import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ImageBackground, TextInput, Button, Dimensions, TouchableOpacity, Image } from 'react-native';
import bgimage from '../Images/bg2.jpeg';
const { width: WIDTH } = Dimensions.get('window');

export default class StudentReport extends Component {

    constructor() {
        super();
        this.state = {
            students: null,
            marks: null,
            name: null,
            results: null
        }
    }

    fetchRecords = () => {
        const { db } = this.props.navigation.state.params;
        this.state.students.forEach(studentUid => {
            db.collection("Users").doc(studentUid).collection("Tests").where("name", "==", this.state.name)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(doc => {
                        let results = [];
                        let data = doc.data();
                        let count = 0;
                        data.result.paper.forEach(que => {
                            if (que.isCorrect == true) {
                                count++;
                            }
                        })

                        db.collection("Users").doc(studentUid).get().then((doc) => {
                            results.push({
                                name: doc.data().name,
                                marks: count
                            })
                        }).catch((e) => console.log(e));

                        this.setState({ results });
                        this.props.navigation.navigate('DisplayFacultyReportScreen', { subjectReport: this.state.results });
                    })
                })
        })
    }

    handleNameSubmit = () => {
        const { db } = this.props.navigation.state.params;
        var students = [];
        db.collection("Question-Papers").where("name", "==", this.state.name)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    students = (doc.data().studentsAppeared);
                    this.setState({ students });
                    this.fetchRecords()
                })
            })
            .catch((e) => console.log(e.message))
    }

    handleNameChange = (name) => {
        this.setState({ name });
    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <TextInput
                    placeholder="Enter name of test"
                    style={{ backgroundColor: 'yellow', marginTop: 90, paddingHorizontal: 30, paddingVertical: 10, marginBottom: 10 }}
                    onChangeText={this.handleNameChange}
                />
                <Button
                    title="Enter"
                    onPress={this.handleNameSubmit}
                />
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
        marginTop: 40, backgroundColor: '#494949', marginBottom: 40, marginHorizontal: 5, width: '90%', height: null,
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
