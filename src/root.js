import React,{Component} from 'react';
import {Provider} from 'react-redux';
//import SplashScreen from 'react-native-splash-screen'
import App from './containers/App';
import configureStore from './store/configureStore';

export default class Root extends Component {
    componentDidMout(){
        
    }
    render(){
        return (
            <Provider store={configureStore()}>
                <App />
            </Provider>
        )
    }
}