 import  firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCV0iMbpNpFNQU-nvzxG5BAD3FqRBW_lSY",
  authDomain: "pro-60-795eb.firebaseapp.com",
  databaseURL: "https://pro-60-795eb-default-rtdb.firebaseio.com",
  projectId: "pro-60-795eb",
  storageBucket: "pro-60-795eb.appspot.com",
  messagingSenderId: "947666534912",
  appId: "1:947666534912:web:4e249453e0765e9506cee5"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
  export default firebase.database()
 

  