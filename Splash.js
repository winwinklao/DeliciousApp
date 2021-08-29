import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image,Button,ImageBackground 
} from 'react-native';

export default class Splash extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }
  
  // componentDidMount() {
  //       setTimeout(()=>{
  //         this.props.navigation.navigate('Login')
  //       },2500)
  //   }
  goLogin=()=>{
    this.props.navigation.navigate('Login')
  }

  render(props) {
    const { navigation } = this.props;
    return (
     <View style={ styles.container}>
        
       <View style = {{ flex : 4 , backgroundColor : 'white' , alignItems : 'center' , justifyContent : 'center' ,
      borderBottomLeftRadius : 50 , borderBottomRightRadius : 50}}>
          <Text style = {{ color : 'black' , fontSize : 30 , fontWeight : 'bold'}}>Welcome!</Text>
          <Text style = {{ color : 'black' , fontSize : 10 , fontWeight : 'bold'}}>Let's have fun sharing and learning the recipes.</Text>
          <Image style={{ height : '70%' , width : '90%'}}
              source={{uri : 'https://uppic.cc/d/SDTnMGmV9EAtroTbabuvu'}}/>
       </View>

       <View style = {{ flex : 1  , backgroundColor : 'black' , alignItems :  'center' , justifyContent : 'center'}}>
          <Text style = {{ color : 'white' , fontSize : 10 , }}>Cooking is an art full of creativity, where you dance in your kitchen,</Text>
          <Text style = {{ color : 'white' , fontSize : 10 , }}>mix your imagination with a twist and put together a delicious meal .</Text>
          <Text style = {{ color : 'white' , fontSize : 10 , }}>Anyone can become a culinary coach. </Text>
          <Text style = {{ color : 'white' , fontSize : 10 , }}>Meet your new cooking coach! Over 3,000 delicious recipes.</Text>
          <Text style = {{ color : 'white' , fontSize : 10 , }}>at your fingertips.</Text>
       </View>
       <View style = {{ flex : 1  , backgroundColor : 'black'}}>
        <View style = {{ flex : 2 , backgroundColor : 'black' , alignItems : 'center' , justifyContent : 'center'}}>
              <TouchableOpacity style = {styles.buttomLogin} onPress={this.goLogin}>
                <Text style = {{color: '#262626', textAlign: 'center', fontSize: 18 , fontWeight : 'bold'}}>Get Start</Text>
              </TouchableOpacity>
          </View>
       </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      backgroundColor : 'black'
    },
    buttomLogin: {
      // flex: 1,
      backgroundColor: '#E5B163', 
      height: "40%",
      width : '80%',
      borderRadius: 30,
      // marginTop: 10,
      // marginLeft: 10,
      // marginRight: 10,
      justifyContent:"center", 
      alignItems: "center"
    },
});  