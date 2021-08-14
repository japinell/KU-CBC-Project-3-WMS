//
//  Resolvers - Define the functions to populate the data from the schemas
//
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
//
const resolvers = {
  Query: {
    // Return the currently logged in user including their saved books
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("savedBooks");
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
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    //  Save a book to the current user - Return an instance of the updated user
    saveBook: async (parent, { book }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: book } },
          { new: true, runValidators: true }
        );
        return user;
      }
      throw new AuthenticationError(
        "You need to log in to perform this action!"
      );
    },

    //  Remove a book from the current user - Return an instance of the updated user
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError(
        "You need to log in to perform this action!"
      );
    },
  },
};

module.exports = resolvers;
