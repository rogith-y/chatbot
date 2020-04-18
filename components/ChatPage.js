import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

export default class ChatPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
        {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
        {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
        {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
        {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        {id:10, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
      ],
      topic:''
    };
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }
  handleText = (newText) => {
    this.setState({topic:newText});
  }

  handleSendMsg = () =>{
    let newdata = this.state.data;
    let currdate = new Date().getHours() > 12 ? new Date().getHours()-12 + ":" +new Date().getMinutes()+" pm"
    : new Date().getHours()-12+":"+new Date().getMinutes()+" am"
    newdata.push({id:Math.random(), date:currdate, type:'out', message:this.state.topic})
    this.setState({data:newdata})
    this.textInput.clear()
  }

  render() {

    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
        ref={ref => this.flatList = ref}
        onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
        onLayout={() => this.flatList.scrollToEnd({animated: true})}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                ref={input => { this.textInput = input }}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={this.handleText}/>
          </View>

            <TouchableOpacity style={styles.btnSend} onPress={this.handleSendMsg}>
             <Text> > </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor:'#e7e7e7'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});  