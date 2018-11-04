import React from 'react';
import {Scene , Router} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EditEmployee from "./components/EditEmployee";
const RouterComponent = () => {

    return(

        <Router sceneStyle={{paddingTop:60}}>
            <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Manager Login" />
            </Scene>
            <Scene key="main">
            <Scene
                onRight={() => Actions.employeeCreate()}
                rightTitle="ADD"
                leftTitle="Log Out"
                onLeft={()=> Actions.auth()}
                key="employeeList"
                component={EmployeeList}
                title="Employees" />

             <Scene
                 key="employeeCreate"
                 component={EmployeeCreate}
                 title="Create Employee"
                  />
                <Scene
                  key="employeeEdit"
                  component={EditEmployee}
                  title="Edit Employee"
                />
            </Scene>
        </Router>

    );

};
export default RouterComponent;