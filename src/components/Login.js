import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/';

class Login extends Component {
  static navigationOptions = {
    header: {
      visible: false,
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      email: 'user@example.com',
      password: 'password',
    }
  }
  loginEmail() {
    const { email, password } = this.state;
    this.props.actions.loginRequest(email, password);
  }
  render() {
    const { loginemail, loginpassword } = this.state;
    const { user } = this.props;
    let status;
    if (user.errorMessage !== '') {
      status = <Text>{user.errorMessage}</Text>;
    }
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}/>
        <TextInput
          placeholder="password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}/>
        <Button
          title={'Submit'}
          onPress={() => this.loginEmail()}/>
        {status}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
