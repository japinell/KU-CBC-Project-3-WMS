//
//  Populate database with sample data
//
const mongoose = require("mongoose");
const { Conversion } = require('../models/Conversion');

const conversionData = [
	{
		item: "703250",
		uomfrom: "CS",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617950",
		uomfrom: "JR",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614910",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616265",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501080",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608175",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608515",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "400686",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400684",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "608966",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608844",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608845",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "606385",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605054",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604716",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "603725",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "603525",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611970",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "606365",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603935",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606197",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "616266",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613280",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613281",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613282",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "605075",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605076",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611632",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "609875",
		uomfrom: "EA",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "402660",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "609940",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "609930",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "611350",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611630",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610680",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "600190",
		uomfrom: "BX",
		uomto: "EA",
		factor: "160",
		user: "admin"
	},
	{
		item: "600230",
		uomfrom: "BX",
		uomto: "EA",
		factor: "160",
		user: "admin"
	},
	{
		item: "610990",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603271",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "610986",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "601680",
		uomfrom: "BX",
		uomto: "EA",
		factor: "50",
		user: "admin"
	},
	{
		item: "601614",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "601615",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "610985",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611040",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603840",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "603847",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "611050",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "604596",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "603810",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611070",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610980",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611010",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611430",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605610",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605590",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601600",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601610",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604320",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603240",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "604650",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605780",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602210",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601980",
		uomfrom: "EA",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604392",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602080",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604390",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604400",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609620",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609630",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609640",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609660",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609590",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "608386",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608556",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608555",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608384",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "607550",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607480",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607470",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607460",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607450",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607530",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607520",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607510",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607500",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607570",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608431",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608432",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "607610",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "608170",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608140",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608093",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608094",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608390",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608500",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608564",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608640",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608660",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "607811",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608560",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608530",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608520",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608670",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608610",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "607801",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608150",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608160",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "608100",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "402310",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "402311",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "401025",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605330",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605320",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601420",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "601430",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "601400",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "602400",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601260",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "601240",
		uomfrom: "BX",
		uomto: "EA",
		factor: "100",
		user: "admin"
	},
	{
		item: "601320",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "611560",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616630",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616752",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616730",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603060",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "614681",
		uomfrom: "6CT",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614683",
		uomfrom: "6CT",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614682",
		uomfrom: "6CT",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "603171",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "603120",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "300900",
		uomfrom: "BWL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300890",
		uomfrom: "BWL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300880",
		uomfrom: "BWL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616740",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616770",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616760",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616430",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616420",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616540",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616550",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "606470",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "606460",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "616663",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616583",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603126",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "603129",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "603128",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "603110",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603170",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "616660",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603140",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "603150",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "616637",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "616667",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "606463",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "616450",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616580",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616761",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616541",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616636",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616635",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616638",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616547",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616634",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616330",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616750",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "402260",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "402270",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618290",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "618293",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "618411",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618370",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618310",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618320",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618375",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618373",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618372",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618270",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618280",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618250",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618288",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617992",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617991",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617993",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400765",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617996",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400773",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400750",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400740",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618324",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618482",
		uomfrom: "STK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618483",
		uomfrom: "BG",
		uomto: "BG",
		factor: "1",
		user: "admin"
	},
	{
		item: "618486",
		uomfrom: "STK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618485",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618484",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400760",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618489",
		uomfrom: "STK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618488",
		uomfrom: "STK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617997",
		uomfrom: "BG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617995",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617994",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618334",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618336",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618002",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "400770",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "400777",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "400779",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "400775",
		uomfrom: "BX",
		uomto: "EA",
		factor: "72",
		user: "admin"
	},
	{
		item: "400778",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "400776",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "614736",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614735",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "503010",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "609800",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "609810",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "609770",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "609830",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "611310",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611320",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610540",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610550",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610570",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610530",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610560",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611241",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612950",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612970",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612910",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613010",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612990",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612943",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612930",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613000",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612980",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612976",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612977",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612920",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "620130",
		uomfrom: "BWL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300459",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300457",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300455",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300456",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300458",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611244",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "608753",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "607701",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "609530",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "607720",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "609790",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "609840",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "608782",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608781",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "606381",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "608925",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "605053",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "608880",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608790",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608840",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608720",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608890",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608785",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608789",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "609432",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "609433",
		uomfrom: "BX",
		uomto: "EA",
		factor: "9",
		user: "admin"
	},
	{
		item: "605225",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609060",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608680",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608740",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608700",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608710",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608730",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "607930",
		uomfrom: "BX",
		uomto: "EA",
		factor: "40",
		user: "admin"
	},
	{
		item: "607910",
		uomfrom: "BX",
		uomto: "EA",
		factor: "40",
		user: "admin"
	},
	{
		item: "607920",
		uomfrom: "BX",
		uomto: "EA",
		factor: "40",
		user: "admin"
	},
	{
		item: "607900",
		uomfrom: "BX",
		uomto: "EA",
		factor: "40",
		user: "admin"
	},
	{
		item: "607940",
		uomfrom: "BX",
		uomto: "EA",
		factor: "40",
		user: "admin"
	},
	{
		item: "608793",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608756",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "605172",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "608786",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "609140",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609050",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609071",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609000",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609070",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "608990",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "607026",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "607704",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "608939",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608797",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "611322",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "608788",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "609410",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "609420",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "608970",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608980",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608964",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608920",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608930",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "608940",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "611280",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611787",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611316",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "606870",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "606840",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "606880",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "606910",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "607020",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "501770",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501800",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501730",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501740",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501750",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501790",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614280",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614290",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614270",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614940",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614950",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615240",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614945",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614271",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614951",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "302771",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "302750",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618750",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "618660",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "618710",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "618740",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "618730",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "618674",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "618661",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "618755",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "618659",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "618658",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "618657",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "618670",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "618680",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613185",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613190",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613953",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613170",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613200",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613180",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613201",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617085",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617091",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617092",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618605",
		uomfrom: "BX",
		uomto: "EA",
		factor: "100",
		user: "admin"
	},
	{
		item: "618615",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618617",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602630",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "602520",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604900",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "611120",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602550",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604670",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "600620",
		uomfrom: "JR",
		uomto: "EA",
		factor: "145",
		user: "admin"
	},
	{
		item: "611121",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "604450",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "602320",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611891",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "604490",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "606300",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602310",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602330",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602350",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602280",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602340",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606260",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605640",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605630",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602300",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "600580",
		uomfrom: "JR",
		uomto: "EA",
		factor: "165",
		user: "admin"
	},
	{
		item: "600560",
		uomfrom: "JR",
		uomto: "EA",
		factor: "165",
		user: "admin"
	},
	{
		item: "600600",
		uomfrom: "JR",
		uomto: "EA",
		factor: "165",
		user: "admin"
	},
	{
		item: "600520",
		uomfrom: "JR",
		uomto: "EA",
		factor: "165",
		user: "admin"
	},
	{
		item: "600640",
		uomfrom: "JR",
		uomto: "EA",
		factor: "165",
		user: "admin"
	},
	{
		item: "600530",
		uomfrom: "JR",
		uomto: "EA",
		factor: "165",
		user: "admin"
	},
	{
		item: "400650",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400610",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400622",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400670",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616850",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613630",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613950",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613921",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613960",
		uomfrom: "EA",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "613801",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613825",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613826",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613861",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613860",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613970",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613620",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613810",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613820",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613850",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613800",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613880",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613631",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603051",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614580",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614523",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614522",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614970",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614730",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614770",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614766",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614760",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614750",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614765",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614520",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614763",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "600160",
		uomfrom: "BX",
		uomto: "EA",
		factor: "120",
		user: "admin"
	},
	{
		item: "600760",
		uomfrom: "BX",
		uomto: "EA",
		factor: "100",
		user: "admin"
	},
	{
		item: "606320",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "606310",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605720",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "601070",
		uomfrom: "BX",
		uomto: "EA",
		factor: "175",
		user: "admin"
	},
	{
		item: "618036",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618037",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603590",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "611550",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610860",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605850",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603275",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "603455",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "603600",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "603610",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602950",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605771",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605930",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605890",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605900",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "610830",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605830",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605760",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605860",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605800",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605950",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603445",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603451",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603270",
		uomfrom: "EA",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603330",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603421",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603280",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603285",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603370",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603510",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603390",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603450",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603290",
		uomfrom: "EA",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603690",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603620",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605838",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605770",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603660",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "610910",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603630",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605790",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "601040",
		uomfrom: "BX",
		uomto: "EA",
		factor: "105",
		user: "admin"
	},
	{
		item: "600890",
		uomfrom: "BX",
		uomto: "EA",
		factor: "120",
		user: "admin"
	},
	{
		item: "603720",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "605772",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603540",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603580",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "610850",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605837",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "603511",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "604715",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "605920",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605960",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603520",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605773",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "605280",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604590",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "605940",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "600790",
		uomfrom: "BX",
		uomto: "EA",
		factor: "180",
		user: "admin"
	},
	{
		item: "611590",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611990",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611960",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611950",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611980",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611995",
		uomfrom: "BG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "612010",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "604595",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "607350",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "607370",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "609480",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609560",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609540",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609491",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609270",
		uomfrom: "EA",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609290",
		uomfrom: "EA",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609280",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609297",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "609298",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609271",
		uomfrom: "EA",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609272",
		uomfrom: "EA",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "609275",
		uomfrom: "EA",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "604700",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604680",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604720",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "602660",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "609773",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "609774",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400901",
		uomfrom: "CS",
		uomto: "EA",
		factor: "4",
		user: "admin"
	},
	{
		item: "400890",
		uomfrom: "CS",
		uomto: "EA",
		factor: "30",
		user: "admin"
	},
	{
		item: "506570",
		uomfrom: "JUG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "506571",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617380",
		uomfrom: "PK",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "617370",
		uomfrom: "PK",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "617340",
		uomfrom: "PK",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "617390",
		uomfrom: "CSE",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "617094",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "617095",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "617096",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "503745",
		uomfrom: "BX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "506501",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615210",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614670",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614720",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614660",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614680",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614650",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "615140",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "606510",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614713",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614630",
		uomfrom: "EA",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "615170",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "615190",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "615200",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "615220",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "614712",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614780",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "614790",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "614800",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "614810",
		uomfrom: "BX",
		uomto: "EA",
		factor: "16",
		user: "admin"
	},
	{
		item: "615160",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "606530",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "606511",
		uomfrom: "BX",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "618870",
		uomfrom: "EA",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618900",
		uomfrom: "EA",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618910",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618880",
		uomfrom: "EA",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "618860",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "201461",
		uomfrom: "CAN",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "201500",
		uomfrom: "CSE",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604080",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604060",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605180",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "605190",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "605050",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "605080",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "605070",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604020",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "603960",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "603950",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605060",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611700",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611660",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611670",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611680",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "603945",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606240",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606230",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606190",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604030",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606380",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611781",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611720",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611730",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611750",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611740",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "606390",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605171",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606250",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611490",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611500",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611434",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611433",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "606360",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606400",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604218",
		uomfrom: "BX",
		uomto: "EA",
		factor: "90",
		user: "admin"
	},
	{
		item: "605220",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606430",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604250",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "606420",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "604240",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "606196",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604076",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "606245",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "603957",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "606435",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "604065",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604077",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "603944",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603946",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603948",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604070",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604130",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604200",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "606232",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603953",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "603954",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "606231",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "604211",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602690",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604660",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604661",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "609341",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "600120",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "602440",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602770",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "709930",
		uomfrom: "CS",
		uomto: "EA",
		factor: "1000",
		user: "admin"
	},
	{
		item: "506531",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502020",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502040",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501990",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502010",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502240",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502030",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "604950",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605261",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604960",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605000",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "616300",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616260",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616270",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616290",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616280",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602852",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616271",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602820",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602860",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602840",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "600550",
		uomfrom: "JR",
		uomto: "EA",
		factor: "150",
		user: "admin"
	},
	{
		item: "600410",
		uomfrom: "JR",
		uomto: "EA",
		factor: "150",
		user: "admin"
	},
	{
		item: "610160",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610180",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602110",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602090",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601140",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602120",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602113",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602140",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602100",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602111",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602116",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602119",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "610240",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610290",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610270",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610250",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "610310",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613250",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613260",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613272",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613271",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613270",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "613240",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "708410",
		uomfrom: "CS",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "708561",
		uomfrom: "CS",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "708600",
		uomfrom: "CS",
		uomto: "CS",
		factor: "1",
		user: "admin"
	},
	{
		item: "708580",
		uomfrom: "CS",
		uomto: "BX",
		factor: "1",
		user: "admin"
	},
	{
		item: "708470",
		uomfrom: "CS1",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "600800",
		uomfrom: "TUB",
		uomto: "EA",
		factor: "300",
		user: "admin"
	},
	{
		item: "400871",
		uomfrom: "EA",
		uomto: "EA",
		factor: "25",
		user: "admin"
	},
	{
		item: "617850",
		uomfrom: "JR",
		uomto: "EA",
		factor: "20",
		user: "admin"
	},
	{
		item: "400870",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "506371",
		uomfrom: "PAK",
		uomto: "RL",
		factor: "1",
		user: "admin"
	},
	{
		item: "400430",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400431",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400432",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615060",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615050",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615080",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615090",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615040",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "615030",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614880",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614830",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614450",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "615130",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614900",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614410",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614320",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614350",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614380",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614924",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "614401",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614330",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "614440",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "614430",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "617780",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617790",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617671",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617670",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617730",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617720",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617710",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617640",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617650",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617680",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617700",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617630",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617600",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617610",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617690",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617750",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617590",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "201721",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "201561",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "301950",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "200600",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "300186",
		uomfrom: "BWL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "200840",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "200850",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "200860",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "200990",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "400710",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400660",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400630",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400680",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400600",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400690",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400640",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "400880",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "4",
		user: "admin"
	},
	{
		item: "601190",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "607030",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "607040",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "600430",
		uomfrom: "JR",
		uomto: "EA",
		factor: "240",
		user: "admin"
	},
	{
		item: "600570",
		uomfrom: "JR",
		uomto: "EA",
		factor: "240",
		user: "admin"
	},
	{
		item: "601192",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601193",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601191",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601198",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "400688",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "301627",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "301626",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "704900",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501070",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "611629",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611634",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611633",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613020",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "600480",
		uomfrom: "JAR",
		uomto: "EA",
		factor: "290",
		user: "admin"
	},
	{
		item: "600490",
		uomfrom: "TUB",
		uomto: "EA",
		factor: "120",
		user: "admin"
	},
	{
		item: "600470",
		uomfrom: "BX",
		uomto: "EA",
		factor: "120",
		user: "admin"
	},
	{
		item: "600500",
		uomfrom: "BX",
		uomto: "EA",
		factor: "120",
		user: "admin"
	},
	{
		item: "613025",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602570",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "503310",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613070",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613080",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602530",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "613030",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "202470",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "202473",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "603740",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604340",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604330",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611190",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611230",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611233",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611360",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611370",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611180",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611351",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611340",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502927",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613095",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "602900",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602870",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602890",
		uomfrom: "EA",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "613130",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613090",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "613110",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502860",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502970",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503270",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "502960",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503280",
		uomfrom: "CAN",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503320",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503300",
		uomfrom: "CS",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "502930",
		uomfrom: "CAN",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503160",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "600810",
		uomfrom: "JAR",
		uomto: "EA",
		factor: "280",
		user: "admin"
	},
	{
		item: "600361",
		uomfrom: "BG",
		uomto: "EA",
		factor: "360",
		user: "admin"
	},
	{
		item: "600351",
		uomfrom: "BG",
		uomto: "EA",
		factor: "360",
		user: "admin"
	},
	{
		item: "600371",
		uomfrom: "BG",
		uomto: "EA",
		factor: "360",
		user: "admin"
	},
	{
		item: "600341",
		uomfrom: "BG",
		uomto: "EA",
		factor: "360",
		user: "admin"
	},
	{
		item: "600331",
		uomfrom: "BG",
		uomto: "EA",
		factor: "360",
		user: "admin"
	},
	{
		item: "600311",
		uomfrom: "BG",
		uomto: "EA",
		factor: "360",
		user: "admin"
	},
	{
		item: "600381",
		uomfrom: "BG",
		uomto: "EA",
		factor: "360",
		user: "admin"
	},
	{
		item: "601390",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "602030",
		uomfrom: "BX",
		uomto: "EA",
		factor: "100",
		user: "admin"
	},
	{
		item: "605510",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "603900",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "600980",
		uomfrom: "BX",
		uomto: "EA",
		factor: "72",
		user: "admin"
	},
	{
		item: "611456",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611457",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611458",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604290",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604280",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602040",
		uomfrom: "JR",
		uomto: "EA",
		factor: "96",
		user: "admin"
	},
	{
		item: "611410",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611400",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "611450",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "203000",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "619735",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "619732",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "619752",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "619727",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "619800",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "619790",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "619750",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "619770",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "619740",
		uomfrom: "EA",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "619730",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "619711",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "619760",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "619734",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "619733",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "619720",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "619710",
		uomfrom: "BX",
		uomto: "EA",
		factor: "6",
		user: "admin"
	},
	{
		item: "619751",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "619755",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "604270",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604271",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "201640",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "302520",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "302530",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "506260",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618200",
		uomfrom: "BG",
		uomto: "EA",
		factor: "14",
		user: "admin"
	},
	{
		item: "202698",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "202699",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "202693",
		uomfrom: "CS",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601160",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601080",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601090",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601091",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601130",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601120",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "601060",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "609876",
		uomfrom: "EA",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "609880",
		uomfrom: "EA",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "609870",
		uomfrom: "EA",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "609850",
		uomfrom: "EA",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "609890",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "609881",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "601092",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "602500",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602504",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602506",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602507",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "602511",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602508",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602501",
		uomfrom: "BX",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "502910",
		uomfrom: "BTL",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "618170",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "618190",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "612328",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612540",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612240",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612210",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612530",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612710",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612250",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612316",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612192",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612332",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612331",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612315",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612370",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612314",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612150",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612330",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612294",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612510",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612270",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612303",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612334",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612306",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612200",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612180",
		uomfrom: "CS",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "612308",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "503403",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503404",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503408",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503402",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503409",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503406",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614960",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "614200",
		uomfrom: "BX",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "605520",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "605660",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604945",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604930",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604946",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604947",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "619110",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611855",
		uomfrom: "JR",
		uomto: "EA",
		factor: "190",
		user: "admin"
	},
	{
		item: "606330",
		uomfrom: "EA",
		uomto: "EA",
		factor: "18",
		user: "admin"
	},
	{
		item: "601010",
		uomfrom: "JR",
		uomto: "EA",
		factor: "240",
		user: "admin"
	},
	{
		item: "619135",
		uomfrom: "BX",
		uomto: "EA",
		factor: "60",
		user: "admin"
	},
	{
		item: "202630",
		uomfrom: "CS",
		uomto: "PK",
		factor: "24",
		user: "admin"
	},
	{
		item: "202640",
		uomfrom: "CS",
		uomto: "PK",
		factor: "24",
		user: "admin"
	},
	{
		item: "616480",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616490",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "616470",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "501460",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "501470",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "501430",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "501450",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "501420",
		uomfrom: "BX",
		uomto: "EA",
		factor: "10",
		user: "admin"
	},
	{
		item: "402140",
		uomfrom: "CS",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503350",
		uomfrom: "SQG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "617870",
		uomfrom: "JR",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "617910",
		uomfrom: "JR",
		uomto: "EA",
		factor: "32",
		user: "admin"
	},
	{
		item: "601360",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602011",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "611161",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "604511",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602760",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "605360",
		uomfrom: "BX",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "611890",
		uomfrom: "BAG",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605140",
		uomfrom: "EA",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "611162",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605430",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605460",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604510",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605130",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604500",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604570",
		uomfrom: "EA",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604540",
		uomfrom: "EA",
		uomto: "EA",
		factor: "36",
		user: "admin"
	},
	{
		item: "604970",
		uomfrom: "EA",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611150",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605448",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605131",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "604560",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "602750",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611140",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "605449",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "605447",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "611160",
		uomfrom: "BOX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "504980",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "707430",
		uomfrom: "BX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "707550",
		uomfrom: "BX",
		uomto: "EA",
		factor: "500",
		user: "admin"
	},
	{
		item: "707630",
		uomfrom: "BX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "707470",
		uomfrom: "BX",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "503020",
		uomfrom: "SLV",
		uomto: "SLV",
		factor: "12",
		user: "admin"
	},
	{
		item: "201015",
		uomfrom: "CS",
		uomto: "EA",
		factor: "8",
		user: "admin"
	},
	{
		item: "604990",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601950",
		uomfrom: "BX",
		uomto: "EA",
		factor: "48",
		user: "admin"
	},
	{
		item: "401015",
		uomfrom: "EA",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "604948",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601753",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601752",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601757",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601751",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601756",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "601754",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "600720",
		uomfrom: "JR",
		uomto: "EA",
		factor: "192",
		user: "admin"
	},
	{
		item: "604620",
		uomfrom: "BX",
		uomto: "EA",
		factor: "24",
		user: "admin"
	},
	{
		item: "302531",
		uomfrom: "PAK",
		uomto: "EA",
		factor: "1",
		user: "admin"
	},
	{
		item: "606570",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "606632",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "606600",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "606628",
		uomfrom: "BX",
		uomto: "EA",
		factor: "12",
		user: "admin"
	},
	{
		item: "606630",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
	{
		item: "606625",
		uomfrom: "BX",
		uomto: "EA",
		factor: "15",
		user: "admin"
	},
];

const seedConversion = () => {
  await Conversion.deleteMany({});  
  await Conversion.bulkCreate(conversionData);
} 

module.exports = seedConversion;
