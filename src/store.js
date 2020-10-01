import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';


//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyAFL8bHJy2eKqQszS-yfGyVlbDrPf1mPeo",
  authDomain: "creditmanager-74785.firebaseapp.com",
  databaseURL: "https://creditmanager-74785.firebaseio.com",
  projectId: "creditmanager-74785",
  storageBucket: "creditmanager-74785.appspot.com",
  messagingSenderId: "228060357030",
  appId: "1:228060357030:web:b5469f8fa885b803d26f67"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

//init firebase instance
firebase.initializeApp(firebaseConfig);

//init firestore
// const firestore = firebase.firestore();

//add reactReduxFirestore enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer 
});

// Create inital state
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;