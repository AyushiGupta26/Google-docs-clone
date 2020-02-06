import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCA3u9jvDM1vm5SONMNuKKaTCL74XsNAgY",
  authDomain: "docs-26534.firebaseapp.com",
  databaseURL: "https://docs-26534.firebaseio.com",
  projectId: "docs-26534",
  storageBucket: "",
  messagingSenderId: "552260953936",
  appId: "1:552260953936:web:9d9bba4539243b33"
};
// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);

export default fire;