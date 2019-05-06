import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
	MainContainer :{
		/**
		justifyContent: 'center',
		flex:1,
		margin: 10
		*/
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