import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
	// text: {
		// fontSize: 22,
		// color: '#000',
		// textAlign: 'center',
		// marginBottom: 10
	// },
	MainButton: {
		alignItems: 'center',
		backgroundColor: '#f05555',
		color: '#ffffff',
		padding: 10,
		marginTop: 16,
		marginLeft: 35,
		marginRight: 35
	},
	
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	inputField: {
		width: 280,
		color: 'white',
		borderColor: 'white',
		marginTop: 5
	},
	Wrapper : {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1F3A93'
	},
	text :{
		color: 'blue',
		fontSize: 23
	},
	BtnPrimary :{
		color: '#007bff'
	}
});