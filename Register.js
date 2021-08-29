import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground,Alert} from 'react-native';

import auth from './firebase/Auth';
import * as ImagePicker from 'expo-image-picker';
import storage from './firebase/Storage';
import firestore from './firebase/Firestore';

 import { MaterialIcons } from '@expo/vector-icons';
 import { AntDesign } from '@expo/vector-icons';
 import { FontAwesome } from '@expo/vector-icons';
 import { Entypo } from '@expo/vector-icons';
 import { Ionicons } from '@expo/vector-icons';

export default class Register extends Component {
   createTwoButtonAlert = () =>{
    Alert.alert(
      "ERROR",
      "Please try Again",
      [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        { text: "OK", onPress: () => this.goRegister() }
      ],
      { cancelable: false }
    );
    
 
  }

  constructor(props){
    super(props);
     this.state = {
      imageProfile:"https://i.pinimg.com/originals/f7/8c/e0/f78ce0b2f6c73de6b07137d68a2f2274.jpg",
      email:null,
      password:null,
      username:null,
      phone : null,
      birthday:null,
      password1:null,
      password2:null,
      colors:'gray',
      
    };
  }
    uploadeSuccess=(uri)=>{
    console.log("uploaded...")
    this.setState({imageProfile:uri});
    console.log(uri);
    firestore.updateImageProfile(this.state.email,uri,this.updateSuccess,this.unsuccess);
  
  }

  updateSuccess=()=>{
    this.goLogin();
  }
  

  uploadError=(error)=>{
    console.log(error);
  }

  // onUpload=(progress)=>{
  //   console.log(progress);
  // }
  uploadImage=()=>{
    console.log("uploadimage");
    // storage.uploadToFirebase(this.state.image , this.state.filename ,   this.uploadeSuccess , this.uploadeError)
      // storage.uploadToFirebase(this.state.image , this.state.filename ,   this.uploadeSuccess , this.uploadeError)
      storage.uploadToFirebase(this.state.imageProfile , this.state.email ,   this.uploadeSuccess , this.uploadeError)
    }
  

  pickImage=async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      quality:1
    })

    if(!result.cancelled){
      console.log(result);
      this.setState({imageProfile:result.uri});
    }
  }
  goLogin=()=>{
    this.props.navigation.navigate('Login')
  }

  goRegister=()=>{
    this.props.navigation.navigate('Register')
  }

  
  unsuccess=(error)=>{
    console.log(error);
    // createTwoButtonAlert();
  }
  addSuccess = (refDoc) => {
    console.log('add Success');
    // auth.createUser(this.state.email,this.state.password,this.unsuccess,this.createSuccess);
    // firestore.addAccount(account, this.addSuccess, this.addUnsuccess);
    this.uploadImage();
  };
 
  addUnsuccess = (error) => {
    console.log(error);
  };

  createSuccess=()=>{
    // console.log("www");
    // this.createTwoButtonAlert();
    let account={
      email:this.state.email,
      username:this.state.username,
      birthday:this.state.birthday,
      phone:this.state.phone,
      // imageprofile:this.state.imageProfile,
    }
    firestore.addAccount(account, this.addSuccess, this.addUnsuccess);
    // this.goLogin();
  }




  onRegister=()=>{
    if (this.state.password1 != this.state.password2)
      {this.setState({colors:'red'});}
    else{
      this.setState({password:this.state.password1})

    // console.log(this.state.password1);
    // let account={
    //   email:this.state.email,
    //   username:this.state.username,
    //   birthday:this.state.birthday,
    //   phone:this.state.phone,
    //   // password:this.state.password1,
    auth.createUser(this.state.email,this.state.password1,this.unsuccess,this.createSuccess);
    }
    //  firestore.addAccount(account, this.addSuccess, this.addUnsuccess);
    
  }
    





  render(props) 
  {
  return (
    <View style = {styles.mix}>
      {/* <ImageBackground style = {{ flex : 1}}
              source={{ uri: 'https://amalijaandersone.files.wordpress.com/2018/04/amalijalv_boccabuonarestorans-284.jpg?w=1000' }}> */}
      <View style = {styles.top}>
        <View style = {styles.viewback}>
          <TouchableOpacity onPress={this.goLogin}>
            <Ionicons name="ios-arrow-dropleft-circle" size={40} color="#E5B163" />
          </TouchableOpacity>
        </View>
        <View style = {styles.viewtext}>
        < Text style = {{textAlign: 'center', fontSize: 25, color: 'black' , fontWeight : 'bold'}}>Create Account</Text>
        </View>
        <View style = {styles.viewCorrect}>
          {/* <TouchableOpacity style = {styles.bottonnext} onPress={this.onRegister}>
              <Text style = {{fontWeight : 'bold'}}>Next</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <View style = {{flex : 0.2 ,alignItems : 'center' }}>
        <Text style = {{ color : 'black'  , fontSize : 10}}>Let's fun by Register</Text>
      </View>
      {/* <View style = {styles.viewspace}>
      </View> */}

      <View style = {styles.midPo}>
        <View style = {{flex : 1 ,alignItems : 'center' , justifyContent : 'center' , width : '41%' , borderRadius : 100}}>
          <TouchableOpacity onPress = {this.pickImage}
            >
            <Image source={{uri:this.state.imageProfile }} style = {{
              borderRadius: 60 ,width: 120, height:120,
              // flex : 1
              }}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.mid2}>

        <View style = {{ width : '80%' , height : '90%' , alignSelf : 'center' }}>
        <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
              <MaterialIcons name="email" size={24} color="gray" />
          {/* <Text style = {{flex: 1 , fontWeight : 'bold'}}>Email</Text> */}
          <TextInput placeholder="Email"  placeholderTextColor="gray" style={styles.textInput} onChangeText={txt=>{this.setState({email:txt})}}/>
          </View>
          <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>
        
          <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
          <AntDesign name="user" size={24} color="gray" />
          {/* <Text style = {{flex: 1 , fontWeight : 'bold'}}>User Name</Text> */}
          <TextInput placeholder="User name" placeholderTextColor="gray" style={styles.textInput} onChangeText={txt=>{this.setState({username:txt})}}/>
              </View>
          <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>
          <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
          <FontAwesome name="birthday-cake" size={24} color="gray" />
          {/* <Text style = {{flex: 1 , fontWeight : 'bold'}}>Birthday</Text> */}
          <TextInput placeholder="Birthday" placeholderTextColor="gray" style={styles.textInput} onChangeText={txt=>{this.setState({birthday:txt})}}/>
          </View>
          <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>

          <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
          <Entypo name="phone" size={24} color="gray" />
          {/* <Text style = {{flex: 1 , fontWeight : 'bold'}}>Phone Number</Text> */}
          <TextInput placeholder="Phone Number" placeholderTextColor="gray" style={styles.textInput} onChangeText={txt=>{this.setState({phone:txt})}}/>
          </View>
          <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>
        
          <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
          <Ionicons name="md-key" size={24} color="gray" />
          {/* <Text style = {{flex: 1 , fontWeight : 'bold'}}>Password</Text> */}
          <TextInput placeholder="Password" placeholderTextColor = {this.state.colors} style={{    flex: 2.4,
            // borderRadius: 30,
            height: "200%",
            // borderColor: this.state.colors,
            // borderWidth: 2,
            paddingStart: 25,
            // justifyContent: 'flex-end',
            // marginBottom : 5
            }} onChangeText={txt=>{this.setState({password1:txt})}}/>
            </View>
            <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>
        

            <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
            <Ionicons name="md-key" size={24} color="gray" />
          {/* <Text style = {{flex: 1 , fontWeight : 'bold'}}>Password</Text> */}
          <TextInput placeholder="Password" placeholderTextColor = {this.state.colors} style={{    flex: 2.4,
            // borderRadius: 30,
            height: "200%",
            // borderColor: this.state.colors,
            // borderWidth: 2,
            paddingStart: 25,
            // justifyContent: 'flex-end',
            // marginBottom : 5
            }} onChangeText={txt=>{this.setState({password2:txt})}}/>
            </View>
            <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>
        </View>
        
      </View>

    <View style = {styles.under}>
    <View style = {styles.viewCorrect}>
          <TouchableOpacity style = {styles.bottonnext} onPress={this.onRegister}>
              <Text style = {{fontWeight : 'bold'}}>Register</Text>
          </TouchableOpacity>
        </View>
    </View>
    {/* </ImageBackground> */}
    </View>
  );
}}

