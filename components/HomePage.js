import React, { Component } from 'react'
import {
    Button,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
  } from 'react-native';

  
class HomePage extends Component {
    state={
        topic:"",
        chatData:[]
    }
    static navigationOptions={
        header:null
    }
    handleTopicChange = (newText) =>{
        this.setState({topic:newText});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome {this.props.route.params.username},</Text>
                <Button title="Go !" color="red"  onPress={()=>{
            this.props.navigation.navigate("Chat",{username:this.state.username})
             }}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  padding:20,
//   backgroundColor:'black'
},
heading:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:50,
    // color:'white'
  },
  inputText:{
    borderWidth:1,
    borderStyle:'solid',
    marginBottom:20,
    backgroundColor:"whitesmoke",
    borderColor:"violet"
  },
content:{
    marginBottom:50,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'yellow'
}
})
export default HomePage
