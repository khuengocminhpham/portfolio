import React from "react";

const Technologies = () => {
  const skills = [
    {
      id: 1,
      name: "Java",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "C",
    },
    {
      id: 4,
      name: "Next.js",
    },
    {
      id: 5,
      name: "React",
    },
    {
      id: 6,
      name: "React Native",
    },
    {
      id: 7,
      name: "Node.js",
    },
    {
      id: 8,
      name: "MongoDB",
    },
    {
      id: 9,
      name: "Typescript",
    },
    {
      id: 10,
      name: "SQL",
    },
    {
      id: 11,
      name: "Express.js",
    },
    {
      id: 12,
      name: "HTML",
    },
    {
      id: 13,
      name: "CSS",
    },
  ];
  return (
    <div className="w-full">
      <h1 className="text-8xl text-color italic text-center">Technologies</h1>
      {skills.map((skill, key) => (
        <>
          <p className="text-2xl" key={key}>{`(${skill.id}) ${skill.name}`}</p>
        </>
      ))}
    </div>
  );
};

export default Technologies;
