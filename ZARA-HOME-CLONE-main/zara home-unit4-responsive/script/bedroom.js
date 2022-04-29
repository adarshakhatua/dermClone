
import { navbar, footer } from "../component/navbar.js";
// Home\components\navbar.js
//console.log(navbar);
let nav_div = document.getElementById("bedcon");
nav_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

import clickItem from "../script/click_item.js";
clickItem();

// var data = [
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
//         name:"REVERSIBLE FLANNEL DUVET COVER",
//         price:"45.99 €  - 59.99 €",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
//         name:"MELANGE BAMBOO DUVET COVER",
//         price:"45.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"45.99 € ",
       
//     },

//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6124/088/250/6124088250_7_1_3.jpg?t=1635935233667",
//         name:"DYED THREAD PERCALE DUVET COVER",
//         price:"69.99 €  - 99.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/3117/088/250/3117088250_7_1_3.jpg?t=1638180608729",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6113/088/406/6113088406_7_1_3.jpg?t=1636370351813",
//         name:"(140 GSM) WASHED LINEN DUVET COVER",
//         price:"78.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_7_1_3.jpg?t=1637163312195",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"86.99 € ",
       
//     },

//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
//         name:"REVERSIBLE FLANNEL DUVET COVER",
//         price:"45.99 €  - 59.99 €",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
//         name:"MELANGE BAMBOO DUVET COVER",
//         price:"45.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"45.99 € ",
       
//     },
    
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6124/088/250/6124088250_7_1_3.jpg?t=1635935233667",
//         name:"DYED THREAD PERCALE DUVET COVER",
//         price:"69.99 €  - 99.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/3117/088/250/3117088250_7_1_3.jpg?t=1638180608729",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6113/088/406/6113088406_7_1_3.jpg?t=1636370351813",
//         name:"(140 GSM) WASHED LINEN DUVET COVER",
//         price:"78.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
//         name:"REVERSIBLE FLANNEL DUVET COVER",
//         price:"45.99 €  - 59.99 €",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
//         name:"TOILE DE JOUY PRINT DUVET COVER",
//         price:"59.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
//         name:"MELANGE BAMBOO DUVET COVER",
//         price:"45.99 € ",
       
//     },
//     {
//         imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
//         name:"MINI FLORAL PRINT DUVET COVER",
//         price:"45.99 € ",
       
//     }
// ]

// let fetchData =async function(){
//     try{
//         let res=await fetch("http://3.142.246.172:5000/bedroom");
//         var data =await res.json()
//         console.log(data.Bedroom)
//         data =data.Bedroom;
//         populateData(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// fetchData();

