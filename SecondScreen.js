import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Styles from './styles';

export default class SecondScreen extends Component {
	static navigationOptions =
	{
		title: 'HomeScreen',
	};

	constructor(props) {
		super(props)
		this.state = {
			UserEmail: '',
			UserPassword: ''
		}
	}
	
	UserLoginFunction = () =>{
		const { UserEmail }  = this.state ;
		const { UserPassword }  = this.state ;

		fetch('http://192.168.5.27/ReactNative_RegisterUser/User_Login.php', {
		method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: UserEmail,
				password: UserPassword
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			// Showing response message coming from server after inserting records.
			// Alert.alert(responseJson);
			/**start*/
				if(responseJson === 'Data Matched'){
					//Then open Profile activity and send user email to profile activity.
					this.props.navigation.navigate('Third', { Email: UserEmail });
				} else {
					Alert.alert(responseJson);
				}
			/**end*/
		})
		.catch((error) => {
			console.error(error);
		});
	}

	render() {
		return (
			<View style={styles.MainContainer}>
				<Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Login</Text>
				<TextInput
					// Adding hint in Text Input using Place holder.
					placeholder="Enter User Email"
					onChangeText={UserEmail => this.setState({UserEmail})}
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
					style={styles.TextInputStyleClass}
				/>

				<TextInput
					// Adding hint in Text Input using Place holder.
					placeholder="Enter User Password"
					onChangeText={UserPassword => this.setState({UserPassword})}
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
					style={styles.TextInputStyleClass}
					secureTextEntry={true}
				/>

				<Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
			</View>
		);
	}
}