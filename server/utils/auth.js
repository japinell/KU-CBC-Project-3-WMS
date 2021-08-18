//
//  Functions to create the authentication token
//
const jwt = require("jsonwebtoken");

// Set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // Allows the token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Split the token string into an array and return the actual token
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    // If the token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token!");
    }

    // Return the request object so it can be passed to the resolver as context
    return req;
  },

  //  Generate the actual token
  signToken: function ({ email, firstName, lastName, _id }) {
    const payload = { email, firstName, lastName, _id };
    console.log(payload);
    const token = jwt.sign({ data: payload }, secret, {
      expiresIn: expiration,
    });
    return token;
  },
};
