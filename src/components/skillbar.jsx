import React from "react";

const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 55 },
    { name: "Python", level: 70 },
    { name: "Java", level: 50 },
    { name: "SQL", level: 95 }
];

export default function SkillBars() {
    return (
        <div className="flex items-end justify-center gap-8 h-72 p-4 mb-15">
            {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                    <div className="relative w-16 bg-gray-200 overflow-hidden h-64 rounded-md">
                        <div
                            className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-green-300 rounded-md"
                            style={{ height: `${skill.level}%` }}>
                        </div>
                    </div>
                    <div className="mt-2 text-sm font-medium text-center">{skill.name}</div>
                    <div className="text-xs">{skill.level}%</div>
                </div>
            ))}
        </div>
    );
}
