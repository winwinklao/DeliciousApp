import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firestore from "./firebase/Firestore";

export default class Addmenu extends Component {
  constructor(props){
    super(props);
     this.state = {
       nameFood : null ,
       ingredient : null ,
       method : null ,
       username : null
    };
    const {route} = this.props;
     this.email = route.params.email;
    console.log(this.email);
  }

  getSuccess=(querySnapshot)=>{
    console.log('querySnapshot');
    let User;
    querySnapshot.forEach(function(doc){
      User=doc.data();
      // User1.id=doc.id
      // User = User.concat(User1)
      // console.log(User.username);
      // console.log(doc.data())
      
    });
    console.log(User);
    this.setState({username:User["username"]});
    
    console.log(this.state.username);
  }


  getUnsuccess =(error)=>{
    console.log(error);
  }

  componentDidMount(){
    // console.log(this.email='jhgjyguy')
    firestore.getUser(this.email , this.getSuccess , this.getUnsuccess  );
  }

  backToHome=()=>{
    console.log('add Add Menu Success. ');
    this.props.navigation.navigate('Home')
  }
  

  success=()=>{
    console.log('add Doc ID Success. ');
    this.backToHome();
  }
  unsuccess=(error)=>{
    console.log(error)
  }

  addSuccess = (docRef) => {
    console.log('add Doc ID . . . ');
    firestore.addMenuID(docRef , this.success , this.unsuccess)
    // this.backToHome();
  };

  addUnsuccess = (error) => {
    console.log(error);
  };
  onAddmenu=()=>{
    let menu={
      email:this.email,
      nameFood:this.state.name,
      ingredient:this.state.ingredient,
      method:this.state.method,
      username:this.state.username,
    }
    console.log("loading . . . . . .");
    firestore.addMenu(menu , this.addSuccess , this.addUnsuccess);
  }


  render(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
               
        <View>
          <TouchableOpacity style={styles.backbtn} onPress={this.backToHome}>
            <Ionicons name="ios-arrow-dropleft-circle" size={24} color="black" />

          </TouchableOpacity>
        </View>

        <View>
          <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>LOGO</Text>
        </View>

        <View >
          <TouchableOpacity style={styles.postbtn}>
            <Text style={{textAlign:'center',fontSize:15,color:'white',marginTop:3}} onPress = {this.onAddmenu} >Post</Text>
          </TouchableOpacity> 
        </View>
       
      </View>

      <View style={{margin:10}}>
          <Image  source={{uri:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b2cee0c4-ffa6-4c28-a7b1-e84d8da7426f/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5-kyrie-7-ep-kMwm27.jpg'}}
                    style={{width: 305, height:190,borderRadius:2}} />

      </View >

      <View style={{flex:1,marginLeft:10,marginRight:10}}>

        <View>
          <TextInput style={styles.name} placeholder='name'onChangeText={txt=>{this.setState({name:txt})}} />
        </View>
        <View>
          <TextInput style={styles.ingd} placeholder='ingadeint' onChangeText={txt=>{this.setState({ingredient:txt})}}/>
        </View>
        <View>
         <TextInput style={styles.method} placeholder='method' onChangeText={txt=>{this.setState({method:txt})}}/>
        </View>
          
      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header:{
    height:80,
    flexDirection:'row',
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'space-around'
  },
  postbtn:{
    height:32,
    width:50,
    backgroundColor:'blue',
    borderRadius:15,

  },

   backbtn:{
    height:30,
    width:50,
    
    borderRadius:25,
  },
  name:{
    height:40,
    borderRadius:25,
    borderWidth:1,
    marginBottom:10,
    paddingStart:8,
  },
  ingd:{
    height:100,
    borderRadius:25,
    borderWidth:1,
    marginBottom:10,
    paddingStart:8,
  },
  method:{
    height:150,
    borderRadius:25,
    borderWidth:1,
    marginBottom:10,
    paddingStart:8,
  }
   
});