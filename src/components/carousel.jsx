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
            description: "Description of project 1",
            imageUrl: "https://via.placeholder.com/400x300?text=Project+1"
        },
        {
            id: 2,
            title: "Minecraft Mod",
            description: "Description of project 2",
            imageUrl: "https://via.placeholder.com/400x300?text=Project+2"
        },
        {
            id: 3,
            title: "Tank Bot",
            description: "Description of project 3",
            imageUrl: "https://via.placeholder.com/400x300?text=Project+3"
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
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <p className="mt-2">{project.description}</p>
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