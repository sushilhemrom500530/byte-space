import Image from "next/image";
import top_yellow_arrow from "@/assets/join-top-arrow.png";
import bottom_yellow_arrow from "@/assets/join-bottom-arrow.png";
import yellow_triangle from "@/assets/yellow-triangle.png";
import white_triangle from "@/assets/Triangle-Frame.png";
import right_side_rubar from "@/assets/join-bubar.png";
import yellow_zero from "@/assets/join-zero.png";
import white_arrow from "@/assets/White-Arrow-Frame.png";

export default function JoinUsSection() {
    return (
        <section className="join-us-section bg-primary-grid relative w-full overflow-hidden py-16 sm:py-20 lg:py-28 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex items-center justify-center select-none">
            {/* top-left yellow wave */}
            <div className="absolute top-0 left-0 w-[120px] sm:w-[170px] lg:w-[220px] xl:w-[260px] pointer-events-none select-none z-0">
                <Image
                    src={top_yellow_arrow}
                    alt="Decorative yellow wave"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* top-left */}
            <div className="absolute top-4 sm:top-6 lg:top-8 left-[13%] sm:left-[14%] lg:left-[15%] w-[50px] sm:w-[70px] lg:w-[90px] xl:w-[105px] pointer-events-none select-none z-0 hidden sm:block">
                <Image
                    src={white_arrow}
                    alt="Decorative white spiral"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* bottom-left triangle */}
            <div className="absolute bottom-8 sm:bottom-12 lg:bottom-14 left-0 sm:left-1 lg:left-2 w-[55px] sm:w-[75px] lg:w-[95px] xl:w-[110px] pointer-events-none select-none z-0">
                <Image
                    src={white_triangle}
                    alt="Decorative white cone"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* bottom-left   */}
            <div className="absolute bottom-0 left-[6%] sm:left-[7%] lg:left-[8%] w-[110px] sm:w-[160px] lg:w-[210px] xl:w-[250px] pointer-events-none select-none z-0">
                <Image
                    src={yellow_zero}
                    alt="Decorative yellow ring"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* top-right yellow pyramid */}
            <div className="absolute top-4 sm:top-6 lg:top-8 right-[14%] sm:right-[15%] lg:right-[16%] w-[55px] sm:w-[75px] lg:w-[100px] xl:w-[120px] pointer-events-none select-none z-0 hidden sm:block">
                <Image
                    src={yellow_triangle}
                    alt="Decorative yellow pyramid"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* top-right white rounded block */}
            <div className="absolute top-0 right-0 w-[95px] sm:w-[135px] lg:w-[175px] xl:w-[205px] pointer-events-none select-none z-0">
                <Image
                    src={right_side_rubar}
                    alt="Decorative white block"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* bottom-right yellow spiral */}
            <div className="absolute bottom-0 right-[2%] sm:right-[3%] lg:right-[4%] w-[110px] sm:w-[150px] lg:w-[195px] xl:w-[230px] pointer-events-none select-none z-0">
                <Image
                    src={bottom_yellow_arrow}
                    alt="Decorative yellow spiral"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* Center Content */}
            <div className="relative z-10 custom-container px-4 text-center flex flex-col items-center justify-center max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] max-w-3xl mx-auto">
                    Unlock Your Potential as a <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </h2>

                <p className="text-sm sm:text-[15px] lg:text-base text-[#F2F2F6] max-w-[980px] mx-auto mt-4 sm:mt-5 leading-relaxed font-normal">
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a <br className="hidden md:inline" />
                    part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your <br className="hidden md:inline" />
                    expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                <div className="mt-6 sm:mt-8">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-secondary hover:bg-secondary/90 text-neutral-950 font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer select-none"
                    >
                        Join as Creator
                    </button>
                </div>
            </div>
        </section>
    );
}