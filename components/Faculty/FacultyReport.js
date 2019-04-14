import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ImageBackground, TextInput, Button, Dimensions, TouchableOpacity, Image } from 'react-native';
import bgimage from '../Images/bg2.jpeg';
const { width: WIDTH } = Dimensions.get('window');

export default class StudentReport extends Component {

    constructor() {
        super();
        this.state = {
            students: null, // [] of uid
            marks: null,
            name: null,
            results: null   // array of objects 
            /**
             * 0:
                name: "ITNM-1-2019"
                paper: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                __proto__: Object
                1: {name: "ITNM-1-2019", optionA: "Chctdrxjv", optionB: "Hcdrdyv", optionC: "Physrftyg", optionD: "Gctdtfvyuv", …}
                length: 2
             */
        }
    }

    // calculateMarks = () => {
    //     // to store marks with name of paper
    //     let marks = [];
    //     for (let i = 0; i < this.state.results.length; i++) {

    //         let count = 0;
    //         this.state.results.paper.map(que => {
    //             if (que.isCorrect == true) {
    //                 count++;
    //             }
    //         });

    //         marks.push({
    //             name: this.state.results[i].name,
    //             count: count
    //         })
    //     }
    //     this.setState({ marks })
    // }

    fetchRecords = () => {
        const { db } = this.props.navigation.state.params;
        this.state.students[0].forEach(studentUid => {
            db.collection("Users").doc(studentUid).collection("Tests").where("name", "==", this.state.name)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(doc => {
                        let results = this.state.results;
                        let data = doc.data();
                        let count = 0;
                        data.paper.forEach(que => {
                            if (que.isCorrect == true) {
                                count++;
                            }
                        })
                        let name;
                        db.collection("Users").doc(studentUid).get().then((doc) => { name = doc.data().name });
                        results.push({
                            name: name,
                            marks: count
                        })
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
                    students.push(doc.data().studentsAppeared);
                    // console.log(students);
                    this.setState({ students });

                })
            })
            .then(() => { this.fetchRecords() })
            .catch((e) => console.log(e.message))
    }

    handleNameChange = (name) => {
        this.setState({ name });
    }

    render() {
        var students = this.state.results.map(result => {
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
        })
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
