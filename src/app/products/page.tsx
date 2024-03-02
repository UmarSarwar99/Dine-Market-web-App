import React from "react";
import { pro_data } from "@/Utils/mock";
import ProCard from "@/components/ProCard";

export default function page() {
  return (
    <div className="grid grid-cols-4 m-4">
      {pro_data.map((i) => (
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
  );
}
