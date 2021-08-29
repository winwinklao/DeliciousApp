import * as firebase from 'firebase';
import 'firebase/firestore';

class Firestore {
  constructor() {
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
    else {
      console.log('firebase apps already running2...');
    }
    this.db = firebase.firestore();
  }


    addAccount(account, addSuccess, addUnsuccess) {
      console.log(account.email);
    account.createdDate = firebase.firestore.FieldValue.serverTimestamp();
    this.db
      .collection('User').doc(account.email)
      .set(account)
      .then(function (docRef) {
        addSuccess(docRef);
      })
      .catch(function (error) {
        addUnsuccess(error);
      });
  }

  addMenu(menu, addSuccess, addUnsuccess) {
    // console.log(account.email);
  this.db
    .collection('Menu')
    .add(menu)
    .then(function (docRef) {
      // console.log(docRef.id)
      // this.db.collection("Menu").doc(docRef.id).add(docRef.id)
      addSuccess(docRef);
    })
    .catch(function (error) {
      addUnsuccess(error);
    });
}

addMenuID(docRef, addSuccess, addUnsuccess) {
  // console.log(account.email);
this.db
.collection('Menu')
  .doc(docRef.id)
  .update({
    menuID: docRef.id
  })
  .then(function (docRef) {
    // console.log(docRef.id)
    // this.db.collection("Menu").doc(docRef.id).add(docRef.id)
    addSuccess(docRef);
  })
  .catch(function (error) {
    addUnsuccess(error);
  });
}

updateImageProfile(email,uri, addSuccess, addUnsuccess) {
  // console.log(account.email);
this.db
.collection('User')
  .doc(email)
  .update({
    imageprofile: uri
  })
  .then(function (docRef) {
    // console.log(docRef.id)
    // this.db.collection("Menu").doc(docRef.id).add(docRef.id)
    addSuccess(docRef);
  })
  .catch(function (error) {
    addUnsuccess(error);
  });
}

addFavorite(data, addSuccess, addUnsuccess) {
  // console.log(account.email);
this.db
  .collection('Favorite')
  .add(data)
  .then(function (docRef) {
    addSuccess(docRef);
  })
  .catch(function (error) {
    addUnsuccess(error);
  });
}


  // updateAccount(account,updateSuccess, updateUnsuccess){
  //   var docRef = this.db.collection("Account").doc(account.id);
  //   docRef.update({
  //     firstname:account.firstname,
  //     lastname:account.lastname,
  //     studentid:account.studentid,
  //     userName:account.username
  //   })
  //   .then(function(){
  //     updateSuccess();
  //   })
  //   .catch(function(){
  //     updateUnsuccess();
  //   });
  // }

  //  getAccount(email, getSuccess, getUnsuccess) {
  //   let docRef = this.db.collection('User');
  //   docRef
  //     .where('Email', '==', email)
  //     .get()
  //     .then(function (querySnapshot) {
  //       getSuccess(querySnapshot);
  //     })
  //     .catch(function (error) {
  //       getUnsuccess(error);
  //     });
  // }

  // getUser(email,getSuccess, getUnsuccess) {
  //    this.db.collection('User').doc(email)
  //   .get()
  //     .then(function (querySnapshot) {
  //       getSuccess(querySnapshot);
  //     })
  //     .catch(function (error) {
  //       getUnsuccess(error);
  //     });
  // }

  getUser(email,getSuccess, getUnsuccess) {
    this.db.collection('User')
    .where('email' , '==' ,email)
   .get()
     .then(function (querySnapshot) {
       getSuccess(querySnapshot);
     })
     .catch(function (error) {
       getUnsuccess(error);
     });
    }

    getFav(email,getSuccess, getUnsuccess) {
      this.db.collection('Favorite')
      .where('emailUser' , '==' ,email)
     .get()
       .then(function (querySnapshot) {
         console.log(querySnapshot)
         getSuccess(querySnapshot);
       })
       .catch(function (error) {
         getUnsuccess(error);
       });
      }

    // getUserByEmail(email,getSuccess, getUnsuccess) {
    //   this.db.collection('User')
    //   .where('email' , '==' ,email)
    //  .get()
    //    .then(function (querySnapshot) {
    //      getSuccess(querySnapshot);
    //    })
    //    .catch(function (error) {
    //      getUnsuccess(error);
    //    });
    //   }

    getMenuByEmail(email,getSuccess, getUnsuccess) {
      this.db.collection('Menu')
      .where('email' , '==' ,email)
     .get()
       .then(function (querySnapshot) {
         getSuccess(querySnapshot);
       })
       .catch(function (error) {
         getUnsuccess(error);
       });
      }

     getMenu(email,getSuccess, getUnsuccess) {
       console.log("GETMENU");
      this.db.collection('Menu')
     .get()
       .then(function (querySnapshot) {
         getSuccess(querySnapshot);
       })
       .catch(function (error) {
         getUnsuccess(error);
       });
      }

      
 }








const firestore = new Firestore();
export default firestore;