const styles = StyleSheet.create({
  mix:{
    flex: 1,
    marginTop : '10%' ,
    backgroundColor : 'white'
  },
  top: {
    flex: 1,
    // backgroundColor: 'red',
    // justifyContent:"center", 
    // alignItems: "center",
    flexDirection : 'row',
    // borderBottomLeftRadius : 20 ,
    // borderBottomRightRadius : 20 ,
  },
  midPo: {
    flex: 3,
    // backgroundColor: 'blue',
    justifyContent:"center", 
    alignItems: "center",
    // marginTop: 10,
    // marginLeft: 15,
    // marginRight: 15
   
  },
  mid2: {
    flex: 5,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // borderBottomLeftRadius : 50 ,
    // borderBottomRightRadius : 50 ,
    // marginTop: 15,
    // marginLeft: 15,
    // marginRight: 15,
    // borderRadius : 35
    borderTopLeftRadius : 50 ,
    borderTopRightRadius : 50 ,
  },
  under: {
    flex: 1.5,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent : 'center' ,
    alignItems : 'center'
    // marginLeft: 10,
    // marginRight: 10
  },
  textInput: {
    flex: 2.4,
    // borderRadius: 30,
    height: "200%",
    // borderColor: 'gray',
    // borderWidth: 2,
    paddingStart: 25,
    // justifyContent: 'flex-end',
    // marginBottom : 5
    color : "white"
  },
  buttomCancel: {
    backgroundColor: 'pink', 
    height: "35%",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent:"center", 
    alignItems: "center"
  },
  buttomSubmit: {
    backgroundColor: 'pink', 
    height: "35%",
    width : '50%',
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
    width : '80%'

  },
    viewtext:{
      flex : 3,
      // backgroundColor : 'gray',
      justifyContent:"flex-end", 
      alignItems: "center",
      
  },
  bottonnext:{
    backgroundColor: '#E5B163', 
    height: '50%',
    borderRadius: 30,
    // marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    justifyContent:"center", 
    alignItems: "center"
  },
  viewspace :{
    flex : 0.5
  }
});


