import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD6UN73hZCMw6weYtAq32DopGK1maaxKrY',
  authDomain: 'local-revlotter.firebaseapp.com',
  databaseURL: 'https://local-revlotter.firebaseio.com',
  projectId: 'local-revlotter',
  storageBucket: 'local-revlotter.appspot.com',
  messagingSenderId: '367011136060',
  appId: '1:367011136060:web:5249c69532359391013939',
  measurementId: 'G-SHYY8JTLJD'
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
    }
  }

  login(email, password) {
    const emailFomarted = email.trim();
    return this.auth.signInWithEmailAndPassword(emailFomarted, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async getTokenOfCurrentUser(forceRefresh = true) {
    const currentUser = await this.auth.currentUser;
    if (currentUser) {
      const tokenObj = await currentUser.getIdTokenResult(forceRefresh);
      return tokenObj.token;
    }
  }
}

export default new Firebase();
