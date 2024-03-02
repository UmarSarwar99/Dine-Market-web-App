import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import header from "public/header.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Featured1 from "public/logos/Featured1.webp"
import Featured2 from "public/logos/Featured2.webp"
import Featured3 from "public/logos/Featured3.webp"
import Featured4 from "public/logos/Featured4.webp"

export default function Hero() {
  return (
    <section className="flex">
      <div className="flex-1">
        <Badge className="bg-blue-100 px-4 py-2 text-1xl rounded-lg text-blue-700 my-10">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="mt-6 flex w-96">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="p-8 mt-6">
          <ShoppingCart></ShoppingCart>
          <div className="font-semibold mx-2">Start Shopping</div>
        </Button>
        <div className="flex mt-28 gap-14 ">
          <Image src={Featured1} alt="Featured" />
          <Image src={Featured2} alt="Featured" />
          <Image src={Featured3} alt="Featured" />
          <Image src={Featured4} alt="Featured" />
        </div>
      </div>
      <div className="flex-1 rounded-full bg-orange-100 mx-3  mt-6">
        <Image className="-mt-10" src={header} alt="Pic" />
      </div>
    </section>
  );
}
