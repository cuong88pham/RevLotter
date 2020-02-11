const fs = require('fs');
const jwt = require('jsonwebtoken');
const private_key = fs.readFileSync(process.env.PRIVATE_KEY, 'utf8');
const public_key = fs.readFileSync(process.env.PUBLIC_KEY, 'utf8');

const signToken = (payload, options) => {
  try {
    return jwt.sign(payload, private_key, options);
  } catch (error) {
    return error;
  }
};
const verifyToken = (token, options) => {
  try {
    return jwt.verify(token, public_key, options);
  } catch (error) {
    return error;
  }
};
const decodeToken = token => {
  try {
    return jwt.decode(token, { complete: true });
  } catch (error) {
    return error;
  }
};

export { signToken, verifyToken, decodeToken };
