import React from "react";

const skills = [
    {name: "HTML/CSS", level: 90},
    {name: "JavaScript", level: 55},
    {name: "Python", level: 70},
    {name: "Java", level: 50},
    {name: "SQL", level: 95}
];

export default function SkillBars() {
    return (
        <div className="flex flex-col items-center py-10">
            <div className="text-4xl mb-10">Skills</div>

            <div
                className="flex flex-wrap items-end justify-center gap-4 sm:gap-6 md:gap-8 p-4 mb-12">
                {skills.map((skill) => (
                    <div key={skill.name}
                         className="flex flex-col items-center">
                        {/* Balken */}
                        <div
                            className="relative w-10 sm:w-12 md:w-16 bg-gray-200 overflow-hidden h-40 sm:h-56 md:h-64 rounded-md">
                            <div
                                className="absolute bottom-0 w-full bg-gradient-to-t from-green-500 to-green-300 rounded-md"
                                style={{height: `${skill.level}%`}}
                            />
                        </div>
                        {/* Skill Name */}
                        <div
                            className="mt-2 text-xs sm:text-sm md:text-base font-medium text-center">
                            {skill.name}
                        </div>
                        {/* Prozent */}
                        <div
                            className="text-[10px] sm:text-xs md:text-sm">{skill.level}%
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
