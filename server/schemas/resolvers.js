//
//  Resolvers - Define the functions to populate the data from the schemas
//
const User = require("../models/User");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
//
const resolvers = {
  Query: {
    // Return the currently logged in user including their saved books
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate("email");
        return user;
      }
      throw new AuthenticationError(
        "You need to log in to perform this query!"
      );
    },
  },

  Mutation: {
    // Return an authentication token after validating the user credentials
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Invalid email address");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Invalid password");
      }

      const token = signToken(user);

      return { token, user };
    },

    //  Add a user to the database - Return the user and the authentication token
    addUser: async (parent, { email, firstName, lastName, password }) => {
      console.log("Running AddUser on Resolvers:");
      const user = await User.create({ email, firstName, lastName, password });
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
