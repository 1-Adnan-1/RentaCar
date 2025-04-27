import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="absolute w-full text-white">
      <Container designs="flex justify-between items-center w-full ">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link href="/">DRIVE</Link>
        </h1>

        <nav className="text-sm md:text-base flex gap-4 md:gap-10">
          <Link className="max-md:hidden" href="/">
            Keşfet
          </Link>
          <Link href="/">Siparişler</Link>
          <Link href="/">Hakkımızda</Link>
          <Link className="max-md:hidden" href="/">
            Fiyat
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <button className="max-md:hidden">Contact</button>
          <button className="bg-white text-black rounded-full px-5 py-2 text-nowrap transition hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
Header;
