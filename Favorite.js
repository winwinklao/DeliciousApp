import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image} from 'react-native';


export default class Favorite extends Component {
  constructor(props){
    super(props);
     this.state = {
      
    };
  }

  render(props) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Favorite</Text>
        </View>       
      </View>

      <View style={styles.sbar}>

      </View>

    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'pink'
  },
  header:{
    height:80,
    flexDirection:'row',
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'space-around'
  },
  sbar:{
    flex:1,
  }
   
});