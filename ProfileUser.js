import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, StyleSheet, TouchableOpacity,TextInput,ImageBackground,FlatList } from 'react-native';
import firestore from "./firebase/Firestore";
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import auth from './firebase/Auth';


export default class ProfileUser extends React.Component{

  constructor(props){
    super(props);
    this.state={
      imageBackground:'https://files.guidedanmark.org/files/484/242429_Aarhus-central-fooe-market.jpg?width=1024',
      imageUser: 'https://image.flaticon.com/icons/png/512/146/146005.png',
      imageHeart : 'https://www.downloadclipart.net/large/11072-red-heart-design.png',
      // username : 'Pajaree.W',
      // email : 'Tara_both@outlook.co.th',
      follower : '10k',
      following : '124',
     
      item:[]
    }
    const {route} = this.props;
    this.email = route.params.email;
    // console.log(this.state.item);
    console.log(this.email);
  }



  getSuccess=(querySnapshot)=>{
    // console.log(querySnapshot);
    let Menu=[] ;
    querySnapshot.forEach(function(doc){
     let Menu1=doc.data();
      // User1.id=doc.id
       Menu = Menu.concat(Menu1)
      // console.log(User.username);
    });
    // console.log(Menu);
    // this.setState({username:User.username});
    // console.log(this.state.username);
    this.setState({item:Menu});
    console.log(this.state.item);

  }

  getUnsuccess =(error)=>{
    console.log(error);
  }

