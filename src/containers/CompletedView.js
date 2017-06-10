import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

@connect(state=>({
    todos: state.todos
}))
export default class Completed extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const hasCompleted = this.props.todos.data.filter(todo=>todo.completed);
        const notCompleted = this.props.todos.data.filter(todo=>!todo.completed);
        return (
            <View style={styles.container}>
                <View style={headerStyles.container}>
                    <Text style={headerStyles.sortName}>我的纪录</Text>
                </View>
                <View style={styles.count}>
                    <View style={styles.countItem}>
                        <Text style={styles.ItemNum}>{hasCompleted.length}<Text style={{fontSize:15}}>已完成</Text></Text>
                    </View>
                    <View style={styles.countItem}>
                        <Text style={styles.ItemNum}>{notCompleted.length}<Text style={{fontSize:15}}>未完成</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
}
const headerStyles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6495ED'
    },
    sortName: {
        flex: 1,
        color: 'white',
        fontSize: 19,
        textAlign: 'center'
    }
})
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    count: {
        height: 150,
        backgroundColor: '#6495ED',
        flexDirection: 'row'
    },
    countItem: {
        flex: 1 ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ItemNum: {
        textAlign: 'center',
        fontSize:30,
        color: 'white'
    }
})