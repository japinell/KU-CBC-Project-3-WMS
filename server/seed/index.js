//
//  Populate the database with sample data
//
const seedAddressBook = require('./AddressBook');
const seedCategory = require('./Category');
const seedConversion = require('./Conversion');
const seedItem = require('./Item');
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

  await seedItem();
  console.log('\n----- Item Seeded -----\n');

  process.exit(0);
};

seedAll();
