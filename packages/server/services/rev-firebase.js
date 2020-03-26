import * as FirebaseAdmin from 'firebase-admin';

FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.applicationDefault(),
  databaseURL: process.env.DATABASE_URL
});

const database = FirebaseAdmin.firestore();
const auth = FirebaseAdmin.auth();

const verifyIdToken = async idToken => {
  try {
    const currentUser = await auth.verifyIdToken(idToken);
    return { currentUser };
  } catch (error) {
    return { error };
  }
};

export { database, auth, verifyIdToken };
