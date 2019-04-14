import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ImageBackground, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import bgimage from '../Images/bg2.jpeg';
const { width: WIDTH } = Dimensions.get('window');

export default class StudentReport extends Component {

    render() {
        // console.log(this.props.navigation.state.params.subjectReport);
        // var results = this.props.navigation.state.params.subjectReport.map(result => {
        //     return (
        //         <View style={styles.result}>
        //             <Text style={styles.subname}>{result.name}</Text>
        //             <Text style={styles.marks}>Marks obtained : {result.marksObtained}</Text>
        //         </View>
        //     )
        // });

        // var a = [{ name: 'ITNM', paper: [{ question: 'question' }, { question: 'question' }, { question: 'question' }] }, { name: null }, { name: 'ITNM', paper: [{ question: 'question' }, { question: 'question' }, { question: 'question' }] }];
        // var reports = a.map(ele => {
        //     return (ele.name ? (
        //         <View>

        //             {ele.paper.map(q => {
        //                 return (

        //                     <Text>{q.question}</Text>

        //                 )
        //             })}
        //         </View>
        //     ) : (null))
        // })

        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <ScrollView style={{ marginTop: 140, backgroundColor: '#494949', marginBottom: 40, marginHorizontal: 5, width: '90%', height: null, }}>
                    {/* {
                        results
                    } */}

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ backgroundColor: '#770A0A', flex: 2, padding: 15, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>ITNM-1-2019</Text>
                        </View>
                        <View style={{ alignItems: 'center', flex: 1, alignItems: 'center', padding: 15, backgroundColor: '#494949' }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>1/10</Text>
                        </View>
                    </View>

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
    result: {
        flexDirection: "row",
        color: 'white',
        fontSize: 30
    },
    scroll: {
        marginTop: 85,
    },
    subname: {
        flex: 4,
        color: 'white',
        fontSize: 30
    },
    marks: {
        flex: 1
    },
    text1: {
        marginTop: 10,
        color: 'white',
        fontSize: 35,
        marginHorizontal: 6,
        position: 'relative',
        flexDirection: 'column',
        textAlign: 'center'
    },
    quiz: {
        flex: 4,
        alignItems: 'center',
        marginTop: 150,
        backgroundColor: '#302E2E',
        width: WIDTH,
        height: 45,
    },
    question: {
        flex: 1,
        backgroundColor: '#380303',
        width: WIDTH
    },
    options: {
        flex: 6,
        marginVertical: 12,
        backgroundColor: '#302E2E',
        width: WIDTH - 25,
        flexDirection: "row",
        marginBottom: 20
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
        backgroundColor: '#302E2E',
        marginTop: 12,
        marginRight: 15,
        height: 40,
        justifyContent: 'center',
        textAlign: 'center'
    },
    img: {
        height: '100%',
        width: '100%'
    }
});
