const seedAddressBook = require('./AddressBook');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- Database Synced -----\n');
  await seedAddressBook();
  console.log('\n----- Address Book Seeded -----\n');

//   await seedProducts();
//   console.log('\n----- PRODUCTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
