import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}style={styles.back}>
                    <Icon name='keyboard-backspace' size={25} color="white" />
                </TouchableOpacity>
                <Text style={styles.sortName}>
                    {this.props.sortName}
                </Text>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
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