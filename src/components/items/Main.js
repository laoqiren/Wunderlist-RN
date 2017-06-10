import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListItem from './item';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCompleted: false
        }
    }
    renderList = ()=>{
        const {params} = this.props.navigation.state;
        let todos =this.props.todos.data.filter(todo=>todo.sort===params.sort);
        if(!this.props.showCompleted){
            todos = todos.filter(todo=>!todo.completed);
        }
        if(!todos.length) return null;
        return todos.map((todo,idx)=>{
            return <ListItem {...this.props} id={todo.id} title={todo.title} endTime={todo.endTime} key={idx} length={todos.length} num={idx} isFirst={idx===0} isLast={idx===todos.length-1}/>
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.list}>
                    {this.renderList()}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('edit',{
                        flag: 1})}>
                        <View style={styles.add}>
                            <Icon name="add" size={25} color="white" style={{flex:1,marginLeft: 2}}/>
                            <Text style={{flex: 10,color:'white',fontSize:16}}>创建任务</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    add: {
        backgroundColor: '#6495ED',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        height: 50
    }
})

