


import React from "react";
import f9 from "public/products/f9.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function About() {
  return (
    <>
      <div className="grid grid-cols-2 my-20 bg-slate-100 w-auto p-8">
        <div className="flex  gap-16  mt-24 mx-5">
          <div>
            <p className="font-bold my-3 text-xl">Using Good Quality Materials</p>
            <span className="mt-6">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </span>
            <p className="font-bold my-3 text-xl">Modern Fashion Design</p>
            <span>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</span>
          </div>
          <div>
            <p className="font-bold my-3 text-xl">100% Handmade Products</p>
            <span>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</span>
            <p className="font-bold my-3 text-xl">Discount for Bulk Orders</p>
            <span>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</span>
          </div>
        </div>
        <div>
          <h1 className="scroll-m-20 mx-8 text-5xl font-bold tracking-tight lg:text-4xl">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
          <div className="flex mt-8 gap-8">
            <Image src={f9} alt="product" />
            <div>
              <p className="text-justify mt-8">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Link href={"/products"} > <Button className="mt-8">See All Products</Button> </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center my-28">
        <p className="text-3xl font-bold my-3">Subscribe Our Newsletter</p>
        <span className="my-3">
          Get the latest information and promo offers directly
        </span>
        <div className="flex w-full max-w-sm items-center space-x-2 my-3">
          <Input type="email" placeholder="Input Email Adress" />
          <Button type="submit">Get Started</Button>
        </div>
      </div>
    </>
  );
}
