"use client";

import React from "react";
import { pro_data } from "@/Utils/mock";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Quantity from "@/components/Quantity";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

function pro_detail(id: number) {
  return pro_data.filter((n) => n.id == id);
}

const size = [
  { size: "XS", id: 1 },
  { size: "S", id: 2 },
  { size: "M", id: 3 },
  { size: "L", id: 4 },
  { size: "XL", id: 5 },
];

export default function page({ params }: { params: { id: number } }) {
  const result = pro_detail(params.id);

  return (
    <div>
      {result.map((d) => (
        <div key={d.id} className="flex bg-slate-50 p-6">
          <div className=" gap-10  flex ">
            <Image src={d.image} alt="img1" className="h-28 w-28" />

            <div>
              <Image src={d.image} alt="img" width="650" height="650" />
            </div>
          </div>
          {/* Description */}
          <div className=" mx-12 my-20">
            <h1 className="text-xl font-semibold ">{d.name}</h1>
            <h2 className="text-gray-300 font-semibold text-lg ">
              {d.section}
            </h2>
            <h3 className=" font-semibold mt-8">Select Size</h3>
            <div>
              <button className="flex gap-4">
                {size.map((i) => (
                  <div
                    key={i.id}
                    className="w-7 h-7 mt-3 rounded-full bg-gray-200 hover:bg-gray-400 text-black font-semibold "
                  >
                    {i.size}
                  </div>
                ))}
              </button>
              <Quantity />
            </div>
            <div className="flex mt-4 ">
              <div>
                <Button className="p-4 mt-4">
                  <ShoppingCart></ShoppingCart>
                  <span className="font-semibold mx-2">Add To Card</span>
                </Button>
              </div>
              <div className="font-bold text-2xl mx-3 mt-5">
                ${d.price.toFixed()}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-slate-100 p-12 my-10">
        <h1 className="text-2xl font-bold underline">Product Information</h1>
        <div className="grid grid-cols-[40%,60%] mt-10">
          <h2 className="text-lg font-semibold text-gray-600">
            PRODUCT DETAILS
          </h2>
          <p className="text-justify mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="grid grid-cols-[40%,60%] mt-8">
          <h3 className="text-lg font-semibold text-gray-600">PRODUCT CARE</h3>
          <span className="gap-3">
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
          </span>
        </div>
      </div>
    </div>
  );
}
