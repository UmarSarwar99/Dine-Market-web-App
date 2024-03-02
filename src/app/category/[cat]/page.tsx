import React from "react";
import { pro_data } from "@/Utils/mock";
import ProCard from "@/components/ProCard";
import { StaticImageData } from "next/image";

function get_category(pro_cat: string) {
  return pro_data.filter((cat) => cat.category === pro_cat);
}

export default function page({ params }: { params: { cat: string } }) {
  const result = get_category(params.cat);
  return (
    <div className="grid grid-cols-4 m-4">
      {result.length > 0 ? (
        result.map((a) => (
          <ProCard
            key={a.id}
            img={a.image}
            name={a.name}
            section={a.section}
            price={a.price}
            id = {a.id}
          />
        ))
      ) : (
        <div className="flex justify-center text-2xl font-bold mt-20 mb-20">
          {" "}
          No Product Avaiable{" "}
        </div>
      )}
    </div>
  );
}
