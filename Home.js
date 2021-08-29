import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,FlatList,ImageBackground} from 'react-native';
import firestore from "./firebase/Firestore";
import { FontAwesome } from '@expo/vector-icons';
export default class Home extends Component {
  constructor(props){
    super(props);
     this.state = {
       
      item:[]
    };
    const {route} = this.props;
    this.email = route.params.email;
    // console.log(this.state.item);
    console.log(this.email);
  }

  getMenuSuccess=(querySnapshot)=>{
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

  getUserSuccess=(querySnapshot)=>{
    // console.log(querySnapshot);
    let User ;
    querySnapshot.forEach(function(doc){
      User=doc.data();
      // User1.id=doc.id
      // User = User.concat(User1)
      // console.log(User.username);
      
    });
    // console.log(user);
    this.setState({username:User.username});
    // console.log(this.state.username);
  }
  getUnsuccess =(error)=>{
    console.log(error);
  }

  componentDidMount(){
    firestore.getMenu(this.email , this.getMenuSuccess , this.getUnsuccess  );
    // firestore.getUser(this.email , this.getUserSuccess , this.getUnsuccess  );
  }

  

  addMenu=()=>{
    this.props.navigation.navigate('Addmenu',{email : this.email} )
  }
  goProfile=()=>{
    this.props.navigation.navigate('ProfileUser',{email: this.email} )
  }

  renderItem=({item})=>{
    return(
      <View>
        <TouchableOpacity style={{backgroundColor:"black"}} 
        onPress={()=>this.props.navigation.navigate('ProfileMenu',{
          emailOther:item.email ,
          emailUser:this.email , 
          ingredient:item.ingredient , 
          method :item.method,
          nameMenu:item.nameFood,
          nameUser:item.username,
          menuID :item.menuID
          })} >
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



  render(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        

        <View>
          <TouchableOpacity style={styles.pfbtn} onPress={this.goProfile}>
            <Image  source={require('./joy.jpg')}
                  style={{width: 60, height:60,borderRadius:30}} />
  
          </TouchableOpacity>
        </View>
  
        <View>
          <Text style={{color:'white',fontWeight:'bold', color : 'white',fontSize:20}}>Delìcìous             </Text>
        </View>
  
        <View >
          <TouchableOpacity style={styles.plusbtn} onPress={this.addMenu}>
            {/* <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}> + </Text> */}
            <FontAwesome name="pencil-square-o" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{ height : '12%' , flexDirection : 'row'}}>
        <View style = {{flex : 2, }}>
          <Text style = {{ marginTop : '5%' , marginLeft : '5%' , color : "black" , fontSize : 30 , fontWeight : "bold"}}>All Recipe</Text>
          <Text style = {{ marginLeft : '5%' , color : "black" , fontSize : 10 }}>Select recipe you like</Text>
        </View>
        <View style = {{flex : 1 , }}>
        <Image style={{ flex : 1}}
                    source={{uri: 'https://uppic.cc/d/0sT6BpkMYXxmX_p4TETlg'}}/>
        </View>
      </View>
       <View style = {{ width :"95%" ,marginLeft : '2.5%' }}> 
        <FlatList
          data={this.state.item}
          renderItem={this.renderItem}
          //  keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
      />
      </View> 
      {/* <View style = {{ height : '10%' , backgroundColor : 'pink'}}></View> */}
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',

  },
  header:{
    marginTop : '7%',
    height:'12%',
    flexDirection:'row',
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'space-around',
    borderBottomRightRadius : 30 ,
    borderBottomLeftRadius : 30 ,
  },
  plusbtn:{
    // height:60,
    // width:60,
    // backgroundColor:'blue',
    borderRadius:30,
    justifyContent : 'center',
    alignItems :'center'

  },

   pfbtn:{
    height:60,
    width:60,
    backgroundColor:'blue',
    borderRadius:30,
    marginRight : '10%'

  },


  mix:{
    // flex: 1,
    backgroundColor : 'white',
    // borderRadius : 20,
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
    marginTop : 5,
    // alignItems : 'center',
    // width:'100%',
    height:'82%',
    // borderRadius: 40,
    width:'48%',
    // borderRadius: 50,
  },
    textNameText:{
    fontSize : 18,
    color : '#751D1D',
    fontWeight : 'bold'
  },
    textUserText2:{
    fontSize : 10,
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