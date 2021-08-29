import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import auth from './firebase/Auth';

export default class RePassword extends Component {
  constructor(props){
    super(props);
     this.state = {
      email:null,
    };
  }

  goLogin=()=>{
    this.props.navigation.navigate('Login')
  }

  
  unsuccess=(error)=>{
    console.log(error);
  }

  success=()=>{
  console.log("email sent...");
  this.goLogin();
  }


  onRecover=()=>{
    auth.resetUser(this.state.email,this.success,this.unsuccess);
  }
  
  render(props) {
  return (
    <View style = {styles.mix}>
      <View style = {{flex: 1, justifyContent:"flex-end", marginLeft: 15,marginRight: 15}}>
        <Text style = {{textAlign: 'center', fontSize: 25}}>E-Mail</Text>
        <TextInput placeholder="User Name" style={styles.textInput}  onChangeText={txt=>{this.setState({email:txt})}}/>
      </View>
      <View style = {{flex: 1, flexDirection: 'column', marginLeft: 15, marginRight: 15}}>

        <TouchableOpacity style = {styles.buttomSubmit} onPress={this.onRecover}>
          <Text>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttomCancel} onPress={this.goLogin}>
          <Text>Cancel</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  mix: {
    flex: 1,
    backgroundColor: 'white'
  },
  textInput: {
    borderRadius: 30,
    height: "15%",
    borderColor: 'gray',
    borderWidth: 2,
    paddingStart: 25,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  buttomCancel: {
    backgroundColor: 'pink', 
    height: "15%",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent:"center", 
    alignItems: "center"
  },
  buttomSubmit: {
    backgroundColor: 'pink', 
    height: "15%",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent:"center", 
    alignItems: "center"
  },

});
