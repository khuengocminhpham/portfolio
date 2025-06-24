import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="p-20">
      <h1 className="text-8xl text-color italic">Projects</h1>
      <div className="flex flex-col-reverse">
        <Card index={1} />
        <Card index={2} />
      </div>
    </div>
  );
};

export default Projects;
