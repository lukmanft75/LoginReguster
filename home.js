import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Styles from './styles';

export default class home extends Component {
	static navigationOptions =
	{
		title: 'Home',
	};

	gotoRegister = () =>
	{
		this.props.navigation.navigate('Register');
	}

	gotoLogin = () =>
	{
		this.props.navigation.navigate('Login');
	}

	render() {
		return (
			<View style={styles.MainContainer}>
				<Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Home Screen</Text>

				<Button title="Click Here To Register" style={styles.MainButton} onPress={this.gotoRegister} color="#2196F3" />
				<Text> </Text>	
				<Button title="Click Here To Login" style={styles.MainButton} onPress={this.gotoLogin} color="#2196F3" />
			</View>
		);
	}
}