import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Header,Main} from '../components/items/index';
import actions from '../actions/index';

@connect(state=>({
    todos: state.todos
}),dispatch=>({
    deleteTodo: id=>dispatch(actions.deleteTodo(id)),
    completeTodo: id=>dispatch(actions.completeTodo(id))
}))
export default class Items extends Component {
    
    render(){
        const {params} = this.props.navigation.state;
        const sortName = this.props.todos.sorts[params.sort]
        return (
            <View style={styles.container}>
                <Header {...this.props} sortName={sortName}/>
                <Main {...this.props} sortName={sortName}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})