  componentDidMount(){
    firestore.getMenuByEmail(this.email , this.getSuccess , this.getUnsuccess  );
    // firestore.getUser(this.email , this.getUserSuccess , this.getUnsuccess  );
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


  goLogout=()=>{
    this.props.navigation.navigate('Login')
  }
  goBack=()=>{
    this.props.navigation.navigate('Home')
  }
  goEditProfile=()=>{
    this.props.navigation.navigate('EditProfile')
  }

  onLogout=()=>{
    auth.signOut(this.onSignOutSuccess,this.onReject);
  
  }
  onReject=(error)=>{
    console.log(error);
  }
  onSignOutSuccess=()=>{
      console.log("Sign out success!!!");
      this.goLogout();
  }


  renderItem=({item})=>{
    return(
      <View>
        <TouchableOpacity style={{backgroundColor:"white"}} 
        onPress={()=>this.props.navigation.navigate("ProfileMenu",{email:this.email})} >
            <View style = {styles.mix}>
              <View style = {styles.top}>

                <View style = {styles.viewProfile}>
                  <Image style={styles.imageProfile2}
                    source={{uri: 'https:image.flaticon.com/icons/png/512/146/146005.png'}}/>
                </View>
                <View style = {styles.viewTextName}>
                  <Text style={styles.textNameText}>
                    {item.nameFood}</Text>
                  <Text style={styles.textUserText2}>
                    {item.username}</Text>
                </View>
                <View style = {styles.viewSpace3}>
                </View>

            </View>

            <View style = {styles.picture}>
              <ImageBackground style ={{ height :'100%' }}
                source={{uri:  'https://today.cofc.edu/wp-content/uploads/2017/07/HealthJuly2017.jpeg'
               }}>
              </ImageBackground>
            </View>

            <View style = {styles.under}>
            </View>
            </View>
        </TouchableOpacity>
      </View>
    );
  }


  render(props){
    return(
      <View style={styles.container}>
        <View style={styles.viewBackground}>
          <ImageBackground 
              style={styles.imageMainfood}
              source={{ uri : 'https://files.guidedanmark.org/files/484/242429_Aarhus-central-fooe-market.jpg?width=1024'}}>
            <View style={styles.viewControl}>
              <View style={styles.viewback}>
                <TouchableOpacity onPress={this.goBack}>
                  <Ionicons name="ios-arrow-dropleft-circle" size={40} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
              <View style={styles.viewS}>
              </View>
              <View style={styles.viewlogout} >
                <TouchableOpacity onPress={this.onSignOutSuccess}>
                  <MaterialCommunityIcons name="logout" size={35} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.viewSpace}>
            </View>
            
          </ImageBackground>

          <View style={styles.viewImageProfile}>
              <Image style={styles.imageProfile}
              source={{ uri : 'https://image.flaticon.com/icons/png/512/146/146005.png'}}/>

              <View style={styles.viewspace2}>
              </View>
              <View style={styles.viewset}>
                  <TouchableOpacity 
                    //  onPress = {this.pickImage}
                     style={styles.buttonStep} onPress={this.goEditProfile} >
                    <Text style={styles.textstyle}>Edit Profile</Text>
                  </TouchableOpacity>
              </View>
          </View>
          
            
        </View>

        <View style={styles.viewUser}>
          <View style={styles.viewProfileName}>
            <Text style={styles.textUserText}>
              {this.state.username}</Text>
            <Text style={styles.textEmailText}>
              {this.state.email}</Text>
          </View>
          <View style={styles.viewFollow}>
            <Text style={styles.textFollowText}>
              {this.state.follower}</Text>
            <Text style={styles.text}>
              Follower</Text>
          </View>
          <View style={styles.viewFollowing}>
            <Text style={styles.textFollowText}>
              {this.state.following}</Text>
            <Text style={styles.text}>
              Followering</Text>
          </View>
        </View>

        <View style={styles.viewData}>
          {/* <View style={styles.viewMenu}> */}
            <FlatList
            data={this.state.item}
            renderItem={this.renderItem}
            //  keyExtractor={item => item.email}
            />
    
          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor : 'white'
  },
  viewBackground : {
    flex : 2.5 ,
    // backgroundColor : 'black'
  },
  viewUser :{
    flex : 1 ,
    // backgroundColor : 'yellow',
    flexDirection : 'row',
  },
  viewData :{
    flex : 4 ,
    backgroundColor : 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  viewControl :{
    flex : 0.5 ,
    // backgroundColor : 'blue',
    flexDirection : 'row',
    // marginTop: -10,
    // marginBottom: -50
  },
  viewSpace :{
    flex : 1 ,
    // backgroundColor : 'white'
  },
  viewImageProfile :{
    flex : 2 ,
    flexDirection : 'row' ,
    // width : '30%',
    // backgroundColor : 'blue',
    marginTop: -60    ,
    marginLeft: 15    ,
    // marginTop : 8,
    // alignItems : 'center',
    // width:'25%',
    // borderRadius: 50,
  },
  viewback:{
    flex : 1,
    // backgroundColor : 'black',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  viewlogout:{
    flex : 1,
    // backgroundColor : 'black',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewS:{
    flex : 3,
    // backgroundColor : 'white'
  },
  viewProfileName :{
    flex:3 ,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor : 'black'
  },
  viewFollow:{
    flex:1 ,
    paddingTop : 11,
    // backgroundColor : 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMenu:{
    width:'90%',
    height: '95%',
    // backgroundColor : 'yellow',
    // borderRadius : 50 ,
    borderWidth : 1,
    borderColor : 'gray'
  },
  viewFollowing :{
    flex:1 ,
    paddingTop : 11,
    // backgroundColor : 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMainfood:{
    width:'100%',
    height: '90%',
    // backgroundColor:"#dddddd",
    padding:8
    
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
  textUserText:{
    fontSize : 25,
    color : '#751D1D',
    fontWeight : 'bold',
    marginLeft : 20 
  },
  textEmailText:{
    fontSize : 12,
    color : '#C4985E',
    fontWeight : 'bold',
    marginLeft : 20 
  },
  textFollowText:{
    fontSize : 20,
    color : '#B26735',
    fontWeight : 'bold',
    // marginLeft : 20 
    paddingRight : 10 
  },
  text:{
    fontSize : 5,
    color : '#E8AF8A',
    fontWeight : 'bold',
    // marginLeft : 20 
    paddingRight : 10
  },
    buttonStep:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2BF72',
    height: 40,
    width : '160%' ,
    // marginTop: -50,
    borderWidth : 3,
    borderColor : 'white',
    borderRadius : 50,
    // marginRight : 10
  },
  viewset :{
    flex : 1,
    // backgroundColor : 'yellow',
    justifyContent : 'flex-end',
    marginBottom :-15,
    paddingRight : 75
  },
    viewspace2 :{
    flex :  0.5,
    // backgroundColor : 'white'
    // paddingLeft : 10
  },
    textstyle:{
    fontSize : 15,
    // fontFamily:'Sans-serif',
    color : 'white',
    fontWeight : 'bold'
  },

  mix:{
    // flex: 1,
    backgroundColor : 'white',
    borderRadius : 20,
    marginBottom : 6
  },
  top:{
    height : 60,
    // backgroundColor : 'black',
    flexDirection : 'row'
  },
  picture:{
    height : 200,
    backgroundColor : 'pink'
  },
  under:{
    height : 20,
    // backgroundColor : 'yellow'
  },
  viewProfile :{
    flex : 1.2,
    // backgroundColor : 'green',
    // justifyContent : 'center' ,
    // alignItems : 'center'
    marginLeft : 10,
  },
  viewTextName:{
        flex : 2,
    // backgroundColor : 'blue',
    justifyContent : 'center',
    marginLeft : -30
  },
  viewSpace3:{
    flex : 1,
    // backgroundColor : 'orange'
  },
    imageProfile2 :{
    // marginTop : 8,
    // alignItems : 'center',
    // width:'100%',
    height:'90%',
    borderRadius: 45,
    width:'55%',
    // borderRadius: 50,
  },
    textNameText:{
    fontSize : 22,
    color : '#751D1D',
    fontWeight : 'bold'
  },
    textUserText2:{
    fontSize : 12,
    color : '#C4985E'
  },
  
});

