import React from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

class Login extends React.Component {
    static navigationOptions={
        header:null
    }
  state = {
    username:'',
    password:''
  }
  handleUsernameChange = (newText) =>{
    this.setState({username:newText})
  }
  // handlePasswordChange = (newText) =>{
  //   this.setState({password:newText})
  // }
  render(){
    
  return (
    <>
    <View style={styles.container}>
         <Text style={styles.heading}>Your Name</Text>
         {/* <Text>Your Name: </Text> */}
         <TextInput onChangeText={this.handleUsernameChange} style={styles.inputText}/>
         
         {/* <Text>Password </Text>
         <TextInput secureTextEntry={true} onChangeText={this.handlePasswordChange} style={styles.inputText}/> */}
          <Button title="Submit" color="black" 
          onPress={()=>{
            this.props.navigation.navigate("Home",{username:this.state.username})
             }
              }/>
    </View>
    </>
  );
};
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  padding:20
},
inputText:{
  borderWidth:1,
  borderStyle:'solid',
  marginBottom:20
},
heading:{
  fontSize:30,
  fontWeight:'bold',
  textAlign:'center',
},

})

export default Login