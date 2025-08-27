import { useState } from "react";

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const projects = [
        {
            id: 1,
            title: "Geschichte der Schweizer Uhrenindustrie",
            description:
                "Eine Webseite, welches ich mit zwei anderen Schüler aus meiner Klasse gemacht habe. Es zeigt die Schweizer Uhrenindustrie auf.",
            imageUrl: "/geschichte-uhrenindustrie.png",
            link: "https://geschichte-der-schweizer-uhrenindustrie.vercel.app/",
            repoLink: "https://github.com/Gianimon/portfolio",
        },
        {
            id: 3,
            title: "Stalinium Mod",
            description:
                "Eine Minecraft Mod, die mit mehreren Freunden gemacht wurde. Sie fügt neue Materialien und neue Waffen ins Spiel hinzu.",
            imageUrl: "/stalinium.jpg",
            link: "https://modrinth.com/mod/stalinium-mod",
            repoLink: "https://github.com/KrisHD1337/Stalinium",
        },
    ];

    return (
        <div className="flex flex-col items-center py-10">
            <div className="text-4xl mb-10">Meine Projekte</div>

            {/* Carousel Wrapper */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                {/* Carousel Content */}
                <div className="overflow-hidden rounded-lg">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="w-full flex-shrink-0 px-2">
                                <div className="bg-[#457EAC] rounded-lg overflow-hidden">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className={
                                                project.id === 3
                                                    ? "w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                                                    : "w-full h-auto object-contain"
                                            }
                                        />
                                    </a>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <p className="mt-2">{project.description}</p>

                                        {/* Buttons */}
                                        <div className="flex gap-4 mt-4">
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-2 bg-[#2D5A76] rounded-xl text-white font-semibold shadow-md hover:bg-[#1f3d52] hover:shadow-lg transform hover:scale-105 transition"
                                            >
                                                Zum Repository
                                            </a>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-2 bg-[#2D5A76] rounded-xl text-white font-semibold shadow-md hover:bg-[#1f3d52] hover:shadow-lg transform hover:scale-105 transition"
                                            >
                                                Projekt ansehen
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ml-2"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full mr-2"
                >
                    &gt;
                </button>

                {/* Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentSlide === index ? "bg-white" : "bg-gray-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
