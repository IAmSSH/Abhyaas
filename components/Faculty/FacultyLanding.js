import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import bgimage from '../Images/bg.jpeg';
import books from '../Images/books.png';
import test from '../Images/test.png';
import que from '../Images/quiz.png';
import report from '../Images/report.png';
//type Props = {};
export default class FacultyLanding extends Component {

    handleCreateTest = () => {
        const { db } = this.props.navigation.state.params;
        const { auth } = this.props.navigation.state.params;

        this.props.navigation.navigate("CreateQuizScreen", { db: db, auth: auth });
    }

    handleLogout = () => {
        const { auth } = this.props.navigation.state.params;
        auth.signOut()
            .then(() => this.params.navigation.navigate("HomepageScreen"))
            .catch((err) => console.log(err));
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
                        <TouchableOpacity style={styles.op} onPress={this.handleCreateTest}>
                            <Text style={styles.text}>Create Test</Text>
                            <Image
                                style={styles.book}
                                source={test}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.btn}>
                    <View>
                        <TouchableOpacity style={styles.op}>
                            <Image
                                style={styles.book1}
                                source={report}
                            />
                            <Text style={styles.text}>Results</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btn3}>
                    <View>
                        <TouchableOpacity style={styles.op}>
                            <Text style={styles.text}>Upload Notes</Text>
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
                            <Text style={styles.text}>Generate Test ID</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.logout}>
                    <TouchableOpacity onPress={this.handleLogout}>
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
        backgroundColor: '#B10707',
        alignItems: 'center',
    },
    btn: {
        flex: 2,
        width: 100,
        height: 100,
        marginLeft: 230,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#B10707',
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
        //justifyContent:'center',
        marginHorizontal: 5,
        textAlign: 'center'
    },
    text: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 20,
        textAlign: 'center'
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
        height: 70,
        width: 70,
        left: -15
    },
    book1: {
        position: 'relative',
        height: 70,
        width: 70,
        right: 60,
        marginRight: -65
    },
})