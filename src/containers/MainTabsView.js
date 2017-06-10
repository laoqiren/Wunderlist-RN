import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View} from 'react-native';

import HomeView from './HomeView';
import CompletedView from './CompletedView';
import EditView from './EditView';

import actions from '../actions/index';
import Main from '../components/main-tabs-view/index';

class MainTabsView extends Component {
    constructor(props){
        super(props);
    }
    renderTab = (index)=>{
        const {navigator} = this.props;
        switch(index){
            case 0:
                return <HomeView navigator={navigator}/>
            case 1:
                return <CompletedView navigator={navigator}/>
            case 2:
                return <EditView navigator={navigator}/>
            default:
                return <HomeView navigator={navigator}/>
        }
    }
    render(){
        return (
            <View style={{flex:1}}>
                <Main {...this.props} renderTab={this.renderTab} />
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        tab: state.navigation.index
    }
}

function mapDispatchToProps(dispath){
    return {
        actions: bindActionCreators(actions,dispath)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTabsView);