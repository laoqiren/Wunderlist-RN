import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View,Text,TouchableHighlight,Button,StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Header,Main} from '../components/home-view/index';
import actions from '../actions/index';
import {AppNavigator} from './App';
@connect(state=>({
    todos: state.todos
}),dispatch=>({
    actions: bindActionCreators(actions,dispatch)
}))
export default class HomeView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.container}>
                <Header {...this.props}/>
                <Main {...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})