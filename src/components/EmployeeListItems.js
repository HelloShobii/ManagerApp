import React , {Component} from 'react';
import {Text , View , TouchableWithoutFeedback} from 'react-native';
import {CardSection} from "./common/index";
import {Actions} from 'react-native-router-flux';

class EmployeeListItems extends Component{

    onRowPress(){

        Actions.employeeEdit({employee: this.props.employee});
    }

    render(){
        const { name }= this.props.employee;
    return(
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View style={{paddingTop:10}}>
      <CardSection>
          <Text style={styles.titleTextStyle}>
              {name}
          </Text>
      </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
    }
}

const styles={
  titleTextStyle:{
      fontSize:20,
      paddingRight:250,
      paddingLeft:10,
      justifyContent:'center'

  }
};

export default EmployeeListItems;