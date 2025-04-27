"use client";

import Image from "next/image";
import { Car } from "@/type";
import gas from "/public/assets/icons/gas.svg";
import mile from "/public/assets/icons/mile.svg";
import arrow from "/public/assets/icons/arr.svg";
import transmission from "/public/assets/icons/transmission.svg";
import Link from "next/link";
import { useState } from "react";
import Popup from "./Popup";

type Props = {
  car: Car;
};

const Card = ({ car }: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const features = [
    { icon: mile, label: `${car.mileage} Miles` },
    { icon: gas, label: car.fuelType },
    { icon: transmission, label: car.transmission },
  ];

  return (
    <>
      <div
        onClick={() => setIsPopupOpen(true)}
        className="group border border-[#cac9c9] rounded-2xl shadow-md  hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-[#d0d0d0] cursor-pointer"
      >
        <div className="relative w-full h-50 bg-[#cac9c9]">
          <Image
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {car.make} {car.model}
            </h2>

            <div className="mt-4 flex justify-between items-center text-gray-600">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <Image src={feature.icon} alt="icon" width={24} height={24} />
                  <p className="text-sm">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-900">${car.price}</p>
            <Link
              href={`/car/${car._id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-zinc-800 text-lg font-medium transition"
            >
              Detay
              <Image src={arrow} alt="arrow" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
      {isPopupOpen && <Popup car={car} onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default Card;
