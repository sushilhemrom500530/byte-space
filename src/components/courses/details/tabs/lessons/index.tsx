"use client";

import { BiVideo } from "react-icons/bi";

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
            <section>
                <h3 className="common-title tracking-tight">
                    Explore the Modules
                </h3>
                <p className="mt-2 common-description">
                    Immerse yourself in the course content as we break down each module into
                    comprehensive lessons, providing practical insights and hands-on experiences.
                </p>
            </section>

            <section className="mt-8 sm:mt-9">
                <h4 className="common-title mb-5">
                    Lesson List
                </h4>

                <div className="space-y-6">
                    {modulesList.map((mod) => (
                        <div key={mod.number} className="flex items-start gap-4 sm:gap-5 group cursor-pointer transition-colors">
                            <div className="w-14 h-14 sm:w-[65px] sm:h-[65px] rounded-[18px] sm:rounded-[20px] bg-secondary text-black flex items-center justify-center shrink-0">
                                <BiVideo className="w-7 h-7 sm:w-8 sm:h-8 text-black shrink-0" />
                            </div>
                            <div className="pt-1">
                                <h5 className="font-medium text-sm sm:text-base text-neutral-900 leading-tight group-hover:text-primary ">
                                    {mod.title}
                                </h5>
                                <p className="mt-1 text-sm text-[#4B4C53] font-normal">
                                    {mod.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-9 sm:mt-11">
                <h4 className="common-title mb-2">
                    Lesson Content
                </h4>
                <p className="common-description max-w-2xl font-normal">
                    Engage with each lesson through captivating video content, detailed textual
                    explanations, and interactive elements. Download resources, complete assignments,
                    and test your understanding with quizzes.
                </p>
            </section>

            <section className="mt-8 sm:mt-10">
                <h4 className="common-title mb-2">
                    Lesson Progress Tracking
                </h4>
                <p className="common-description mb-4">
                    Witness your growth as you complete lessons, with an intuitive progress tracking
                    feature guiding you through your learning journey.
                </p>

                {/* Progress Box */}
                <div className="border border-neutral-200 rounded-[20px] p-5 sm:p-6 bg-white w-full">
                    <span className="text-xs text-[#4B4C53]">
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
