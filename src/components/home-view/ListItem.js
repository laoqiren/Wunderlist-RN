
import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ListItem extends Component {
    render(){
        const {sortName,num} = this.props;
        const iconNames = ['theaters','book','work'];
        const sum = (this.props.todos.data.filter(todo=>todo.sort === num && !todo.completed)).length;
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('items',{sort:num})}>
                    <View style={styles.item}>
                        <Icon size={25} color='#6495ED' name={iconNames[this.props.num] || 'view-headline'} style={styles.icon}/>
                        <Text style={styles.sortName}>{sortName}</Text>
                        <Text style={styles.count}>{sum}</Text>
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
        alignItems: 'center'
    },
    icon: {
        flex: 2
    },
    sortName: {
        flex: 15,
        fontSize:16
    },
    count: {
        flex: 1
    }
})