var data = [
    {
        name: "MINI FLORAL PRINT DUVET COVER",
        price: "17.99 € ", "ref": "REF. 6102/088",
        ref: "REF. 0105/088",
        description: "Duvet cover in 180 thread count cotton percale with a yellow mini floral print.Concealed button fastening at the bottom.",
        size: {
            "Single (135 x 200 cm)": [35.99, 0],
            "Single (150 x 220 cm)": [35.99, 3],
            "Single (180 x 220 cm)": [35.99, 0],
            "Double (220 x 220 cm)": [45.99, 0],
            "Double (200 x 200 cm)": [45.99, 0],
            "Double (200 x 220 cm)": [45.99, 0],
            "King (240 x 220 cm)": [45.99, 0],
            "Superking (260 x 240 cm)": [59.99, 0],
            "Emperor (290 x 260 cm)": [59.99, 0]
        },
        product_details:
        {
            MEASUREMENTS:
            {
                "Single (135 x 200 cm)": 35.99,
                "Single (150 x 220 cm)": 35.99,
                "Single (180 x 220 cm)": 35.99,
                "Double (220 x 220 cm)": 45.99,
                "Double (200 x 200 cm)": 45.99,
                "Double (200 x 220 cm)": 45.99,
                "King (240 x 220 cm)": 45.99,
                "Superking (260 x 240 cm)": 59.99,
                "Emperor (290 x 260 cm)": 59.99
            },
            CARE: ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"],
            ORIGIN: "Made in PAKISTAN",
        },
        imagelink1: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_2_7_1.jpg?t=1632324449360",
        imagelink2: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_1_1_1.jpg?t=1629302155064",
        imagelink3: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_2_1_1.jpg?t=1629302155064",
        imagelink4: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_2_2_1.jpg?t=1629302155064",
        imagelink5: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_2_3_1.jpg?t=1629302155064",
        imagelink6: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_2_4_1.jpg?t=1629302155064",
        imagelink7: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_2_5_1.jpg?t=1629302155064",
        imagelink8: "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_2_8_1.jpg?t=1632469091079",
        __v: 0,
        qty: "1"
    },
    {
        "_id": { "$oid": "6247fce08e3973bde83c9feb" },
        "name": "(180 THREAD COUNT) COTTON PERCALE DUVET COVER",
        "price": "22.99 € ",
        "ref": "REF. 0105/088",
        "description": "Plain duvet cover in 180 thread count cotton percale.Concealed button fastening at the bottom.",
        "size": {
            "Single (135 x 200 cm)": [35.99, 0],
            "Single (150 x 220 cm)": [35.99, 3],
            "Single (180 x 220 cm)": [35.99, 0],
            "Double (220 x 220 cm)": [45.99, 0],
            "Double (200 x 200 cm)": [45.99, 0],
            "Double (200 x 220 cm)": [45.99, 0],
            "King (240 x 220 cm)": [45.99, 0],
            "Superking (260 x 240 cm)": [59.99, 0],
            "Emperor (290 x 260 cm)": [59.99, 0]
        }, "product_details":
        {
            "MEASUREMENTS":
            {
                "Single (135 x 200 cm)": 35.99,
                "Single (150 x 220 cm)": 35.99,
                "Single (180 x 220 cm)": 35.99,
                "Double (220 x 220 cm)": 45.99,
                "Double (200 x 200 cm)": 45.99,
                "Double (200 x 220 cm)": 45.99,
                "King (240 x 220 cm)": 45.99,
                "Superking (260 x 240 cm)": 59.99,
                "Emperor (290 x 260 cm)": 59.99
            },
            "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"],
            "ORIGIN": "Made in SPAIN",
        },
        "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_7_1.jpg?t=1630579472761",
        "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_1_1_1.jpg?t=1629808013568",
        "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_1_1.jpg?t=1629808013568",
        "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_2_1.jpg?t=1629808013568",
        "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_3_1.jpg?t=1629808013568",
        "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_4_1.jpg?t=1629808013568",
        "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_5_1.jpg?t=1629808013568",
        "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_8_1.jpg?t=1632474946711",
        "__v": 0,
        "qty": "1",
        
    },
    {
        "_id": { "$oid": "6247fcfc8e3973bde83c9fed" },
        "name": "DUVET COVER WITH CONTRASTING EDGING",
        "price": "59.99 €  - 69.99 € ",
        "ref": "REF. 6127/088",
        "description": "Duvet cover in 300 thread count cotton percale with contrast piping.Concealed button fastening at the bottom.",
        "size":
        {
            "Single (135 x 200 cm)": [35.99, 5],
            "Single (150 x 220 cm)": [35.99, 3],
            "Single (180 x 220 cm)": [35.99, 0],
            "Double (220 x 220 cm)": [45.99, 5],
            "Double (200 x 200 cm)": [45.99, 0],
            "Double (200 x 220 cm)": [45.99, 0],
            "King (240 x 220 cm)": [45.99, 0],
            "Superking (260 x 240 cm)": [59.99, 0],
            "Emperor (290 x 260 cm)": [59.99, 0]
        },
        "product_details":
        {
            "MEASUREMENTS":
            {
                "Single (135 x 200 cm)": 35.99,
                "Single (150 x 220 cm)": 35.99,
                "Single (180 x 220 cm)": 35.99,
                "Double (220 x 220 cm)": 45.99,
                "Double (200 x 200 cm)": 45.99,
                "Double (200 x 220 cm)": 45.99,
                "King (240 x 220 cm)": 45.99,
                "Superking (260 x 240 cm)": 59.99,
                "Emperor (290 x 260 cm)": 59.99
            },
            "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"],
            "ORIGIN": "Made in PAKISTAN"
        },
        "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6127/088/802/6127088802_2_7_1.jpg?t=1632388986974",
        "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6127/088/802/6127088802_1_1_1.jpg?t=1629275964874",
        "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6127/088/802/6127088802_2_1_1.jpg?t=1631177778560",
        "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6127/088/802/6127088802_2_3_1.jpg?t=1629275964874",
        "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6127/088/802/6127088802_2_2_1.jpg?t=1629275964874",
        "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6127/088/802/6127088802_2_4_1.jpg?t=1629278951718",
        "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6127/088/802/6127088802_2_5_1.jpg?t=1629284106503",
        "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_2_8_1.jpg?t=1632474946711",
        "__v": 0,
        "qty": "1"
    },
    {
        "_id":
        {
            "$oid": "6247fd108e3973bde83c9fef"
        },
        "name": "DYED THREAD CHECK DUVET COVER",
        "price": "59.99 €  - 89.99 € ",
        "ref": "REF. 4164/088",
        "description": "Cotton duvet cover with dyed thread check details in two colours.Concealed button fastening at the bottom.",
        "size":
        {
            "Single (135 x 200 cm)": [35.99, 1],
            "Single (150 x 220 cm)": [35.99, 3],
            "Single (180 x 220 cm)": [35.99, 0],
            "Double (220 x 220 cm)": [45.99, 0],
            "Double (200 x 200 cm)": [45.99, 0],
            "Double (200 x 220 cm)": [45.99, 0],
            "King (240 x 220 cm)": [45.99, 5],
            "Superking (260 x 240 cm)": [59.99, 0],
            "Emperor (290 x 260 cm)": [59.99, 6]
        },
        "product_details":
        {
            "MEASUREMENTS":
            {
                "Single (135 x 200 cm)": 35.99,
                "Single (150 x 220 cm)": 35.99,
                "Single (180 x 220 cm)": 35.99,
                "Double (220 x 220 cm)": 45.99,
                "Double (200 x 200 cm)": 45.99,
                "Double (200 x 220 cm)": 45.99,
                "King (240 x 220 cm)": 45.99,
                "Superking (260 x 240 cm)": 59.99,
                "Emperor (290 x 260 cm)": 59.99
            },
            "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"],
            "ORIGIN": "Made in BANGLADESH"
        },
        "imagelink1": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_2_7_1.jpg?t=1644587593602",
        "imagelink2": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_2_5_1.jpg?t=1640259004179",
        "imagelink3": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_1_1_1.jpg?t=1640259004179",
        "imagelink4": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_2_1_1.jpg?t=1640259004179",
        "imagelink5": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_2_2_1.jpg?t=1640259004179",
        "imagelink6": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_2_3_1.jpg?t=1640259004179",
        "imagelink7": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_2_4_1.jpg?t=1640259004179",
        "imagelink8": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4164/088/070/4164088070_2_7_1.jpg?t=1644587593602",
        "__v": 0,
        "qty": "1"
    },
    {
        "_id":
        {
            "$oid": "6247fd228e3973bde83c9ff1"
        },
        "name": "DYED THREAD CHECK DUVET COVER",
        "price": "59.99 €  - 69.99 € ",
        "ref": "REF. 4134/088",
        "description": "Cotton duvet cover featuring dyed thread checks.Concealed button fastening at the bottom.",
        "size":
        {
            "Single (135 x 200 cm)": [35.99, 0],
            "Single (150 x 220 cm)": [35.99, 3],
            "Single (180 x 220 cm)": [35.99, 0],
            "Double (220 x 220 cm)": [45.99, 5],
            "Double (200 x 200 cm)": [45.99, 0],
            "Double (200 x 220 cm)": [45.99, 7],
            "King (240 x 220 cm)": [45.99, 0],
            "Superking (260 x 240 cm)": [59.99, 0],
            "Emperor (290 x 260 cm)": [59.99, 0]
        },
        "product_details":
        {
            "MEASUREMENTS":
            {
                "Single (135 x 200 cm)": 35.99,
                "Single (150 x 220 cm)": 35.99,
                "Single (180 x 220 cm)": 35.99,
                "Double (220 x 220 cm)": 45.99,
                "Double (200 x 200 cm)": 45.99,
                "Double (200 x 220 cm)": 45.99,
                "King (240 x 220 cm)": 45.99,
                "Superking (260 x 240 cm)": 59.99,
                "Emperor (290 x 260 cm)": 59.99
            },
            "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"],
            "ORIGIN": "Made in MAINLAND CHINA"
        },
        "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_2_7_1.jpg?t=1637160940510",
        "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_2_2_1.jpg?t=1630333102596",
        "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_1_1_1.jpg?t=1630333102596",
        "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_2_1_1.jpg?t=1630333102596",
        "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_2_3_1.jpg?t=1630333102596",
        "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_2_4_1.jpg?t=1630333102596",
        "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_2_5_1.jpg?t=1630502794336",
        "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4134/088/999/4134088999_2_7_1.jpg?t=1637160940510",
        "__v": 0,
        "qty": "1"
    },
    {
        "_id":
        {
            "$oid": "6247fd338e3973bde83c9ff3"
        },
        "name": "(300 THREAD COUNT) SATEEN PAISLEY DUVET COVER",
        "price": "59.99 € ",
        "ref": "REF. 4141/088",
        "description": "Duvet cover in 300-thread-count sateen with a paisley print.Concealed button fastening at the bottom.",
        "size":
        {
            "Single (135 x 200 cm)": [35.99, 0],
            "Single (150 x 220 cm)": [35.99, 3],
            "Single (180 x 220 cm)": [35.99, 0],
            "Double (220 x 220 cm)": [45.99, 0],
            "Double (200 x 200 cm)": [45.99, 0],
            "Double (200 x 220 cm)": [45.99, 0],
            "King (240 x 220 cm)": [45.99, 0],
            "Superking (260 x 240 cm)": [59.99, 0],
            "Emperor (290 x 260 cm)": [59.99, 0]
        },
        "product_details":
        {
            "MEASUREMENTS":
            {
                "Single (135 x 200 cm)": 35.99,
                "Single (150 x 220 cm)": 35.99,
                "Single (180 x 220 cm)": 35.99,
                "Double (220 x 220 cm)": 45.99,
                "Double (200 x 200 cm)": 45.99,
                "Double (200 x 220 cm)": 45.99,
                "King (240 x 220 cm)": 45.99,
                "Superking (260 x 240 cm)": 59.99,
                "Emperor (290 x 260 cm)": 59.99
            },
            "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"],
            "ORIGIN": "Made in ITALY"
        },
        "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_2_7_1.jpg?t=1637235368085",
        "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_1_1_1.jpg?t=1624969742841",
        "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_2_1_1.jpg?t=1624969742841",
        "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_2_2_1.jpg?t=1624969742841",
        "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_2_3_1.jpg?t=1624969742841",
        "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_2_4_1.jpg?t=1624969742841",
        "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_2_5_1.jpg?t=1624969742841",
        "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4141/088/400/4141088400_2_7_1.jpg?t=1637235368085",
        "__v": 0,
        "qty": "1"
    },
    { "_id": { "$oid": "6247fd438e3973bde83c9ff5" }, "name": "(140 GSM) WASHED LINEN DUVET COVER", "price": "69.99 € ", "ref": "REF. 4100/088", "description": "Plain 140 GSM washed linen duvet cover with topstitching around the edge.Concealed button fastening at the bottom.The washing technique makes the fabric softer and more fluid.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 5], "King (240 x 220 cm)": [45.99, 8], "Superking (260 x 240 cm)": [59.99, 8], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in CAMBODIA" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_2_7_1.jpg?t=1632902128734", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_1_1_1.jpg?t=1626787782272", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_2_1_1.jpg?t=1626787782272", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_2_2_1.jpg?t=1626787782272", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_2_3_1.jpg?t=1626787782272", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_2_4_1.jpg?t=1626787782272", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_2_5_1.jpg?t=1626787782272", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/805/4100088805_2_7_1.jpg?t=1632902128734", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fd558e3973bde83c9ff7" }, "name": "(140 GSM) WASHED LINEN DUVET COVER", "price": "69.99 €  - 99.99 € ", "ref": "REF. 4100/088", "description": "Plain 140 GSM washed linen duvet cover with topstitching around the edge.Concealed button fastening at the bottom.The washing technique makes the fabric softer and more fluid.", "size": { "Single (135 x 200 cm)": [35.99, 5], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 9], "Double (200 x 200 cm)": [45.99, 5], "Double (200 x 220 cm)": [45.99, 7], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 5] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in CAMBODIA" }, "imagelink1": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_2_7_1.jpg?t=1647451447190", "imagelink2": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_1_1_1.jpg?t=1627980546517", "imagelink3": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_2_1_1.jpg?t=1627980546517", "imagelink4": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_2_2_1.jpg?t=1627980546517", "imagelink5": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_2_3_1.jpg?t=1627980546517", "imagelink6": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_2_4_1.jpg?t=1627980546517", "imagelink7": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_2_5_1.jpg?t=1627994896130", "imagelink8": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/4100/088/818/4100088818_2_7_1.jpg?t=1647451447190", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fd668e3973bde83c9ff9" }, "name": "(140 GSM) WASHED LINEN DUVET COVER", "price": "69.99 € ", "ref": "REF. 4100/088", "description": "Plain 140 GSM washed linen duvet cover with topstitching around the edge.Concealed button fastening at the bottom.The washing technique makes the fabric softer and more fluid.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in CAMBODIA" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_2_7_1.jpg?t=1636105506773", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_2_2_1.jpg?t=1636108602613", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_1_1_1.jpg?t=1636108602613", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_2_1_1.jpg?t=1636108602613", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_2_3_1.jpg?t=1636108602613", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_2_4_1.jpg?t=1636108602613", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_2_5_1.jpg?t=1636108602613", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/825/4100088825_2_7_1.jpg?t=1636105506773", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fd768e3973bde83c9ffb" }, "name": "DYED THREAD PERCALE DUVET COVER", "price": "45.99 € ", "ref": "REF. 4105/088", "description": "Duvet cover in 200 thread count cotton percale with dyed thread checks.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in BANGLADESH" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_2_7_1.jpg?t=1633694603976", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_1_1_1.jpg?t=1631112107657", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_2_1_1.jpg?t=1631112107657", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_2_2_1.jpg?t=1631112107657", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_2_3_1.jpg?t=1631112107657", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_2_4_1.jpg?t=1631112107657", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_2_5_1.jpg?t=1632143179308", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4105/088/700/4105088700_2_7_1.jpg?t=1633694603976", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fd928e3973bde83c9ffd" }, "name": "MINI FLORAL PRINT DUVET COVER", "price": "45.99 €  - 59.99 € ", "ref": "REF. 6120/088", "description": "Duvet cover in 200 thread count cotton percale with a mini floral print.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 8], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in ITALY" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_2_7_1.jpg?t=1633426931231", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_1_1_1.jpg?t=1625675687630", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_2_1_1.jpg?t=1625675687630", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_2_2_1.jpg?t=1625675687630", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_2_3_1.jpg?t=1625675687630", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_2_4_1.jpg?t=1625675687630", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_2_5_1.jpg?t=1625835488085", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6120/088/620/6120088620_2_7_1.jpg?t=1633426931231", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fda48e3973bde83c9fff" }, "name": "MELANGE BAMBOO DUVET COVER", "price": "45.99 €  - 59.99 € ", "ref": "REF. 6100/088", "description": "Melange grey bamboo duvet cover.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 4], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in PAKISTAN" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_2_7_1.jpg?t=1634138647100", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_1_1_1.jpg?t=1629275336067", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_2_1_1.jpg?t=1629275336067", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_2_2_1.jpg?t=1629275336067", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_2_3_1.jpg?t=1629275336067", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_2_4_1.jpg?t=1629275336067", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_2_5_1.jpg?t=1629284109696", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6100/088/802/6100088802_2_7_1.jpg?t=1634138647100", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fdb58e3973bde83ca001" }, "name": "TOILE DE JOUY PRINT DUVET COVER", "price": "59.99 € ", "ref": "REF. 6103/088", "description": "Duvet cover in 200 thread count cotton percale with a Toile de Jouy print.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 8], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in SPAIN" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_2_7_1.jpg?t=1633426626238", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_1_1_1.jpg?t=1629302994954", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_2_1_1.jpg?t=1629302994954", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_2_2_1.jpg?t=1629302994954", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_2_3_1.jpg?t=1629302994954", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_2_4_1.jpg?t=1629302994954", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_2_5_1.jpg?t=1629302994954", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6103/088/710/6103088710_2_8_1.jpg?t=1641223075313", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fdc18e3973bde83ca003" }, "name": "REVERSIBLE FLANNEL DUVET COVER", "price": "45.99 €  - 59.99 € ", "ref": "REF. 6109/088", "description": "Melange grey flannel duvet cover with reversible checks and stripes.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 7], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 8], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in BANGLADESH" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_2_7_1.jpg?t=1633419008286", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_1_1_1.jpg?t=1633697434158", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_2_1_1.jpg?t=1633697434158", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_2_2_1.jpg?t=1633697434158", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_2_3_1.jpg?t=1633697434158", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_2_4_1.jpg?t=1633697434158", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_2_5_1.jpg?t=1633697434158", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/6109/088/802/6109088802_2_7_1.jpg?t=1633419008286", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fdce8e3973bde83ca005" }, "name": "(300 THREAD COUNT) COTTON PERCALE DUVET COVER", "price": "45.99 €  - 79.99 € ", "ref": "REF. 0301/088 ", "description": "Plain duvet cover in 300 thread count cotton percale with a matte finish.This new top-quality fabric features an incredible softness that multiplies wash after wash. It is anti-pilling and offers increased durability and strength.Concealed button fastening at the bottom. JOIN LIFE Care for water: produced using less water. The use of closed cycles that allow water to be reused or technologies such as low bath ratio machines or mass dyeing help us to reduce water consumption in the processes of dyeing or washing garments.", "size": { "Single (135 x 200 cm)": [35.99, 9], "Single (150 x 220 cm)": [35.99, 5], "Single (180 x 220 cm)": [35.99, 5], "Double (220 x 220 cm)": [45.99, 3], "Double (200 x 200 cm)": [45.99, 5], "Double (200 x 220 cm)": [45.99, 4], "King (240 x 220 cm)": [45.99, 7], "Superking (260 x 240 cm)": [59.99, 5], "Emperor (290 x 260 cm)": [59.99, 8] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in PORTUGAL" }, "imagelink1": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_2_7_1.jpg?t=1642438399093", "imagelink2": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_1_1_1.jpg?t=1642441037169", "imagelink3": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_2_1_1.jpg?t=1642441037169", "imagelink4": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_2_2_1.jpg?t=1642441037169", "imagelink5": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_2_3_1.jpg?t=1642441037169", "imagelink6": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_2_4_1.jpg?t=1642441037169", "imagelink7": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_2_5_1.jpg?t=1642441037169", "imagelink8": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/712/0301088712_2_8_1.jpg?t=1637573140255", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fddf8e3973bde83ca007" }, "name": "(180 THREAD COUNT) COTTON PERCALE DUVET COVER", "price": "22.99 €  - 35.99 € ", "ref": "REF. 0105/088", "description": "Plain duvet cover in 180 thread count cotton percale.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 6], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 8], "Double (200 x 200 cm)": [45.99, 7], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 8], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in SPAIN" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_2_7_1.jpg?t=1637321088990", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_1_1_1.jpg?t=1637321088990", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_2_1_1.jpg?t=1637321088990", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_2_2_1.jpg?t=1637321088990", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_2_3_1.jpg?t=1637321088990", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_2_4_1.jpg?t=1637321088990", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_2_5_1.jpg?t=1637321088990", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/807/0105088807_2_7_1.jpg?t=1637321088990", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fdf48e3973bde83ca009" }, "name": "WAFFLE-KNIT PERCALE DUVET COVER", "price": "59.99 €  - 69.99 € ", "ref": "REF. 3189/088", "description": "Duvet cover in 200 thread count percale with an waffle fabric design.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 8], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in PORTUGAL" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_2_7_1.jpg?t=1638887729974", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_1_1_1.jpg?t=1613658996190", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_2_1_1.jpg?t=1613658996190", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_2_2_1.jpg?t=1613658996190", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_2_3_1.jpg?t=1613658996190", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_2_4_1.jpg?t=1613658996190", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_2_5_1.jpg?t=1614013120312", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/3189/088/250/3189088250_2_7_1.jpg?t=1638887729974", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fe048e3973bde83ca00b" }, "name": "(180 THREAD COUNT) COTTON PERCALE DUVET COVER", "price": "22.99 € ", "ref": "REF. 0105/088", "description": "", "size": { "Single (135 x 200 cm)": [35.99, 9], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 5], "Double (200 x 200 cm)": [45.99, 8], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in SPAIN" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_2_7_1.jpg?t=1637319885197", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_1_1_1.jpg?t=1637319885197", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_2_1_1.jpg?t=1637319885197", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_2_2_1.jpg?t=1637319885197", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_2_3_1.jpg?t=1637319885197", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_2_4_1.jpg?t=1637319885197", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_2_5_1.jpg?t=1637319885197", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/802/0105088802_2_8_1.jpg?t=1637319885197", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fe138e3973bde83ca00d" }, "name": "DUVET COVER WITH VOILE AND EMBROIDERY", "price": "69.99 € ", "ref": "REF. 1143/088", "description": "Duvet cover in 200 thread count cotton percale with embroidery and voile.Concealed button fastening at the bottom.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 7], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 7], "Emperor (290 x 260 cm)": [59.99, 7] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in PORTUGAL" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_2_7_1.jpg?t=1633966091829", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_1_1_1.jpg?t=1624873081036", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_2_1_1.jpg?t=1624873081036", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_2_2_1.jpg?t=1624873081036", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_2_3_1.jpg?t=1624873081036", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_2_4_1.jpg?t=1624873081036", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_2_5_1.jpg?t=1614066907807", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/1143/088/250/1143088250_2_7_1.jpg?t=1633966091829", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fe248e3973bde83ca00f" }, "name": "(300 THREAD COUNT) COTTON PERCALE DUVET COVER", "price": "45.99 €  - 79.99 € ", "ref": "REF. 0301/088", "description": "Plain duvet cover in 300 thread count cotton percale with a matte finish.This new top-quality fabric features an incredible softness that multiplies wash after wash. It is anti-pilling and offers increased durability and strength.Concealed button fastening at the bottom. JOIN LIFE Care for water: produced using less water. The use of closed cycles that allow water to be reused or technologies such as low bath ratio machines or mass dyeing help us to reduce water consumption in the processes of dyeing or washing garments.", "size": { "Single (135 x 200 cm)": [35.99, 6], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 8], "Double (220 x 220 cm)": [45.99, 9], "Double (200 x 200 cm)": [45.99, 7], "Double (200 x 220 cm)": [45.99, 6], "King (240 x 220 cm)": [45.99, 7], "Superking (260 x 240 cm)": [59.99, 8], "Emperor (290 x 260 cm)": [59.99, 4] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in PORTUGAL" }, "imagelink1": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_2_7_1.jpg?t=1648625710243", "imagelink2": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_1_1_1.jpg?t=1642433558780", "imagelink3": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_2_1_1.jpg?t=1642433558780", "imagelink4": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_2_2_1.jpg?t=1642433558780", "imagelink5": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_2_3_1.jpg?t=1642433558780", "imagelink6": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_2_4_1.jpg?t=1642434127444", "imagelink7": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_2_5_1.jpg?t=1642433558780", "imagelink8": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0301/088/250/0301088250_2_8_1.jpg?t=1637573140124", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fe338e3973bde83ca011" }, "name": "(140 GSM) WASHED LINEN DUVET COVER", "price": "69.99 € ", "ref": "REF. 4100/088", "description": "Plain 140 GSM washed linen duvet cover with topstitching around the edge.Concealed button fastening at the bottom.The washing technique makes the fabric softer and more fluid.", "size": { "Single (135 x 200 cm)": [35.99, 0], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 0], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in CAMBODIA" }, "imagelink1": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_2_7_1.jpg?t=1632147069561", "imagelink2": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_1_1_1.jpg?t=1612356305437", "imagelink3": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_2_1_1.jpg?t=1612356305437", "imagelink4": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_2_2_1.jpg?t=1612356305437", "imagelink5": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_2_3_1.jpg?t=1612356305437", "imagelink6": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_2_4_1.jpg?t=1612356305437", "imagelink7": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_2_5_1.jpg?t=1614157561751", "imagelink8": "https://static.zarahome.net/8/photos4/2021/I/4/1/p/4100/088/711/4100088711_2_7_1.jpg?t=1632147069561", "__v": 0, "qty": "1" },
    { "_id": { "$oid": "6247fe3f8e3973bde83ca013" }, "name": "(300 THREAD COUNT) SATEEN DUVET COVER", "price": "45.99 €  - 59.99 € ", "ref": "REF. 0107/088", "description": "Plain duvet cover in 300-thread-count cotton sateen. Perfect for combining with other models.Concealed button fastening.JOIN LIFE Care for water: produced using less water. The use of closed cycles that allow water to be reused or technologies such as low bath ratio machines or mass dyeing help us to reduce water consumption in the processes of dyeing or washing garments.", "size": { "Single (135 x 200 cm)": [35.99, 6], "Single (150 x 220 cm)": [35.99, 3], "Single (180 x 220 cm)": [35.99, 9], "Double (220 x 220 cm)": [45.99, 0], "Double (200 x 200 cm)": [45.99, 0], "Double (200 x 220 cm)": [45.99, 0], "King (240 x 220 cm)": [45.99, 0], "Superking (260 x 240 cm)": [59.99, 0], "Emperor (290 x 260 cm)": [59.99, 0] }, "product_details": { "MEASUREMENTS": { "Single (135 x 200 cm)": 35.99, "Single (150 x 220 cm)": 35.99, "Single (180 x 220 cm)": 35.99, "Double (220 x 220 cm)": 45.99, "Double (200 x 200 cm)": 45.99, "Double (200 x 220 cm)": 45.99, "King (240 x 220 cm)": 45.99, "Superking (260 x 240 cm)": 59.99, "Emperor (290 x 260 cm)": 59.99 }, "CARE": ["MACHINE WASH UP TO 40ºC/104ºF GENTLE CYCLE", "DO NOT BLEACH", "IRON UP TO150ºC/302ºF", "DO NOT DRY CLEAN", "TUMBLE DRY LOW"], "ORIGIN": "Made in PORTUGAL" }, "imagelink1": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_2_7_1.jpg?t=1637163312197", "imagelink2": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_1_1_1.jpg?t=1637163312197", "imagelink3": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_2_1_1.jpg?t=1637163312197", "imagelink4": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_2_2_1.jpg?t=1637163312197", "imagelink5": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_2_3_1.jpg?t=1637163312197", "imagelink6": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_2_4_1.jpg?t=1637163312197", "imagelink7": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_2_5_1.jpg?t=1647256879236", "imagelink8": "https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_2_8_1.jpg?t=1637163312197", "__v": 0, "qty": "1" }

]

