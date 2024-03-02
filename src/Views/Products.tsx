import React from "react";
import ProCard from "@/components/ProCard";
import { pro_data } from "@/Utils/mock";
// import f4 from "public/products/f4.png";
// import f5 from "public/products/f5.png";
// import f6 from "public/products/f6.png";

export default function Products() {
  const dis = pro_data.slice(1, 5);
  return (
    <div>
      <div className="mt-16">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center font-bold text-blue-700">
          PRODUCTS
        </p>
        <h2 className="scroll-m-20 pb-8 text-4xl font-bold  text-center">
          Check What We Have
        </h2>
      </div>

      <div className="grid grid-cols-4">
        {dis.map((i) => (
          <ProCard 
            key={i.id}
            img={i.image}
            name={i.name}
            section={i.section}
            price={i.price}
            id = {i.id}
          />
        ))}
      </div>
    </div>
  );
}
