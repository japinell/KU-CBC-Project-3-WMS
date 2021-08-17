//
//  Populate the database with sample data
//
const seedAddressBook = require('./AddressBook');
const seedCategory = require('./Category');
const seedConversion = require('./Conversion');
const seedInventory = require('./Inventory');
const seedItem = require('./Item');
const seedLocation = require('./Location');
const seedOperation = require('./Operation');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- Database Synced -----\n');

  await seedAddressBook();
  console.log('\n----- Address Book Seeded -----\n');

  await seedCategory();
  console.log('\n----- Category Seeded -----\n');

  await seedConversion();
  console.log('\n----- Conversion Seeded -----\n');

  await seedInventory();
  console.log('\n----- Inventory Seeded -----\n');

  await seedItem();
  console.log('\n----- Item Seeded -----\n');

  await seedLocation();
  console.log('\n----- Location Seeded -----\n');

  await seedOperation();
  console.log('\n----- Operation Seeded -----\n');

  process.exit(0);
};

seedAll();
