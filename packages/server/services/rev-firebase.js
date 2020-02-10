import * as FirebaseAdmin from 'firebase-admin';

FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.applicationDefault(),
  databaseURL: process.env.DATABASE_URL
});

const database = FirebaseAdmin.database();

export { database };
