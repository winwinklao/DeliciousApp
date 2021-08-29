import * as firebase from 'firebase';
import '@firebase/storage';
class Storage{
    constructor(){
    var firebase = require('firebase');
      if(!firebase.apps.length){
        firebase.initializeApp({
            apiKey: "AIzaSyBFvruTtcpB48cykEeWr8i6jLbRg__0wfg",
            authDomain: "delicious-3c667.firebaseapp.com",
            databaseURL: "https://delicious-3c667.firebaseio.com",
            projectId: "delicious-3c667",
            storageBucket: "delicious-3c667.appspot.com",
            messagingSenderId: "290364653993",
            appId: "1:290364653993:web:9152f5761d843c14abc4b8",
            measurementId: "G-GXNEVW5727"
        });
      }
      else{
        console.log("Storage app alreay running...");
      }
    }
  
    uploadToFirebase = async (uri, name, success, reject) => {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      var ref = firebase
        .storage()
        .ref()
        .child('image/' + name);
      ref
        .put(blob)
        .then(function (snapshot) {
          snapshot.ref.getDownloadURL()
          .then(function(uri){
            console.log(uri)
            let link = uri;
            success(link);
          })
          
        })
        .catch(function (error) {
          reject(error);
        });
    };
  
    uploadToFirebase2=async(uri,name,success,reject,uploading)=>{
      const response = await fetch(uri);
      const blob = await response.blob();
  
      var uploadTask = firebase.storage().ref().child('image/'+name).put(blob);
  
      uploadTask.on('state_changed',function(snapshot){
      var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100 ;
      uploading(progress);
      },function(error){
        reject(error);
      },function(){
        uploadTask.snapshot.ref.getDownloadURL()
        .then(function(uri){
          success(uri);
      });
    });
  }
  
  // getList=(success,reject)=>{
  //   var ref = firebase.storage().ref().child("images");
  //   ref.listAll()
  //   .then
  // }
  
    
  }
  
  const storage = new Storage();
  export default storage;