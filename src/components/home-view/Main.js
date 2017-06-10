import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListItem from './ListItem';

export default class Main extends Component {
    constructor(props){
        super(props);
    }
    renderList = ()=>{
        const {todos} = this.props;
        if(!todos.sorts.length || !todos.sorts) return null;
        return todos.sorts.map((key,idx)=>{
            return <ListItem {...this.props} sortName={key} key={idx} length={todos.sorts.length} num={idx} isFirst={idx===0} isLast={idx===todos.sorts.length-1}/>
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.list}>
                    {this.renderList()}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('addList')}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="add" size={25} color="#6495ED" style={{flex: 1}}/>
                            <Text style={{flex: 8}}>创建清单</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="主页" onPress={() => console.log("notes tapped!")}>
                        <Icon name="home" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="添加任务" onPress={() => {this.props.navigation.navigate('edit',{flag:1})}}>
                        <Icon name="add" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="所有任务" onPress={() => {}}>
                        <Icon name="phone" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
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
    }
})

