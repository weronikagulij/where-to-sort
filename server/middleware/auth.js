const User = require('../models/User');
const jwt = require('jsonwebtoken');

const auth = async function(req, res, next) {
  try {
    const token = req.headers.bearer;

    if ( token ) {
      const id = await jwt.verify(req.headers.bearer, process.env.TOKEN_HASH);

      if ( id ) {
        const user =  await User.findById(id);

        req.token = token;
        req.user = user;
        next();
      } else {
        return res.json({ message: e });
      }
    } else {
      return res.json({ message: e });
    }
  } catch (e) {
    return res.json({ message: e });
  }
}

module.exports = { auth };