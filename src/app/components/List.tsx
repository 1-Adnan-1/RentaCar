"use client";

import cars from "@/data/cars.json";
import { Car } from "@/type";
import Card from "./Card";

const List = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 mx-7">
      {cars.map((car: Car) => (
        <Card key={car._id} car={car} />
      ))}
    </div>
  );
};

export default List;
