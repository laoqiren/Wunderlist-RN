import React,{Component} from 'react';
import {View,Image} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
export default class Main extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //alert(this.props.tab)
    }
    handleSwitchTab = (index)=>{
        this.props.actions.switchMainTab(index);
    }
    render(){
        const {tab,renderTab} = this.props;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="Home"
                    renderIcon={()=> <Image source={require('./img/home.png')}/>}
                    renderSelectedIcon={()=> <Image source={require('./img/home_filled.png')}/>}
                    onPress={()=>this.handleSwitchTab(1)}
                    selected={tab === 1}>
                {renderTab(0)}
                </TabNavigator.Item>

                <TabNavigator.Item 
                    title="completed"
                    onPress={()=>this.handleSwitchTab(2)}
                    renderIcon={()=> <Image source={require('./img/checked.png')}/>}
                    renderSelectedIcon={()=> <Image source={require('./img/checked_filled.png')}/>}
                    selected={tab === 2}>
                {renderTab(1)}
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="edit"
                    onPress={()=>this.handleSwitchTab(3)}
                    selected={tab === 3}>
                {renderTab(2)}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}