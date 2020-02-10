const userSchema = {
  address: null,
  status: false,
  phoneNumber: 'required',
  email: 'require',
  image: null,
  nickname: null,
  badges: []
};

const setSchema = (schema, obj) => {
  let data = { ...schema };
  Object.keys(obj).forEach(key => {
    data[key] = obj[key];
  });
  return verify(schema, data);
};

const verify = (schema, data) => {
  let errors = { errors: [] };
  Object.keys(schema).forEach(key => {
    if (
      schema[key] === 'required' &&
      (data[key] === 'required' || data[key] === undefined)
    ) {
      let error = {
        field: key,
        msg: `is ${schema[key]}`
      };
      errors['errors'].push(error);
    }
  });
  return errors['errors'].length > 0 ? errors : data;
};

export { userSchema, setSchema };
