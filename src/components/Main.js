import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  }
  logOut() {
    this.props.actions.logout();
  }
  render() {
    return (
      <View>
         <Button
           title={'Logout'}
           onPress={() => this.logOut()}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
