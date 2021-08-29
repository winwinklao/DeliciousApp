import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, StyleSheet, TouchableOpacity,TextInput,ImageBackground } from 'react-native';
import firestore from "./firebase/Firestore";
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

export default class ProfileMenu extends React.Component{

  constructor(props){
    super(props);
    this.state={
      imageFood:'https://s359.kapook.com/rq/580/435/50/pagebuilder/950e9d02-69f2-439c-89af-1a157ada8dbe.jpg',
      imageUser: 'https://obs.line-scdn.net/0h4o-sqDgVa0AQCkSAkogUFypcaC8jZnhDdDw6Q0xkNXQ1aiofezkgLjNeM3RuaCwefj4hJTcKcHE6bi5FKz4g/w580',
      imageHeart : 'https://img.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
      // 'https://img.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
      // 'https://www.downloadclipart.net/large/11072-red-heart-design.png'
      foodName : 'YUMYUM',
      username : 'Pajaree.W',
      filename:null,
      like : false ,
    }
    const {route} = this.props;
    this.emailOther = route.params.emailOther;
    this.emailUser = route.params.emailUser;
    this.ingredient = route.params.ingredient;
    this.method = route.params.method;
    this.nameMenu = route.params.nameMenu;
    this.nameUser = route.params.nameUser;
    this.menuID = route.params.menuID;
    console.log(this.emailUser);
    console.log(this.emailOther);
    console.log(this.ingredient);
    console.log(this.method);
    console.log(this.nameMenu);
    console.log(this.nameUser);   
    console.log(this.menuID);   
  }

  fevSuccess=(querySnapshot)=>{
    let fev = []
    let a = false;
    querySnapshot.forEach(function(doc){
      console.log(doc.MenuID)
      if(doc.MenuID == this.menuID)
      {
        a = true;
      }
     });
     console.log(a)
    //  this.setState({like:a});
     if ( a == true)
     {
        this.setState({like:true});
       this.setState({imageHeart:'https://www.downloadclipart.net/large/11072-red-heart-design.png'});
      //  this.favorite();
 
     }
     else{
       this.setState({like:false})
       this.setState({imageHeart:'https://img.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'});
     }
  }

  componentDidMount(){
    firestore.getFav(this.emailUser,this.fevSuccess,this.addUnsuccess);
    console.log("GOOOOOOOOOO GETFAV")
  }

  backToHome=()=>{
    this.props.navigation.navigate('Home')
  }

  addSuccess = (refDoc) => {
    console.log('add Favorite Success !! ');
    this.backToHome();
  };

  addUnsuccess = (error) => {
    console.log(error);
  };

  favorite=()=>{
    console.log('Connect favorite . . . ')
    let data = {    
      emailUser : this.emailUser,
      MenuID : this.menuID}
    firestore.addFavorite(data ,this.addSuccess, this.addUnsuccess)
  }

  onFavorite=()=>{

    if ( this.state.like == false)
    {
      this.setState({like:true});
      this.setState({imageHeart:'https://www.downloadclipart.net/large/11072-red-heart-design.png'});
      this.favorite();

    }
    else{
      this.setState({like:false})
      this.setState({imageHeart:'https://img.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'});
    }
   
    // console.log(this.state.like)
  }


