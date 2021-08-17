//
//  Populate database with default data
//
const mongoose = require("mongoose");
const { UoM } = require("../models/UoM");

const uomData = [
	{
		uom: "EA",
		description: "1 EA -> 1 EA",
		"user": "admin"
	},
	{
		uom: "CS",
		description: "1 CS -> 1 EA",
		user: "admin"
	},
	{
		uom: "JR",
		description: "1 JR -> 12 EA",
		user: "admin"
	},
	{
		uom: "EA",
		description: "1 EA -> 1 EA",
		user: "admin"
	},
	{
		uom: "BAG",
		description: "1 BAG -> 1 EA",
		user: "admin"
	},
	{
		uom: "PAK",
		description: "1 PAK -> 12 EA",
		user: "admin"
	},
	{
		uom: "BX",
		description: "1 BX -> 9 EA",
		user: "admin"
	},
	{
		uom: "BOX",
		description: "1 BOX -> 24 EA",
		user: "admin"
	},
	{
		uom: "6CT",
		description: "1 6CT -> 6 EA",
		user: "admin"
	},
	{
		uom: "BWL",
		description: "1 BWL -> 1 EA",
		user: "admin"
	},
	{
		uom: "BTL",
		description: "1 BTL -> 1 EA",
		user: "admin"
	},
	{
		uom: "STK",
		description: "1 STK -> 1 EA",
		user: "admin"
	},
	{
		uom: "BG",
		description: "1 BG -> 1 BG",
		user: "admin"
	},
	{
		uom: "JUG",
		description: "1 JUG -> 1 EA",
		user: "admin"
	},
	{
		uom: "PK",
		description: "1 PK -> 12 EA",
		user: "admin"
	},
	{
		uom: "CSE",
		description: "1 CSE -> 12 EA",
		user: "admin"
	},
	{
		uom: "CAN",
		description: "1 CAN -> 1 EA",
		user: "admin"
	},
	{
		uom: "CS1",
		description: "1 CS1 -> 1 EA",
		user: "admin"
	},
	{
		uom: "TUB",
		description: "1 TUB -> 300 EA",
		user: "admin"
	},
	{
		uom: "JAR",
		description: "1 JAR -> 290 EA",
		user: "admin"
	},
	{
		uom: "SQG",
		description: "1 SQG -> 1 EA",
		user: "admin"
	},
	{
		uom: "SLV",
		description: "1 SLV -> 12 SLV",
		user: "admin"
	}
];

const seedUoM = () => {
  await UoM.deleteMany({});  
  await UoM.bulkCreate(uomData);
} 

module.exports = seedUoM;
