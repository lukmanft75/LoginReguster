import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Styles from './styles';

export default class MainProject extends Component {
	static navigationOptions =
	{
		title: 'HomeScreen',
	};

	constructor(props) {
		super(props)
		this.state = {
			UserName: '',
			UserEmail: '',
			UserPassword: ''
		}
	}
	
	UserRegistrationFunction = () =>{
		const { UserName }  = this.state ;
		const { UserEmail }  = this.state ;
		const { UserPassword }  = this.state ;

		fetch('http://192.168.5.27/ReactNative_RegisterUser/user_registration.php', {
		method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: UserName,
				email: UserEmail,
				password: UserPassword
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			// Showing response message coming from server after inserting records.
			Alert.alert(responseJson);
			/**start*/
				if(responseJson === 'Success'){
					//Then open Profile activity and send user email to profile activity.
					this.props.navigation.navigate('Home', { Email: UserEmail });
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
				<Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
				<TextInput
					// Adding hint in Text Input using Place holder.
					placeholder="Enter User Name"
					onChangeText={UserName => this.setState({UserName})}
					// Making the Under line Transparent.
					underlineColorAndroid='transparent'
					style={styles.TextInputStyleClass}
				/>

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

				<Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
			</View>
		);
	}
}