import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDjdw0vvJwi9u3CjFTDUUs256LvCwcIgmY",
    authDomain: "alex-todo-app-6a04e.firebaseapp.com",
    databaseURL: "https://alex-todo-app-6a04e.firebaseio.com",
    storageBucket: "alex-todo-app-6a04e.appspot.com",
    messagingSenderId: "272039336703"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Alex',
        age: 30
    }
});

let todosRef = firebaseRef.child('todos');

todosRef.push({
    text: 'walk'
});
todosRef.push({
    text: 'talk'
});

todosRef.on('child_added', (snapshot) => {
    console.log('Todo added', snapshot.key, snapshot.val());
});
// firebaseRef.update({
//     isRunning: false,
//     'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//     name: 'Todo App'
// }).then(() => {
//     console.log('Update work');
// }, (e) => {
//     console.log('Update failed');
// });

// firebaseRef.update({
//     'app/name': 'Todo Application',
//     'user/name': 'Mike'
// });
//
// firebaseRef.child('app').update({
//     name: 'TodoApp'
// });
//
// firebaseRef.child('user').update({
//     name: 'Andrew'
// });

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//     version: '2.0.0',
//     name: null
// });
//
// firebaseRef.update({
//     isRunning: null
// });
// firebaseRef.child('user/name').remove();

// firebaseRef.child('app').once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//     console.log('Got value', snapshot.val());
// });
//
// firebaseRef.off();// Delete all event listeners

// let logData = (snapshot) => {
//     console.log('Got value', snapshot.val());
// };
// firebaseRef.on('value', logData);
//
// firebaseRef.off('value', logData);// Delete one event listener
//
// firebaseRef.update({
//     isRunning: false
// });

// firebaseRef.child('user').on('value', (snapshot) => {
//     console.log('User ref change', snapshot.val());
// });
//
// firebaseRef.update({'user/name': 'Mike'});
// firebaseRef.update({'app/name': 'Todo Application'});

// let notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//     console.log('child added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child removed', snapshot.key, snapshot.val());
// });
//
// let newNoteRef = notesRef.push({
//     text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);
