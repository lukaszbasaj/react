import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDc188L-OOEZ2e0iU9VTuX9cWd73bRugTo",
    authDomain: "firstproject-3af60.firebaseapp.com",
    databaseURL: "https://firstproject-3af60.firebaseio.com",
    projectId: "firstproject-3af60",
    storageBucket: "firstproject-3af60.appspot.com",
    messagingSenderId: "297369165788"
};
firebase.initializeApp(config);

export const database = firebase.database();