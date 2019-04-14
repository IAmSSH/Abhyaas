import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import bgimage from '../Images/bg2.jpeg';
import books from '../Images/books.png';
import test from '../Images/test.png';
import que from '../Images/quiz.png';
import report from '../Images/report.png';

export default class App extends Component {

    handleTakeTest = () => {
        const { auth, db } = this.props.navigation.state.params;
        this.props.navigation.navigate("GiveTestScreen", { auth: auth, db: db });
    }

    handleReports = () => {
        const { auth, db } = this.props.navigation.state.params;
        this.props.navigation.navigate("StudentReportScreen", { auth: auth, db: db });
    }

    handleLogout = () => {

    }

    render() {
        return (
            <ImageBackground
                source={bgimage}
                style={styles.container}
                resizeMode="stretch"
            >
                <View style={styles.btn1}>
                    <View>
                        <TouchableOpacity style={styles.op} onPress={this.handleTakeTest}>
                            <Text style={styles.text}>Tests</Text>
                            <Image
                                style={styles.book}
                                source={test}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.btn}>
                    <View>
                        <TouchableOpacity style={styles.op} onPress={this.handleReports} >
                            <Image
                                style={styles.book1}
                                source={report}
                            />
                            <Text style={styles.text}>Reports</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btn3}>
                    <View>
                        <TouchableOpacity style={styles.op}>
                            <Text style={styles.text}>Notes</Text>
                            <Image
                                style={styles.book}
                                source={books}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btn}>
                    <View>
                        <TouchableOpacity style={styles.op}>
                            <Image
                                style={styles.book1}
                                source={que}
                            />
                            <Text style={styles.text}>Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.logout}>
                    <TouchableOpacity>
                        <Text style={styles.text}>Logout</Text>
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
    btn1: {
        width: 100,
        height: 100,
        flex: 2,
        flexDirection: 'row',
        marginRight: 230,
        justifyContent: 'center',
        marginTop: 100,
        alignItems: 'center'
    },
    btn: {
        flex: 2,
        width: 100,
        height: 100,
        marginLeft: 230,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn3: {
        flex: 2,
        width: 100,
        height: 100,
        flexDirection: 'row',
        marginRight: 230,
        justifyContent: 'center',
        backgroundColor: '#B10707',
        alignItems: 'center'
    },
    op: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundColor: '#750505',
        marginHorizontal: 5,
        textAlign: 'center'
    },
    text: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 20
    },
    logout: {
        flex: 1,
        width: WIDTH - 25,
        height: 2,
        justifyContent: 'center',
        marginTop: 6,
        marginBottom: 9,
        backgroundColor: '#302E2E',
        alignItems: 'center'
    },
    book: {
        position: 'relative',
        height: 80,
        width: 80,
        left: 10
    },
    book1: {
        position: 'relative',
        height: 80,
        width: 80,
        right: 70,
        marginRight: -75
    },
})