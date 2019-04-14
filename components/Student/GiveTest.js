import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
//type Props = {};
import bgimage from '../Images/bg2.jpeg';
import { ScrollView } from 'react-native-gesture-handler';
import TimerCountdown from "react-native-timer-countdown";

const { width: WIDTH } = Dimensions.get('window');
export default class GiveTest extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            group: null,
            testId: null,
            loaded: null,
            questionPaper: null,    //it is an object which has {name and paper}, paper is an array of objects [{},{},{}...]
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
        // console.log(question);
        let count = this.state.count + 1;
        this.setState({
            count
        })
    }

    handleSubmit = () => {
        // console.log(this.state.questionPaper);
        // store questionPaper in users DB and revrt back to choice screen.

        const { db } = this.props.navigation.state.params;
        const { auth } = this.props.navigation.state.params;

        db.collection("Users").doc(auth.currentUser.uid).collection("Tests").doc(this.state.testId).set({
            result: this.state.questionPaper,
            name: this.state.name,
            group: this.state.name.slice(0, this.state.name.indexOf('-'))

        })
            .then(() => this.params.navigation.navigate("StudentLandingScreen"))
            .catch((e) => console.log("Error: " + e));
    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >

                {/* <View style={{ position: 'absolute', top: 20, left: 5 }}> */}
                {/* <TimerCountdown
                        // initialMilliseconds={1000 * 60 * 10}
                        initialMilliseconds={1000 * 5}
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
                    /> */}
                {/* </View> */}

                <View style={{ marginTop: 100, width: '80%', alignItems: 'center', marginBottom: 15, paddingBottom: 20 }}>
                    <TextInput
                        placeholder="Test ID"
                        onChangeText={this.handleTestId}
                        style={{ backgroundColor: 'grey', width: '100%', marginBottom: 10, textAlign: 'center' }}
                        placeholderTextColor='white'
                    // style={styles.text1}
                    />
                    <TouchableOpacity onPress={this.handleIdSubmit}
                        style={{ backgroundColor: 'black', width: '40%', height: 40, color: 'white', fontSize: 18, justifyContent: 'center', borderRadius: 10 }}
                    >
                        <Text
                            style={{ textAlign: 'center', color: 'white' }}
                        >Enter</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>

                    <View style={{ backgroundColor: '#770A0A', width: '100%', marginVertical: 3, width: WIDTH }}>
                        <Text style={{ fontSize: 20, color: 'white', marginHorizontal: 4 }} >
                            What is xyz?
                        </Text>
                    </View>

                    <View style={{ backgroundColor: '#302E2E', width: '100%', marginVertical: 3, width: WIDTH }}>
                        <Text style={{ fontSize: 20, color: 'white', marginHorizontal: 4 }}>
                            brbvlwierbvil
                        </Text>
                        <Text style={{ fontSize: 20, color: 'white', marginHorizontal: 4 }}>
                            brbvlwierbvil
                        </Text>
                        <Text style={{ fontSize: 20, color: 'white', marginHorizontal: 4 }}>
                            brbvlwierbvil
                        </Text>
                        <Text style={{ fontSize: 20, color: 'white', marginHorizontal: 4 }}>
                            brbvlwierbvil
                        </Text>

                        <TextInput maxLength={1} onChangeText={this.handleAnswer} placeholder="Answer" style={{ borderWidth: 1, borderColor: 'yellow' }} />

                        <TouchableOpacity onPress={this.handleAnswerPress} >
                            <Text>Answer</Text>
                        </TouchableOpacity>
                    </View>




                    {/* {this.state.loaded ? (
                        <ScrollView>
                            <Text>
                                {this.state.questionPaper.paper[this.state.count].question}
                            </Text>
                            <Text>
                                {this.state.questionPaper.paper[this.state.count].optionA}
                            </Text>
                            <Text>
                                {this.state.questionPaper.paper[this.state.count].optionB}
                            </Text>
                            <Text>
                                {this.state.questionPaper.paper[this.state.count].optionC}
                            </Text>
                            <Text>
                                {this.state.questionPaper.paper[this.state.count].optionD}
                            </Text>
                            <TextInput maxLength={1} onChangeText={this.handleAnswer} placeholder="Answer" style={{ borderWidth: 1, borderColor: 'yellow' }} />
                            {
                                this.state.count < (2 - 1) ? (
                                    <TouchableOpacity onPress={this.handleAnswerPress} >
                                        <Text>Answer</Text>
                                    </TouchableOpacity>
                                ) : (
                                        <TouchableOpacity onPress={this.handleSubmit} >
                                            <Text>Submit</Text>
                                        </TouchableOpacity>
                                    )
                            }
                        </ScrollView>
                    ) : (
                            <Text>
                                Please enter test ID
                        </Text>
                        )} */}
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