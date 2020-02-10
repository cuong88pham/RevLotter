import { Router } from 'express';
import { userSchema, setSchema } from '../services';
const router = Router();
const obj = { address: 'xxx' };
const user = setSchema(userSchema, obj);
console.log(user);
export default router;
