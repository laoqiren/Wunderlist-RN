import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class About extends Component {
    render(){
        return (
           <View style={styles.container}>
                <View style={headerStyles.container}>
                    <Text style={headerStyles.sortName}>关于</Text>
                </View>
                <View style={styles.logo}>
                    <Icon name="receipt" size={80} color="white"/>
                    <Text style={{color:'white'}}>V1.0.0</Text>
                </View>
                <View style={styles.detail}>
                    <TouchableOpacity style={{marginBottom:10,borderBottomWidth:1,borderBottomColor:'grey'}}><Text style={{fontSize:17}}>作者：罗峡</Text></TouchableOpacity>
                    <TouchableOpacity><Text  style={{fontSize:17,borderBottomWidth:1,borderBottomColor:'grey'}}>github: https://github.com/laoqiren/isomorphic-redux-CNode </Text></TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <Text style={{textAlign:'center',color:'grey'}}>Copyright@2017-2017 Xia Luo. All Rights Reserved.</Text>
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
    logo: {
        height: 150,
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detail: {
        flex: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    bottom: {
        flex: 1
    }
})