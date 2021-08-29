import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground ,useState} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Dataframe extends Component {
  
  constructor(props){
    super(props);
     this.state = {
      imageFood:'https://today.cofc.edu/wp-content/uploads/2017/07/HealthJuly2017.jpeg',
      imageUser: 'https://image.flaticon.com/icons/png/512/146/146005.png',
      foodName : 'YUMYUM',
      username : 'Pajaree.W',
    };
  }
  
  render(props) {
  return (
    <View style = {styles.mix}>
      <View style = {styles.top}>

      <View style = {styles.viewProfile}>
      <Image style={styles.imageProfile}
              source={this.state.imageUser}/>
      </View>
      <View style = {styles.viewTextName}>
        <Text style={styles.textNameText}>
              {this.state.foodName}</Text>
        <Text style={styles.textUserText}>
              {this.state.username}</Text>
      </View>
      <View style = {styles.viewSpace}>
      </View>

      </View>

      <View style = {styles.picture}>
        <ImageBackground style ={{ height :'100%' }}
          source={this.state.imageFood}>
        </ImageBackground>
      </View>

      <View style = {styles.under}>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
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
  viewSpace:{
    flex : 1,
    // backgroundColor : 'orange'
  },
    imageProfile :{
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
    textUserText:{
    fontSize : 12,
    color : '#C4985E'
  },
    viewBack:{
      flex : 1 ,
    // width : '20%',
    // height : '20%',
    // backgroundColor : 'black',
    justifyContent : "flex-end",
    alignItems : 'flex-end'
  },
  
});

