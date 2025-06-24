import rect from "../assets/rect.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Card = () => {
  return (
    <div className="flex flex-row pt-28">
      <div className="font-instrument-sans pt-8">
        <div className="text-6xl tracking-[-0.3rem]">
          <span className="font-instrument-serif tracking-normal italic">
            (1)
          </span>{" "}
          Code Her Way
        </div>
        <p className="pt-10 text-2xl text-grey tracking-[-0.075rem] w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          turpis quis nulla interdum dignissim. Donec sed semper risus.
          Phasellus pellentesque lacus eu ipsum ultricies placerat.
        </p>
        <p className="pt-10 font-instrument-serif text-2xl text-color">
          <span className="italic">(</span> HTML, CSS, Javascript{" "}
          <span className="italic">)</span>
        </p>
      </div>
      <div className="relative w-full">
        <img src={rect} className="w-full h-full" alt="" />
        <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-grey hover:bg-gray-600 text-white p-3 rounded-lg transition-colors duration-200">
          <ChevronLeft size={20} />
        </button>

        <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-grey hover:bg-gray-600 text-white p-3 rounded-lg transition-colors duration-200">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
