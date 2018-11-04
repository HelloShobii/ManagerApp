import React , {Component} from 'react';
import {View} from 'react-native';
import {Button, Card,Confirm} from "./common";
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {employeeUpdate,employeeEditSave,employeeDelete} from '../actions/EmployeeActions';
import {connect} from 'react-redux';

class EditEmployee extends Component{

    state = {showModal:false};

    componentWillMount(){
        _.each(this.props.employee , (value , props) => {
           this.props.employeeUpdate({props,value});
        });
    }

    onButtonPress(){
        const {name,phone,shift} = this.props;
        this.props.employeeEditSave({name,phone,shift, uid: this.props.employee.uid});
    }

    onTextPress(){

        const {phone,shift} = this.props;
        Communications.text(phone , `Your-Upcoming-Shift-is-on-${shift}`);
    }

    onAccept(){

        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline(){

        this.setState({showModal:false});
    }

    render(){
        return(
           <Card>
               <EmployeeForm/>
               <View style={{paddingTop:30}}>
                   <Button onPress={this.onButtonPress.bind(this)}>
                       Save Employee
                   </Button>
               </View>
               <View style={{paddingTop:30}}>
                   <Button onPress={this.onTextPress.bind(this)}>
                   Text Schedule
                   </Button>
               </View>

               <View style={{paddingTop:30}}>
                   <Button onPress={()=> this.setState({ showModal: !this.state.showModal})}>
                       Fire Employee
                   </Button>
               </View>

               <Confirm
                   visible={this.state.showModal}
                   onAccept={this.onAccept.bind(this)}
                   onDecline={this.onDecline.bind(this)}
               >
                   you want to Fire the Employee?
               </Confirm>
           </Card>
        );
    }
}

const mapStateToProps = (state) => {

    const {name,phone,shift} = state.employeeForm;
    return{name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate,employeeEditSave,employeeDelete})(EditEmployee);