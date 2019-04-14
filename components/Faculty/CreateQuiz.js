import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
//type Props = {};
import bgimage from '../Images/1.jpeg';
import { ScrollView } from 'react-native-gesture-handler';
const { width: WIDTH } = Dimensions.get('window');

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            count: 1,
            name: null,
            question: null,
            optionA: null,
            optionB: null,
            optionC: null,
            optionD: null,
            ans: null,
            paper: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        }
    }

    componentDidMount() {
        this.setState({
            count: 1
        })
    }

    handleName = (name) => {
        this.setState({
            name
        })
    }

    handleQuestion = (question) => {
        this.setState({
            question
        })
    }

    handleOptionA = (optionA) => {
        this.setState({
            optionA
        })
    }

    handleOptionB = (optionB) => {
        this.setState({
            optionB
        })
    }

    handleOptionC = (optionC) => {
        this.setState({
            optionC
        })
    }

    handleOptionD = (optionD) => {
        this.setState({
            optionD
        })
    }

    handleAns = (ans) => {
        this.setState({
            ans
        })
    }

    handleNext = () => {
        let paper = this.state.paper;
        paper[this.state.count - 1].question = this.state.question;
        paper[this.state.count - 1].optionA = this.state.optionA;
        paper[this.state.count - 1].optionB = this.state.optionB;
        paper[this.state.count - 1].optionC = this.state.optionC;
        paper[this.state.count - 1].optionD = this.state.optionD;
        paper[this.state.count - 1].ans = this.state.ans;

        this.setState({
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            ans: "",
            paper
        });

        let count = this.state.count + 1;
        this.setState({
            count
        })
    }

    handleSubmit = () => {

        let paper = this.state.paper;
        paper[this.state.count - 1].question = this.state.question;
        paper[this.state.count - 1].optionA = this.state.optionA;
        paper[this.state.count - 1].optionB = this.state.optionB;
        paper[this.state.count - 1].optionC = this.state.optionC;
        paper[this.state.count - 1].optionD = this.state.optionD;
        paper[this.state.count - 1].ans = this.state.ans;

        this.setState({
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            ans: "",
            paper
        });

        const { db } = this.props.navigation.state.params;

        let upload = {};
        upload.paper = this.state.paper;
        upload.name = this.state.name;
        upload.studentsAppeared = [];
        // add list of appeared students to 'upload'
        db.collection('Question-Papers').add(upload)
            .then(() => console.log("Successfully Written"))
            .catch((e) => console.log(e.message()));

        this.props.navigation.navigate("FacultyLandingScreen");

    }

    render() {
        return (

            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.text}>
                            Create Quiz
                        </Text>
                    </View>
                    <View>

                        {this.state.count == 1 ?
                            (<TextInput
                                onChangeText={this.handleName}
                                style={styles.input2}
                                placeholder='Enter name (Format : ITNM-1-2019)'
                                placeholderTextColor='white'
                                underlineColorAndroid='transparent'
                            />) :
                            (null)}

                    </View>
                    <View>
                        <TextInput
                            onChangeText={this.handleQuestion}
                            style={styles.input1}
                            placeholder='Enter Question'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            value={this.state.question}
                        />
                    </View>
                    <View>
                        <TextInput
                            onChangeText={this.handleOptionA}
                            style={styles.input2}
                            placeholder='Option 1'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            value={this.state.optionA}
                        />
                    </View>
                    <View>
                        <TextInput
                            onChangeText={this.handleOptionB}
                            style={styles.input2}
                            placeholder='Option 2'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            value={this.state.optionB}
                        />
                    </View>
                    <View>
                        <TextInput
                            onChangeText={this.handleOptionC}
                            style={styles.input2}
                            placeholder='Option 3'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            value={this.state.optionC}
                        />
                    </View>
                    <View>
                        <TextInput
                            onChangeText={this.handleOptionD}
                            style={styles.input2}
                            placeholder='Option 4'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            value={this.state.optionD}
                        />
                    </View>
                    <View>
                        <TextInput
                            onChangeText={this.handleAns}
                            style={styles.input2}
                            placeholder='Answer'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'
                            value={this.state.ans}
                        />
                    </View>

                    {
                        this.state.count < 3 ? (
                            <TouchableOpacity style={styles.btn} onPress={this.handleNext}>
                                <Text style={styles.text}>Next</Text>
                            </TouchableOpacity>
                        ) : (
                                <TouchableOpacity style={styles.btn} onPress={this.handleSubmit} >
                                    <Text style={styles.text}>Submit</Text>
                                </TouchableOpacity>
                            )
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
    input1: {
        width: WIDTH - 25,
        height: 85,
        fontSize: 18,
        paddingLeft: 45,
        marginHorizontal: 25,
        backgroundColor: '#770A0A',
        color: 'white',
        marginTop: 120,
        justifyContent: 'center'
    },
    input2: {
        width: WIDTH - 25,
        height: 45,
        fontSize: 18,
        paddingLeft: 45,
        marginHorizontal: 25,
        backgroundColor: '#770A0A',
        color: 'white',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    },
});
