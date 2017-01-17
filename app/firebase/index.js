import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDjdw0vvJwi9u3CjFTDUUs256LvCwcIgmY",
        authDomain: "alex-todo-app-6a04e.firebaseapp.com",
        databaseURL: "https://alex-todo-app-6a04e.firebaseio.com",
        storageBucket: "alex-todo-app-6a04e.appspot.com",
        messagingSenderId: "272039336703"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
