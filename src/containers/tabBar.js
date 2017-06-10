import { View, Text, StyleSheet, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native'

import React from 'react';

export default class TabBar extends React.PureComponent {
    static defaultProps = {
        activeTintColor: '#3478f6', // Default active tint color in iOS 10
        activeBackgroundColor: 'transparent',
        inactiveTintColor: '#929292', // Default inactive tint color in iOS 10
        inactiveBackgroundColor: 'transparent',
        showIcon: true,
        showLabel: true
    }
    handlePress = (route,index,key)=>{
        this.props.jumpToIndex(index);
    }
    renderLabel = ({showLabel,route,index,activeTab,activeTintColor,inactiveTintColor})=>{
        const {getLabel} = this.props;
        const color = index === activeTab?activeTintColor:inactiveTintColor;
        if(!showLabel){
            return null;
        }
        return <Text style={[defaultStyles.tabBarLabel,{color}]}>{getLabel({route,index})}</Text>
    }
    renderIcon = ({showIcon,route,index,focused,tintColor}) =>{
        const {renderIcon} = this.props;
        if(!showIcon){
            return null;
        }
        return renderIcon({route,index,focused,tintColor})
    }
    render(){
        const {
            navigation,
            renderIcon,
            showIcon,
            showLabel,
            getLabel,
            labelStyle,
            activeBackgroundColor,
            inactiveBackgroundColor,
            jumpToIndex,
            position,
            navigationState,
            activeTintColor,
            inactiveTintColor,
            style
        } = this.props
        const {routes} = navigation.state;
        const activeTab = navigation.state.index;
        //alert(showLabel)
        return(
            <View style={[defaultStyles.tabBarContainer,style]}>
                {
                    routes.map((route,index)=>{
                        return (
                            <TouchableWithoutFeedback onPress={
                                ()=>this.handlePress(route,index,route.routeName)} key={index}>
                                <View style={defaultStyles.tabBarTab}>
                                    {this.renderIcon({
                                        showIcon,
                                        route,
                                        index,
                                        focused: index==activeTab,
                                        tintColor: index==activeTab?activeTintColor:inactiveTintColor,
                                    })}
                                    {
                                        this.renderLabel({
                                            showLabel,
                                            route,
                                            index,
                                            activeTab,
                                            activeTintColor,
                                            inactiveTintColor})
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
        )
    }
}

const defaultStyles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: "#F7F7F7",
        borderTopColor: "#DDD",
        borderTopWidth: 1
    },
    tabBarTab: {
        marginVertical: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarLabel: {
        fontSize: 14
    }
})