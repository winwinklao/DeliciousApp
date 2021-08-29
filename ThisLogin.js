import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground,useState} from 'react-native';
import auth from './firebase/Auth';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class Login extends Component {
    constructor(props){
      super(props);
       this.state = {
        email:null,
        password:null
      };
      const {navigation} = this.props;
      this.navigation = navigation;
    }

    

    goHome=()=>{
        this.props.navigation.navigate('Home',{screen:'Show1',params:{email:  this.state.email}})
      }
      goforGet=()=>{
        this.navigation.navigate('RePassword')
      }
      goRegis=()=>{
        this.navigation.navigate('Register')
      }
    
      
      onLogin=()=>{
        console.log("Sign in Success!!");
       auth.signIn(this.state.email,this.state.password,this.onReject,this.loginSuccess);
       
      }
    
       onReject=(error)=>{
        console.log(error);
      }
    
      loginSuccess=()=>{
        this.goHome();
      }
    
    
    render(props) {
      const {navigation} = this.props;
        return (
          <View style = {styles.container}>
            {/* <ImageBackground style = {styles.imageBackground} source={require('./LoginBackground.jpg')}> */}
      
              <View style = {styles.top}>
                <Image style={{ height : '80%' , width : '80%'}}
                source={{uri : 'https://uppic.cc/d/dXRgdxkdGznzIZ-PRgbKD'}}/>
              </View>

              <View style = { styles.viewlogin}>
                <View style = {{ backgroundColor : 'black' , flex : 1 , borderTopLeftRadius : 50  }}>
                  <Text style = {{ marginTop : '3%' ,marginLeft : '10%' , color : 'white' , fontSize : 35 , fontWeight : 'bold' , }}>Login</Text>
                  <Text style = {{ marginLeft : '10%' , color : '#9B9999' , fontSize : 10 , fontWeight : 'bold'}}>Please sing in to continue.</Text>
                </View>
              </View>
      
              <View style = {styles.mid}>
                  {/* <View style = {styles.login}>
                    <Text style = {{textAlign : 'center', marginTop : 20, fontSize: 30 , fontWeight : 'bold'}}>LOGIN</Text>
                  </View> */}
                  <View style  ={{ flex : 0.2 ,backgroundColor : 'blue'}}></View>
                  <View style = {styles.username}>
                    <View style = {{ flex : 1 , }}>
                      <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
                      <MaterialIcons name="email" size={24} color="gray" />
                      <TextInput placeholder="Email" placeholderTextColor="gray" style={styles.textInput} onChangeText={txt=>{this.setState({email:txt})}}/>
                      </View>
                      <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>
                    </View>

                    <View style = {{ flex : 1 , }}>
                    <View style = {{ flex : 1 ,  flexDirection : 'row'  , alignItems :  'center'}}>
                    <Ionicons name="md-key" size={24} color="gray" />
                      <TextInput  secureTextEntry={true} placeholderTextColor="gray" placeholder="Password" style={styles.textInput} onChangeText={txt=>{this.setState({password:txt})}}/>
                      <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2  , justifyContent : 'center' }}></View>
                      </View>
                      <View style = {{ borderColor : "#9B9999" , borderBottomWidth : 2 , justifyContent : 'center' }}></View>
                    </View>
                    
                    {/* <TouchableOpacity style = {styles.buttomLogin} onPress={this.onLogin}>
                          <Text style = {{color: 'white', textAlign: 'center', fontSize: 18 , fontWeight : 'bold'}}>LOGIN</Text>
                    </TouchableOpacity> */}
                  </View>
                  <View style  ={{ flex : 0.2 ,backgroundColor : 'blue'}}></View>
                  {/* <View style = {styles.register}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginStart: 15, marginEnd: 15, marginTop: 8}}>
                      <View>
                        <TouchableOpacity onPress={this.goforGet}>
                          <Text style = {{fontSize: 12 , fontWeight : 'bold'}}>Forget Password</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity onPress={this.goRegis}>
                          <Text style = {{fontSize: 12 , fontWeight : 'bold'}}>Register</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View> */}
              </View>
              <View style = {{ flex: 0.3, backgroundColor : 'black' }} ></View>
              <View style = {styles.under}>
                    <View style = {{ flex : 2 , backgroundColor : 'black' , alignItems : 'center' }}>
                    <TouchableOpacity style = {styles.buttomLogin} onPress={this.onLogin}>
                          <Text style = {{color: '#262626', textAlign: 'center', fontSize: 18 , fontWeight : 'bold'}}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.goforGet}>
                          <Text style = {{ marginTop : 10, fontSize: 12 , fontWeight : 'bold' , color : '#B38F5A'}}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.register}>
                    {/* <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginStart: 15, marginEnd: 15, marginTop: 8}}> */}
                      <View>

                      </View>
                      
                      <View style = {{ flex: 1 , backgroundColor : 'black' , flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center'}} >
                        <Text style = {{fontSize: 12 , fontWeight : 'bold' ,  color : '#9B9999' }}>Don't have an account?  </Text>
                        <TouchableOpacity onPress={this.goRegis}>
                          <Text style = {{fontSize: 13 , fontWeight : 'bold' ,  color : '#B38F5A' }}>Register</Text>
                        </TouchableOpacity>
                      </View>
                    {/* </View> */}
                  </View>
            
              </View>
            {/* </ImageBackground> */}
            </View>
              
        );
      }
      }
      const styles = StyleSheet.create({
      container: {
          flex: 1, 
          backgroundColor : 'black'
        },
        top: {
          flex: 1.5,
          backgroundColor : 'white',
          justifyContent : 'center',
          alignItems : 'center',
          borderBottomRightRadius : 50
        },
        mid: {
          flex: 0.7,
          // backgroundColor: 'gray',
          justifyContent : 'center',
          alignItems : 'center'
          // marginLeft: 20,
          // marginRight: 20,
          // borderRadius: 30
        },
        viewlogin : {
          flex: 0.5,
          // marginRight : 20
          backgroundColor: 'white',
          // borderTopLeftRadius : 50
        },
        login: {
          flex: 1.3,
        },
        username: {
          flex: 1,
          flexDirection: 'column',
          width : '80%',
          // backgroundColor  : 'red'
          // justifyContent : 'center',
          // alignItems : 'center'
          // alignContent  :'center'
        },
        register: {
          flex: 1,
        },
        textInput: {
          flex: 1,
          borderRadius: 30,
          height: "35%",
          // borderColor: 'gray',
          // borderWidth: 2,
          paddingStart: 25,
          // marginTop: 10,
          // marginLeft: 10,
          // marginRight: 10,
          color : "white"
        },
        buttomLogin: {
          // flex: 1,
          backgroundColor: '#E5B163', 
          height: "45%",
          width : '85%',
          borderRadius: 30,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          justifyContent:"center", 
          alignItems: "center"
        },
        under: {
          flex: 1,
          // backgroundColor : 'yellow',
          // alignItems  : 'center'
        },
        imageBackground: {
          flex: 1,
          resizeMode: 'center',
          justifyContent: 'center',
        },
        imageProfile :{
          // marginTop : 8,
          // alignItems : 'center',
          // width:'100%',
          height:'100%',
          borderRadius: 50,
          width:'25%',
          // borderRadius: 50,
        },
 });  