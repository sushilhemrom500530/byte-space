"use client";

import Image from "next/image";
import drawImg from "@/assets/sneak-peak/draw.png";
import marketImg from "@/assets/sneak-peak/market.png";
import exploreImg from "@/assets/sneak-peak/explore.png";
import appImg from "@/assets/sneak-peak/app.png";
import { HiCheckCircle } from "react-icons/hi2";

const sneakPeakImages = [
    { src: drawImg, alt: "Wireframe Sketching" },
    { src: marketImg, alt: "Dashboard Design" },
    { src: exploreImg, alt: "Design System Elements" },
    { src: appImg, alt: "Mobile UI Design" },
];

const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
];

export default function AboutTab() {
    return (
        <div className="w-full pt-6 sm:pt-8 text-neutral-800">
            {/* Description Section */}
            <section>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
                    Description
                </h3>
                <div className="space-y-4 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                    <p>
                        Embark on an enlightening exploration into the world of digital creation with our
                        comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This
                        transformative learning experience invites you to delve deep into the intricacies of
                        crafting impactful digital content. From laying the groundwork with foundational
                        concepts to mastering advanced techniques, this guide is meticulously curated to
                        empower you with the skills essential for navigating the dynamic landscape of digital
                        asset creation.
                    </p>
                    <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself
                        in the foundational concepts that form the backbone of digital asset creation.
                        Understand the fundamental elements that constitute compelling digital content and gain
                        proficiency in leveraging these elements to communicate effectively in the digital
                        realm.
                    </p>
                    <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise,
                        delving into the nuances of design principles that drive impactful creations. Uncover
                        the secrets behind effective visual communication, exploring color theory, typography,
                        and layout strategies that elevate your digital assets to new heights. Engage in
                        hands-on exercises that reinforce your understanding, allowing you to apply these
                        principles in practical scenarios.
                    </p>
                </div>
            </section>

            {/* Sneak Peak Section */}
            <section className="mt-9 sm:mt-11">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-4">
                    Sneak Peak
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {sneakPeakImages.map((img, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-neutral-100 shadow-2xs hover:scale-102 transition-transform duration-300"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 640px) 50vw, 25vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Points Section */}
            <section className="mt-9 sm:mt-11">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-5">
                    Key Points
                </h3>
                <ul className="space-y-3.5">
                    {keyPoints.map((point, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 text-sm sm:text-[15px] text-neutral-700 font-medium"
                        >
                            <HiCheckCircle className="w-5 h-5 text-primary shrink-0" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
