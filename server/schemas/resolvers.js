//
//  Resolvers - Define the functions to populate the data from the schemas
//
const { Item, Kardex, Task, User } = require("../models");
const Inventory = require("../models/Inventory");
const Order = require("../models/Order");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
//
const resolvers = {
  Query: {
    // Returns the inventory availability for an item
    getInventoryBySku: async (parent, { sku, location, lot }, context) => {
      // if (context.user) {
      // console.log("Sku => ", sku);
      // console.log("Location => ", location);
      // console.log("Lot => ", lot);

      if (sku && location && lot) {
        return await Inventory.find({
          sku,
          location,
          lot,
        });
      } else if (sku && location) {
        return await Inventory.find({
          sku,
          location,
        });
      } else {
        return await Inventory.find({
          sku,
        });
      }

      // }
      // throw new AuthenticationError(
      //   "You need to log in to perform this query!"
      // );
    },
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
    updateInventory: async (parent, { sku, location, lot, quantity, user }) => {
      // if (context.user) {
      try {
        console.log("Updating inventory record...");
        const currInventory = await Inventory.findOne({
          sku,
          location,
          lot,
        });
        const newQuantity = currInventory.quantity - quantity;

        if (newQuantity < 0) {
          throw new AuthenticationError(
            "Error: Inventory quantity cannot become less than zero."
          );
        }

        const newInventory = await Inventory.findOneAndUpdate(
          { sku, location, lot, user },
          { quantity: newQuantity },
          { new: true }
        );

        return newInventory;
      } catch (error) {
        console.log(error);
      }
      // }

      // throw new AuthenticationError(
      //   "You need to sign in to perform this operation."
      // );
    },

    //  Add a kardex record - Return the kardex object inserted
    addKardex: async (
      parent,
      { sku, location, lot, quantity, uom, operation, description, user }
    ) => {
      // if (context.user) {
      try {
        console.log("Creating kardex record...");
        const kardex = await Kardex.create({
          sku,
          location,
          lot,
          quantity,
          uom,
          operation,
          description,
          user,
        });
        return kardex;
      } catch (error) {
        console.log(error);
      }
      // }

      // throw new AuthenticationError(
      //   "You need to sign in to perform this operation."
      // );
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
