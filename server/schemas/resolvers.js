//
//  Resolvers - Define the functions to populate the data from the schemas
//
const { Item, Inventory, Kardex, Task, User } = require("../models");
const Order = require("../models/Order");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
//
const resolvers = {
  Query: {
    // Returns an item by sku
    getItemBySku: async (parent, { sku }, context) => {
      // if (context.user) {
      return await Item.find({ sku: sku });
      // }
      // throw new AuthenticationError(
      //   "You need to log in to perform this query!"
      // );
    },
    // Returns all items
    getItems: async (parent, args, context) => {
      // if (context.user) {
      return await Item.find({});
      // }
      // throw new AuthenticationError(
      //   "You need to log in to perform this query!"
      // );
    },
    // Returns an order by number
    getOrderByNumber: async (parent, { orderType, orderNumber }, context) => {
      // if (context.user) {
      return await Order.find({ orderType, orderNumber })
        .populate("customer")
        .populate("items.item");
      // }
      // throw new AuthenticationError(
      //   "You need to log in to perform this query!"
      // );
    },
    // Returns all the orders
    getOrders: async (parent, args, context) => {
      // if (context.user) {
      return await Order.find({}).populate("customer").populate("items.item");
      // }
      // throw new AuthenticationError(
      //   "You need to log in to perform this query!"
      // );
    },
    // Returns a task by number
    getTaskByNumber: async (parent, { orderType, orderNumber }, context) => {
      // if (context.user) {
      return await Task.find({ orderType, orderNumber })
        .populate("customer")
        .populate("items.item");
      // }
      // throw new AuthenticationError(
      //   "You need to log in to perform this query!"
      // );
    },
    // Returns all the tasks
    getTasks: async (parent, args, context) => {
      // if (context.user) {
      return await Task.find({}).populate("customer").populate("items.item");
      // }
      // throw new AuthenticationError(
      //   "You need to log in to perform this query!"
      // );
    },
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
    //  Update an inventory item - Return the inventory object updated
    updateInventory: async (
      parent,
      { item, location, lot, primary, quantity }
    ) => {
      console.log("Updating inventory record...");
      const inventory = await Inventory.findOneAndUpdate(
        { item, location, lot },
        { quantity },
        { new: true }
      );
      return inventory;
    },

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
