import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import professional_start from "@/assets/growth-1.png";
import create_and_manage from "@/assets/growth-2.png";
import left_yellow from "@/assets/growth-top-yellow.png";
import right_blue from "@/assets/growth-right-blue.png";
import center_blue from "@/assets/growth-center-blue.png";
import bottom_left_yellow from "@/assets/growth-bottom-yellow.png";
import bottom_right_blue from "@/assets/growth-bottom-blue.png";

const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function GrowthSection() {
    return (
        <section
            style={{
                "--growth-top-yellow": `url('${left_yellow.src}')`,
                "--growth-right-blue": `url('${right_blue.src}')`,
                "--growth-center-blue": `url('${center_blue.src}')`,
                "--growth-bottom-yellow": `url('${bottom_left_yellow.src}')`,
                "--growth-bottom-blue": `url('${bottom_right_blue.src}')`,
            } as React.CSSProperties}
            className="growth-section relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-28 select-none"
        >
            <div className="growth-glow-canvas pointer-events-none select-none" aria-hidden="true">
                <span className="growth-glow-top" />
                <span className="growth-glow-mid" />
                <span className="growth-glow-bottom" />
            </div>

            <div className="growth-container relative z-10 custom-container flex flex-col gap-20 sm:gap-24 lg:gap-32">

                {/* professional growth */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18]">
                            Your Path to Professional <br className="hidden sm:inline" />
                            Growth Starts Here!
                        </h2>
                        <p className="common-description mt-4 sm:mt-5 leading-relaxed">
                            Explore our curated selection of courses tailored to enhance your
                            capabilities and accelerate your career journey. Whether you are
                            looking to sharpen specific skills, gain industry expertise, or
                            embark on a new career path entirely, we have the resources you need.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 sm:mt-10 flex items-center gap-8 sm:gap-12 lg:gap-14">
                            <div>
                                <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                                    12K
                                </span>
                                <p className="text-xs sm:text-sm font-medium text-[#71717A] mt-1">
                                    Students
                                </p>
                            </div>
                            <div>
                                <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                                    70+
                                </span>
                                <p className="text-xs sm:text-sm font-medium text-[#71717A] mt-1">
                                    Courses
                                </p>
                            </div>
                            <div>
                                <span className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                                    16
                                </span>
                                <p className="text-xs sm:text-sm font-medium text-[#71717A] mt-1">
                                    Creators
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center lg:justify-end select-none">
                        <Image
                            src={professional_start}
                            alt="Your Path to Professional Growth"
                            className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* create and manage */}
                <div className="growth-bottom-block relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                    <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1 select-none">
                        <Image
                            src={create_and_manage}
                            alt="Create & Manage Courses Easily"
                            className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain select-none"
                            priority
                        />
                    </div>

                    <div className="max-w-xl order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18]">
                            Create & Manage <br className="hidden sm:inline" />
                            Courses Easily.
                        </h2>
                        <p className="common-description mt-4 sm:mt-5 leading-relaxed">
                            <strong className="font-semibold text-neutral-900">ByteSpace</strong>{" "}
                            supports individuals or entities in the creation, publication, and
                            administration of educational courses.
                        </p>

                        <ul className="mt-8 sm:mt-10 space-y-4">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <BsCheckCircleFill className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-sm sm:text-base font-medium text-neutral-800">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}