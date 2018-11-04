import React , {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged , passwordChanged , loginUser} from '../actions'
import {CardSection} from './common/CardSection';
import {Card} from "./common/Card";
import {Input} from "./common/Input";
import {Spinner} from "./common/Spinner";
import {View , Text} from 'react-native';
import {Button} from "./common";

class LoginForm extends Component{

    onEmailChange(text){

        this.props.emailChanged(text);
    }

    onPasswordChange(text){

        this.props.passwordChanged(text);
    }

    onButtonPress(){

        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }

    renderButton(){

        if (this.props.loading){
            return <Spinner size="large"/>;
        }
        return (

            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render(){
        return(
                  <Card>
                        <CardSection>
                               <Input
                                   label="Email"
                                   placeholder="user@gmail.com"
                                   onChangeText={this.onEmailChange.bind(this)}
                                  value={this.props.email}
                               />
                         </CardSection>

                         <CardSection>
                                <Input
                                    secureTextEntry
                                    label="Password"
                                    placeholder="Password"
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                 />
                          </CardSection>

                          <Text style={styles.textErrorStyle}>
                              {this.props.error}
                          </Text>

                          <CardSection>
                              {this.renderButton()}
                           </CardSection>
                   </Card>
        );
    }
}

const styles={

    textErrorStyle:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
    }
};

const mapStateToProps = ({ auth }) => {

     const { email , password , error , loading } = auth;

     return { email , password , error , loading};
};

export default connect(mapStateToProps,{emailChanged , passwordChanged , loginUser })(LoginForm);