import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Styles from './styles';

export default class ThirdScreen extends Component{
	static navigationOptions =
	{
		title: 'Index',
	};

	render() {
		return (
			<View style={styles.MainContainer}>
				<Text style={styles.text}>Third Login Sukses.</Text>
			</View>
		);
	}
}