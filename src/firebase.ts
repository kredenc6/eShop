import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB30ShWClZtA0p_mxot8_gBspkGo1dZemg",
  authDomain: "eshop-8e9de.firebaseapp.com",
  databaseURL: "https://eshop-8e9de.firebaseio.com",
  projectId: "eshop-8e9de",
  storageBucket: "eshop-8e9de.appspot.com",
  messagingSenderId: "556880705504",
  appId: "1:556880705504:web:b33f42129f2867555b5d85"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase