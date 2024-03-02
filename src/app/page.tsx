import Image from "next/image";
import Hero from "@/Views/Hero";
import Promotion from "@/Views/Promotion";
import Products from "@/Views/Products";
import About from "@/Views/About";
import { useState } from "react";


export default function Home() {
  
  return (
  <div>
    <Hero/>
    <Promotion/>
    <Products />
    <About/>
  </div>
  )
}
