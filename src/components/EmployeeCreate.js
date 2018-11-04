import React , {Component} from 'react';
import {Card ,Button} from './common/index';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {View} from 'react-native';
import {employeeUpdate , employeeCreate} from "../actions/EmployeeActions";

class EmployeeCreate extends Component
{
    onButtonPress(){
        const {name,phone,shift}=this.props;
        this.props.employeeCreate({name , phone , shift:shift || 'Monday'});
    }

    render(){
        return(

            <Card>
                <EmployeeForm {...this.props}/>

                <View style={{paddingTop:30}}>
                    <Button onPress={this.onButtonPress.bind(this)}>
                    Create Employee
                    </Button>
                </View>
            </Card>

    );
    }
}


const mapStateToProps =(state) => {

 const {name,phone,shift} = state.employeeForm;
 return {name,phone,shift};
};
export default connect(mapStateToProps,{employeeUpdate , employeeCreate})(EmployeeCreate);