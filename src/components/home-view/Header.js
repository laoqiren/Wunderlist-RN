import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //const {todos} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.nickName}>LuoXia</Text>
                <Icon style={styles.icon} name="snooze" color="white" size={25}/>
                <Icon style={styles.icon} name="email" color="white" size={25}/>
                <Icon style={styles.icon} name="search" color="white" size={25}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6495ED',
        marginBottom: 10
    },
    nickName: {
        marginLeft: 18,
        fontSize: 20,
        color: 'white',
        flex: 8
    },
    icon: {
        flex: 1
    }
})