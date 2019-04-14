import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgimage from '../Images/bg2.jpeg';
import TimerCountdown from "react-native-timer-countdown";
import * as firebase from 'firebase';
import '@firebase/firestore'

const { width: WIDTH } = Dimensions.get('window');

export default class GiveTest extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            group: null,
            testId: null,
            loaded: null,
            questionPaper: null,
            count: null,
            ans: null
        }
    }

    componentDidMount() {
        this.setState({
            loaded: false,
            count: 0
        })
    }

    handleTestId = (testId) => {
        this.setState({
            testId
        })
    }

    handleIdSubmit = () => {
        const { db } = this.props.navigation.state.params;
        var docRef = db.collection("Question-Papers").doc(this.state.testId);

        docRef.get().then(doc => { this.setState({ questionPaper: doc.data(), loaded: true, name: doc.data().name }) })
            .catch(function (error) {
                console.log("Error getting document:", error);
            });
    }

    handleAnswer = (ans) => {
        this.setState({
            ans
        })
    }

    handleAnswerPress = () => {
        let question = this.state.questionPaper.paper[this.state.count];

        if (this.state.ans.toLowerCase() === question.ans.toLowerCase()) {
            question.isCorrect = true;
        }

        let count = this.state.count + 1;
        this.setState({
            count
        })
    }

    handleSubmit = () => {
        const { db } = this.props.navigation.state.params;
        const { auth } = this.props.navigation.state.params;

        var listRef = db.collection("Question-Papers").where("name", "==", this.state.name);
        listRef.get()
            .then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    db.collection("Question-Papers").doc(doc.id).update({
                        studentsAppeared: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid)
                    });
                })
            })
            .catch((err) => console.log(err.message));

        db.collection("Users").doc(auth.currentUser.uid).collection("Tests").doc(this.state.testId).set({
            result: this.state.questionPaper,
            name: this.state.name,
            group: this.state.name.slice(0, this.state.name.indexOf('-'))
        })
            .then(() => this.props.navigation.navigate("StudentLandingScreen"))
            .catch((e) => console.log("Error: " + e));
    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >

                <View style={{ position: 'absolute', top: 20, left: 5 }}>
                    <TimerCountdown
                        initialMilliseconds={1000 * 60 * 12}
                        onExpire={this.handleSubmit}
                        formatMilliseconds={(milliseconds) => {
                            const remainingSec = Math.round(milliseconds / 1000);
                            const seconds = parseInt((remainingSec % 60).toString(), 10);
                            const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                            const hours = parseInt((remainingSec / 3600).toString(), 10);
                            const s = seconds < 10 ? '0' + seconds : seconds;
                            const m = minutes < 10 ? '0' + minutes : minutes;
                            let h = hours < 10 ? '0' + hours : hours;
                            h = h === '00' ? '' : h + ':';
                            return h + m + ':' + s;
                        }}
                        allowFontScaling={true}
                        style={{ color: 'white', fontSize: 25 }}
                    />
                </View>

                {
                    !this.state.loaded ? (
                        <View>
                            <TextInput
                                placeholder="TestID"
                                onChangeText={this.handleTestId}
                            />

                            <TouchableOpacity style={styles.btn} onPress={this.handleIdSubmit} >
                                <Text style={styles.text}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (null)
                }

                {
                    this.state.loaded ? (
                        <View style={styles.quiz}>
                            <View style={styles.question}>
                                <Text style={styles.text1}>Q: {this.state.questionPaper.paper[this.state.count].question}?</Text>
                            </View>
                            <View style={styles.options}>
                                <View style={styles.options1}>
                                    <View style={styles.options3}>
                                        <Text style={styles.text1}>(A)</Text>
                                    </View>
                                    <View style={styles.options3}>
                                        <Text style={styles.text1}>(B)</Text>
                                    </View>
                                    <View style={styles.options3}>
                                        <Text style={styles.text1}>(C)</Text>
                                    </View>
                                    <View style={styles.options3}>
                                        <Text style={styles.text1}>(D)</Text>
                                    </View>
                                </View>
                                <View style={styles.options2}>
                                    <View style={styles.options3}>
                                        <Text style={styles.options4}>{this.state.questionPaper.paper[this.state.count].optionA}</Text>
                                    </View>
                                    <View style={styles.options3}>
                                        <Text style={styles.options4}>{this.state.questionPaper.paper[this.state.count].optionB}</Text>
                                    </View>
                                    <View style={styles.options3}>
                                        <Text style={styles.options4}>{this.state.questionPaper.paper[this.state.count].optionC}</Text>
                                    </View>
                                    <View style={styles.options3}>
                                        <Text style={styles.options4}>{this.state.questionPaper.paper[this.state.count].optionD}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                            null
                        )
                }

                {
                    this.state.loaded ? (
                        <View>
                            <TextInput
                                style={styles.input1}
                                placeholder='Your Answer'
                                placeholderTextColor='white'
                                underlineColorAndroid='transparent'
                                maxLength={1}
                                onChangeText={this.handleAnswer}
                            />
                        </View>
                    ) : (
                            null
                        )
                }

                {
                    this.state.loaded ? (

                        <View style={styles.btnView}>

                            {
                                this.state.count < (2 - 1) ? (
                                    <TouchableOpacity style={styles.btn} onPress={this.handleAnswerPress}>
                                        <Text style={styles.text}>Next</Text>
                                    </TouchableOpacity>

                                ) : (
                                        <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
                                            <Text style={styles.text}>Submit</Text>
                                        </TouchableOpacity>
                                    )
                            }

                        </View>
                    ) : (
                            null
                        )
                }

            </ImageBackground >
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
        fontSize: 27,
        textAlign: 'center',
    },
    text1: {
        marginTop: 140,
        color: 'white',
        fontSize: 20,
        marginHorizontal: 6,
        position: 'relative',
        flexDirection: 'column',
        textAlign: 'center'
    },
    btn: {
        borderRadius: 10,
        width: WIDTH - 230,
        fontSize: 20,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#302E2E',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
    },
    btnView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quiz: {
        flex: 4,
        alignItems: 'center',
        marginTop: 150,
        backgroundColor: '#302E2E',
        width: WIDTH - 25,
        height: 45,
    },
    question: {
        flex: 1,
        backgroundColor: '#380303',
        width: WIDTH - 25
    },
    options: {
        flex: 6,
        marginVertical: 12,
        backgroundColor: '#302E2E',
        width: WIDTH - 25,
        flexDirection: "row"
    },
    options1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    options2: {
        flex: 4,
        justifyContent: 'center',
        textAlign: 'center',
    },
    options3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
    },
    options4: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3d3b3b',
        marginVertical: 3,
        marginRight: 15,
        height: 50,
        justifyContent: 'center',
        textAlign: 'center'
    }
});