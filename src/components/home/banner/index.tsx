import Image from "next/image";
import "./index.css";

import left_yellow_arrow from "@/assets/Left-Frame.png";
import right_yellow_shape from "@/assets/Right-Frame.png";
import white_triangle from "@/assets/Triangle-Frame.png";
import big_white_arrow from "@/assets/White-Arrow-Frame.png";
import small_white_arrow from "@/assets/Small-White-Arrow-Frame.png";
import white_zero from "@/assets/Zero-Frame.png";
import yellow_rounded_shape from "@/assets/full-rounded-yellow.png";
import bottom_user from "@/assets/Banner-User.png";
import students_group from "@/assets/avatars/students-group.png";

export default function BannerSection() {
    return (
        <section
            style={{
                "--banner-left-zigzag": `url('${left_yellow_arrow.src}')`,
                "--banner-left-spiral": `url('${small_white_arrow.src}')`,
                "--banner-left-donut": `url('${white_zero.src}')`,
                "--banner-right-cylinder": `url('${right_yellow_shape.src}')`,
                "--banner-right-triangle": `url('${white_triangle.src}')`,
                "--banner-right-spiral": `url('${big_white_arrow.src}')`,
            } as React.CSSProperties}
            className="banner-section relative w-full bg-primary-grid overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-0 select-none"
        >
            {/* floating shapes */}
            <div className="banner-shapes-canvas pointer-events-none select-none" aria-hidden="true">
                <span className="banner-shape-top" />
                <span className="banner-shape-mid" />
                <span className="banner-shape-bottom" />
            </div>

            {/* hero content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-white tracking-tight leading-[1.12]">
                    Get Access to Hundreds <br /> Courses Available
                </h1>

                <p className="text-white/85 text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed max-w-4xl mx-auto mt-4 px-2 xl:whitespace-nowrap">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                <div className="mt-7 sm:mt-8 mx-auto max-w-[520px] sm:max-w-[620px] w-full">
                    <div className="flex items-center bg-white rounded-full p-1.5 sm:p-2 pl-5 sm:pl-6 shadow-2xl shadow-black/15">
                        <span className="banner-search-icon mr-3" aria-hidden="true" />
                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 text-sm sm:text-[15px] focus:outline-none pr-3"
                        />
                        <button
                            type="button"
                            className="bg-[#D4FB20] hover:bg-[#c4eb16] active:scale-95 text-black font-semibold text-sm sm:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer flex-shrink-0 shadow-sm"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* student visual */}
            <div className="relative mt-2 sm:mt-3 w-full flex justify-center items-end">
                <div className="relative w-full max-w-[1360px] flex justify-center items-end">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[720px] sm:w-[940px] md:w-[1080px] lg:w-[1200px] xl:w-[1260px] pointer-events-none select-none z-0">
                        <Image
                            src={yellow_rounded_shape}
                            alt="Lime arch background"
                            className="w-full h-auto object-contain block"
                            priority
                        />
                    </div>

                    <div className="relative z-10 w-[380px] sm:w-[500px] md:w-[580px] lg:w-[680px] xl:w-[730px] flex justify-center pointer-events-none select-none">
                        <Image
                            src={bottom_user}
                            alt="Student holding laptop"
                            className="w-full h-auto object-contain block"
                            priority
                        />

                        <div className="banner-card-uiux select-none">
                            <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-[15px] tracking-tight whitespace-nowrap">
                                UI/UX Design
                            </h3>
                            <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5 whitespace-nowrap">
                                200 Courses &nbsp;•&nbsp; 1000+ Students
                            </p>
                        </div>

                        <div className="banner-card-students select-none">
                            <span className="font-bold text-gray-900 text-xs sm:text-sm lg:text-[14px] block">
                                Happy Students
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-[10px] sm:text-xs font-semibold text-gray-700">4.5 (240)</span>
                                <span className="banner-star-icon" aria-hidden="true" />
                            </div>
                            <div className="mt-2">
                                <Image
                                    src={students_group}
                                    alt="Happy students"
                                    className="h-6 sm:h-7 w-auto object-contain block"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="banner-card-progress select-none">
                            <span className="text-[11px] sm:text-xs font-medium text-gray-600 block">
                                Learning Progress
                            </span>
                            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-0.5 tracking-tight">
                                55%
                            </div>
                            <div className="w-full bg-[#E5E7EB] rounded-full h-2 sm:h-2.5 mt-2.5 overflow-hidden">
                                <div className="bg-[#D4FB20] h-full rounded-full w-[55%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}