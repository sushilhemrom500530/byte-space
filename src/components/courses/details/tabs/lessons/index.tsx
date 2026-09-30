"use client";

import { FiVideo } from "react-icons/fi";

const modulesList = [
    {
        number: 1,
        title: "Module 1: Introduction to Digital Assets",
        description:
            "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
        number: 2,
        title: "Module 2: Design Principles for Impact",
        description:
            "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
        number: 4,
        title: "Module 4: User-Centric Design Strategies",
        description:
            "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
        number: 5,
        title: "Module 5: Interactive Media and Engagement",
        description:
            "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
        number: 6,
        title: "Module 6: Project Showcase and Critique",
        description:
            "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
        number: 7,
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
            "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
];

export default function LessonsTab() {
    return (
        <div className="w-full pt-6 sm:pt-8 text-neutral-800">
            {/* Explore the Modules Header */}
            <section>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    Explore the Modules
                </h3>
                <p className="mt-2 text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-2xl font-normal">
                    Immerse yourself in the course content as we break down each module into
                    comprehensive lessons, providing practical insights and hands-on experiences.
                </p>
            </section>

            {/* Lesson List */}
            <section className="mt-8 sm:mt-9">
                <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-5">
                    Lesson List
                </h4>

                <div className="space-y-4 sm:space-y-5">
                    {modulesList.map((mod) => (
                        <div key={mod.number} className="flex items-start gap-3.5 sm:gap-4 group">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-secondary text-neutral-950 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                                <FiVideo className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                            </div>
                            <div className="pt-0.5">
                                <h5 className="font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                                    {mod.title}
                                </h5>
                                <p className="mt-1 text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                                    {mod.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lesson Content Section */}
            <section className="mt-9 sm:mt-11">
                <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                    Lesson Content
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl font-normal">
                    Engage with each lesson through captivating video content, detailed textual
                    explanations, and interactive elements. Download resources, complete assignments,
                    and test your understanding with quizzes.
                </p>
            </section>

            {/* Lesson Progress Tracking */}
            <section className="mt-8 sm:mt-10">
                <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                    Lesson Progress Tracking
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl font-normal mb-4">
                    Witness your growth as you complete lessons, with an intuitive progress tracking
                    feature guiding you through your learning journey.
                </p>

                {/* Progress Box */}
                <div className="border border-neutral-200 rounded-[20px] p-5 sm:p-6 bg-white max-w-xl shadow-2xs">
                    <span className="text-xs text-neutral-500 font-medium block">
                        Learning Progress
                    </span>
                    <span className="text-3xl sm:text-[34px] font-bold text-neutral-950 block mt-1 mb-3 tracking-tight">
                        55%
                    </span>
                    <div className="w-full h-2.5 rounded-full bg-neutral-100 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-secondary transition-all duration-700"
                            style={{ width: "55%" }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
