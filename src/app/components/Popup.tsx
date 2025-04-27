"use client";

import { Car } from "@/type";
import Image from "next/image";
import { useEffect } from "react";
import gasIcon from "/public/assets/icons/gas.svg";
import mileIcon from "/public/assets/icons/mile.svg";
import transmissionIcon from "/public/assets/icons/transmission.svg";

type Props = {
  car: Car;
  onClose: () => void;
};

const Popup = ({ car, onClose }: Props) => {
  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("popup-overlay")) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 popup-overlay backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded-lg p-6 max-w-[600px] w-full transform transition-all duration-300 ease-in-out scale-95 shadow-xl shadow-black/50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            {car.make} {car.model}
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-900 transition-all duration-200 text-4xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Image at the top with a fixed height */}
        <div className="mb-6">
          <Image
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            width={600}
            height={350}
            className="rounded-lg shadow-md w-full object-cover max-h-80"
          />
        </div>

        <div className="flex justify-between mb-6 px-2">
          <div className="flex items-center justify-center space-x-2">
            <Image src={gasIcon} alt="Fuel type" width={24} height={24} />
            <span className="text-gray-700 font-medium">{car.fuelType}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Image src={mileIcon} alt="Mileage" width={24} height={24} />
            <span className="text-gray-700 font-medium">
              {car.mileage} miles
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Image
              src={transmissionIcon}
              alt="Transmission"
              width={24}
              height={20}
            />
            <span className="text-gray-700 font-medium">
              {car.transmission}
            </span>
          </div>
        </div>

        {/* Detailed information section */}
        <div className="grid grid-cols-1 gap-3 px-2 border-b border-gray-400">
          {[
            { label: "Year", value: car.year },
            { label: "Price", value: `$${car.price}` },
            { label: "Color", value: car.color },
            { label: "Condition", value: car.condition },
            { label: "Engine Size", value: car.engineSize },
            { label: "Horsepower", value: `${car.horsePower} HP` },
            { label: "Doors", value: `${car.doors} doors` },
            { label: "Seats", value: `${car.seats} seats` },
          ].map((detail, index) => (
            <div
              key={index}
              className="flex justify-between space-y-4 border-b border-gray-300"
            >
              <p className="text-lg text-gray-700">
                <strong className="font-bold text-gray-900 ">
                  {detail.label}:
                </strong>
              </p>
              <p className="text-lg text-gray-700">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
