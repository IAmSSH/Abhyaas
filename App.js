import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import StudentLanding from './components/Student/StudentLanding';
import FacultyLanding from './components/Faculty/FacultyLanding';
import StudentLogin from './components/Student/StudentLogin';
import FacultyLogin from './components/Faculty/FacultyLogin';
import Homepage from './components/Homepage';
import SignInChoice from './components/SignInChoice';
import RegisterChoice from './components/RegisterChoice';
import CreateQuiz from './components/Faculty/CreateQuiz';
import GiveTest from './components/Student/GiveTest';
import StudentRegister from './components/Student/StudentRegister';
import FacultyRegister from './components/Faculty/FacultyRegister';
import StudentReport from './components/Student/StudentReport';
import TestID from './components/Student/TestID';
import ViewStudentReport from './components/Student/ViewStudentReport';
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as firebase from 'firebase';
import '@firebase/firestore'

const AppNavigator = createStackNavigator(
    {
        StudentLandingScreen: StudentLanding,
        FacultyLandingScreen: FacultyLanding,
        StudentLoginScreen: StudentLogin,
        FacultyLoginScreen: FacultyLogin,
        HomepageScreen: Homepage,
        SignInChoiceScreen: SignInChoice,
        RegisterChoiceScreen: RegisterChoice,
        GiveTestScreen: GiveTest,
        CreateQuizScreen: CreateQuiz,
        StudentRegisterScreen: StudentRegister,
        FacultyRegisterScreen: FacultyRegister,
        StudentReportScreen: StudentReport,
        ViewStudentReportScreen: ViewStudentReport,
        TestIDScreen: TestID
    },
    {
        initialRouteName: "HomepageScreen",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#494949',
            }
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

    render() {
        return <AppContainer />;
    }
}