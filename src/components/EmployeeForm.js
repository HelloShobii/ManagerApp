import React , {Component} from 'react';
import {View,Text,Picker} from 'react-native';
import {CardSection , Input} from './common/index';
import {connect} from 'react-redux';
import {employeeUpdate} from "../actions/EmployeeActions";

class EmployeeForm extends Component{

    render(){
        return(

            <View>

                <CardSection>

                    <Input
                        label="Name"
                        placeholder="Employee Name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({props:'name',value})}
                    />

                </CardSection>

                <CardSection>

                    <Input
                        label="Phone"
                        placeholder="0336-3405364"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({props:'phone',value})}
                    />
                </CardSection>

                <Text style={styles.pickerTextStyle}>
                    Shift
                </Text>

                <CardSection>
                    <Picker
                        style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({props:'shift',value})}>
                        <Picker.Item  label="Monday" value="Monday" style={styles.pickerItemStyle} />
                        <Picker.Item  label="Tuesday" value="Tuesday"  style={styles.pickerItemStyle} />
                        <Picker.Item  label="Wednesday" value="Wednesday"  style={styles.pickerItemStyle} />
                        <Picker.Item  label="Thursday" value="Thursday"  style={styles.pickerItemStyle} />
                        <Picker.Item  label="Friday" value="Friday"  style={styles.pickerItemStyle} />
                        <Picker.Item  label="Saturday" value="Saturday"  style={styles.pickerItemStyle} />
                        <Picker.Item  label="Sunday" value="Sunday"  style={styles.pickerItemStyle} />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const styles={
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:15,
        paddingTop:15,
        paddingBottom:10
    },
    pickerItemStyle:{
        fontSize:18,
        paddingLeft:5
    }
};

const mapStateToProps = (state) =>{

    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);