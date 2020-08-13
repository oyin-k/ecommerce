import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB7UWxBxYJoDDJ197D3vXGGtfbfjt6v6ow',
  authDomain: 'ecommerce-f220d.firebaseapp.com',
  databaseURL: 'https://ecommerce-f220d.firebaseio.com',
  projectId: 'ecommerce-f220d',
  storageBucket: 'ecommerce-f220d.appspot.com',
  messagingSenderId: '614877267156',
  appId: '1:614877267156:web:19aa8a6a1a2de32095a741',
  measurementId: 'G-0HRJN5FGCW',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
