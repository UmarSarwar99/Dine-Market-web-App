import React from "react";
import Logo from "/public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  
  return (
    <div className="flex justify-between gap-1 items-center mx-36 my-10">
      <Link href={"/"}>
      <Image src={Logo} alt="Web Logo" />
      </Link>
      <div>
        <ul className="flex gap-12">
          <li> <Link href={"/category/Female"} > Female  </Link> </li>
          <li> <Link href={"/category/Male"} > Male </Link> </li>
          <li> <Link href={"/category/Kids"}> Kids </Link> </li>
          <li> <Link href={"/products"} > All Products </Link> </li>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="What are You Look For" />
            <Button type="submit">Search</Button>
          </div>
        </ul>
      </div>
      <div className="h-10 w-10 bg-gray-200 rounded-full flex justify-center items-center"> 
       <Link href={"/card"}> <ShoppingCart></ShoppingCart> </Link>
       </div>
    </div>
  );
}
