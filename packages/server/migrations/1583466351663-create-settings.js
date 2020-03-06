import { database } from '../services/rev-firebase';

module.exports.up = async function() {
  await database
    .collection('settings')
    .doc('main_settings')
    .set({});
  // next();
};

module.exports.down = function(next) {
  next();
};