  render(props){
    return(
      <View style={styles.container}>

        <View style={styles.viewfoodImage}>
          <ImageBackground 
            style={styles.imageMainfood}
            source={{uri : 'https://s359.kapook.com/rq/580/435/50/pagebuilder/950e9d02-69f2-439c-89af-1a157ada8dbe.jpg'}}>

            <View style = {styles.viewBack}>
              <TouchableOpacity  
                onPress={this.backToHome}>
                <Ionicons name="ios-arrow-dropleft-circle" size={40} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            
          </ImageBackground>
        </View>

        <View style={styles.viewfoodName}>
          <View style={styles.viewImageProfile}>
            <Image style={styles.imageProfile}
              source={{ uri : 'https://obs.line-scdn.net/0h4o-sqDgVa0AQCkSAkogUFypcaC8jZnhDdDw6Q0xkNXQ1aiofezkgLjNeM3RuaCwefj4hJTcKcHE6bi5FKz4g/w580'}}/>
          </View>

          <View style={styles.viewText}>
            <Text style={styles.textNameText}>
              {this.nameMenu}</Text>
            <Text style={styles.textUserText}>
              {this.nameUser}</Text>
          </View>

          <View style={styles.viewLike}>
            <TouchableOpacity  onPress={this.onFavorite} >
            <Image style={styles.icon}
              source={{uri :this.state.imageHeart}}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewfoodtag}>
          <View style={styles.viewIngredient}>
            <TouchableOpacity 
              // onPress = {this.pickImage}
              style={styles.buttonIn}>
              <Text style={styles.textstyle}>Ingredient</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewStep}>
            <TouchableOpacity 
              // onPress = {this.pickImage}
              style={styles.buttonStep}>
              <Text style={styles.textstyle}>Method</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewComment}>
            <TouchableOpacity 
              // onPress = {this.pickImage}
              style={styles.buttonComment}>
              <Text style={styles.textstyle}>Comment</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewfoodComponent}>
          <View style={styles.viewData}>
            <TextInput
            style={styles.textInput}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop : 20
  },
  viewfoodImage :{
    flex : 4.5,
    // backgroundColor : 'black'
  },
  viewfoodName :{
    flex : 1.5,
    flexDirection : 'row',
    backgroundColor : 'white'
  },
  viewfoodtag: {
    flexDirection : 'row',
    flex : 1.2,
    // backgroundColor : 'gray'
  },
  viewfoodComponent:{
    // justifyContent: 'center',
    alignItems: 'center',
    flex : 5,
    // backgroundColor : 'yellow'
  },
  viewImageProfile:{
    flex : 1 ,
    alignItems : 'center',
    // backgroundColor : 'green'
  },
  viewText:{
    flex : 2 ,
    alignSelf: 'center',
    backgroundColor : 'white'
  },
  viewLike: {
    alignSelf: 'center',
    flex : 0.85 ,
    // backgroundColor : 'red'
  },
  viewIngredient: {
    // alignSelf: 'center',
    marginLeft : 10 ,
    flex : 1 ,
    // backgroundColor : 'red'
  },
  viewStep: {
    // alignSelf: 'center',
    flex : 1 ,
    // backgroundColor : 'white'
  },
  viewComment: {
    // alignSelf: 'center',
    marginRight : 10 ,
    flex : 1 ,
    // backgroundColor : 'red'
  },
  viewData:{
    width : '90%',
    height : '90%',
    // backgroundColor : 'black'
  },
  viewBack:{
    width : '20%',
    height : '20%',
    // backgroundColor : 'white',
    justifyContent : "center",
    // alignItems : 'center'
  },
  imageMainfood:{
    width:'100%',
    height:250,
    backgroundColor:"#dddddd",
    padding:8
  },
  imageProfile :{
    marginTop : 8,
    alignItems : 'center',
    width:'70%',
    height:'80%',
    borderRadius: 50,
  },
  icon: {
    height: 40,
    width: 45,
    alignSelf: 'center',
  },
  textNameText:{
    fontSize : 28,
    color : '#751D1D',
    fontWeight : 'bold'
  },
  textUserText:{
    fontSize : 15,
    color : '#C4985E'
  },
  buttonIn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2BF72',
    borderBottomLeftRadius : 50 ,
    borderTopLeftRadius : 50 ,
    height: 40,
    marginTop:10,
    borderWidth : 3,
    borderColor : 'white'
  },
    buttonStep:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2BF72',
    height: 40,
    marginTop:10,
    borderWidth : 3,
    borderColor : 'white'
  },
    buttonComment:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2BF72',
    borderBottomRightRadius : 50 ,
    borderTopRightRadius : 50 ,
    height: 40,
    marginTop:10,
    borderWidth : 3,
    borderColor : 'white'
  },
  textstyle:{
    fontSize : 12,
    // fontFamily:'Sans-serif',
    color : 'white'
  },
  textInput:{
    borderRadius:25,
    height: '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    textAlign:'center',
    backgroundColor : '#DDDDDD' 
  },
});