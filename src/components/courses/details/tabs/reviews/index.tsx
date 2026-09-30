"use client";

import { useState } from "react";
import Image from "next/image";
import alexImg from "@/assets/users/alex.png";
import student1 from "@/assets/avatars/student-1.png";
import student2 from "@/assets/avatars/student-2.png";
import student3 from "@/assets/avatars/student-3.png";

const breakdownData = [
    { stars: 5, count: 720, percentage: 85 },
    { stars: 4, count: 120, percentage: 35 },
    { stars: 3, count: 21, percentage: 12 },
    { stars: 2, count: 12, percentage: 6 },
    { stars: 1, count: 16, percentage: 8 },
];

const reviewsData = [
    {
        id: 1,
        author: "PurePearl Studio",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        rating: 5,
        avatar: alexImg,
        comment:
            "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
        id: 2,
        author: "Albert Flores",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        rating: 5,
        avatar: student1,
        comment:
            "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
        id: 3,
        author: "Cody Fisher",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        rating: 5,
        avatar: student2,
        comment:
            "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
        id: 4,
        author: "Brooklyn Simmons",
        role: "UI/UX Designer",
        timeAgo: "a year ago",
        rating: 5,
        avatar: student3,
        comment:
            "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
];

export default function ReviewsTab() {
    const [selectedStarFilter, setSelectedStarFilter] = useState<number | null>(null);

    const filteredReviews = selectedStarFilter
        ? reviewsData.filter((r) => r.rating === selectedStarFilter)
        : reviewsData;

    return (
        <div className="w-full pt-6 sm:pt-8 text-neutral-800">
            <section>
                <h3 className="common-title">
                    What Learners Are Saying
                </h3>
                <p className="mt-2 common-description max-w-3xl">
                    Discover what our learners have to say about their experience with &apos;Build Digital
                    Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who
                    have embarked on the transformative journey of mastering digital asset creation.
                </p>
            </section>

            {/* rating overview */}
            <div className="mt-6 border border-neutral-200 rounded-[16px] p-5 sm:p-7 bg-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[18px] bg-secondary flex flex-col items-center justify-center shrink-0 shadow-xs">
                    <span className="text-xs sm:text-[13px] font-semibold text-neutral-700 tracking-wider">
                        Ratings
                    </span>
                    <span className="text-4xl sm:text-[44px] font-extrabold text-neutral-950 mt-0.5 tracking-tight">
                        4.7
                    </span>
                </div>

                <div className="flex-1 w-full space-y-2">
                    {breakdownData.map((item) => (
                        <div key={item.stars} className="flex items-center gap-3 text-xs sm:text-sm">
                            <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-secondary rounded-full"
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>

                            <div className="flex items-center gap-0.5 text-neutral-700 shrink-0">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-3.5 h-3.5 fill-current text-neutral-700"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <span className="w-8 text-right font-medium text-neutral-600 text-xs">
                                {item.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="mt-9 sm:mt-11">
                <h4 className="common-title mb-4">
                    Individual Reviews:
                </h4>

                <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-6">
                    <button
                        type="button"
                        onClick={() => setSelectedStarFilter(null)}
                        className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${selectedStarFilter === null
                            ? "bg-secondary text-black shadow-xs"
                            : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                            }`}
                    >
                        All rating
                    </button>

                    {[5, 4, 3, 2, 1].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setSelectedStarFilter(selectedStarFilter === star ? null : star)}
                            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 transition-all cursor-pointer ${selectedStarFilter === star
                                ? "bg-secondary text-black font-semibold shadow-xs"
                                : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                                }`}
                        >
                            <span>★</span>
                            <span>{star}</span>
                        </button>
                    ))}
                </div>

                {/* cards */}
                <div className="space-y-4">
                    {filteredReviews.map((review) => (
                        <div
                            key={review.id}
                            className="border border-neutral-200 rounded-[16px] p-5 sm:p-6 bg-white cursor-pointer"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden relative shrink-0">
                                        <Image
                                            src={review.avatar}
                                            alt={review.author}
                                            fill
                                            sizes="44px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm sm:text-base text-neutral-900 leading-tight">
                                            {review.author}
                                        </h5>
                                        <p className="text-xs text-neutral-400 font-normal mt-0.5">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs text-neutral-400 font-normal shrink-0">
                                    {review.timeAgo}
                                </span>
                            </div>

                            <div className="flex items-center gap-1 my-3 text-neutral-800">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 fill-current text-neutral-800"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                                &quot;{review.comment}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
