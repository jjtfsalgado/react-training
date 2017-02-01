import firebase from 'firebase';

try{
  var config = {
    apiKey: "AIzaSyConGeRUlZgZsXRqRlLmruKprG21W6IzvE",
    authDomain: "mead-todo-app-e68cd.firebaseapp.com",
    databaseURL: "https://mead-todo-app-e68cd.firebaseio.com",
    storageBucket: "mead-todo-app-e68cd.appspot.com",
    messagingSenderId: "50885800065"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
