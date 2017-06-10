import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'react-native-button';
import actions from '../actions';


class Header extends Component {
    render(){
        return (
            <View style={headerStyles .container}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}style={headerStyles.back}>
                    <Icon name='keyboard-backspace' size={25} color="white" />
                </TouchableOpacity>
                <Text style={headerStyles.sortName}>
                    {this.props.title || '创建任务'}
                </Text>  
            </View>
        )
    }
}
const headerStyles = StyleSheet.create({
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
    sortName: {
        flex: 10,
        color: 'white',
        fontSize: 17
    }
})
@connect(state=>({
    todos: state.todos
}),dispatch=>({
    editTodo: bindActionCreators(actions.editTodo,dispatch),
    addTodo: bindActionCreators(actions.addTodo,dispatch)
}))
export default class Edit extends Component{
    constructor(props){
        super(props);
        const {params} = this.props.navigation.state;
        const flag = params.flag;

        if(flag===0){
            id = params.id;
            todo = this.props.todos.data.filter(todo=>todo.id === id)[0];
            this.state = {
                title: todo.title,
                content: todo.content,
                addr: todo.addr,
                hour: new Date(todo.endTime).getHours().toString(),
                sort: todo.sort.toString()
            }
        } else {
            this.state = {
                title: '',
                content: '',
                addr: '',
                hour: '',
                sort: ''
            }
        }
        
    }
    handleSave = ()=>{
        const {editTodo,addTodo} = this.props;
        const {params} = this.props.navigation.state;
        const flag = params.flag;

        const {title,hour,sort,content,addr} = this.state;
        if(flag===0){
            id = params.id;
            editTodo(id,title,hour,parseInt(sort),content,addr);
            
        } else {
            addTodo(title,hour,parseInt(sort),content,addr);
        }
        this.props.navigation.navigate('home');

    }
    renderForm = ()=>{
        const {params} = this.props.navigation.state;
        const flag = params.flag;
        let id,todo;
        return (
            <View style={{flex: 1}}>
                <View style={[styles.itemCommon]}>
                    <Icon name="date-range" size={25} style={styles.iconCommon}/>
                    <TextInput value={this.state.hour} placeholder="结束时间" style={styles.ContentCommon} onChangeText={(hour)=>this.setState({
                       hour})}/>
                </View>
                <View style={[styles.itemCommon]}>
                    <Icon name="pin-drop" size={25} style={styles.iconCommon}/>
                    <TextInput value={this.state.addr} placeholder="地点" style={styles.ContentCommon} onChangeText={addr=>this.setState({
                       addr})}/>
                </View>
                <View style={[styles.itemCommon]}>
                    <Icon name="bookmark-border" size={25} style={styles.iconCommon}/>
                    <TextInput value={this.state.title} placeholder="任务名" style={styles.ContentCommon} onChangeText={title=>this.setState({title})}/>
                </View>
                <View style={[styles.itemCommon]}>
                    <Icon name="border-color" size={25} style={styles.iconCommon}/>
                    <TextInput value={this.state.content} placeholder="详细" style={styles.ContentCommon} onChangeText={content=>this.setState({content})}/>
                </View>
                <View style={[styles.itemCommon]}>
                    <Icon name="folder" size={25} style={styles.iconCommon}/>
                    <TextInput value={this.state.sort} placeholder="所属清单" style={styles.ContentCommon} onChangeText={sort=>this.setState({sort})}/>
                </View>
                
            </View>
        )
    }
    render(){
        return (
            <View style={styles.container}>
                <Header {...this.props} title={this.props.navigation.state.params.title}/>
                {this.renderForm()}
               <Button style={{fontSize: 16,color:'white'}} containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#6495Ee',marginLeft:40,marginRight:40}} onPress={this.handleSave}>
                   {!this.props.navigation.state.params.flag?'保存修改':'添加任务'}</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemCommon: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center'
    },
    iconCommon: {
        flex: 1
    },
    ContentCommon: {
        flex: 7
    },
    time: {
        height: 50
    }
})