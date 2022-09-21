import User from '../models/user.model';
//import bcrypt from '../bcrypt';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//import bcrypt
//create new user
export const registerUser = async (body) => {
  console.log('request---------', body);
  console.log('before hashing--------------', body.Passwrd);
  const saltround = 10;
  const hash = bcrypt.hashSync(body.Passwrd, saltround);
  body.Passwrd = hash;
  console.log('After hashing--------------', body.Passwrd);
  console.log('body after hashing---------', body);
  const data = await User.create(body);
  return data;
};
//user login
export const userLogin = async (body) => {
  const data1 = await User.findOne({ Email: body.Email });
  // eslint-disable-next-line eqeqeq
  if (data1 != null) {
    const match = bcrypt.compareSync(body.Passwrd, data1.Passwrd);
    if (match === true) {
      //authantication
      let token = jwt.sign(
        {
          FirstName: data1.FirstName,
          LastName: data1.LastName,
          Email: data1.Email,
          _id: data1._id
        },
        process.env.SECRET_KEY
      );
      console.log('login successfully');
      return token;
    } else {
      throw new Error('passwrd incorrect');
    }
  } else {
    throw new Error('id is invalid');
  }
  return data1;
};
