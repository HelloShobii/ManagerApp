import React , {Component} from 'react';
import _ from 'lodash';
import { YellowBox } from 'react-native';
import {View , Text , ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions/EmployeeActions';
import EmployeeListItem from './EmployeeListItems';

//For Not Showing Yellow Errors Warning
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};
//For Not Showing Yellow Errors Warning

class EmployeeList extends Component {

    componentWillMount(){

        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){

        //NextProps are the Next set of props that this component will
        // be renderd with this.props is still the old set of props.

        this.createDataSource(nextProps);
    }

    createDataSource({employees}){

        const ds = new ListView.DataSource({
           rowHasChanged:(r1,r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <EmployeeListItem employee={employee} />;
    }

    render(){
     return(
        <ListView
         enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
     );
    }
}
const mapStateToProps = state => {

    const employees = _.map(state.employees , (val, uid)=>{
       return { ...val ,uid};
    });

    return {employees};
};

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);