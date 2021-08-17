//
//  Populate database with default data
//
const mongoose = require("mongoose");
const { Item } = require('../models/Item');

const itemData = [
	{
		item: "703250",
		description: "\"PLATE RS10CY 3 COMP 500/10\"\"\"",
		upc: "51",
		uom: "CS",
		"user": "admin"
	},
	{
		item: "617950",
		description: "PIGS FEET 12CT JAR",
		upc: "617950",
		uom: "JR",
		user: "admin"
	},
	{
		item: "614910",
		description: "OREO COOKIE SLUG PAK",
		upc: "4474902",
		uom: "EA",
		user: "admin"
	},
	{
		item: "616265",
		description: "COMBOS CARAMEL CREME PRETZEL 6.3OZ",
		upc: "414978087",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "501080",
		description: "BIC PEN BLACK MSP 12CT",
		upc: "800000912",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "608175",
		description: "DENTYNE ICE WINTER CHILL 9CT",
		upc: "1254600546",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608515",
		description: "TRIDENT WHITE SPARKL MINT 9CT",
		upc: "1254667623",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400686",
		description: "UNCLE RAYS SALT & PEPR 3OZ $1.19 EA",
		upc: "1415606175",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400684",
		description: "UNCLE RAYS JALAPENO 3OZ $1.19 EA",
		upc: "1415606176",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "608966",
		description: "EXTRA SWEET ORANGE 10CT",
		upc: "2200001388",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608844",
		description: "JUICY FRUIT STARBURST CHERRY 10CT",
		upc: "2200001748",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608845",
		description: "JUICY FRUIT STARBURST STRAWBRY 10CT",
		upc: "2200001749",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606385",
		description: "SKITTLES ORCHARDS KING SIZE 24CT",
		upc: "2200013456",
		uom: "EA",
		user: "admin"
	},
	{
		item: "605054",
		description: "SKITTLES ORCHARDS 24CT",
		upc: "2200013574",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604716",
		description: "KIT KAT WHITE MINIS KING SIZE 12CT",
		upc: "3400013859",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603725",
		description: "REESES CRUNCHY PB CUP KNG SIZE 16CT",
		upc: "3400043035",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603525",
		description: "REESES CRUNCHY PB CUP 24CT",
		upc: "3400044475",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611970",
		description: "TWIZZLER BLACK LICORICE PEG BAG 7OZ",
		upc: "3400054400",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "606365",
		description: "SNICKERS EXTREME NUT KING SZ 24CT",
		upc: "4000049453",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "603935",
		description: "M&M CRISPY 24CT",
		upc: "4000049479",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606197",
		description: "M&M CRISPY KING SIZE 24CT",
		upc: "4000049482",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "616266",
		description: "COMBOS VANILLA FROST PRETZEL 6.3OZ",
		upc: "4141978085",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613280",
		description: "BLUE DIAM S.H.JALAPENO ALMD 12 TB",
		upc: "4157005275",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613281",
		description: "BLUE DIAM HABANERO BBQ ALMD 12 TB",
		upc: "4157005513",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613282",
		description: "BLUE DIAM LIGHTLY SALTD ALMD 12 TB",
		upc: "4157011026",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605075",
		description: "SOUR PATCH KIDS ASSORTD 24CT",
		upc: "7046209850",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605076",
		description: "SOUR PATCH KIDS WATERMELON 24CT",
		upc: "7046209852",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611632",
		description: "SOUR PATCH KIDS CANDY 3.5OZ THTR BX",
		upc: "7046262496",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "609875",
		description: "MENTOS PURE FRSH GUM MINT 10CT",
		upc: "7339001393",
		uom: "EA",
		user: "admin"
	},
	{
		item: "402660",
		description: "NUTS REDSKIN 5# BOX",
		upc: "7723210600",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "609940",
		description: "TIC TAC FRESHMINT BIG PK 12CT TRAY",
		upc: "9800057610",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609930",
		description: "TIC TAC ORANGE BIG PACK 12CT TRAY",
		upc: "9800057634",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611350",
		description: "MILK DUDS THEA BOX 5OZ",
		upc: "10700021523",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611630",
		description: "WHOPPERS BOX 5OZ",
		upc: "10700024401",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "610680",
		description: "GOOD & PLENTY THEATER BOX 6OZ",
		upc: "10700088137",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "600190",
		description: "JOLLY RANCHER APPLETWST CHNGMKR 160",
		upc: "10700100047",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600230",
		description: "JOLLY RANCHER WATERMELON CHANGEMAKE",
		upc: "10700100870",
		uom: "BX",
		user: "admin"
	},
	{
		item: "610990",
		description: "JOLLY RANCHER FRUIT N' SOUR PEG 7OZ",
		upc: "10700102000",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603271",
		description: "JOLLY RANCHER CRNCH N CHW ASST 18CT",
		upc: "10700132703",
		uom: "BX",
		user: "admin"
	},
	{
		item: "610986",
		description: "JOLLY RANCHER CRNCH N CHW ASST PEG",
		upc: "10700132727",
		uom: "EA",
		user: "admin"
	},
	{
		item: "601680",
		description: "JOLLY RANCHER LOLLIPOPS 50/15",
		upc: "10700158505",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601614",
		description: "JOLLY RANCHR ASORTED HARD CNDY 12CT",
		upc: "10700517111",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601615",
		description: "JOLLY RANCHR WATRMLN HARD CNDY 12CT",
		upc: "10700517135",
		uom: "BX",
		user: "admin"
	},
	{
		item: "610985",
		description: "JOLLY RANCHER AWESME REDS 6.5OZ PEG",
		upc: "10700517227",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611040",
		description: "JOLLY RANCHER FRUIT CHEWS PEG 6.5OZ",
		upc: "10700519303",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603840",
		description: "JOLLY RANCHER FRUIT CHEWS 12CT",
		upc: "10700519511",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603847",
		description: "JOLLY RANCHER TROPICL FRT CHWS 12CT",
		upc: "10700519542",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611050",
		description: "JOLLY RANCHER SCREAMING SOUR 6.5OZ",
		upc: "10700529357",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "604596",
		description: "JOLLY RANCHR BITES KS 3.4OZ 10CT",
		upc: "10700529596",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603810",
		description: "JOLLY RANCHER SCREAMIN SOURS 24CT",
		upc: "10700529602",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611070",
		description: "WHOPPERS 7OZ PEG BAG",
		upc: "10700702026",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610980",
		description: "JOLLY RANCHER ORIGINAL ASSORTED 7OZ",
		upc: "10700702309",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611010",
		description: "JOLLY RANCHER CINNAMON FIRE PEG 7OZ",
		upc: "10700702323",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611430",
		description: "JOLLY RANCHER GUMMI THEATER BOX 4OZ",
		upc: "10700708608",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605610",
		description: "ZERO 24CT",
		upc: "10700904140",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605590",
		description: "WHOPPERS 24CT",
		upc: "10700923851",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601600",
		description: "JOLLY RANCHER APPLE STIX 36CT",
		upc: "10700953049",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601610",
		description: "JOLLY RANCHER CHERRY STIX 36CT",
		upc: "10700953063",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604320",
		description: "MILK DUDS 24CT",
		upc: "10700958211",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603240",
		description: "HEATH 18CT",
		upc: "10700961228",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604650",
		description: "PAY DAY 24CT",
		upc: "10700963239",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605780",
		description: "PAY DAY KING SIZE 18CT",
		upc: "10700963277",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602210",
		description: "CANDY NECKLACE JAR 36CT",
		upc: "11206003368",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601980",
		description: "SLAP STIX 36CT",
		upc: "11211004534",
		uom: "EA",
		user: "admin"
	},
	{
		item: "604392",
		description: "SKY BAR 36CT",
		upc: "11215510543",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602080",
		description: "NECCO CANDY BUTTON 24CT BOX",
		upc: "11215512288",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604390",
		description: "NECCO WAFER ROLLS 24CT",
		upc: "11215512516",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604400",
		description: "NECCO CHOCOLATE WAFERS 24CT",
		upc: "11215512974",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609620",
		description: "CERTS PEPPERMINT 24CT",
		upc: "12546005074",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609630",
		description: "CERTS SPEARMINT 24CT",
		upc: "12546005081",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609640",
		description: "CERTS WINTERGREEN 24CT",
		upc: "12546005104",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609660",
		description: "CERTS FRESH FRUIT MIX 24CT",
		upc: "12546005111",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609590",
		description: "CERTS CINNAMON 24CT",
		upc: "12546005128",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608386",
		description: "STRIDE SOUR PATCH GUM REDBERRY 12CT",
		upc: "12546005227",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608556",
		description: "TRIDENT BLACK RASPBERRY 12CT VAL PK",
		upc: "12546006347",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608555",
		description: "TRIDENT PINEAPPLE TWIST 12CT VAL PK",
		upc: "12546006385",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608384",
		description: "STRIDE SOUR PATCH GUM WATERMLN 12CT",
		upc: "12546007146",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607550",
		description: "BUBBLICIOUS WATERMELON WAVE 18CT",
		upc: "12546010030",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607480",
		description: "BUBBLICIOUS TROPICAL 18CT",
		upc: "12546010115",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607470",
		description: "BUBBLICIOUS GONZO GRAPE 18CT",
		upc: "12546010160",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607460",
		description: "BUBBLICIOUS BLUE BLOWOUT 18CT",
		upc: "12546010252",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607450",
		description: "BUBBLICIOUS BUBBLE GUM 18CT",
		upc: "12546010269",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607530",
		description: "BUBBLICIOUS TWISTED TORNADO 18CT",
		upc: "12546010290",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607520",
		description: "BUBBLICIOUS STRAWBERRY 18CT",
		upc: "12546010313",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607510",
		description: "BUBBLICIOUS SAVAGE SOUR APPLE 18CT",
		upc: "12546010320",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607500",
		description: "BUBBLICIOUS CARNIVAL COTTON CANDY",
		upc: "12546015028",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607570",
		description: "BUBBLICIOUS BURST THUNDRN STRM 12CT",
		upc: "12546015103",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608431",
		description: "STRIDE ID BERRY MELON 9CT",
		upc: "12546017015",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608432",
		description: "STRIDE ID SPEARMINT 9CT",
		upc: "12546017039",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607610",
		description: "CHICLETS FRUIT FLAVOR GUM 20CT",
		upc: "12546025034",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608170",
		description: "DENTYNE ICE ARCTIC CHILL 9CT",
		upc: "12546032001",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608140",
		description: "DENTYNE FIRE SPICY CINNAMON 9CT",
		upc: "12546032056",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608093",
		description: "DENTYNE PURE HERBAL MINT 10CT BOX",
		upc: "12546032353",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608094",
		description: "DENTYNE PURE MINT MELON 10CT BOX",
		upc: "12546032360",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608390",
		description: "STRIDE SPEARMINT 12CT",
		upc: "12546068031",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608500",
		description: "STRIDE SWEET PEPPERMINT 12CT",
		upc: "12546068123",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608564",
		description: "TRIDENT STRAWBERRY TWIST 12CT",
		upc: "12546074353",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608640",
		description: "TRIDENT ORIGINAL 12CT VAL PAK",
		upc: "12546075060",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608660",
		description: "TRIDENT SPEARMINT 12CT VAL PK",
		upc: "12546075077",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607811",
		description: "TRIDENT CINNAMON VAL PAK 12CT",
		upc: "12546075091",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608560",
		description: "TRIDENT BUBBLE GUM 12CT VAL PAK",
		upc: "12546075107",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608530",
		description: "TRIDENT WHITE PEPPERMINT 9CT",
		upc: "12546075589",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608520",
		description: "TRIDENT WHITE SPEARMINT 9CT",
		upc: "12546075619",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608670",
		description: "TRIDENT TROPICAL TWIST 12CT",
		upc: "12546075671",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608610",
		description: "TRIDENT WATERMELON TWIST 12CT VALPK",
		upc: "12546075732",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607801",
		description: "TRIDENT SWEET MINTY TWIST 12CT 18PC",
		upc: "12546075831",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608150",
		description: "DENTYNE ICE PEPPERMINT 9CT",
		upc: "12546097024",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608160",
		description: "DENTYNE ICE SPEARMINT 9CT",
		upc: "12546097031",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608100",
		description: "DENTYNE ICE SHIVER MINT 9CT",
		upc: "12546097086",
		uom: "BX",
		user: "admin"
	},
	{
		item: "402310",
		description: "DAILY CHEF KETCHUP JUG 114OZ EACH",
		upc: "13000514910",
		uom: "EA",
		user: "admin"
	},
	{
		item: "402311",
		description: "HEINZ MUSTARD JUG 104OZ EACH",
		upc: "13000652209",
		uom: "EA",
		user: "admin"
	},
	{
		item: "401025",
		description: "POPCORN SALT DIAMOND CRYSTAL",
		upc: "13600019013",
		uom: "EA",
		user: "admin"
	},
	{
		item: "605330",
		description: "SUGAR DADDY MILK CARAMEL POP 24CT",
		upc: "14200332106",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605320",
		description: "SUGAR BABIES 24CT",
		upc: "14200333103",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601420",
		description: "CHARMS SWEET POPS 48CT",
		upc: "14200337064",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601430",
		description: "CHARMS SWEET N SOUR POPS 48/10",
		upc: "14200337088",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601400",
		description: "CHARMS FLUFFY STUFF COTTON CNDY POP",
		upc: "14200337828",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602400",
		description: "BLOW POPS SUPER ASSORTED 36CT",
		upc: "14200338566",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601260",
		description: "BLOW POPS CHERRY 48CT",
		upc: "14200338610",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601240",
		description: "BLOW POPS ASSORTED 100CT",
		upc: "14200338696",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601320",
		description: "BLOW POPS BLUE RAZZ BERRY 48/15",
		upc: "14200338870",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611560",
		description: "SUGAR BABIES THEATER BOX 6OZ",
		upc: "14200535453",
		uom: "EA",
		user: "admin"
	},
	{
		item: "616630",
		description: "CHEX MIX CHEDDAR EACH 3.75OZ",
		upc: "16000126060",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616752",
		description: "CHEX MIX BLD PARTY BLND EACH 3.75OZ",
		upc: "16000126077",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616730",
		description: "CHEX MIX HOT'N SPICY EACH 3.75OZ",
		upc: "16000126091",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603060",
		description: "NATURE VLY STRWBRY YOGURT CHWY GRAN",
		upc: "16000131583",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614681",
		description: "CHEERIOS CEREAL CUP 6CT 1.3OZ",
		upc: "16000138964",
		uom: "6CT",
		user: "admin"
	},
	{
		item: "614683",
		description: "CINNAMON TOAST CRNCH CEREAL CUP 6CT",
		upc: "16000141544",
		uom: "6CT",
		user: "admin"
	},
	{
		item: "614682",
		description: "CHEERIOS HONEY NUT CEREAL CUP 6CT",
		upc: "16000141551",
		uom: "6CT",
		user: "admin"
	},
	{
		item: "603171",
		description: "FIBER ONE OATS & CHOC BAR 16CT",
		upc: "16000146525",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603120",
		description: "NATURE VLY TRAIL MX FRUIT/NUT BARS",
		upc: "16000151208",
		uom: "BX",
		user: "admin"
	},
	{
		item: "300900",
		description: "BOWL APPETIT THREE CHEESE ROTINI",
		upc: "16000154803",
		uom: "BWL",
		user: "admin"
	},
	{
		item: "300890",
		description: "BOWL APPETIT PASTA ALFREDO",
		upc: "16000154902",
		uom: "BWL",
		user: "admin"
	},
	{
		item: "300880",
		description: "BOWL APPETIT HERB CHICKEN VEGETABLE",
		upc: "16000155800",
		uom: "BWL",
		user: "admin"
	},
	{
		item: "616740",
		description: "CHEX MIX TRADITIONAL EACH 3.75OZ",
		upc: "16000160101",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616770",
		description: "GARDETTO - ORIGINAL RECIPE 1.75 OZ",
		upc: "16000166097",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616760",
		description: "GARDETTO ORIGINAL RECIPE 5.5 OZ EA",
		upc: "16000166196",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616430",
		description: "GARDETTO SPECIAL ITALIAN RECIPE 5OZ",
		upc: "16000166998",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616420",
		description: "GARDETTO ITALIAN CHEESE BLEND 5.5OZ",
		upc: "16000167490",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616540",
		description: "CHEX MIX CHCOLT TRTLE MX EACH 4.5OZ",
		upc: "16000167940",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616550",
		description: "CHEX MIX CHOCLTE PNT BTTR 4.5OZ EA",
		upc: "16000168923",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "606470",
		description: "CEREAL BAR HONEY NUT CHEERIOS 12CT",
		upc: "16000185814",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606460",
		description: "CEREAL BAR CINNAMON TOAST CRUNCH",
		upc: "16000185821",
		uom: "BX",
		user: "admin"
	},
	{
		item: "616663",
		description: "BUGLES CHEDDAR/CARAMEL MIX EACH",
		upc: "16000277489",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616583",
		description: "BUGLES CHOCLTE PNUT BTTR 3.25OZ EA",
		upc: "16000292055",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603126",
		description: "FIBER ONE BROWNIE CHOC FUDGE 12CT",
		upc: "16000323124",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603129",
		description: "NATURE VLY RECHRG CHRY/DKCHOC 15CT",
		upc: "16000323148",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603128",
		description: "NATURE VLY RECHRG CRN/ALMND 15CT",
		upc: "16000323155",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603110",
		description: "NATURE VLY OAT/HONEY CRNCHY GRANOLA",
		upc: "16000335301",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603170",
		description: "NATURE VLY PEANUT BTTR CRNCHY GRANO",
		upc: "16000335509",
		uom: "BX",
		user: "admin"
	},
	{
		item: "616660",
		description: "BUGLES ORIGINAL 3OZ BAG EACH",
		upc: "16000368309",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603140",
		description: "NATURE VLY SWT/SLTY GRANOLA PEANUT",
		upc: "16000420670",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603150",
		description: "NATURE VLY SWT/SLTY GRANOLA ALMOND",
		upc: "16000420687",
		uom: "BX",
		user: "admin"
	},
	{
		item: "616637",
		description: "GOLDEN GRAHM CHOC/MARSH. BAR 2.1OZ",
		upc: "16000423367",
		uom: "BX",
		user: "admin"
	},
	{
		item: "616667",
		description: "BUGLES HOT BUFFALO 3OZ BAG EACH",
		upc: "16000434370",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "606463",
		description: "CEREAL BAR LUCKY CHARMS 12CT",
		upc: "16000435698",
		uom: "BX",
		user: "admin"
	},
	{
		item: "616450",
		description: "GARDETTO ROASTED GARLIC RYE 4.75OZ",
		upc: "16000502789",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616580",
		description: "BUGLES SWEET & SALTY CRML 3.5OZ EA",
		upc: "16000504257",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616761",
		description: "GARDETTO CHIPOLTE CHEDDAR 5.5OZ BAG",
		upc: "16000505384",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616541",
		description: "CHEX MIX JALAPENO CHDR EACH 3.75OZ",
		upc: "16000505827",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616636",
		description: "CHEX CHIPS WASABI 1.5OZ EA",
		upc: "16000506190",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616635",
		description: "CHEX CHIPS CARAMLIZD ONION 1.5OZ EA",
		upc: "16000506282",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616638",
		description: "CHEX CHIPS CHEDDAR/JALAPNO 1.5OZ EA",
		upc: "16000506299",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616547",
		description: "CHEX MIX MUDDY BUDDIES EACH 4.5OZ",
		upc: "16000507326",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616634",
		description: "CHEX CHIPS CINNAMON SUGAR 1.5OZ",
		upc: "16000510692",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616330",
		description: "BUGLES NACHO CHEESE 3OZ EACH",
		upc: "16000513792",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616750",
		description: "CHEX MIX SWT & SLTY TRAIL MX EACH",
		upc: "16000523098",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "402260",
		description: "ROSES LIME 1 LITER EACH",
		upc: "16600000736",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "402270",
		description: "ROSES GRENADINE 1 LITER EACH",
		upc: "16600000767",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "618290",
		description: "JACK LINK ALL AMERICAN 12/16 1.2OZ",
		upc: "17082001399",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618293",
		description: "JACK LINK JALPENO BF/CHS COMBO 16CT",
		upc: "17082001405",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618411",
		description: "JACK LINK SWT/HOT BFSTK 12/12 1 OZ",
		upc: "17082002136",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618370",
		description: "JACK LINK TERIYAKI BFSTK 12/12 10Z",
		upc: "17082002747",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618310",
		description: "JACK LINK BLK PPR BFSTK 12/12 1OZ",
		upc: "17082003232",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618320",
		description: "JACK LINK KC MASTERPC BFSTK 1 OZ",
		upc: "17082003836",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618375",
		description: "JACK LINK ORIGINAL BF STK 1 OZ 12CT",
		upc: "17082004024",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618373",
		description: "JACK LINK JRKY CHW ORIGNL CAN 12CT",
		upc: "17082005458",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618372",
		description: "JACK LINK JRKY CHW TERYKI CAN 12CT",
		upc: "17082005489",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618270",
		description: "JACK LINK JUMBO ORIGINAL BFSTK 2OZ.",
		upc: "17082006035",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618280",
		description: "JACK LINK JUMBO BLK PPR BFSTK 2 OZ",
		upc: "17082006233",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618250",
		description: "JACK LINK JUMBO TERIYAKI BFSTK 2OZ",
		upc: "17082006738",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618288",
		description: "JACK LINK ORIG. BEEF JERKY 3.25OZ",
		upc: "17082007872",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617992",
		description: "JACK LINK SWEET/HOT 3.25OZ BAG",
		upc: "17082007889",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617991",
		description: "JACK LINK PEPPERED BAG 3.25OZ",
		upc: "17082007896",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617993",
		description: "JACK LINK TERIYAKI BAG 3.25OZ",
		upc: "17082007957",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400765",
		description: "JACK LINK ORIG NUGGETS 3.25OZ BAG",
		upc: "17082112071",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617996",
		description: "JACK LINK BUFF CHICKEN NUGG 3.25OZ",
		upc: "17082112170",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400773",
		description: "JACK LINK TERIYAKI NUGGTS 3.25OZ BG",
		upc: "17082112774",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400750",
		description: "JACK LINK JALAPENO BAG EACH 3.25OZ",
		upc: "17082470171",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400740",
		description: "JACK LINK PRM RIB TNDR CUT 3OZ BAG",
		upc: "17082470478",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "618324",
		description: "JACK LINK BBQ BEEF JERKY 3.25OZ BAG",
		upc: "17082474568",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "618482",
		description: "JACK LINK ORG BF JRKY 1.5OZ EACH",
		upc: "17082480408",
		uom: "STK",
		user: "admin"
	},
	{
		item: "618483",
		description: "JACK LINK PPRD BF JRKY 1.5Z EACH",
		upc: "17082480415",
		uom: "BG",
		user: "admin"
	},
	{
		item: "618486",
		description: "JACK LINK TERI BF JRKY 1.5OZ EACH",
		upc: "17082480422",
		uom: "STK",
		user: "admin"
	},
	{
		item: "618485",
		description: "JACK LINK SWT HT BF JRKY 1.5OZ EACH",
		upc: "17082485434",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "618484",
		description: "JACK LINK SMKD BF JRKY 1.5Z EACH",
		upc: "17082485465",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400760",
		description: "JACK LINK ORIG SMOKEHOUSE 3.25OZ",
		upc: "17082700100",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "618489",
		description: "JACK LINK CARNE JLP JRKY 1.5OZ EACH",
		upc: "17082840446",
		uom: "STK",
		user: "admin"
	},
	{
		item: "618488",
		description: "JACK LINK HICKORY SMKD 1.5OZ EACH",
		upc: "17082845465",
		uom: "STK",
		user: "admin"
	},
	{
		item: "617997",
		description: "JACK LINK TURKEY JERKY 3.25OZ BAG",
		upc: "17082873293",
		uom: "BG",
		user: "admin"
	},
	{
		item: "617995",
		description: "JACK LINK BURRITO BAG 3.25OZ",
		upc: "17082874603",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617994",
		description: "JACK LINK SRIRACHA BAG 3.25OZ",
		upc: "17082874627",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "618334",
		description: "JACK LINK SMALL BATCHED ORIG 2.5OZ",
		upc: "17082874689",
		uom: "EA",
		user: "admin"
	},
	{
		item: "618336",
		description: "JACK LINK SMALL BATCHD PEPPRD 2.5OZ",
		upc: "17082874702",
		uom: "EA",
		user: "admin"
	},
	{
		item: "618002",
		description: "JACK LINK LIL CHUB 24CT",
		upc: "17082881137",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400770",
		description: "JACK LINK ORIG BEEF STICK 1.5OZ 24C",
		upc: "17082881601",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400777",
		description: "JACK LINK STRICKLER BEEF STICK 36CT",
		upc: "17082891044",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400779",
		description: "JACK LINK ORG BF STK 1.02OZ $0.99",
		upc: "17082891747",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400775",
		description: "JACK LINK ORG BF STK .92OZ 72CT",
		upc: "17082891778",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400778",
		description: "JACK LINK MILD SASQCH 2.2OZ 24CT BX",
		upc: "17082895806",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400776",
		description: "JACK LINK ORIG. SASQUATCH 24CT BOX",
		upc: "17082895813",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614736",
		description: "PILLSBURY MINI SFT SNICKERDLD 6/3OZ",
		upc: "18000322732",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614735",
		description: "PILLSBURY MINI SFT CHOC CHIP 6/3OZ",
		upc: "18000322749",
		uom: "BX",
		user: "admin"
	},
	{
		item: "503010",
		description: "SEAFOAM MOTOR TREATMENT 16OZ EACH",
		upc: "18812000019",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609800",
		description: "LIFESAVERS PEP O MINT 20CT",
		upc: "19000080653",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609810",
		description: "LIFESAVERS SPEAR O MINT 20CT",
		upc: "19000080677",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609770",
		description: "LIFESAVERS BUTTER RUM 20CT",
		upc: "19000080691",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609830",
		description: "LIFESAVERS WILD CHERRY 20CT",
		upc: "19000080714",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611310",
		description: "LIFESAVERS GUMMIES 5 FLAVOR PEG BAG",
		upc: "19000083422",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611320",
		description: "GUMMI SAVERS WILD BERRY 7OZ",
		upc: "19000083449",
		uom: "EA",
		user: "admin"
	},
	{
		item: "610540",
		description: "LIFESAVERS 5 FLAVOR 6OZ BAG",
		upc: "19000085013",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610550",
		description: "LIFESAVERS PEP O MINT 6OZ BAG",
		upc: "19000085037",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610570",
		description: "LIFESAVERS WINTOGREEN 6OZ",
		upc: "19000085044",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610530",
		description: "LIFESAVERS BUTTER RUM 6OZ BAG",
		upc: "19000085051",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610560",
		description: "LIFESAVERS WILD CHERRY 6OZ",
		upc: "19000085082",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611241",
		description: "LIFESAVERS GUMMIES SOURS PEG BAG",
		upc: "19000170498",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612950",
		description: "TROLLI CLASSIC BEARS",
		upc: "20709002409",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612970",
		description: "TROLLI PEACHIE-OS PEG BAG EACH",
		upc: "20709002539",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612910",
		description: "TROLLI APPLE-OS PEG BAG EACH",
		upc: "20709002621",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613010",
		description: "TROLLI SQUIGGLES 012040",
		upc: "20709012040",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612990",
		description: "TROLLI TROPIC-OS PEG BAG EACH",
		upc: "20709012064",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612943",
		description: "TROLLI SOUR BRITE EGGS PEG BAG",
		upc: "20709012088",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612930",
		description: "TROLLI SOUR BRITE CRAWLERS PEG BAG",
		upc: "20709012309",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613000",
		description: "TROLLI SOUR BRITE OCTOPUS PEG BAG",
		upc: "20709012316",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612980",
		description: "TROLLI STRAWBERRY PUFFS PEG BAG EA",
		upc: "20709012569",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612976",
		description: "TROLLI GUMMI SODA POPPERS PEG BG EA",
		upc: "20709110432",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612977",
		description: "TROLLI GUMMI BIG BOLD BEARS PEG BAG",
		upc: "20709110449",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "612920",
		description: "TROLLI CHERRY BOMBERS",
		upc: "20709708028",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "620130",
		description: "KRAFT EASY MAC ORIGINAL MICROWAVE",
		upc: "21000016419",
		uom: "BWL",
		user: "admin"
	},
	{
		item: "300459",
		description: "\"PASQUALE'S PIZZA SSG/BACON 12\"\" EACH\"",
		upc: "21821129107",
		uom: "EA",
		user: "admin"
	},
	{
		item: "300457",
		description: "\"PASQUALE'S PIZZA HAMBURGER 12\"\" EACH\"",
		upc: "21821130127",
		uom: "EA",
		user: "admin"
	},
	{
		item: "300455",
		description: "\"PASQUALE'S PIZZA SAUSAGE 12\"\" EACH\"",
		upc: "21821131230",
		uom: "EA",
		user: "admin"
	},
	{
		item: "300456",
		description: "\"PASQUALE'S PIZZA PEPPERONI 12\"\" EACH\"",
		upc: "21821132343",
		uom: "EA",
		user: "admin"
	},
	{
		item: "300458",
		description: "\"PASQUALE'S PIZZA DELUXE 12\"\" EACH\"",
		upc: "21821133456",
		uom: "EA",
		user: "admin"
	},
	{
		item: "611244",
		description: "LIFESAVERS GUMMIES PARADISE MX 7OZ",
		upc: "22000016003",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "608753",
		description: "ORBIT CITRUS REMIX 12CT",
		upc: "22000017462",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607701",
		description: "HUBBA BUBBA MAX STRWBRY/WTRMLN 18CT",
		upc: "22000100641",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609530",
		description: "ECLIPSE MINT SPEARMINT 9CT",
		upc: "22000101143",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607720",
		description: "HUBBA BUBBA MAX OUTRAGEOUS ORIGINAL",
		upc: "22000102645",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609790",
		description: "LIFESAVERS 5 FLAVOR 20CT",
		upc: "22000104281",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609840",
		description: "LIFESAVERS WINTOGREEN 20CT",
		upc: "22000104311",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608782",
		description: "WRIGLEYS 5 COBALT 10CT",
		upc: "22000105066",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608781",
		description: "WRIGLEYS 5 RAIN 10CT",
		upc: "22000105080",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606381",
		description: "SKITTLES WILDBERRY KING SIZE 24CT",
		upc: "22000105219",
		uom: "EA",
		user: "admin"
	},
	{
		item: "608925",
		description: "EXTRA MIXED BERRY GUM 10CT",
		upc: "22000106308",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605053",
		description: "SKITTLES DESSERTS 24CT",
		upc: "22000106445",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "608880",
		description: "WRIGLEYS SPEARMINT SLIM PK 10CT",
		upc: "22000106964",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608790",
		description: "WRIGLEYS DOUBLEMINT SLIM PK 10CT",
		upc: "22000106971",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608840",
		description: "WRIGLEYS JUICY FRUIT SLM PK 10CT",
		upc: "22000106988",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608720",
		description: "WRIGLEYS BIG RED SLIM PK 10CT",
		upc: "22000106995",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608890",
		description: "WRIGLEYS WINTERFRESH SLIM PK 10CT",
		upc: "22000107008",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608785",
		description: "*D/C WRIGLEYS 5 ELIXIR 10CT",
		upc: "22000107350",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608789",
		description: "WRIGLEY 5 PHOTON PINAPPLE BLND 10CT",
		upc: "22000108357",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609432",
		description: "ALTOIDS SMALLS PEPPERMINT 9CT",
		upc: "22000109040",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609433",
		description: "ALTOIDS SMALLS WINTERGREEN 9CT",
		upc: "22000109057",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605225",
		description: "STARBURST FRUITY SLUSHIES 24CT",
		upc: "22000113474",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609060",
		description: "ORBIT SWEETMINT 12CT",
		upc: "22000114839",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608680",
		description: "ORBIT SPEARMINT 12CT",
		upc: "22000114846",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608740",
		description: "ORBIT CINNAMINT 12CT",
		upc: "22000114853",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608700",
		description: "ORBIT PEPPERMINT 12CT",
		upc: "22000114860",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608710",
		description: "ORBIT WINTERMINT 12CT",
		upc: "22000114884",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608730",
		description: "ORBIT BUBBLEMINT 12CT",
		upc: "22000114891",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607930",
		description: "WRIGLEYS SPEARMINT 40CT",
		upc: "22000115713",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607910",
		description: "WRIGLEYS DOUBLEMINT 40",
		upc: "22000115720",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607920",
		description: "WRIGLEYS JUICY FRUIT 40",
		upc: "22000115737",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607900",
		description: "WRIGLEYS BIG RED 40",
		upc: "22000115751",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607940",
		description: "WRIGLEYS WINTERFRESH 40CT",
		upc: "22000115782",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608793",
		description: "WRIGLEYS 5 PRISM 10CT",
		upc: "22000116031",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608756",
		description: "ORBIT STRAWBERRY REMIX 12CT",
		upc: "22000116185",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605172",
		description: "STARBURST GUMMI BURSTS DUOS 24CT",
		upc: "22000116635",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608786",
		description: "WRIGLEYS 5 REACT MINT 10CT",
		upc: "22000117038",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609140",
		description: "ECLIPSE MINT PEPPERMINT 8CT",
		upc: "22000117403",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609050",
		description: "ECLIPSE MINTS WINTERFROST 8CT",
		upc: "22000117410",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609071",
		description: "ECLIPSE PEPPERMINT 8CT",
		upc: "22000119445",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609000",
		description: "ECLIPSE WINTERFROST 8CT",
		upc: "22000119452",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609070",
		description: "ECLIPSE POLAR ICE 8CT",
		upc: "22000119612",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608990",
		description: "ECLIPSE SPEARMINT 8CT",
		upc: "22000119650",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607026",
		description: "BUBBLE TAPE MYSTERY FLAVOR 12CT",
		upc: "22000120199",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607704",
		description: "HUBBA BUBBA MAX MYSTERY 18CT",
		upc: "22000120243",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608939",
		description: "EXTRA SMOOTH MINT GUM 10CT",
		upc: "22000121523",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608797",
		description: "WRIGLEY 5 RPM FRUIT 10CT",
		upc: "22000121905",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611322",
		description: "LIFESAVERS GUMIS 5 FLVR KNG SZ 15CT",
		upc: "22000121998",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608788",
		description: "WRIGLEY 5 ASCENT WINTRMINT 10CT",
		upc: "22000123930",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609410",
		description: "ALTOIDS PEPPERMINT TINS 12CT",
		upc: "22000158925",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609420",
		description: "ALTOIDS WINTERGREEN MNTS 12CT",
		upc: "22000158932",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608970",
		description: "EXTRA WINTERFRESH 10CT",
		upc: "22000159465",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608980",
		description: "EXTRA CLASSIC BUBBLE 10CT",
		upc: "22000159489",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608964",
		description: "EXTRA SENSATN SWT WATERMELON 10CT",
		upc: "22000159519",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608920",
		description: "EXTRA PEPPERMINT 10CT",
		upc: "22000159526",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608930",
		description: "EXTRA POLAR ICE 10CT",
		upc: "22000159533",
		uom: "BX",
		user: "admin"
	},
	{
		item: "608940",
		description: "EXTRA SPEARMINT SLIM PK 10CT",
		upc: "22000159540",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611280",
		description: "LIFESAVERS GUMMIES 5 FLAVOR THEATER",
		upc: "22000209747",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611787",
		description: "STARBURST GUMMIBRST DUOS PEG BAG",
		upc: "22000234350",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611316",
		description: "LIFESAVERS GUMMIES COLLISIONS PG BG",
		upc: "22000238358",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "606870",
		description: "BIG LEAGUE CHEW SWINGIN SOUR APPLE",
		upc: "22110152813",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606840",
		description: "BIG LEAGUE CHEW ORIGINAL 12CT",
		upc: "22110153209",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606880",
		description: "BIG LEAGUE CHEW GRAPE 12CT",
		upc: "22110153216",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606910",
		description: "BIG LEAGUE CHEW WATERMELON 12CT",
		upc: "22110153230",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607020",
		description: "BUBBLE TAPE AWESOME ORIGINAL 24CT",
		upc: "22110279800",
		uom: "BX",
		user: "admin"
	},
	{
		item: "501770",
		description: "TROJAN MAGNUM EACH",
		upc: "22600642036",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "501800",
		description: "TROJAN ULTRA THIN LUBRICATED EACH",
		upc: "22600926207",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "501730",
		description: "TROJAN LUBRICATED EACH",
		upc: "22600930508",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "501740",
		description: "TROJAN SPERMICIDAL EACH",
		upc: "22600931505",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "501750",
		description: "TROJAN RIBBED EACH",
		upc: "22600940507",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "501790",
		description: "TROJAN HER PLEASURE CONDOM EACH",
		upc: "22600973201",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "614280",
		description: "CHEEZ IT SNACK SIZE 8CT",
		upc: "24100122332",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "614290",
		description: "CHEEZ IT WHITE CHEDDAR 8CT",
		upc: "24100126538",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "614270",
		description: "CHEEZ IT HOT & SPICY 8CT",
		upc: "24100127955",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "614940",
		description: "CHEEZ IT ORIGINAL BIG BAG EACH",
		upc: "24100191338",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "614950",
		description: "CHEEZ IT CHEDDAR JACK BIG BAG EACH",
		upc: "24100203611",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "615240",
		description: "CHEEZ IT SLUG PACK",
		upc: "24100226426",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "614945",
		description: "CHEEZ IT WHITE CHEDDAR BIG BAG EACH",
		upc: "24100315338",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "614271",
		description: "CHEEZ IT HOT & SPICY 3OZ BAG EACH",
		upc: "24100372768",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "614951",
		description: "CHEEZ IT SNACK MIX 4.50OZ BAG EACH",
		upc: "24100455447",
		uom: "EA",
		user: "admin"
	},
	{
		item: "302771",
		description: "FOLGERS CLASSIC ROAST 11.3OZ BAG",
		upc: "25500002279",
		uom: "EA",
		user: "admin"
	},
	{
		item: "302750",
		description: "FOLGERS COFFEE AUTO 48OZ EACH",
		upc: "25500005188",
		uom: "EA",
		user: "admin"
	},
	{
		item: "618750",
		description: "SLIM JIM BEEF & CHEESE STICKS 18CT",
		upc: "26200112053",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618660",
		description: "SLIM JIM GIANT ORIGINAL 24CT",
		upc: "26200117058",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618710",
		description: "SLIM JIM GIANT TABASCO 24CT",
		upc: "26200117355",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618740",
		description: "SLIM JIM GIANT NACHO 24CT",
		upc: "26200117454",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618730",
		description: "SLIM JIM GIANT MILD 24CT",
		upc: "26200117553",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618674",
		description: "SLIM JIM MONSTER HNY BBQ STICK 18CT",
		upc: "26200140414",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618661",
		description: "SLIM JIM MONSTER TABASCO STICK 18CT",
		upc: "26200140513",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618755",
		description: "SLIM JIM MONSTER ORIG 18CT 1.94OZ",
		upc: "26200140612",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618659",
		description: "SLIM JIM GIANT PEPPER 24CT",
		upc: "26200230610",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618658",
		description: "SLIM JIM GIANT BBQ (BARBEQUE) 24CT",
		upc: "26200230634",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618657",
		description: "SLIM JIM GIANT SWEET N HOT 24CT",
		upc: "26200230658",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618670",
		description: "FIRE CRACKER GIANT RED HOT - 15CT",
		upc: "26200322056",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618680",
		description: "TIJUANA MAMA SAUSAGE 12CT",
		upc: "26200391953",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613185",
		description: "DAVIDS JUMBO BLACK PEPPER 6OZ EACH",
		upc: "26200423883",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613190",
		description: "DAVIDS SUNFLOWER SDS ORIG 5.25OZ EA",
		upc: "26200461700",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613953",
		description: "DAVIDS PUMPKIN SEED 5OZ EACH",
		upc: "26200463787",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613170",
		description: "DAVIDS JALPENO/SALSA SEED 5.25OZ EA",
		upc: "26200464701",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613200",
		description: "DAVIDS BBQ SUNFLOWER SDS 5.25OZ EA",
		upc: "26200465708",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613180",
		description: "DAVIDS RANCH SUNFLWR SD 5.25OZ EACH",
		upc: "26200467702",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613201",
		description: "DAVIDS CHILI LIME SNFLWR SDS 5.25Z",
		upc: "26200467911",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617085",
		description: "ANDY CAPP CHEDDAR UNPRICED 3OZ EACH",
		upc: "26200471587",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617091",
		description: "ANDY CAPP CHEDDAR FRY 3.5OZ BAG EA",
		upc: "26200494609",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617092",
		description: "ANDY CAPP HOT FRY NP 3.5OZ BAG EACH",
		upc: "26200495804",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "618605",
		description: "SLIM JIM PREPRICED 2/$1 100CT",
		upc: "26200615097",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618615",
		description: "SLIM JIM BLACK PEPPER 3.15OZ BAG",
		upc: "26200762319",
		uom: "EA",
		user: "admin"
	},
	{
		item: "618617",
		description: "SLIM JIM MESQUITE STK 3.15OZ BAG",
		upc: "26200762340",
		uom: "EA",
		user: "admin"
	},
	{
		item: "602630",
		description: "BUTTERFINGER 36CT",
		upc: "28000012731",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602520",
		description: "BABY RUTH 24CT",
		upc: "28000015992",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604900",
		description: "RAISINETS 36CT",
		upc: "28000080075",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611120",
		description: "RAISINETS THEATER BOX 3.5OZ",
		upc: "28000080402",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "602550",
		description: "BIT O HONEY BAR 24CT",
		upc: "28000087012",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604670",
		description: "OH HENRY 36CT",
		upc: "28000089092",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600620",
		description: "LAFFY TAFFY STRAWBERRY JAR 145CT",
		upc: "28000119492",
		uom: "JR",
		user: "admin"
	},
	{
		item: "611121",
		description: "BUTTERFINGER BITES THEATER BOX 3.5Z",
		upc: "28000130008",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604450",
		description: "NESTLE CRUNCH 36CT",
		upc: "28000131791",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602320",
		description: "LAFFY TAFFY ROPE STRAWBERRY 24CT",
		upc: "28000158873",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611891",
		description: "LAFFY TAFFY PEG BAG 6OZ EACH",
		upc: "28000194802",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "604490",
		description: "100 GRAND 36CT",
		upc: "28000206376",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606300",
		description: "100 GRAND KING SIZE 24CT",
		upc: "28000206611",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602310",
		description: "LAFFY TAFFY ROPE GRAPE 24/25",
		upc: "28000362263",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602330",
		description: "LAFFY TAFFY ROPE SOUR APPLE 24CT",
		upc: "28000442262",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602350",
		description: "LAFFY TAFFY ROPE MYSTERY SWIRL 24CT",
		upc: "28000662264",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602280",
		description: "LAFFY TAFFY ROPE BLUE RASPBER 24/25",
		upc: "28000666774",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602340",
		description: "LAFFY TAFFY ROPE BANANA 24CT",
		upc: "28000752262",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606260",
		description: "NESTLE CRUNCH KING SIZE 18CT",
		upc: "28000779214",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605640",
		description: "BUTTERFINGER KING SIZE 18CT",
		upc: "28000890810",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605630",
		description: "BABY RUTH KING SIZE 18CT",
		upc: "28000891015",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602300",
		description: "LAFFY TAFFY ROPE CHERRY 24CT",
		upc: "28000922269",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600580",
		description: "LAFFY TAFFY CHERRY JAR 145CT",
		upc: "28000928056",
		uom: "JR",
		user: "admin"
	},
	{
		item: "600560",
		description: "LAFFY TAFFY BANANA JAR 145CT",
		upc: "28000931056",
		uom: "JR",
		user: "admin"
	},
	{
		item: "600600",
		description: "LAFFY TAFFY GRAPE JAR 145CT",
		upc: "28000932053",
		uom: "JR",
		user: "admin"
	},
	{
		item: "600520",
		description: "LAFFY TAFFY SOUR APPLE JAR 145CT",
		upc: "28000933050",
		uom: "JR",
		user: "admin"
	},
	{
		item: "600640",
		description: "LAFFY TAFFY WATERMELON JAR 145CT",
		upc: "28000934057",
		uom: "JR",
		user: "admin"
	},
	{
		item: "600530",
		description: "LAFFY TAFFY BLUE RASP JAR 145CT",
		upc: "28000936051",
		uom: "JR",
		user: "admin"
	},
	{
		item: "400650",
		description: "FRITO LAY SOUR CREAM ONION LSS",
		upc: "28400111973",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400610",
		description: "FRITO LAY CHEETOS CRUNCHY LSS",
		upc: "28400443661",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400622",
		description: "FRITO LAY MUNCHIES CHEESE FI LSS",
		upc: "28400443876",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400670",
		description: "FRITO LAY PRETZELS CLASSIC LSS",
		upc: "28400443913",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616850",
		description: "FRITO LAY CRACKER JACKS LSS",
		upc: "28400455015",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613630",
		description: "PLANTERS HONEY ROASTD PEANUTS EACH",
		upc: "29000012575",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613950",
		description: "PLANTERS BIG BAG SALTD PEANUTS EACH",
		upc: "29000012585",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613921",
		description: "PLANTERS CHIPOLTE PEANUT 6OZ EACH",
		upc: "29000012636",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613960",
		description: "PLANTER SUNFLOWER KERNEL 10CT/.99PP",
		upc: "29000012738",
		uom: "EA",
		user: "admin"
	},
	{
		item: "613801",
		description: "PLANTERS PISTACHIOS 12CT BOX",
		upc: "29000012752",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613825",
		description: "PLANTERS NUTRITION HONEY NUT 12CT",
		upc: "29000019164",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613826",
		description: "PLANTERS NUTRITION CHOCL NUT 12CT",
		upc: "29000019188",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613861",
		description: "PLANTERS SMOKED ALMOND TUBE 18CT BX",
		upc: "29000072374",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613860",
		description: "PLANTERS HONEY RSTD CASHEW 18CT",
		upc: "29000073593",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613970",
		description: "PLANTERS BIG BG SALTED CASHEWS EACH",
		upc: "29000074368",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613620",
		description: "PLANTERS HONEY ROASTED CASHEW BG EA",
		upc: "29000074498",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613810",
		description: "PLANTERS TUBE HONEY RST PLNTRS 2/1$",
		upc: "29000075665",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613820",
		description: "PLANTERS HEAT PEANUTS 2/$1 18CT",
		upc: "29000075672",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613850",
		description: "PLANTERS SALTD CASHEW $.99 BAG 18CT",
		upc: "29000075689",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613800",
		description: "PLANTERS SALTED PEANUTS 2/$1 18CT",
		upc: "29000075696",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "613880",
		description: "PLANTERS TRAIL MIX $.99 BAG 18CT",
		upc: "29000077058",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613631",
		description: "PLANTERS TRAIL MIX NT/CHOC EACH 6OZ",
		upc: "29000078625",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603051",
		description: "QUAKER CEREAL BAR APL CRISP OATMEAL",
		upc: "30000069004",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614580",
		description: "FROSTED ANIMAL CRACKERS 8CT",
		upc: "30100113447",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614523",
		description: "KEEBLER VANILLA SGR WAFER COOKIE 12",
		upc: "30100125884",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614522",
		description: "KEEBLER STRWBRY SGR WAFER COOKIE 12",
		upc: "30100126027",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614970",
		description: "CHIPS DELUXE RAINBOW BIG BAG EACH",
		upc: "30100191445",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "614730",
		description: "SOFT BATCH SINGLE SERVE 2.2OZ 12CT",
		upc: "30100199359",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614770",
		description: "CHEESE & CHEDDAR SINGLE SERVE 12CT",
		upc: "30100211471",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614766",
		description: "KEEBLER TOAST/P-BUTTER JELLY 12CT",
		upc: "30100211501",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614760",
		description: "CLUB & CHEDDAR SINGLE SERVE 12CT",
		upc: "30100211631",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614750",
		description: "CHEESE & PEANUT BUTTER SINGLE 12CT",
		upc: "30100211655",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614765",
		description: "KEEBLER TOAST & PNUT BUTTER 12CT",
		upc: "30100211679",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614520",
		description: "FUDGE STRIPE MINI 8CT",
		upc: "30100217718",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614763",
		description: "CLUB & PEPPERJACK SINGLE SERVE 12CT",
		upc: "30100511588",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600160",
		description: "DUM DUM POPS 120CT",
		upc: "30800000665",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600760",
		description: "SAF T POPS 100CT",
		upc: "30800000771",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606320",
		description: "MOUNDS KING SIZE 18CT",
		upc: "34000052103",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606310",
		description: "ALMOND JOY KING SIZE 18CT",
		upc: "34000052202",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605720",
		description: "CARAMELLO KING SIZE 18CT",
		upc: "34000052400",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601070",
		description: "YORK PEPPERMINT PATTY CHANGE 175CT",
		upc: "34000066421",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618036",
		description: "LANCASTER VAN & CARML SFT PEG 4OZ",
		upc: "34000103546",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "618037",
		description: "LANCASTER VAN & RASBRY SFT PEG 4OZ",
		upc: "34000103607",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603590",
		description: "NUTRAGEOUS 18CT 1.66OZ",
		upc: "34000109005",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611550",
		description: "REESES PIECES THEATER BOX 4OZ",
		upc: "34000114709",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "610860",
		description: "REESES PIECES PEG BAG 6OZ",
		upc: "34000116010",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "605850",
		description: "REESES PIECES KING SIZE 18CT",
		upc: "34000116508",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603275",
		description: "HERSHEYS SPREAD CHOC/GRHM CRKR 10CT",
		upc: "34000123896",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603455",
		description: "KIT KAT MINIS KING SIZE 2.2OZ 12CT",
		upc: "34000138524",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603600",
		description: "REESES STICKS 20CT",
		upc: "34000151202",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603610",
		description: "REESES FAST BREAK 2OZ 18CT",
		upc: "34000152513",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602950",
		description: "FIFTH AVE 18CT",
		upc: "34000155002",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605771",
		description: "HERSHEY COOKIE N CREME KING SZ 18CT",
		upc: "34000196050",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605930",
		description: "REESES STICKS KING SIZE 24CT",
		upc: "34000202003",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605890",
		description: "REESES FAST BREAK KING SIZE 18CT",
		upc: "34000203505",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605900",
		description: "NUTRAGEOUS KING SIZE 18CT 3.1OZ",
		upc: "34000209002",
		uom: "BX",
		user: "admin"
	},
	{
		item: "610830",
		description: "HERSHEYS MINIATURES PEG BAG 5.3OZ",
		upc: "34000212108",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "605830",
		description: "HERSHEYS MILK CHOCOLATE KING 18CT",
		upc: "34000220007",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605760",
		description: "HERSHEYS ALMOND KING SIZE 18CT",
		upc: "34000221004",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605860",
		description: "MR GOODBAR KING SIZE 18CT",
		upc: "34000223008",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605800",
		description: "KIT KAT KING SIZE 24CT",
		upc: "34000226009",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605950",
		description: "WHATCHAMACALLIT KING SIZE 18CT",
		upc: "34000229000",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603445",
		description: "KIT KAT WHITE CHOCOLATE 24CT",
		upc: "34000236107",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603451",
		description: "KIT KAT DARK CHOCOLATE 24CT BOX",
		upc: "34000236435",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603270",
		description: "HERSHEYS COOKIES N CREAM 36CT",
		upc: "34000239009",
		uom: "EA",
		user: "admin"
	},
	{
		item: "603330",
		description: "HERSHEYS MILK CHOCOLATE 36CT",
		upc: "34000240005",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603421",
		description: "HERSHEYS AIR DELIGHT MLK CHOC 24CT",
		upc: "34000240753",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603280",
		description: "HERSHEYS ALMOND 36CT",
		upc: "34000241002",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603285",
		description: "KRACKEL HERSHEYS 18CT",
		upc: "34000242023",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603370",
		description: "MR GOODBAR 36CT",
		upc: "34000243006",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603510",
		description: "ROLO 36CT",
		upc: "34000244003",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603390",
		description: "HERSHEYS SPECIAL DARK BAR 36CT",
		upc: "34000245000",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603450",
		description: "KIT KAT 36CT",
		upc: "34000246007",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603290",
		description: "KIT KAT EXTRA KRISPY BIG KAT 36CT",
		upc: "34000246519",
		uom: "EA",
		user: "admin"
	},
	{
		item: "603690",
		description: "WHATCHAMACALLIT 36CT",
		upc: "34000247004",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603620",
		description: "REESES PIECES 18CT",
		upc: "34000248001",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605838",
		description: "HERSHEYS DROPS COOKIES&CRM KNG 18CT",
		upc: "34000271177",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605770",
		description: "FIFTH AVENUE KING SIZE 18CT",
		upc: "34000288007",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603660",
		description: "SKOR BAR 18CT",
		upc: "34000370146",
		uom: "BX",
		user: "admin"
	},
	{
		item: "610910",
		description: "ROLO PEG BAG 5.3OZ",
		upc: "34000376008",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603630",
		description: "TAKE 5 24CT",
		upc: "34000386000",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605790",
		description: "TAKE 5 KING SIZE 18CT",
		upc: "34000386116",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601040",
		description: "REESES PEANUT BUTTER CUP CHANGEMAKE",
		upc: "34000426119",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600890",
		description: "HERSHEYS ASST MINIS CHANGEMKR 120CT",
		upc: "34000426812",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603720",
		description: "REESES BIG CUP 16CT",
		upc: "34000430017",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605772",
		description: "REESE BIG CUP KING 16CT 2 CUP/PKG.",
		upc: "34000430963",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603540",
		description: "REESES PEANUT BUTTER CUP WHITE 24CT",
		upc: "34000433001",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603580",
		description: "REESES PEANUT BUTTER CUP 36CT",
		upc: "34000440009",
		uom: "BX",
		user: "admin"
	},
	{
		item: "610850",
		description: "REESES PEANUT BUTTER CUP MINI 5.3OZ",
		upc: "34000446008",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "605837",
		description: "REESES PNT BTTR CUP MINIS KING 16CT",
		upc: "34000470211",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603511",
		description: "ROLO MINIS KING SZ 1/16 CT",
		upc: "34000471027",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604715",
		description: "YORK MINIS KING SIZE 12CT",
		upc: "34000471522",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605920",
		description: "REESES PEANUT BUTTER CUP KING 24CT",
		upc: "34000480005",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605960",
		description: "REESES CRISPY CRUNCHY KG SIZE 18CT",
		upc: "34000490073",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603520",
		description: "REESES CRISPY CRUNCHY BAR 18CT",
		upc: "34000490127",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605773",
		description: "REESE WHIPPS KING SIZE 18CT",
		upc: "34000490448",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605280",
		description: "TWIZZLER STRAWBERRY 2.5OZ 36CT",
		upc: "34000530021",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604590",
		description: "TWIZZLER CHERRY NIBS 36CT",
		upc: "34000530137",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605940",
		description: "TWIZZLER KING SIZE 15/5OZ BOX",
		upc: "34000531035",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600790",
		description: "TWIZZLER STRAWBERRY TWISTS 180CT",
		upc: "34000536023",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611590",
		description: "TWIZZLER CHERRY BITES THEATER BOX",
		upc: "34000541505",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611990",
		description: "TWIZZLER STRAWBERRY PEG BAG 7OZ",
		upc: "34000544025",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611960",
		description: "TWIZZLER NIBS LICORICE PEG BAG 6OZ",
		upc: "34000544100",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611950",
		description: "TWIZZLER NIBS CHERRY PEG BAG 6OZ",
		upc: "34000544131",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611980",
		description: "TWIZZLER PULL N PEEL CHERRY 6OZ",
		upc: "34000544438",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611995",
		description: "TWIZZLER STRAWBERRY TWISTS 16OZ BAG",
		upc: "34000560028",
		uom: "BG",
		user: "admin"
	},
	{
		item: "612010",
		description: "TWIZZLER PULL N PEEL CHERRY 14OZ",
		upc: "34000560438",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "604595",
		description: "TWIZZLER STWBRY FILLD BTS 3.5Z 10CT",
		upc: "34000561070",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607350",
		description: "BUBBLE YUM COTTON CANDY 18CT",
		upc: "34000711116",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607370",
		description: "BUBBLE YUM ORIGINAL 18CT",
		upc: "34000711147",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609480",
		description: "BREATHSAVER PEPPERMINT 24CT",
		upc: "34000714032",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609560",
		description: "BREATHSAVER WINTERGREEN 24CT",
		upc: "34000714124",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609540",
		description: "BREATHSAVER SPEARMINT 24CT",
		upc: "34000714339",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609491",
		description: "BREATHSAVER CINNAMON MINT ROLL 24CT",
		upc: "34000714414",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609270",
		description: "ICE BREAKERS COOL MINT TIN 8CT",
		upc: "34000720606",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609290",
		description: "ICE BREAKERS WNTRGRN MINT S/F 8CT",
		upc: "34000720620",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609280",
		description: "ICE BREAKERS SPEARMINT MINT TIN 8CT",
		upc: "34000721238",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609297",
		description: "ICE BREAKERS FROST PEPERMNT TIN 6CT",
		upc: "34000721382",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609298",
		description: "ICE BREAKERS FROST WNTRCOOL TIN 8CT",
		upc: "34000721399",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609271",
		description: "ICE BREAKERS DUO MINTS STRAW 24/8CT",
		upc: "34000723355",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609272",
		description: "ICE BREAKERS DUO MINTS RASPB 24/8CT",
		upc: "34000723362",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609275",
		description: "ICE BREAKERS DUO MINT WATRMLN 8CT",
		upc: "34000723898",
		uom: "EA",
		user: "admin"
	},
	{
		item: "604700",
		description: "MOUNDS 36CT",
		upc: "34000903108",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604680",
		description: "ALMOND JOY 36CT",
		upc: "34000903207",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604720",
		description: "YORK PEPPERMINT PATTY 36CT",
		upc: "34000903306",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602660",
		description: "CARAMELLO 36CT",
		upc: "34000903405",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609773",
		description: "WELCH'S STRAWBRY FRUIT SNACK 5OZ BG",
		upc: "34856050961",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "609774",
		description: "WELCH'S MIXED FRUIT SNACK 5OZ BAG",
		upc: "34856050985",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400901",
		description: "GEHLS JALAPENO CHEESE SAUCE 4/80OZ",
		upc: "36144050205",
		uom: "CS",
		user: "admin"
	},
	{
		item: "400890",
		description: "GEHLS NACHO CHIPS 30/3OZ W/TRAY CS",
		upc: "36144055040",
		uom: "CS",
		user: "admin"
	},
	{
		item: "506570",
		description: "DAWN ULTRA DISH DETERGENT 14OZ",
		upc: "37000000805",
		uom: "JUG",
		user: "admin"
	},
	{
		item: "506571",
		description: "DAWN ORIGINAL 10.3OZ BOTTLE EACH",
		upc: "37000001789",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "617380",
		description: "PRINGLES CHEEZUMS 12/1.41OZ",
		upc: "37000184928",
		uom: "PK",
		user: "admin"
	},
	{
		item: "617370",
		description: "PRINGLES ORIGINAL 12/1.3OZ",
		upc: "37000184942",
		uom: "PK",
		user: "admin"
	},
	{
		item: "617340",
		description: "PRINGLES PIZZA 12/2.50 OZ",
		upc: "37000185024",
		uom: "PK",
		user: "admin"
	},
	{
		item: "617390",
		description: "PRINGLES SOUR CREAM&ONION 12/1.41OZ",
		upc: "37000185055",
		uom: "CSE",
		user: "admin"
	},
	{
		item: "617094",
		description: "PRINGLES CHEESE GRAB N GO 12CT 2.5Z",
		upc: "37000185185",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "617095",
		description: "PRINGLES ORIGNL GRB N GO 12CT 2.3Z",
		upc: "37000185208",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "617096",
		description: "PRINGLES SR CRM/ON GRAB/GO 12CT 2.5",
		upc: "37000185222",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "503745",
		description: "ALWAYS ULTRA REGULAR THIN WING 10CT",
		upc: "37000349662",
		uom: "BX",
		user: "admin"
	},
	{
		item: "506501",
		description: "BOUNCE FABRIC SOFTNER SHEETS 25CT",
		upc: "37000360001",
		uom: "EA",
		user: "admin"
	},
	{
		item: "615210",
		description: "POP TART CHERRY 6CT",
		upc: "38000003004",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614670",
		description: "FROOT LOOPS CEREAL CUPS 6CT",
		upc: "38000012464",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614720",
		description: "SPECIAL K BAR STRAWBERRY 12CT",
		upc: "38000012839",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614660",
		description: "CORN POPS CEREAL CUPS 6CT",
		upc: "38000014673",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614680",
		description: "FROSTED FLAKE CEREAL CUP 6CT",
		upc: "38000014680",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614650",
		description: "APPLE JACKS CEREAL CUPS 6CT",
		upc: "38000014697",
		uom: "BX",
		user: "admin"
	},
	{
		item: "615140",
		description: "POP TART CHOCOLATE CHIP 6CT",
		upc: "38000097218",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606510",
		description: "RICE KRISPIE BIG BAR 12CT",
		upc: "38000265501",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614713",
		description: "SPECIAL K PROTEIN STRWBRY BAR 8CT",
		upc: "38000291869",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614630",
		description: "SPECIAL K MEAL BAR CHOC PB 8CT",
		upc: "38000291906",
		uom: "EA",
		user: "admin"
	},
	{
		item: "615170",
		description: "POP TART HOT FUDGE 6CT",
		upc: "38000305702",
		uom: "BX",
		user: "admin"
	},
	{
		item: "615190",
		description: "POP TART BLUEBERRY 6CT",
		upc: "38000310300",
		uom: "BX",
		user: "admin"
	},
	{
		item: "615200",
		description: "POP TART BROWN SUGAR 6CT",
		upc: "38000311307",
		uom: "BX",
		user: "admin"
	},
	{
		item: "615220",
		description: "POP TART STRAWBERRY 6CT",
		upc: "38000317309",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614712",
		description: "SPECIAL K PROTEIN BAR CHOC/CHIP 8CT",
		upc: "38000343872",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614780",
		description: "NUTRI GRAIN APPLE/CINNAMON 16CT",
		upc: "38000356483",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614790",
		description: "NUTRI GRAIN BLUEBERRY 16CT",
		upc: "38000357480",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614800",
		description: "NUTRI GRAIN RASPBERRY 16CT",
		upc: "38000358487",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614810",
		description: "NUTRI GRAIN STRAWBERRY 16CT",
		upc: "38000359484",
		uom: "BX",
		user: "admin"
	},
	{
		item: "615160",
		description: "POP TART SMORES 6CT",
		upc: "38000581700",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606530",
		description: "RICE KRISPIE TREATS 20CT",
		upc: "38000765407",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606511",
		description: "RICE KRISPIE DOUBLE CHOC CHUNK 20CT",
		upc: "38000768408",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618870",
		description: "VAN HOLTEN MILD PICKLE 12CT",
		upc: "38200061217",
		uom: "EA",
		user: "admin"
	},
	{
		item: "618900",
		description: "VAN HOLTEN HOT PICKLE 12CT",
		upc: "38200061224",
		uom: "EA",
		user: "admin"
	},
	{
		item: "618910",
		description: "VAN HOLTEN SOUR PICKLE 12CT",
		upc: "38200061248",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618880",
		description: "VAN HOLTEN BIG PAPA PICKLE 12CT",
		upc: "38200101210",
		uom: "EA",
		user: "admin"
	},
	{
		item: "618860",
		description: "VAN HOLTEN HOT MAMA PICKLE 12CT",
		upc: "38200101227",
		uom: "BX",
		user: "admin"
	},
	{
		item: "201461",
		description: "DOLE PINEAPPLE JUICE 46OZ EACH",
		upc: "38900008182",
		uom: "CAN",
		user: "admin"
	},
	{
		item: "201500",
		description: "DOLE PINEAPPLE JUICE 6OZ CAN 24CT",
		upc: "38900009479",
		uom: "CSE",
		user: "admin"
	},
	{
		item: "604080",
		description: "MILKY WAY MIDNIGHT DARK 24CT",
		upc: "40000011040",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604060",
		description: "SNICKERS ALMOND 24CT",
		upc: "40000011057",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605180",
		description: "STARBURST ORIGINAL 36CT",
		upc: "40000011514",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605190",
		description: "STARBURST TROPICAL 36CT",
		upc: "40000011569",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605050",
		description: "SKITTLES 36CT",
		upc: "40000011606",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605080",
		description: "SKITTLES WILD BERRY 36CT",
		upc: "40000011620",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605070",
		description: "SKITTLES TROPICAL 36CT",
		upc: "40000011637",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604020",
		description: "M&M PLAIN 48CT",
		upc: "40000012313",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "603960",
		description: "M&M PEANUT 48CT",
		upc: "40000012320",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603950",
		description: "M&M PEANUT BUTTER 24CT",
		upc: "40000012443",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605060",
		description: "SKITTLES SOUR 24CT",
		upc: "40000012665",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611700",
		description: "SNICKERS MINI PEG PACK 4.4 OZ",
		upc: "40000015024",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611660",
		description: "M&M PLAIN PEG BAG 5OZ",
		upc: "40000017318",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611670",
		description: "M&M PEANUT PEG BAG 5OZ",
		upc: "40000017325",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611680",
		description: "M&M PEANUT BUTTER PEG BAG 5.1OZ",
		upc: "40000017448",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "603945",
		description: "M&M MINI'S TUBE 1.08OZ 24CT",
		upc: "40000032373",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606240",
		description: "MILKY WAY KING SIZE 24CT",
		upc: "40000044017",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606230",
		description: "M&M PLAIN KING SIZE 24CT",
		upc: "40000044314",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606190",
		description: "M&M PEANUT KING SIZE 24CT",
		upc: "40000044321",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604030",
		description: "M&M MINIS POP N SHARE TUBES 24CT",
		upc: "40000044376",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606380",
		description: "SKITTLES ORIGINAL KING SIZE 24CT",
		upc: "40000044604",
		uom: "EA",
		user: "admin"
	},
	{
		item: "611781",
		description: "STARBURST TROPICAL 7.2OZ PEG BAG",
		upc: "40000140884",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611720",
		description: "SKITTLES PEG BAG 7OZ EACH",
		upc: "40000140921",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611730",
		description: "SKITTLES SOUR PEG 5.7OZ",
		upc: "40000140938",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611750",
		description: "STARBURST ORIGINAL PEG PACK 7.2OZ",
		upc: "40000141140",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611740",
		description: "SKITTLES WILDBERRY PEG 7OZ",
		upc: "40000141157",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "606390",
		description: "STARBURST KING SIZE 24CT",
		upc: "40000144519",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605171",
		description: "STARBURST GUMMI BURST 24CT",
		upc: "40000162599",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606250",
		description: "THREE MUSKATEER KING SIZE 24CT",
		upc: "40000246039",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611490",
		description: "M&M PEANUT 12.6OZ BAG",
		upc: "40000248873",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611500",
		description: "M&M PLAIN 12.6OZ BAG",
		upc: "40000249061",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611434",
		description: "M&M PLAIN THEATER BOX 3.4OZ EACH",
		upc: "40000294764",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611433",
		description: "M&M PEANUT THEATER BOX 3.4OZ EACH",
		upc: "40000294808",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606360",
		description: "SNICKERS ALMOND KING SIZE 2PC 24CT",
		upc: "40000322474",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606400",
		description: "SNICKERS KING SIZE 2 PIECE 24CT",
		upc: "40000322528",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604218",
		description: "SNICKERS CHANGEMAKER FUN SIZE 90CT",
		upc: "40000325741",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605220",
		description: "STARBURST FAVRED 24CT",
		upc: "40000329701",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606430",
		description: "TWIX CARAMEL KING SIZE 24CT",
		upc: "40000353874",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604250",
		description: "TWIX PEANUT BUTTER 18CT",
		upc: "40000353881",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606420",
		description: "TWIX PEANUT BUTTER KING SIZE 18CT",
		upc: "40000353904",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604240",
		description: "TWIX CARAMEL 2OZ 36CT",
		upc: "40000353911",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606196",
		description: "M&M PEANUT BUTTER KING SIZE 24CT",
		upc: "40000380603",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604076",
		description: "MILKY WAY SIMPLY CARAMEL 24CT BX",
		upc: "40000387138",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606245",
		description: "THREE MUSKETEERS BITE 12CT",
		upc: "40000422488",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "603957",
		description: "SNICKERS PEANUT BUTTER SQ KS 24CT",
		upc: "40000441489",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606435",
		description: "TWIX CARAMEL BITES 12CT",
		upc: "40000484349",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604065",
		description: "SNICKERS ROCKIN NUT ROAD 24CT",
		upc: "40000485087",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604077",
		description: "MILKY WAY SIMPLY CARAMEL BITES 12CT",
		upc: "40000485858",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "603944",
		description: "M&M MEGA 3X CHOCOLATE 24CT",
		upc: "40000485926",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603946",
		description: "M&M BIRTHDAY CAKE 24CT",
		upc: "40000486626",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603948",
		description: "M&M PRETZEL 24CT",
		upc: "40000502654",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604070",
		description: "MILKY WAY 2.05OZ 36CT",
		upc: "40000522065",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604130",
		description: "THREE MUSKETEERS 36CT",
		upc: "40000522089",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604200",
		description: "SNICKERS 48CT",
		upc: "40000524311",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606232",
		description: "M&M PRETZEL KING SIZE 24CT",
		upc: "40000546511",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "603953",
		description: "DOVE BAR 18CT",
		upc: "40000559849",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "603954",
		description: "DOVE BAR DARK CHOCOLATE 18CT",
		upc: "40000559856",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "606231",
		description: "M&M ALMOND KING SIZE 18CT",
		upc: "40000574170",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604211",
		description: "SNICKERS PEANUT BUTTER SQUARED 18CT",
		upc: "40000594123",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "602690",
		description: "RING POPS FRUIT FEST 24CT",
		upc: "41116006258",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604660",
		description: "PUSH POPS FRUIT FRENZY 24CT",
		upc: "41116009037",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604661",
		description: "PUSH POPS JUMBO 24CT",
		upc: "41116105272",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609341",
		description: "JUICY POP DROP 24CT",
		upc: "41116105920",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600120",
		description: "CHICK O STICK CHANGEMAKER 48CT",
		upc: "41168106289",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602440",
		description: "CHICK O STICK UNPRICED 24/25",
		upc: "41168106319",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602770",
		description: "CHICK O STICK 24CT",
		upc: "41168106401",
		uom: "BX",
		user: "admin"
	},
	{
		item: "709930",
		description: "CUP TP16D SOLO ULT CLR PET 16OZ 1M",
		upc: "41210400655",
		uom: "CS",
		user: "admin"
	},
	{
		item: "506531",
		description: "PINESOL COMMERICAL CLEANER 144OZ EA",
		upc: "41294354186",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "502020",
		description: "DURACELL AA 4PK 1500",
		upc: "41333009612",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "502040",
		description: "DURACELL AAA 4 PK 2400",
		upc: "41333014616",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "501990",
		description: "DURACELL D 2PK",
		upc: "41333085616",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "502010",
		description: "DURACELL AA 2PK 1500",
		upc: "41333087610",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "502240",
		description: "DURACELL BATTERY 9VOLT 1PK",
		upc: "41333088617",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "502030",
		description: "DURACELL AAA 2PK 2400",
		upc: "41333151618",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "604950",
		description: "SOUR PUNCH STRAWS BLUE RASPBRY 24CT",
		upc: "41364380513",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605261",
		description: "SOUR PUNCH STRAWS APPLE 24CT",
		upc: "41364380520",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604960",
		description: "SOUR PUNCH STRAWS STRAWBERRY 24CT",
		upc: "41364380537",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605000",
		description: "SOUR PUNCH STRAWS CHERRY 24CT",
		upc: "41364380582",
		uom: "BX",
		user: "admin"
	},
	{
		item: "616300",
		description: "COMBOS PIZZERIA PRETZEL 7OZ",
		upc: "41419406875",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616260",
		description: "COMBOS CHEDDAR CHEESE PRETZEL 6.3OZ",
		upc: "41419420058",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616270",
		description: "COMBOS CHEDDAR CHSE CRACKER 6.3OZ",
		upc: "41419420072",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616290",
		description: "COMBOS PEPPERONI PZA CRACKER 6.3OZ",
		upc: "41419420089",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616280",
		description: "COMBOS 7 LAYER DIP 6.3OZ",
		upc: "41419420096",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "602852",
		description: "COMBOS ZESTY SALSA TORTILLA 6.3OZ",
		upc: "41419420307",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616271",
		description: "COMBOS BUFFALO BLUE CHEESE 6.3OZ BG",
		upc: "41419439272",
		uom: "EA",
		user: "admin"
	},
	{
		item: "602820",
		description: "COMBOS CHEDDAR PRETZEL 18CT",
		upc: "41419715710",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "602860",
		description: "COMBOS PEPPERONI PIZZA CRACKER 18CT",
		upc: "41419715734",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "602840",
		description: "COMBOS PIZZERIA PRETZEL 18CT",
		upc: "41419715758",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "600550",
		description: "LEMONHEAD JAR 150CT",
		upc: "41420052354",
		uom: "JR",
		user: "admin"
	},
	{
		item: "600410",
		description: "ATOMIC FIREBALL JAR 150 CT",
		upc: "41420052750",
		uom: "JR",
		user: "admin"
	},
	{
		item: "610160",
		description: "BOSTON BAKED BEANS PEG BAG 5.5OZ",
		upc: "41420125058",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610180",
		description: "LEMONHEAD PEG BAG 6OZ",
		upc: "41420126345",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "602110",
		description: "LEMONHEAD PREPRICED 24/25",
		upc: "41420243417",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602090",
		description: "BOSTON BAKED BEANS PREPRICED 24/25",
		upc: "41420243448",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601140",
		description: "GRAPEHEADS 24/25 PREPRICED",
		upc: "41420243455",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "602120",
		description: "CHERRYHEADS PREPRICED 24/25",
		upc: "41420243462",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602113",
		description: "APPLEHEADS PREPRICED 24/25",
		upc: "41420243486",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "602140",
		description: "RED HOTS PREPRICED 24/25",
		upc: "41420243523",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602100",
		description: "JAW BUSTERS PREPRICED 24/25",
		upc: "41420243530",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602111",
		description: "CHEWY LEMONHD FRUIT MIX 24/25 PRE$",
		upc: "41420243707",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602116",
		description: "CHEWY TROPICAL LEMONHEAD 24/25 PPCD",
		upc: "41420243943",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "602119",
		description: "CHEWY BERRY LEMONHEAD 24CT/25 PPCD",
		upc: "41420243967",
		uom: "BX",
		user: "admin"
	},
	{
		item: "610240",
		description: "BLACK FOREST GUMMY BEARS PEG BG 5OZ",
		upc: "41420744006",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610290",
		description: "BLACK FOREST GUMMY WORMS PEG BG 5OZ",
		upc: "41420744020",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610270",
		description: "BLACK FOREST GUMMY GLOW WORMS PEG",
		upc: "41420744037",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610250",
		description: "BLACK FOREST GUMMY CHERRIES PEG BAG",
		upc: "41420744112",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "610310",
		description: "BLACK FOREST CITRUS FRUIT SNACK PEG",
		upc: "41420746253",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613250",
		description: "BLUE DIAM S.H.ALMOND 1.5OZ 12TB",
		upc: "41570051955",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613260",
		description: "BLUE DIAM ROASTED & SALTED 12 TB",
		upc: "41570052006",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613272",
		description: "BLUE DIAM ALMND WHOLE NAT 12 TB",
		upc: "41570052037",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613271",
		description: "BLUE DIAM LIME&CHILI 1.5OZ 12 TB",
		upc: "41570052761",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613270",
		description: "BLUE DIAM ALMND WASABI & SOY 12 TB",
		upc: "41570052778",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613240",
		description: "BLUE DIAM S.H.ALMONDS 2.00Z 12CT",
		upc: "41570071489",
		uom: "BX",
		user: "admin"
	},
	{
		item: "708410",
		description: "CUP 8J8 FOAM 1000CT 8OZ STYRO",
		upc: "41594200070",
		uom: "CS",
		user: "admin"
	},
	{
		item: "708561",
		description: "CUP 16J16 FOAM 1000CT 16OZ",
		upc: "41594200100",
		uom: "CS",
		user: "admin"
	},
	{
		item: "708600",
		description: "CUP 20J16 FOAM 20OZ 500CT/CS",
		upc: "41594200759",
		uom: "CS",
		user: "admin"
	},
	{
		item: "708580",
		description: "CUP 32TJ32 32OZ FOAM 500CT",
		upc: "41594200773",
		uom: "CS",
		user: "admin"
	},
	{
		item: "708470",
		description: "CUP 12J12 FOAM 1000CT 12OZ",
		upc: "41594542958",
		uom: "CS1",
		user: "admin"
	},
	{
		item: "600800",
		description: "SUPER BUBBLE TUB 300CT",
		upc: "41623004457",
		uom: "TUB",
		user: "admin"
	},
	{
		item: "400871",
		description: "BAY VALLEY WHOLE KOSHER DILL PICKLE",
		upc: "41820058475",
		uom: "EA",
		user: "admin"
	},
	{
		item: "617850",
		description: "IPSI HOT PICKLE 20CT JAR",
		upc: "41820058475",
		uom: "JR",
		user: "admin"
	},
	{
		item: "400870",
		description: "BAY VALLEY SLICED JALAPENOS 1 GL",
		upc: "41820070033",
		uom: "EA",
		user: "admin"
	},
	{
		item: "506371",
		description: "CHARMIN TOILET TISSUE ULTRA 4RL",
		upc: "42000962018",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "400430",
		description: "HOT POCKET BEEF & CHEDDAR 8OZ EACH",
		upc: "43695097013",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "400431",
		description: "HOT POCKET HAM & CHEESE 8OZ EACH",
		upc: "43695097020",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "400432",
		description: "HOT POCKET PEPPERONI PIZZA 8OZ EACH",
		upc: "43695097037",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "615060",
		description: "TEDDY GRAHAMS CINNAMON BIG BAG EACH",
		upc: "44000000615",
		uom: "EA",
		user: "admin"
	},
	{
		item: "615050",
		description: "NUTTER BUTTER BITES BIG BAG EACH",
		upc: "44000003067",
		uom: "EA",
		user: "admin"
	},
	{
		item: "615080",
		description: "RITZ BITS CHEESE BIG BAGS 3 OZ EACH",
		upc: "44000006778",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "615090",
		description: "RITZ BITS PEANUT BTTER BIG BAG EACH",
		upc: "44000006785",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "615040",
		description: "CHIPS AHOY MINI BIG BAG EACH",
		upc: "44000006792",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "615030",
		description: "OREO MINI BIG BAGS 3 OZ EACH",
		upc: "44000006805",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "614880",
		description: "FIG NEWTON SLUG PAK",
		upc: "44000007508",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "614830",
		description: "CHIPS AHOY SLUG PAK",
		upc: "44000007529",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "614450",
		description: "RITZ BITS PEANUT BUTTER 12CT",
		upc: "44000020354",
		uom: "BX",
		user: "admin"
	},
	{
		item: "615130",
		description: "WHEAT THINS SLUG PAK",
		upc: "44000046880",
		uom: "EA",
		user: "admin"
	},
	{
		item: "614900",
		description: "NUTTER BUTTER SLUG PAK",
		upc: "44000049157",
		uom: "EA",
		user: "admin"
	},
	{
		item: "614410",
		description: "OREO SINGLE SERVE 12 CT",
		upc: "44000088422",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614320",
		description: "CHIPS AHOY SINGLE SERVE 12CT",
		upc: "44000088439",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614350",
		description: "FIG NEWTON 2OZ 12CT",
		upc: "44000088446",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614380",
		description: "NUTTER BUTTER SINGLE SERVE 12CT",
		upc: "44000088453",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614924",
		description: "DUNK'EMS AM.CHEESE & CRACKER 15CT",
		upc: "44000811570",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614401",
		description: "OREO GOLDEN SANDWICH 12 COUNT",
		upc: "44000817077",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614330",
		description: "SNACKWELLS SINGLE SERVE 12CT",
		upc: "44000881764",
		uom: "BX",
		user: "admin"
	},
	{
		item: "614440",
		description: "RITZ CRACKER W/PNUT BUTTER 8CT BOX",
		upc: "44000882105",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "614430",
		description: "RITZ CRACKER W/ CHEESE 8CT BOX",
		upc: "44000882112",
		uom: "BX",
		user: "admin"
	},
	{
		item: "617780",
		description: "VICS LITE FULL SALT 9OZ",
		upc: "46555000171",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617790",
		description: "VICS LITE HALF SALT 9OZ",
		upc: "46555000188",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617671",
		description: "VICS LITE FULL SALT WHITE 4.5OZ",
		upc: "46555000195",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617670",
		description: "VICS LITE HALF SALT 4.5OZ",
		upc: "46555000201",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617730",
		description: "VICS WHITE CHEDDAR CHEESE 4OZ",
		upc: "46555000232",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617720",
		description: "VICS YELLOW CHEESE 4OZ",
		upc: "46555000256",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617710",
		description: "VICS ORIGINAL CARAMEL POPCORN 7OZ",
		upc: "46555000270",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617640",
		description: "VICS POPCORN WHITE FULL SALT 6OZ",
		upc: "46555000294",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617650",
		description: "VICS WHITE HALF SALT POPCORN 6OZ",
		upc: "46555000300",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617680",
		description: "VICS WHITE FULL SALT 11.5OZ",
		upc: "46555000324",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617700",
		description: "VICS WHITE HALF SALT 11.5OZ",
		upc: "46555000331",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617630",
		description: "VICS WHITE CHEDDAR POPCORN 1.25OZ",
		upc: "46555000607",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617600",
		description: "VICS WHITE POPCORN FULL SALT 1OZ",
		upc: "46555000621",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617610",
		description: "VICS CARAMEL POPCORN 2.25OZ BAG",
		upc: "46555000638",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617690",
		description: "VICS LITE WHITE CHEDDAR 3.5OZ",
		upc: "46555001055",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617750",
		description: "VICS LITE YELLOW CHEESE 4OZ",
		upc: "46555001062",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "617590",
		description: "VICS LITE WHITE PCORN 1/2 SALT 1OZ",
		upc: "46555191381",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "201721",
		description: "TROPICANA APPLE JUICE 32OZ EACH",
		upc: "48500000496",
		uom: "EA",
		user: "admin"
	},
	{
		item: "201561",
		description: "TROPICANA CRANBERRY JUICE 32OZ EACH",
		upc: "48500006723",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "301950",
		description: "COFFEE MATE ORIGINAL CREAMER 6OZ",
		upc: "50000300624",
		uom: "EA",
		user: "admin"
	},
	{
		item: "200600",
		description: "CAMPBELLS TOMATO JUICE 46OZ CAN EA",
		upc: "51000003669",
		uom: "EA",
		user: "admin"
	},
	{
		item: "300186",
		description: "CAMPBELLS CHKN NDL SOUP BOWL 15.4OZ",
		upc: "51000134599",
		uom: "BWL",
		user: "admin"
	},
	{
		item: "200840",
		description: "GATORADE LEMON LIME 24/20OZ",
		upc: "52000207835",
		uom: "CS",
		user: "admin"
	},
	{
		item: "200850",
		description: "GATORADE ORANGE 24/20OZ",
		upc: "52000207842",
		uom: "CS",
		user: "admin"
	},
	{
		item: "200860",
		description: "GATORADE FRUIT PUNCH 24/20OZ",
		upc: "52000207859",
		uom: "CS",
		user: "admin"
	},
	{
		item: "200990",
		description: "GATORADE COOL BLUE 24/20OZ",
		upc: "52000207880",
		uom: "CS",
		user: "admin"
	},
	{
		item: "400710",
		description: "FRITO LAY FRITOS CHILI CHEESE LSS",
		upc: "54019012339",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400660",
		description: "FRITO LAY FRITOS REGULAR LSS",
		upc: "54020012838",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400630",
		description: "FRITO LAY BBQ CHIPS LSS",
		upc: "54022012713",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400680",
		description: "FRITO LAY REG LAYS LSS",
		upc: "54023012712",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400600",
		description: "FRITO LAY DORITO COOL RANCH LSS",
		upc: "54034012452",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400690",
		description: "FRITO LAY DORITO NACHO CHEESE LSS",
		upc: "54035012852",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400640",
		description: "FRITO LAY FUNYUNS LSS",
		upc: "54212012833",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "400880",
		description: "GEHLS JALAPENO CHEESE 4/140OZ CASE",
		upc: "56144051004",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "601190",
		description: "EL BUBBLE BUBBLE GUM CIGAR",
		upc: "59642003719",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607030",
		description: "CIGAR BUBBLEGUM ITS A BOY 36CT",
		upc: "59642003757",
		uom: "BX",
		user: "admin"
	},
	{
		item: "607040",
		description: "CIGAR BUBBLEGUM ITS A GIRL 36CT",
		upc: "59642003764",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600430",
		description: "HOMERUN BASEBALL GUM BALLS 240CT",
		upc: "59642005805",
		uom: "JR",
		user: "admin"
	},
	{
		item: "600570",
		description: "CRY BABY EXTRA SOUR BUBBLE GUM 240C",
		upc: "59642006352",
		uom: "JR",
		user: "admin"
	},
	{
		item: "601192",
		description: "RAZZLES ORIGINAL POUCH 24CT",
		upc: "59642008240",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601193",
		description: "RAZZLES TROPICAL POUCH 24CT",
		upc: "59642108292",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601191",
		description: "CRY BABY EXTRA SOUR BGUM TUBE 24CT",
		upc: "59642194004",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601198",
		description: "WACK-O-WAX LIPS 24CT",
		upc: "59642642246",
		uom: "BX",
		user: "admin"
	},
	{
		item: "400688",
		description: "UNCLE RAYS HOT CHIP 3OZ $1.19 EA",
		upc: "61456000502",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "301627",
		description: "CHEF BOYARDE BEEFRONI 14OZ MICRO EA",
		upc: "64144863556",
		uom: "EA",
		user: "admin"
	},
	{
		item: "301626",
		description: "CHEF BOYARDE MINI BF RAV MICRO 14OZ",
		upc: "64144863594",
		uom: "EA",
		user: "admin"
	},
	{
		item: "704900",
		description: "DEVERE AZURE AERO BLUE FOAM SOAP EA",
		upc: "69124059220",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "501070",
		description: "BIC PEN BLUE MSP 12CT",
		upc: "70330001060",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "611629",
		description: "SOUR PATCH KIDS LINEUPS 6.35OZ PEG",
		upc: "70462000542",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611634",
		description: "SWEDISH RED FISH 5OZ PEG BAG",
		upc: "70462062083",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "611633",
		description: "SOUR PATCH KIDS CANDY 5OZ PEG BAG",
		upc: "70462062250",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613020",
		description: "BOBS SWEET STRIPE PEG BAG 5 OZ",
		upc: "70538011847",
		uom: "EA",
		user: "admin"
	},
	{
		item: "600480",
		description: "BOBS SWEET STRIPES 290CT",
		upc: "70538016422",
		uom: "JAR",
		user: "admin"
	},
	{
		item: "600490",
		description: "BOBS MINT BALL TUB (26OZ) 160CT",
		upc: "70538016576",
		uom: "TUB",
		user: "admin"
	},
	{
		item: "600470",
		description: "BOBS MINT LUMPS 120CT",
		upc: "70538016903",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600500",
		description: "BOBS CHERRY LUMPS",
		upc: "70538016910",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613025",
		description: "BOBS SWEET STRIPE LAYDOWN BAG 10OZ",
		upc: "70538022096",
		uom: "EA",
		user: "admin"
	},
	{
		item: "602570",
		description: "BIG HUNK 24CT",
		upc: "70602759002",
		uom: "BX",
		user: "admin"
	},
	{
		item: "503310",
		description: "ARMOR ALL PROTECTANT 10OZ EACH",
		upc: "70612100405",
		uom: "EA",
		user: "admin"
	},
	{
		item: "613070",
		description: "BEER NUTS PEANUT BAG EACH",
		upc: "70842000667",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613080",
		description: "BEER NUTS CASHEW BAGS EACH",
		upc: "70842000674",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "602530",
		description: "BEER NUTS BAG 24CT BOX",
		upc: "70842001060",
		uom: "BX",
		user: "admin"
	},
	{
		item: "613030",
		description: "BEER NUTS BAR MIX BAGS 12CT BOX",
		upc: "70842306196",
		uom: "BX",
		user: "admin"
	},
	{
		item: "202470",
		description: "MONSTER ENERGY GREEN 16OZ",
		upc: "70847811237",
		uom: "CS",
		user: "admin"
	},
	{
		item: "202473",
		description: "MONSTER LOW CARB BLUE 16OZ 24PK",
		upc: "70847811275",
		uom: "CS",
		user: "admin"
	},
	{
		item: "603740",
		description: "HOT TAMALES CINNAMON 24CT",
		upc: "70970410277",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604340",
		description: "MIKE AND IKE BERRY BLAST 24CT",
		upc: "70970410291",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604330",
		description: "MIKE AND IKE ORIGINAL FRUITS 24CT",
		upc: "70970410321",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611190",
		description: "MIKE & IKE TROPICAL TYPHOON THEATER",
		upc: "70970467513",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611230",
		description: "HOT TAMALES 3 ALARM 5OZ BOX",
		upc: "70970467544",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611233",
		description: "HOT TAMALES 8.5OZ THEATER BOX",
		upc: "70970467865",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611360",
		description: "HOT TAMALES CINNAMON THEATRE 5OZ",
		upc: "70970471230",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611370",
		description: "MIKE & IKE ORIGINAL THEATER BOX 5OZ",
		upc: "70970471254",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611180",
		description: "MIKE & IKE BERRY BLAST THEATER BOX",
		upc: "70970471278",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611351",
		description: "MIKE & IKE RED RAGEOUS 5OZ THEA BOX",
		upc: "70970471285",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "611340",
		description: "MIKE & IKE JOLLY JOES THEATER 5OZ",
		upc: "70970471308",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "502927",
		description: "STP OIL TREATMENT 15OZ EACH",
		upc: "71153651487",
		uom: "EA",
		user: "admin"
	},
	{
		item: "613095",
		description: "CORN NUTS JALAPENO CHEDR EACH 4OZ",
		upc: "71159001231",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "602900",
		description: "CORN NUTS RANCH 18CT 1.7OZ",
		upc: "71159010196",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602870",
		description: "CORN NUTS ORIGINAL 18CT",
		upc: "71159011339",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602890",
		description: "CORN NUTS BBQ 18 CT 1.7OZ",
		upc: "71159011346",
		uom: "EA",
		user: "admin"
	},
	{
		item: "613130",
		description: "CORN NUTS RANCH BAG EACH 4 OZ",
		upc: "71159073112",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613090",
		description: "CORN NUTS ORIGINAL EACH 4OZ",
		upc: "71159078196",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "613110",
		description: "CORN NUTS BBQ BAG EACH 4 OZ",
		upc: "71159078247",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "502860",
		description: "MAG 1 DOT 3 BRAKE FLUID 12OZ EACH",
		upc: "71621001226",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "502970",
		description: "MAG 1 FIC/CARB INJECTOR CLEANER EA",
		upc: "71621001424",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "503270",
		description: "MAG 1 GAS TREATMENT 12OZ",
		upc: "71621001523",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "502960",
		description: "MAG 1 OCTANE BOOST 12OZ",
		upc: "71621001578",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "503280",
		description: "MAG 1 FILL N SEAL TIRE INFLATOR EA",
		upc: "71621004234",
		uom: "CAN",
		user: "admin"
	},
	{
		item: "503320",
		description: "MAG 1 STEERING FLUID 12OZ EACH",
		upc: "71621008133",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "503300",
		description: "POLAR WINDSHIELD WASH SOLVENT 6/1GL",
		upc: "71621100011",
		uom: "CS",
		user: "admin"
	},
	{
		item: "502930",
		description: "POLAR STARTING FLUID 11OZ EACH",
		upc: "71621100820",
		uom: "CAN",
		user: "admin"
	},
	{
		item: "503160",
		description: "MAG 1 2 CYCLE OIL 8OZ EACH",
		upc: "71621601389",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "600810",
		description: "TOOTSIE ROLL JAR 280CT",
		upc: "71720005507",
		uom: "JAR",
		user: "admin"
	},
	{
		item: "600361",
		description: "TOOTSIE FRUIT PUNCH FROOTIES 360/3",
		upc: "71720078006",
		uom: "BG",
		user: "admin"
	},
	{
		item: "600351",
		description: "TOOTSIE GRAPE FROOTIES 360CT",
		upc: "71720078013",
		uom: "BG",
		user: "admin"
	},
	{
		item: "600371",
		description: "TOOTSIE STRAWBERRY FROOTIES 360CT",
		upc: "71720078020",
		uom: "BG",
		user: "admin"
	},
	{
		item: "600341",
		description: "TOOTSIE ROLLS MIDGEES 360CT",
		upc: "71720078068",
		uom: "BG",
		user: "admin"
	},
	{
		item: "600331",
		description: "TOOTSIE GREEN APPLE FROOTIES 360CT",
		upc: "71720078426",
		uom: "BG",
		user: "admin"
	},
	{
		item: "600311",
		description: "TOOTSIE BL RASPBERRY FROOTIES 360CT",
		upc: "71720078433",
		uom: "BG",
		user: "admin"
	},
	{
		item: "600381",
		description: "TOOTSIE WATERMELON FROOTIES 360CT",
		upc: "71720078488",
		uom: "BG",
		user: "admin"
	},
	{
		item: "601390",
		description: "TOOTSIE CARAMEL APPLE POPS 48CT",
		upc: "71720305010",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602030",
		description: "TOOTSIE POPS ASSORTED 100CT",
		upc: "71720305089",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605510",
		description: "TOOTSIE ROLLS 2.25OZ 36CT BOX",
		upc: "71720309315",
		uom: "BX",
		user: "admin"
	},
	{
		item: "603900",
		description: "JUNIOR MINTS 1.84OZ 24CT",
		upc: "71720330159",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600980",
		description: "JUNIOR MINTS 72/20",
		upc: "71720330203",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611456",
		description: "CHARLESTON CHEW CHOCOLATE 24CT",
		upc: "71720331101",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611457",
		description: "CHARLESTON CHEW STRAWBERRY 24CT",
		upc: "71720331200",
		uom: "CS",
		user: "admin"
	},
	{
		item: "611458",
		description: "CHARLESTON CHEW VANILLA 24CT",
		upc: "71720331309",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604290",
		description: "DOTS TROPICAL 2.25OZ BX - 24 COUNT",
		upc: "71720349502",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604280",
		description: "DOTS 2.25OZ BOX 24CT",
		upc: "71720349724",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602040",
		description: "TOOTSIE ROLL JAR 96CT",
		upc: "71720369203",
		uom: "JR",
		user: "admin"
	},
	{
		item: "611410",
		description: "JUNIOR MINTS THEATER BOX 4 OZ",
		upc: "71720530900",
		uom: "EA",
		user: "admin"
	},
	{
		item: "611400",
		description: "DOTS BOX 7.5OZ",
		upc: "71720850008",
		uom: "EA",
		user: "admin"
	},
	{
		item: "611450",
		description: "DOTS TROPICAL BOX 7.5 OZ",
		upc: "71720850015",
		uom: "EA",
		user: "admin"
	},
	{
		item: "203000",
		description: "SIOUX CITY CREAM SODA 12OZ",
		upc: "72063099185",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "619735",
		description: "FRESHLEY BUDDY BARS 3PK 8CT BOX",
		upc: "72250001120",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619732",
		description: "FRESHLEY BANANA PUDDING CAKE 6CT BX",
		upc: "72250003452",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619752",
		description: "FRESHLEY PWDR SUGAR DONUTS 10OZ BAG",
		upc: "72250010276",
		uom: "EA",
		user: "admin"
	},
	{
		item: "619727",
		description: "FRESHLEY BLUE CHSE DANISH 6CT BX",
		upc: "72250031004",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619800",
		description: "FRESHLEY POWDER GEM DONUT 12CT BOX",
		upc: "72250077262",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619790",
		description: "FRESHLEY CRUNCH GEM DONUT 12CT BOX",
		upc: "72250077279",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619750",
		description: "FRESHLEY CHOCOLATE GEM DONUTS 12CT",
		upc: "72250077286",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619770",
		description: "FRESHLEY CINNAMON GEM DONUTS 12CT",
		upc: "72250077699",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619740",
		description: "FRESHLEY HONEY BUN 6CT BOX",
		upc: "72250087230",
		uom: "EA",
		user: "admin"
	},
	{
		item: "619730",
		description: "FRESHLEY TEXAS CINNAMON ROLL 8CT BX",
		upc: "72250087292",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619711",
		description: "FRESHLEY BEAR CLAW 6CT BOX",
		upc: "72250087315",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619760",
		description: "FRESHLEY CARROT CAKE BAR 8CT BOX",
		upc: "72250087544",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619734",
		description: "FRESHLEY CHERRY PIES 8CT BOX",
		upc: "72250088152",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619733",
		description: "FRESHLEY APPLE PIES 4.5OZ 8CT BOX",
		upc: "72250088176",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619720",
		description: "FRESHLEY CHERRY CHEESE 6CT BOX",
		upc: "72250088244",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619710",
		description: "FRESHLEY BLUEBERRY CHEESE 6CT BOX",
		upc: "72250088268",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619751",
		description: "FRESHLEY CHOCOLATE DONUTS 10OZ BAG",
		upc: "72250903141",
		uom: "EA",
		user: "admin"
	},
	{
		item: "619755",
		description: "FRESHLEY SWISS ROLL 12CT BX",
		upc: "72250913201",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604270",
		description: "MAMBA FRUIT CHEWS 24CT",
		upc: "72799035112",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604271",
		description: "MAMBA SOUR 24CT",
		upc: "72799111687",
		uom: "BX",
		user: "admin"
	},
	{
		item: "201640",
		description: "WATER CHIPPEWA REG 24/16.9OZ",
		upc: "72891008571",
		uom: "CS",
		user: "admin"
	},
	{
		item: "302520",
		description: "TAMPAX REGULAR 10S 10CT BOX",
		upc: "73010214095",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "302530",
		description: "TAMPAX SUPER 10S BOX",
		upc: "73010314092",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "506260",
		description: "TAMPAX SUPER PLUS 10S BOX",
		upc: "73010414099",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "618200",
		description: "OLD WISCONSIN BULK BEEF STICKS",
		upc: "73170182555",
		uom: "BG",
		user: "admin"
	},
	{
		item: "202698",
		description: "ARIZONA TEA RASPBERRY 24CT CASE",
		upc: "73360710438",
		uom: "CS",
		user: "admin"
	},
	{
		item: "202699",
		description: "ARIZONA TEA KIWI/STRWBRRY 24CT CASE",
		upc: "73360710483",
		uom: "CS",
		user: "admin"
	},
	{
		item: "202693",
		description: "ARIZONA TEA MANGO 24CT CASE",
		upc: "73360710964",
		uom: "CS",
		user: "admin"
	},
	{
		item: "601160",
		description: "AIRHEADS WHITE MYSTERY 36CT",
		upc: "73390001124",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601080",
		description: "AIRHEADS BLUE RASPBERRY 36CT",
		upc: "73390001131",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601090",
		description: "AIRHEADS CHERRY 36CT",
		upc: "73390001155",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601091",
		description: "AIRHEADS ORANGE 36CT",
		upc: "73390001162",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601130",
		description: "AIRHEADS WATERMELON 36CT",
		upc: "73390001179",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601120",
		description: "AIRHEADS STRAWBERRY 36CT",
		upc: "73390001193",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601060",
		description: "AIRHEADS GREEN APPLE 36CT",
		upc: "73390001216",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609876",
		description: "MENTOS PURE FRSH GUM SPEARMNT 10CT",
		upc: "73390001387",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609880",
		description: "MENTOS MINT 15CT",
		upc: "73390005764",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609870",
		description: "MENTOS MIXED FRUIT 15CT",
		upc: "73390005771",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609850",
		description: "MENTOS CINNAMON 15CT ROLL",
		upc: "73390005788",
		uom: "EA",
		user: "admin"
	},
	{
		item: "609890",
		description: "MENTOS STRAWBERRY 15CT",
		upc: "73390005795",
		uom: "BX",
		user: "admin"
	},
	{
		item: "609881",
		description: "MENTOS RAINBOW 15CT",
		upc: "73390005948",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601092",
		description: "AIRHEADS PINK LEMONADE 36CT",
		upc: "73390006990",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602500",
		description: "AIRHEAD XTREME RAINBOW BELT 18CT",
		upc: "73390008376",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602504",
		description: "AIRHEAD XTREME LEMONADE BELT 18CT",
		upc: "73390008680",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602506",
		description: "AIRHEAD XTREME BLUE RASPBERRY 18CT",
		upc: "73390008697",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602507",
		description: "AIRHEAD XTREME WATERMELON BELT 18CT",
		upc: "73390008727",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602511",
		description: "AIRHEADS BIG BR STRWBRY/WTRMLN 24CT",
		upc: "73390008802",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602508",
		description: "AIRHEADS BIG BAR BLUE RAZ/CHRY 24CT",
		upc: "73390008819",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602501",
		description: "AIRHEADS CHECKSTAND ASSORTED 18CT",
		upc: "73390024314",
		uom: "BX",
		user: "admin"
	},
	{
		item: "502910",
		description: "HEET 12OZ EACH",
		upc: "73905282017",
		uom: "BTL",
		user: "admin"
	},
	{
		item: "618170",
		description: "FAT FREDDIE BEEF - 36CT",
		upc: "75392363088",
		uom: "BX",
		user: "admin"
	},
	{
		item: "618190",
		description: "FAT FREDDIE  PEPPERONI - 36CT",
		upc: "75392363095",
		uom: "BX",
		user: "admin"
	},
	{
		item: "612328",
		description: "SATH RED TWISTS 2/$1.50 10101",
		upc: "75602101011",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612540",
		description: "SATH ORANGE SLICE 2/$1.50 10102",
		upc: "75602101028",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612240",
		description: "SATH CHERRY SLICES 2/$1.50 01032",
		upc: "75602101035",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612210",
		description: "SATH CANDY NECKLACE 2/$1.50 10113",
		upc: "75602101134",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612530",
		description: "SATH PEPPERMNT PUFFS 2/$1.50 10117",
		upc: "75602101172",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612710",
		description: "SATH SPICE DROPS 2/$1.50 10120",
		upc: "75602101202",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612250",
		description: "SATH CINNAMN BEARS 2/$1.50 01223",
		upc: "75602101226",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612316",
		description: "SATH GUMMI BEARS 2/$1.50 10123",
		upc: "75602101233",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612192",
		description: "SATH GUMMI WORMS 2/$1.50 10125",
		upc: "75602101257",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612332",
		description: "SATH SR NEON NT CRWLR 2/$1.50 10127",
		upc: "75602101271",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612331",
		description: "SATH SR GUMI BEARS 2/$1.50",
		upc: "75602101301",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612315",
		description: "SATH GMI PEACH RNG 2/$1.50 10131",
		upc: "75602101318",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612370",
		description: "SATH GMI APPLE RING 2/$1.50 10032",
		upc: "75602101325",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612314",
		description: "SATH GMMI MELN RNG 2/$1.50 10135",
		upc: "75602101356",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612150",
		description: "SATH GMI BLUE SHARK 2/$1.50 01377",
		upc: "75602101370",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612330",
		description: "SATH SMARTIES 2/$1.50 10140",
		upc: "75602101400",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612294",
		description: "SATH DUM DUM POPS 2/$1.50 01421",
		upc: "75602101424",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612510",
		description: "SATH LEMON DROPS 2/$1.50 10145",
		upc: "75602101455",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612270",
		description: "SATH CINNAMON DISC 2/$1.50 01469",
		upc: "75602101462",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "612303",
		description: "SATH BUTTRSTCH DSC 2/$1.50 10147",
		upc: "75602101479",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612334",
		description: "SATH STRLIGHT MNTS 2/$1.50 10149",
		upc: "75602101493",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612306",
		description: "SATH CARAMELS 2/$1.50 10151",
		upc: "75602101516",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612200",
		description: "SATH CANDY CORN 2/$1.50 10155",
		upc: "75602101554",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612180",
		description: "SATH BURNT PEANUTS 2/$1.50 10156",
		upc: "75602101561",
		uom: "CS",
		user: "admin"
	},
	{
		item: "612308",
		description: "SATH CHERRY SOURS 2/$1.50 10159",
		upc: "75602101592",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "503403",
		description: "\"LIL TREE AIR FRSHNR \"\"ROYL PINE\"\" EA\"",
		upc: "76171101013",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "503404",
		description: "\"LIL TREE AIR FRESHNR \"\"VANILLA\"\" EACH\"",
		upc: "76171101051",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "503408",
		description: "\"LIL TREE AIR FRESHNR \"\"BLACK ICE\"\" EA\"",
		upc: "76171101556",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "503402",
		description: "\"LIL TREE AIR FRESHNR \"\"NEW CAR\"\" EACH\"",
		upc: "76171101891",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "503409",
		description: "\"LIL TREE AIR FRESHNR \"\"CHERRY\"\" EACH\"",
		upc: "76171103116",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "503406",
		description: "\"LIL TREE AIR FRESHNR \"\"STRAWBRY\"\" EA\"",
		upc: "76171103123",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "614960",
		description: "FAMOUS AMOS .99 BIG BAG EACH",
		upc: "76677191365",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "614200",
		description: "FAMOUS AMOS CHOCOLATE CHIP 8CT",
		upc: "76677980679",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605520",
		description: "TWIN BING 36CT",
		upc: "77232801002",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605660",
		description: "TWIN BING KING SIZE 24CT",
		upc: "77232801101",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604945",
		description: "BUN MAPLE BAR 24CT",
		upc: "77250129506",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604930",
		description: "SALTED NUT ROLL 24CT",
		upc: "77290128271",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604946",
		description: "BUN VANILLA BAR 24CT",
		upc: "77290129513",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604947",
		description: "BUN CARAMEL BAR 24CT",
		upc: "77290129520",
		uom: "BX",
		user: "admin"
	},
	{
		item: "619110",
		description: "SALTED NUT ROLL PP 2/$1 24CT BOX",
		upc: "77290618277",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611855",
		description: "BIT O HONEY 190CT JAR",
		upc: "77290771002",
		uom: "JR",
		user: "admin"
	},
	{
		item: "606330",
		description: "SALTED NUT ROLL KING SIZE 18CT",
		upc: "77290819506",
		uom: "EA",
		user: "admin"
	},
	{
		item: "601010",
		description: "PEARSON MINT PATTIES TUB 240CT",
		upc: "77290902765",
		uom: "JR",
		user: "admin"
	},
	{
		item: "619135",
		description: "SALTED NUT ROLL BITE SIZE BOX 60CT",
		upc: "77290903663",
		uom: "BX",
		user: "admin"
	},
	{
		item: "202630",
		description: "DR PEPPER 24/12 OZ",
		upc: "78000082166",
		uom: "CS",
		user: "admin"
	},
	{
		item: "202640",
		description: "DR PEPPER DIET 24/12 OZ",
		upc: "78000083163",
		uom: "CS",
		user: "admin"
	},
	{
		item: "616480",
		description: "CRACKLINS LOOSE PLAIN 1.75 OZ BAG",
		upc: "78116002010",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616490",
		description: "CRACKLINS LOOSE HOT 1.75 OZ BAG",
		upc: "78116002027",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "616470",
		description: "CRACKLINS LOOSE BBQ 2.125 OZ BAG",
		upc: "78116002034",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "501460",
		description: "GONESH #6 (ANCIENT TIMES)",
		upc: "78612201061",
		uom: "BX",
		user: "admin"
	},
	{
		item: "501470",
		description: "GONESH #8 (SPRING MIST)",
		upc: "78612201085",
		uom: "BX",
		user: "admin"
	},
	{
		item: "501430",
		description: "GONESH JASMINE INCENSE",
		upc: "78612208015",
		uom: "BX",
		user: "admin"
	},
	{
		item: "501450",
		description: "GONESH STRAWBERRY INCENSE",
		upc: "78612208039",
		uom: "BX",
		user: "admin"
	},
	{
		item: "501420",
		description: "GONESH CHERRY INCENSE",
		upc: "78612208206",
		uom: "BX",
		user: "admin"
	},
	{
		item: "402140",
		description: "OIL LIQUID FRY CLEAR 35#",
		upc: "78684371167",
		uom: "CS",
		user: "admin"
	},
	{
		item: "503350",
		description: "\"SQUEEGEE 8X21 WS2024A 20\"\" EACH\"",
		upc: "79062123538",
		uom: "SQG",
		user: "admin"
	},
	{
		item: "617870",
		description: "PICKLED EGGS 24CT 1/2 GAL",
		upc: "79112520058",
		uom: "JR",
		user: "admin"
	},
	{
		item: "617910",
		description: "TURKEY GIZZARD 32CT 1/2GL",
		upc: "79112523332",
		uom: "JR",
		user: "admin"
	},
	{
		item: "601360",
		description: "BOTTLE CAPS ROLL 24CT",
		upc: "79200020248",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602011",
		description: "FUN DIP 48CT",
		upc: "79200110505",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611161",
		description: "BOTTLE CAPS THEATER BOX 5OZ",
		upc: "79200113056",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "604511",
		description: "NERDS GIANT CHEWY 24CT",
		upc: "79200122256",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602760",
		description: "SWEETARTS GIANT CHEWY 36CT",
		upc: "79200131234",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605360",
		description: "SWEETARTS ROLL 36CT",
		upc: "79200136468",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611890",
		description: "SPREE CHEWY PEG BAG 7OZ",
		upc: "79200139254",
		uom: "BAG",
		user: "admin"
	},
	{
		item: "605140",
		description: "SPREE ROLL 36CT",
		upc: "79200150266",
		uom: "EA",
		user: "admin"
	},
	{
		item: "611162",
		description: "SWEETTART THEATER BOX 5OZ",
		upc: "79200158866",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605430",
		description: "TANGY LAFFY TAFFY GRAPE 24CT",
		upc: "79200160302",
		uom: "EA",
		user: "admin"
	},
	{
		item: "605460",
		description: "TANGY LAFFY TAFFY WATERMELON 24CT",
		upc: "79200160319",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604510",
		description: "NERDS ROPE 24CT",
		upc: "79200173234",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605130",
		description: "SPREE CHEWY POUCH 24CT",
		upc: "79200182137",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604500",
		description: "NERDS ROPE VERY BERRY 24CT",
		upc: "79200186647",
		uom: "EA",
		user: "admin"
	},
	{
		item: "604570",
		description: "NERDS GRAPE/STRAWBERRY 36CT",
		upc: "79200240004",
		uom: "EA",
		user: "admin"
	},
	{
		item: "604540",
		description: "NERDS DOUBLE DIP 36CT",
		upc: "79200392208",
		uom: "EA",
		user: "admin"
	},
	{
		item: "604970",
		description: "SHOCKERS SWEETARTS 24CT",
		upc: "79200524456",
		uom: "EA",
		user: "admin"
	},
	{
		item: "611150",
		description: "NERDS THEATER BOX 5OZ",
		upc: "79200587789",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605448",
		description: "TANGY LAFFY TAFFY CHERRY BAR 24CT",
		upc: "79200600129",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605131",
		description: "SPREE CHEWY MIXED BERRY POUCH 24CT",
		upc: "79200714444",
		uom: "BX",
		user: "admin"
	},
	{
		item: "604560",
		description: "NERDS SOUR LEMON/APPLE 24CT",
		upc: "79200739805",
		uom: "BX",
		user: "admin"
	},
	{
		item: "602750",
		description: "SWEETARTS MINI CHEWY 24CT",
		upc: "79200887582",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611140",
		description: "GOBSTOPPER THEATER BOX 5OZ",
		upc: "79200955571",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "605449",
		description: "TANGY LAFFY TAFFY STRWBRY BAR 24CT",
		upc: "79200965143",
		uom: "BX",
		user: "admin"
	},
	{
		item: "605447",
		description: "TANGY LAFFY TAFFY BANANA BAR 24CT",
		upc: "79200978617",
		uom: "BX",
		user: "admin"
	},
	{
		item: "611160",
		description: "RUNTS THEATER BOX 5OZ",
		upc: "79200989873",
		uom: "BOX",
		user: "admin"
	},
	{
		item: "504980",
		description: "WD-40 SPRAY 8OZ SMART STRAW EACH",
		upc: "79567110057",
		uom: "EA",
		user: "admin"
	},
	{
		item: "707430",
		description: "BAG #2 BROWN 81006 500CT",
		upc: "79594800051",
		uom: "BX",
		user: "admin"
	},
	{
		item: "707550",
		description: "BAG #20 SHORTY HEAVY #80066 2/250CT",
		upc: "79594800662",
		uom: "BX",
		user: "admin"
	},
	{
		item: "707630",
		description: "BAG #1/6 BARREL #80079 500CT GRCYSZ",
		upc: "79594800792",
		uom: "BX",
		user: "admin"
	},
	{
		item: "707470",
		description: "BAG 8# BROWN 80957 500CT",
		upc: "79594809573",
		uom: "BX",
		user: "admin"
	},
	{
		item: "503020",
		description: "FUNNEL OIL 1 PNT FLOTL 05015MI 12CT",
		upc: "81773901003",
		uom: "SLV",
		user: "admin"
	},
	{
		item: "201015",
		description: "NAKED JUICE BLUE MACHINE 8/15.2OZ",
		upc: "82592727152",
		uom: "CS",
		user: "admin"
	},
	{
		item: "604990",
		description: "SIXLETS 24CT",
		upc: "89669035653",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601950",
		description: "SIXLETS 48/15",
		upc: "89669035844",
		uom: "BX",
		user: "admin"
	},
	{
		item: "401015",
		description: "POPCORN SALT FLAVACOL BUTTERY 35OZ",
		upc: "90939020453",
		uom: "EA",
		user: "admin"
	},
	{
		item: "604948",
		description: "VALOMILK 24CT",
		upc: "93591000245",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601753",
		description: "NOW & LATER GRAPE CHANGEMAKER 24CT",
		upc: "93922035106",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601752",
		description: "NOW & LATER CHERRY CHANGEMAKER 24CT",
		upc: "93922035113",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601757",
		description: "NOW & LATER WTRMELON CHGMKR 24CT",
		upc: "93922035120",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601751",
		description: "NOW & LATER STRWBRY CHNGEMAKER 24CT",
		upc: "93922035144",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601756",
		description: "NOW & LATER BANANA CHANGEMAKER 24CT",
		upc: "93922035236",
		uom: "BX",
		user: "admin"
	},
	{
		item: "601754",
		description: "NOW & LATER PINEAPPL CHNGEMKER 24CT",
		upc: "93922035267",
		uom: "BX",
		user: "admin"
	},
	{
		item: "600720",
		description: "NOW & LATER ASSTD JAR 192CT",
		upc: "93922559404",
		uom: "JR",
		user: "admin"
	},
	{
		item: "604620",
		description: "NOW & LATER ORIGINAL BAR 24CT",
		upc: "93922800599",
		uom: "BX",
		user: "admin"
	},
	{
		item: "302531",
		description: "HUGGIES DIAPER KIT 2 MEDIUM",
		upc: "94187167083",
		uom: "PAK",
		user: "admin"
	},
	{
		item: "606570",
		description: "POWERBAR PEANUT BUTTER 12CT",
		upc: "97421050806",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606632",
		description: "POWERBAR TRPLE THRT CHC/CRML FUSION",
		upc: "97421090505",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606600",
		description: "POWERBAR PB CHOC CHIP HARVEST 15CT",
		upc: "97421470604",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606628",
		description: "POWERBAR PROTEIN PLS VAN/YOGURT 12C",
		upc: "97421490107",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606630",
		description: "POWERBAR PROTEIN PLS CHOC/PNTBR 15C",
		upc: "97421490305",
		uom: "BX",
		user: "admin"
	},
	{
		item: "606625",
		description: "POWERBAR PROTEIN PLS COOKE/CRM 15CT",
		upc: "97421490503",
		uom: "BX",
		user: "admin"
	},
];

const seedItem = () => {
  await Item.deleteMany({});  
  await Item.bulkCreate(itemData);
} 

module.exports = seedItem;
