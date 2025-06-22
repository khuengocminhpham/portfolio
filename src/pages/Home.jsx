import React from "react";
import digi from "../assets/digi.png";
import handwriting from "../assets/handwriting.png";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center h-screen">
        <div className="flex flex-row justify-between items-start w-full">
          <Nav />
          <div className="flex flex-col gap-4 text-2xl justify-self-end items-end">
            <p className="w-[22rem] text-right">
              I am Khue — a <span className="italic">computer science</span>{" "}
              student who is interested in creating{" "}
              <span className="italic">software</span>.
            </p>
            <p>LinkedIn</p>
            <p>Github</p>
          </div>
        </div>
      </div>

      <div className="absolute top-40 left-1/3">
        <img
          src={handwriting}
          alt="khue's space"
          className="w-128 top-12 absolute -rotate-6"
        />
        <img src={digi} alt="digi-camera" className="-rotate-[87deg]" />
      </div>
    </>
  );
};

export default Home;
