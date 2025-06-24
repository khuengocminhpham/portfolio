import React from "react";
import digi from "../assets/digi.png";
import handwriting from "../assets/handwriting.png";
import Nav from "../components/Nav";
import { Link } from "react-router";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";

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
            <Link
              className="underline underline-offset-8 decoration-1"
              to="https://www.linkedin.com/in/khue-pham-3b285b327/"
            >
              LinkedIn
            </Link>
            <Link
              className="underline underline-offset-8 decoration-1"
              to="https://github.com/khuengocminhpham"
            >
              Github
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-32 left-1/3">
        <img
          src={handwriting}
          alt="khue's space"
          className="w-128 top-12 absolute -rotate-6"
        />
        <img src={digi} alt="digi-camera" className="-rotate-[87deg]" />
        <Link
          to="/about"
          className="italic text-2xl absolute top-[80%] right-4 text-color underline underline-offset-8 decoration-1"
        >
          i would love to have a chat with you!💬
        </Link>
      </div>
      <Technologies />
      <Projects />
    </>
  );
};

export default Home;
