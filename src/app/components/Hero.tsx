import Image from "next/image";
import { models } from "../constants";

const Hero = () => {
  return (
    <>
      <div className="h-[70vh] grid place-items-center bg-[linear-gradient(#00000099,#00000050),url('/assets/bg.avif')] bg-center bg-cover text-white">
        <div className="text-center flex flex-col gap-7">
          <h1 className="text-3xl font-bold md:text-4xl">
            Kendin için mükemmel aracı bul
          </h1>
          <p>Kendine Uygun Modeli Seç</p>
          <div className="flex gap-5 justify-center flex-wrap">
            {models.map((item) => (
              <button
                key={item.name}
                className="px-3 py-1 rounded-full bg-gray-200/25 transition hover:bg-gray-100/50 flex gap-2 items-center"
              >
                <Image src={item.icon} alt="car" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
