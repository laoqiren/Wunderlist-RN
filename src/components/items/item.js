import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableHighlight} from 'react-native';
import CheckBox from 'react-native-check-box'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ListItem extends Component {
    handleComplete = ()=>{
        const {id,completeTodo} = this.props;
        completeTodo(id);
    }
    render(){
        const {title,endTime,id} = this.props;
        const time = new Date(endTime).getHours();
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('edit',{
                        flag: 0,
                        id,
                        title
                    })}}>
                    <View style={styles.item}>
                        <CheckBox
                            style={{flex: 1, padding: 10}}
                            onClick={this.handleComplete}
                            isChecked={false}
                        />
                        <Text style={styles.sortName}>{title}</Text>
                        <Text style={styles.count}>{time}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        marginBottom: 2
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        marginBottom: 10
    },
    icon: {
        flex: 2
    },
    sortName: {
        flex: 10,
        fontSize:16
    },
    count: {
        flex: 1
    }
})