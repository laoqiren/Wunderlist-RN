import React,{Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View,StatusBar} from 'react-native';
import {TabNavigator,StackNavigator,addNavigationHelpers} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from 'react-native-splash-screen'
import actions from '../actions/index';

//import MainTabsView from './MainTabsView';
import CompletedView from './CompletedView';
import HomeView from './HomeView';
import AddView from './AddView';
import EditView from './EditView';
import tabBar from './tabBar';
import About from './About';
import Items from './Items';

const AppRouteConfigs = {
    Home: {
        screen: HomeView,
        navigationOptions: {
            title: 'Home',
            tabBarLabel: '首页',
            tabBarIcon: ({focused,tintColor})=>(
                <Icon name="home" size={25} color={tintColor}/>
            )
        }
    },
    Completed: {
        screen: CompletedView,
        navigationOptions: {
            title: 'Completed',
            tabBarLabel: '完成',
            tabBarIcon: ({focused,tintColor})=>(
                <Icon name="person" size={25} color={tintColor}/>
            )
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
            tabBarLabel: '关于',
            tabBarIcon: ({focused,tintColor})=>(
                <Icon name="android" size={25} color={tintColor}/>
            )
        }
    }
}
const HomeNavigator = TabNavigator(AppRouteConfigs,{
    tabBarComponent: tabBar,
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    tabBarOptions: {
        showIcon: true
    }
});
export const AppNavigator =StackNavigator({
    home: {
        screen: HomeNavigator
    },
    edit: {
        screen: EditView
    },
    items: {
        screen: Items
    },
    addList: {
        screen: AddView
    }
},{
    initialRouteName: 'home',
    headerMode: 'none',
    navigationOptions: {
        headerVisable: false
    }
});

@connect(state=>({}),dispatch=>({
    fetchTodos: ()=>dispatch(actions.fetchAllTodos())
}))
class App extends Component {
    componentDidMount(){
        //this.props.fetchTodos();
        SplashScreen.hide();
        /*
        storage.getAllDataForKey('todos').then(rst=>{
            alert(rst[0].title)
        })*/
    }
    render(){
        return (
            <AppNavigator/>
        )
    }
}
export default App; 