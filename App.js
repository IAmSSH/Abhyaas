import React from "react";
import StudentLanding from './components/Student/StudentLanding';
import FacultyLanding from './components/Faculty/FacultyLanding';
import StudentLogin from './components/Student/StudentLogin';
import FacultyLogin from './components/Faculty/FacultyLogin';
import Homepage from './components/Homepage';
import ForgotPassword from './components/ForgotPassword';
import SignInChoice from './components/SignInChoice';
import RegisterChoice from './components/RegisterChoice';
import CreateQuiz from './components/Faculty/CreateQuiz';
import GiveTest from './components/Student/GiveTest';
import StudentRegister from './components/Student/StudentRegister';
import FacultyRegister from './components/Faculty/FacultyRegister';
import StudentReport from './components/Student/StudentReport';
import FacultyReport from './components/Faculty/FacultyReport';
import GetTestId from './components/Faculty/GetTestId';
import ViewStudentReport from './components/Student/ViewStudentReport';
import DisplayFacultyReport from './components/Faculty/DisplayFacultyReport';
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
        ForgotPasswordScreen: ForgotPassword,
        SignInChoiceScreen: SignInChoice,
        RegisterChoiceScreen: RegisterChoice,
        GiveTestScreen: GiveTest,
        CreateQuizScreen: CreateQuiz,
        StudentRegisterScreen: StudentRegister,
        FacultyRegisterScreen: FacultyRegister,
        StudentReportScreen: StudentReport,
        FacultyReportScreen: FacultyReport,
        ViewStudentReportScreen: ViewStudentReport,
        DisplayFacultyReportScreen: DisplayFacultyReport,
        GetTestIdScreen: GetTestId
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