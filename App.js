import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Styles from './styles';
import ThirdScreen from './ThirdScreen';
import SecondScreen from './SecondScreen';
import MainProject from './MainProject';
import home from './home';


/**
class MainProject extends Component {
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
	
	gotoNextActivity = () =>
	{
		this.props.navigation.navigate('Second');
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
			// Alert.alert(responseJson);
			//start
				if(responseJson === 'Success'){
					//Then open Profile activity and send user email to profile activity.
					this.props.navigation.navigate('Third', { Email: UserEmail });
				} else {
					Alert.alert(responseJson);
				}
			//end
			
			
			
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

class SecondScreen extends Component{
	static navigationOptions =
	{
		title: 'SecondScreen',
	};

	render() {
		return (
			<View style={styles.MainContainer}>
				<Text style={styles.text}>This is Second Screen Activity.</Text>
			</View>
		);
	}
}

class ThirdScreen extends Component{
	static navigationOptions =
	{
		title: 'Index',
	};

	render() {
		return (
			<View style={styles.MainContainer}>
				<Text style={styles.text}>Login Sukses.</Text>
			</View>
		);
	}
}


class LoginActivity extends Component {
	static navigationOptions =
	{
		title: 'LoginActivity',
	};
	
	constructor(props) {
		super(props)
		this.state = {
			UserEmail: '',
			UserPassword: ''
		}
	}  
}
*/


const RootStack = createStackNavigator(
	{
		Home: home,
		Login: SecondScreen,
		Register: MainProject,
		Third: ThirdScreen
	},
	{
		initialRouteName: "Home"
	}
);
export default createAppContainer(RootStack);

/**
const styles = StyleSheet.create({
	MainContainer :{
		flex: 1,
		justifyContent: 'center',
		backgroundColor : '#f5fcff',
		padding: 11
	},
	TextInputStyleClass: {
		textAlign: 'center',
		marginBottom: 7,
		height: 40,
		borderWidth: 1,
		// Set border Hex Color Code Here.
		 borderColor: '#2196F3',
		 // Set border Radius.
		 borderRadius: 5 ,
		// Set border Radius.
		 //borderRadius: 10 ,
	},
	text: {
		fontSize: 22,
		color: '#000',
		textAlign: 'center',
		marginBottom: 10
	},
});

AppRegistry.registerComponent('MainProject', () => MainProject);
*/

