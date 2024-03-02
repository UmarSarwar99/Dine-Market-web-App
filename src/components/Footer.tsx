import React from "react";
import Logo from "/public/Logo.webp";
import Image from "next/image";
import { Button } from "./ui/button";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className=" flex justify-between gap-10 mx-36 mt-6">
        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="Web Logo" />
          </Link>
          <div className="flex w-96 flex-wrap mt-8">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </div>
          <div className="flex gap-3 mt-10">
            <Button className="bg-black">
              <Twitter className="h-5 w-5" />
            </Button>

            <Button className="bg-black">
              <Facebook className="h-5 w-5" />
            </Button>

            <Button className="bg-black">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <ul>
          <li className="font-bold text-2xl">Company</li>
          <li className="mt-2">About</li>
          <li className="mt-2">Terms of Use</li>
          <li className="mt-2">Privacy Policy</li>
          <li className="mt-2">How it Works</li>
          <li className="mt-2">Contact Us</li>
        </ul>
        <ul>
          <li className="font-bold text-2xl">Support</li>
          <li className="mt-2">Support Carrer </li>
          <li className="mt-2">24h Service </li>
          <li className="mt-2">Quick Chat </li>
        </ul>
        <ul>
          <li className="font-bold text-2xl">Contact</li>
          <li className="mt-2">Whatsapp</li>
          <li className="mt-2">Support 24h</li>
        </ul>
      </div>
      <div className="mt-24">
        ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
      </div>
      <div className="flex justify-around">
        <p>Copyright © 2022 Dine Market</p>
        <div>
          Design by. <p className="font-bold"> UMAR SARWAR </p>{" "}
        </div>
        <p>Code by. UMAR SARWAR99  on github</p>
      </div>
    </div>
  );
}
