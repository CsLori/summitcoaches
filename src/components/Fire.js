import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC3zsjeqXn7fY90AkCU2F4xIb3CnzPD4ug',
  authDomain: 'summitcoaches-98d9a.firebaseapp.com',
  databaseURL: 'https://summitcoaches-98d9a.firebaseio.com',
  projectId: 'summitcoaches-98d9a',
  storageBucket: 'summitcoaches-98d9a.appspot.com',
  messagingSenderId: '876219685478',
  appId: '1:876219685478:web:accfaf78af7645c25e6ba7',
  measurementId: 'G-FRSTEVT0T9'
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
// firebase.analytics();
