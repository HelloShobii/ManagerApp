import React , {Component} from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from './reducers/Index';
import Router from './Router';


class App extends Component {


    // for firebase working in Life cycle method
    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyCsk2FGiHjwpPCiZ5HMrf7QS4eQGDdour4',
                authDomain: 'manager-97d5d.firebaseapp.com',
                databaseURL: 'https://manager-97d5d.firebaseio.com',
                projectId: 'manager-97d5d',
                storageBucket: 'manager-97d5d.appspot.com',
                messagingSenderId: '481455719707'
            });

    }
    // for firebase working in Life cycle method

    render(){
        const store = createStore(reducers , {} , applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
    //Main screen perform render function
}

export default App;