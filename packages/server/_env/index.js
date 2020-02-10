import DotEnv from 'dotenv';
const env = process.env.NODE_ENV || 'development';
export default DotEnv.config({
  path: `_env/.env.${env}`
});
