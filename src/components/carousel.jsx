import {useState} from "react";

export default function Carousel() {

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample project data
    const projects = [
        {
            id: 1,
            title: "Geschichte der schweizer Uhrenindustrie",
            description: "Eine Webseite, welches ich mit zwei anderen Schüler " +
                "aus meiner Klasse gemacht habe. Es zeigt die Schweizer Uhrenindustrie auf.",
            imageUrl: "http://localhost:3000/geschichte-uhrenindustrie.png",
            link: "https://geschichte-der-schweizer-uhrenindustrie.vercel.app/",
            repoLink: "https://github.com/Gianimon/portfolio"
        },
        {
            id: 2,
            title: "Gianimod",
            description: "Description of project 2",
            imageUrl: "https://via.placeholder.com/400x300?text=Project+2",
            link: "https://example.com/stalinium",
            repoLink: "https://example.com/stalinium"
        },
        {
            id: 3,
            title: "Stalinium Mod",
            description: "Eine Minecraft Mod, die mit mehreren Freunden gemacht" +
                " wurde. Sie fügt neue Materiallien und neue Waffen ins Spiel inzu.",
            imageUrl: "http://localhost:3000/stalinium.jpg",
            link: "https://modrinth.com/mod/stalinium-mod",
            repoLink: "https://github.com/KrisHD1337/Stalinium"
        },
    ];

    return (

        /* Projects Section */
        <div className="flex flex-col items-center py-10">
            <div className="text-4xl mb-20">
                Meine Projekte
            </div>

            {/* Carousel */}
            <div className="relative w-120 max-w-4xl mx-auto">
                {/* Carousel Content */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300"
                        style={{transform: `translateX(-${currentSlide * 100}%)`}}
                    >
                        {projects.map((project) => (
                            <div key={project.id}
                                 className="w-full flex-shrink-0 px-4">
                                <div
                                    className="bg-[#457EAC] rounded-lg overflow-hidden shadow-lg">
                                    <a href={project.link} target="_blank"
                                       rel="noopener noreferrer">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-80 object-cover"
                                        />
                                    </a>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <p className="mt-2">{project.description}</p>
                                        <a href={project.repoLink}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-xl text-white underline hover:text-blue-300">
                                            Zum Repository
                                        </a>
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
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}