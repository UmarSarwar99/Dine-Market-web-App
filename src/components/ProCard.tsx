import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


export default function ProCard(props: {
  img: StaticImageData;
  name: string;
  section : string,
  price: any;
  id : number
}) {
  return (
    <Link href={`/products/${props.id}`} >
    <div className="m-1  p-3 gap-5 hover:scale-110">
      <Image src={props.img} alt="pro" />
        <h3 className= " font-bold"> {props.name}</h3>
        <h4 className="text-gray-500 font-semibold"> {props.section} </h4>
        <p className="text-lg font-bold"> ${props.price} </p>
    </div>
    </Link>
  );
}
