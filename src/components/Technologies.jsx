import React, { useState } from "react";

const Technologies = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "Java",
      x: 396,
      y: 135,
    },
    {
      id: 2,
      name: "Javascript",
      x: 197,
      y: 259,
    },
    {
      id: 3,
      name: "C",
      x: 165,
      y: 442,
    },
    {
      id: 4,
      name: "Next.js",
      x: 864,
      y: 617,
    },
    {
      id: 5,
      name: "React.js",
      x: 1038,
      y: 469,
    },
    {
      id: 6,
      name: "React Native",
      x: 1126,
      y: 307,
    },
    {
      id: 7,
      name: "Node.js",
      x: 1024,
      y: 124,
    },
    {
      id: 8,
      name: "MongoDB",
      x: 780,
      y: 202,
    },
    {
      id: 9,
      name: "Typescript",
      x: 603,
      y: 94,
    },
    {
      id: 10,
      name: "SQL",
      x: 305,
      y: 601,
    },
    {
      id: 11,
      name: "Express.js",
      x: 524,
      y: 528,
    },
  ]);
  const [draggedSkill, setDraggedSkill] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, skill) => {
    const rect = e.target.getBoundingClientRect();
    setDraggedSkill(skill.id);
    setDragOffset({
      x: e.clientX - skill.x,
      y: e.clientY - skill.y,
    });
  };

  const handleMouseMove = (e) => {
    if (draggedSkill !== null) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === draggedSkill
            ? {
                ...skill,
                x: Math.max(0, Math.min(newX, window.innerWidth - 200)),
                y: Math.max(0, Math.min(newY, window.innerHeight - 50)),
              }
            : skill
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggedSkill(null);
    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full relative h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h1 className="text-8xl text-color italic absolute inset-0 flex items-center justify-center pointer-events-none">
        Technologies
      </h1>
      {skills.map((skill, key) => (
        <p
          style={{
            left: `${skill.x}px`,
            top: `${skill.y}px`,
          }}
          onMouseDown={(e) => handleMouseDown(e, skill)}
          className={`absolute text-2xl ${
            draggedSkill === skill.id ? "cursor-grabbing  z-10" : "cursor-grab"
          }`}
          key={key}
        >{`(${skill.id}) ${skill.name}`}</p>
      ))}
    </div>
  );
};

export default Technologies;
