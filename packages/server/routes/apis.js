import { Router } from 'express';
import MetaAuth from 'meta-auth';

import { userSchema, setSchema } from '../services';

const metaAuth = new MetaAuth({
  banner: 'Revlotter Authen'
});

const router = Router();

// get challenge
router.get('/auth/:MetaAddress', metaAuth, (req, res) => {
  // Request a message from the server
  if (req.metaAuth && req.metaAuth.challenge) {
    res.send(req.metaAuth.challenge);
  }
});

// verifySignature
router.get('/auth/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
  if (req.metaAuth && req.metaAuth.recovered) {
    // Signature matches the cache address/challenge
    // Authentication is valid, assign JWT, etc.
    res.send(req.metaAuth.recovered);
  } else {
    // Sig did not match, invalid authentication
    res.status(400).send();
  }
});
const obj = { address: 'xxx' };
const user = setSchema(userSchema, obj);
console.log(user);
export default router;
