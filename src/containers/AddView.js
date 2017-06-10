import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import actions from '../actions/index';

class Header extends Component{
    render(){
        return (
            <View style={headerStyles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}style={headerStyles.back}>
                    <Icon name='keyboard-backspace' size={25} color="white" />
                </TouchableOpacity>
                <Text style={headerStyles.sortName}>
                    创建清单
                </Text>  
                <TouchableOpacity onPress={this.props.handleAdd}style={headerStyles.ok}>
                    <Icon name='done' size={30} color="white" />
                </TouchableOpacity>
            </View>
        )
    }
}
const headerStyles = {
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#6495ED',
        marginBottom: 10
    },
    back: {
        flex: 1,
        marginLeft: 20
    },
    ok: {
        flex: 1,
        marginRight: 10
    },
    sortName: {
        flex: 10,
        color: 'white',
        fontSize: 17
    }
}
@connect(state=>({
    todos: state.todos
}),dispatch=>({
    addList: name=>dispatch(actions.addList(name))
}))
export default class AddView extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    handleAdd = ()=>{
        this.props.addList(this.state.name);
        this.props.navigation.navigate('home');
    }
    render(){
        return (
            <View>
                <Header {...this.props} handleAdd={this.handleAdd}/>
                <Text>清单名称</Text>
                <TextInput onChangeText={name=>{this.setState({name})}}/>
            </View>
        )
    }
}