import './_env';

import app from './server';

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

const env = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 3005;

app.listen({ port }, () => {
  console.log('environment:', env);
  console.log(`The backend server is running on port ${port}`);
});
