import { product } from "./types"

import m1 from "public/products/m1.png";
import m2 from "public/products/m2.png";
import f3a from "public/products/f3a.png";
import f3b from "public/products/f3b.png";
import f3c from "public/products/f3c.png";
import f3d from "public/products/f3d.png";
import f4 from "public/products/f4.png";
import f5 from "public/products/f5.png";
import f6 from "public/products/f6.png";
import f7 from "public/products/f7.png";
import f8 from "public/products/f8.png";
import f9 from "public/products/f9.png";
import f10 from "public/products/f10.png";
import f11 from "public/products/f11.png";



export const pro_data:product [] = [
    {
        id: 1,
        category: "Male",
        section: "Jackets",
        name : "Flex Push Button Bomber",
        price : 225,
        image : m1
    },
    {
        id: 2,
        category: "Male",
        section: "Sweater",
        name : "Raglan Sweatshirt",
        price : 195,
        image : m2
    },
    {
        id: 3,
        category: "Female",
        section: "Dress",
        name : "Cameryn Sash Tie Dress",
        price : 545,
        image : f3a,
        imagea:f3b,
        imageb:f3c,
        imagec:f3d
    },
    {
        id: 4,
        category: "Female",
        section: "Sweater",
        name : "Cameryn Sash Tie Dress",
        price : 195,
        image : f4
    },
    {
        id: 5,
        category: "Female",
        section: "Sweater",
        name : "Flex Sweatshirt",
        price : 175,
        image : f5
    },
    {
        id: 6,
        category: "Female",
        section: "Pants",
        name : "Flex Sweatpants",
        price : 175,
        image : f6
    },
    {
        id: 7,
        category: "Female",
        section: "Pants",
        name : "Pink Fleece Sweatpants",
        price : 195,
        image : f7
    },
    {
        id: 8,
        category: "Female",
        section: "Pants",
        name : "Lite Sweatpants",
        price : 150,
        image : f8
    },
    {
        id: 9,
        category: "Female",
        section: "Jackets",
        name : "Imperial Alpaca Hoodie",
        price : 525,
        image : f9
    },
    {
        id: 10,
        category: "Female",
        section: "T Shirts",
        name : "Muscle Tank",
        price : 75,
        image : f10
    },
    {
        id: 11,
        category: "Female",
        section: "Jackets",
        name : "Brushed Bomber",
        price : 225,
        image : f11
    }
]


