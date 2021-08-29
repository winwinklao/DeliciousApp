import * as firebase from 'firebase';
import 'firebase/auth';
class Auth{
  constructor(){
    
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
      console.log("Auth apps alreay running");
    }
    this.auth = firebase.auth();
  }

  signIn=(email,password,reject,loginSuccess)=>{
    this.auth.signInWithEmailAndPassword(email,password)
    .then(function(){
      loginSuccess(null);
    })
    .catch(function(error){
 
      reject(error);

    });
  }

  createUser=(email,password,reject,createSucces)=>{
    this.auth.createUserWithEmailAndPassword(email,password)
    .then(function(){
       createSucces(null);
     })
    .catch(function(error){
        reject(error);
    });
  }
  // listeningCurrentUser=(getSuccess)=>{
  //   this.auth.onAuthStateChanged(function(user){
  //       getSuccess(user);
  //   });
  // }
  
  signOut=(success,reject)=>{
    this.auth.signOut()
    .then(function(){
      success(null);
    })
    .catch(function(error){
        reject(error);
    });
  }

   resetUser=(email,success,reject)=>{
    this.auth.sendPasswordResetEmail(email)
    .then(function() {
      // Email sent.
      success(null);
    })
    .catch(function(error) {
      // An error happened.
      reject(error);
    })
  }

  signOut=(success,reject)=>{
    this.auth.signOut()
    .then(function(){
      success(null);
    })
    .catch(function(error){
        reject(error);
    });
  }

}
const auth = new Auth();
export default auth;