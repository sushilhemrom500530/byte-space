"use client";

import Image from "next/image";
import Link from "next/link";
import alexImg from "@/assets/users/alex.png";
import { FiFolder, FiVideo, FiAward, FiMessageSquare } from "react-icons/fi";
import { ICourseSidebarProps } from "@/components/courses/details/interface";

const previewLessons = [
    { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const courseFeatures = [
    { icon: FiFolder, text: "Learning Resources" },
    { icon: FiVideo, text: "Quality Lesson Videos" },
    { icon: FiAward, text: "Certificate of Completion" },
    { icon: FiMessageSquare, text: "Private Consultation" },
];

export default function CourseSidebar({
    price = 25,
    priceSuffix = "/lifetime",
    totalLessons = 112,
    duration = "24 hours",
    creatorName = "PurePearl Studio",
    creatorRole = "Professional Creator",
    creatorUrl = "/creators/purepearl-studio",
}: ICourseSidebarProps) {
    const formattedPrice =
        typeof price === "number" ? `$${price}` : price.toString().startsWith("$") ? price : `$${price}`;

    return (
        <aside className="w-full bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E7EB] p-5 sm:p-6 shadow-sm">
            {/* Header: Lessons Count and Total Duration */}
            <h2 className="text-xl sm:text-[22px] font-bold text-neutral-900 tracking-tight">
                {totalLessons} Lessons ({duration})
            </h2>

            {/* Top Lessons Preview List */}
            <div className="mt-4 sm:mt-5 space-y-3">
                {previewLessons.map((lesson) => (
                    <div
                        key={lesson.number}
                        className="flex items-center justify-between text-sm sm:text-[14px] text-neutral-800"
                    >
                        <div className="flex items-center gap-2.5 truncate pr-2">
                            <span className="font-semibold text-neutral-500 shrink-0">
                                {lesson.number}
                            </span>
                            <span className="truncate font-medium">{lesson.title}</span>
                        </div>
                        <span className="text-primary font-medium text-xs sm:text-sm shrink-0">
                            {lesson.duration}
                        </span>
                    </div>
                ))}
            </div>

            <p className="mt-3 text-xs sm:text-[13px] text-neutral-400 font-medium">
                99 more videos
            </p>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            {/* Pricing */}
            <div className="mt-4 flex items-baseline gap-1">
                <span className="text-primary font-bold text-3xl sm:text-[34px] tracking-tight">
                    {formattedPrice}
                </span>
                <span className="text-neutral-500 text-sm font-normal">
                    {priceSuffix}
                </span>
            </div>

            {/* Enroll Button */}
            <button
                type="button"
                className="mt-4 w-full py-3.5 rounded-full bg-secondary text-neutral-950 font-bold text-base hover:brightness-95 active:scale-98 transition-all cursor-pointer text-center shadow-xs"
            >
                Enroll Now
            </button>

            {/* This Course Include Section */}
            <div className="mt-6 sm:mt-7">
                <h3 className="font-bold text-base text-neutral-900 mb-3 sm:mb-3.5">
                    This course include
                </h3>
                <ul className="space-y-3">
                    {courseFeatures.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-sm text-neutral-700 font-medium"
                            >
                                <Icon className="w-4.5 h-4.5 text-primary shrink-0" />
                                <span>{item.text}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="h-[1px] bg-neutral-100 my-5 sm:my-6" />

            {/* Creator Information Box */}
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                        <Image
                            src={alexImg}
                            alt={creatorName}
                            fill
                            sizes="48px"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm sm:text-base text-neutral-900 leading-tight">
                            {creatorName}
                        </h4>
                        <p className="text-xs text-neutral-500 font-normal mt-0.5">
                            {creatorRole}
                        </p>
                    </div>
                </div>

                <p className="mt-3 text-xs text-neutral-500 font-normal leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div className="mt-3.5">
                    <Link
                        href={creatorUrl}
                        className="inline-block px-5 py-2 rounded-full border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold hover:bg-neutral-50 transition-colors"
                    >
                        See Full Profile
                    </Link>
                </div>
            </div>
        </aside>
    );
}
