import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import storage from './firebase/Storage';
import firestore from './firebase/Firestore';


export default class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      image:"https://firebasestorage.googleapis.com/v0/b/myproject-9d91d.appspot.com/o/image%2Fjjj?alt=media&token=6381d360-3d7b-4fbb-9b17-987b8b0ec214",
      filename:null,
    };
    
  }

  Next=()=>{
    this.uploadImage();
  }
  Reset=()=>{
    this.props.navigation.navigate('RePassword')
  }

  uploadSuccess=(uri)=>{
    console.log("uploaded...")
    console.log(uri);
    this.props.navigation.navigate('ProfileUser')
    
  }

  uploadError=(error)=>{
    console.log(error);
  }

  onUpload=(progress)=>{
    console.log(progress);
  }
  uploadImage=()=>{
    // storage.uploadToFirebase(this.state.image , this.state.filename ,   this.uploadeSuccess , this.uploadeError)
    storage.uploadToFirebase2(this.state.image , this.state.filename ,   this.uploadeSuccess , this.uploadeError,this.onUpload)
  }

  pickImage=async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      quality:1
    })

    if(!result.cancelled){
      console.log(result);
      this.setState({image:result.uri});
    }
  }

 render(props) {
  return (
    <View style = {styles.mix}>

      <View style = {styles.top}>
        <View style = {styles.viewback}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ProfileUser")}}>
            <Ionicons name="ios-arrow-dropleft-circle" size={40} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style = {styles.viewtext}/>
        
        <View style = {styles.viewCorrect}>
        <TouchableOpacity style = {styles.bottonnext} onPress={this.Next}>
            <Text style = {{fontWeight : 'bold'}}>Next</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View style = {styles.midPo}>
        <View>
          <TouchableOpacity style = {{justifyContent:"center", alignItems: "center"}}  onPress = {this.pickImage}>
            <Image source={{ uri : this.state.image }} style = {{borderRadius: 100 ,width: 140, height:140}}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.mid2}>

        <View style = {{flexDirection: 'row', justifyContent:"center", alignItems: "center"}}>
          <Text style = {{flex: 1 , fontWeight : 'bold'}}>Email</Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Email"/>
        </View>

        <View style = {{flexDirection: 'row', justifyContent:"center", alignItems: "center"}}>
          <Text style = {{flex: 1 , fontWeight : 'bold'}}>User Name</Text>
          <TextInput placeholder="User name" style={styles.textInput}/>
        </View>

        <View style = {{flexDirection: 'row', justifyContent:"center", alignItems: "center"}}>
          <Text style = {{flex: 1 , fontWeight : 'bold'}}>Birthday</Text>
          <TextInput placeholder="X/X/XX" style={styles.textInput}/>
        </View>

       <View style = {{flexDirection: 'row', justifyContent:"center", alignItems: "center"}}>
          <Text style = {{flex: 1 , fontWeight : 'bold'}}>Phone</Text>
          <TextInput placeholder="XXX-XXX-XXXX" style={styles.textInput}/>
        </View>
        
      </View>

      <View style = {styles.under}>
        
        <TouchableOpacity style = {styles.buttomCancel} onPress = {this.Reset}>
            <Text style = {{color : 'white' , fontWeight : 'bold'}}>Reset Password</Text>
        </TouchableOpacity>



      </View>

    </View>
  );
}
}
const styles = StyleSheet.create({
  mix:{
    flex: 1,
    backgroundColor : "white"
  },
  top: {
    flex: 0.5,
    backgroundColor: 'black',
    // justifyContent:"center", 
    // alignItems: "center",
    flexDirection : 'row'
  },
  midPo: {
    flex: 1.2,
    // backgroundColor: 'yellow',
    justifyContent:"center", 
    alignItems: "center",
    // marginTop: 10,
    // marginLeft: 15,
    // marginRight: 15
   
  },
  mid2: {
    flex: 2,
    // backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  under: {
    flex: 1,
    // backgroundColor: 'gray',
    // flexDirection: 'column',
    justifyContent : 'center',

    // marginLeft: 10,
    // marginRight: 10
  },
  textInput: {
    flex: 2.4,
    borderRadius: 30,
    height: "200%",
    borderColor: 'gray',
    borderWidth: 2,
    paddingStart: 25,
    justifyContent: 'flex-end',
  },
  buttomCancel: {
    backgroundColor: 'black', 
    height: "35%",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent:"center", 
    alignItems: "center"
  },
  buttomSubmit: {
    backgroundColor: 'gray', 
    height: "35%",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent:"center", 
    alignItems: "center"
  },
  viewback:{
    flex : 1,
    // backgroundColor : 'red',
    justifyContent: "center",
    marginLeft : 10
  },
  viewCorrect:{
        flex : 1,
    // backgroundColor : 'pink',
    justifyContent: "center",
  },
    viewtext:{
      flex : 3,
      // backgroundColor : 'gray',
      justifyContent:"flex-end", 
      alignItems: "center",
      
  },
  bottonnext:{
    backgroundColor: 'white', 
    height: '55%',
    borderRadius: 30,
    // marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    justifyContent:"center", 
    alignItems: "center"
  },
});
