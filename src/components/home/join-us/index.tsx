import "./index.css";
import top_yellow_arrow from "@/assets/join-top-arrow.png";
import bottom_yellow_arrow from "@/assets/join-bottom-arrow.png";
import yellow_triangle from "@/assets/yellow-triangle.png";
import white_triangle from "@/assets/Triangle-Frame.png";
import right_side_rubar from "@/assets/join-bubar.png";
import yellow_zero from "@/assets/join-zero.png";
import white_arrow from "@/assets/White-Arrow-Frame.png";

export default function JoinUsSection() {
    return (
        <section
            style={{
                "--join-top-arrow": `url('${top_yellow_arrow.src}')`,
                "--join-white-arrow": `url('${white_arrow.src}')`,
                "--join-white-triangle": `url('${white_triangle.src}')`,
                "--join-yellow-zero": `url('${yellow_zero.src}')`,
                "--join-yellow-triangle": `url('${yellow_triangle.src}')`,
                "--join-right-rubar": `url('${right_side_rubar.src}')`,
                "--join-bottom-arrow": `url('${bottom_yellow_arrow.src}')`,
            } as React.CSSProperties}
            className="join-us-section bg-primary-grid relative w-full overflow-hidden py-16 sm:py-20 lg:py-28 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex items-center justify-center select-none"
        >
            {/* floating shapes */}
            <div className="join-shapes-canvas pointer-events-none select-none" aria-hidden="true">
                <span className="join-shape-top-left" />
                <span className="join-shape-top-right" />
                <span className="join-shape-bottom-left" />
                <span className="join-shape-bottom-right" />
            </div>

            {/* center content */}
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