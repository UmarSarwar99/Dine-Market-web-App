import React from "react";
import Image from "next/image";
import event1 from "/public/promotion/event1.webp";
import event2 from "/public/promotion/event2.webp";
import event3 from "/public/promotion/event3.webp";
import { Button } from "@/components/ui/button";

export default function Promotion() {
  return (
    <div className="mt-12">
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center font-bold text-blue-700">
          PROMOTIONS
        </p>
        <h2 className="scroll-m-20 pb-8 text-4xl font-bold  text-center">
          Our Promotions Events
        </h2>
      </div>

      <div className=" grid grid-cols-[52%,48%] gap-4">
        <div className="grid gap-4">
          <div className="  flex bg-gray-200">
            <h1 className="text-2xl font-bold mt-16 mx-6">
              {" "}
              GET UP TO 60%
              <p className="text-xl font-semibold">For the summer season</p>
            </h1>
            <Image src={event1} alt="pic" />
          </div>

          <div className=" grid bg-black text-white items-center p-8">
            <p className="text-2xl font-bold text-center"> GET 30% Off </p>
            <p className="text-center pt-3">USE PROMO CODE</p>
            <Button className="bg-gray-600 ">DINE WEEKEND SALE</Button>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          <div className="bg-orange-100 pt-2">
            <h4 className="px-4"> Flex Sweatshirt </h4>
            <h4 className="px-4 line-through"> $100.00 </h4>{" "}
            <p className="px-4"> $75.00 </p>
            <Image className="pt-1" src={event2} alt="pic2" />
          </div>
          <div className="bg-gray-200 pt-1">
            <h4 className="px-4"> Flex Push Button Bombe </h4>
            <h4 className="px-4 line-through"> $225.00 </h4>{" "}
            <p className="px-4"> $190.00 </p>
            <Image className="pt-1" src={event3} alt="pic3" />
          </div>
        </div>
      </div>
    </div>
  );
}