populateData(data)

function populateData(data){
    data.map(function(elem){
    
        var bed_card = document.createElement("div");
         var bed_card_div = document.createElement("div");
         var card = document.createElement("div");
        bed_card_div.style.backgroundImage = `url(${elem.imagelink1})`;
        bed_card_div.id = "buttondiv";
        // var image = document.createElement("img");
        // image.setAttribute("src", elem.imgUrl);
    
        var button = document.createElement("button");
        button.textContent = "Add to Basket";
    
        var item_name = document.createElement("p");
        item_name.textContent = elem.name;
        item_name.id="item-name"
        item_name.addEventListener("click",()=>{localStorage.setItem("Data_single",JSON.stringify(elem));window.location.href="/product page/product.html"})
    
        var price = document.createElement("p");
        price.innerHTML = elem.price;
    
    
        bed_card.append(item_name,price);
        bed_card_div.append(button,bed_card);
        card.append(bed_card_div,bed_card);
        document.querySelector("#bedcontainer").append(card);
    
    });
}
function addToBasket(elem){
    var basketArray=JSON.parse(localStorage.getItem("basketArray"))||[];
    if(basketArray.length==0){
        basketArray.push(elem);
    }
    else{
        var match=false;
        for(var i=0;i<basketArray.length;i++){
            if(basketArray[i].ref==elem.ref ){
            match=true;
            break;
            }
        }
        if(match){
            basketArray[i].qty++;
        }
        else{
            basketArray.push(elem);  
        }
    }
    
    localStorage.setItem("basketArray",JSON.stringify(basketArray))

}

 


