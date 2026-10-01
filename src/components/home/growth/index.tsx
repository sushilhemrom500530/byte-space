import professional_start from "@/assets/growth-1.png";
import create_and_manage from "@/assets/growth-2.png";
import left_yellow from "@/assets/growth-top-yellow.png";
import right_blue from "@/assets/growth-right-blue.png";
import center_blue from "@/assets/growth-center-blue.png";
import bottom_left_yellow from "@/assets/growth-bottom-yellow.png";
import bottom_right_blue from "@/assets/growth-right-blue.png";



export default function GrowthSection() {
    return (
        <section className="">
            <div className="custom-container">
                <h2 className="text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18]">
                    Fuel Your Growth with Top-Tier
                    <br className="hidden sm:inline" />
                    Educational Resources
                </h2>
                <p className="text-[#4F4F4F] text-[22px] font-normal leading-relaxed">
                    ByteSpace curates high-quality content across a spectrum of creative and
                    technical disciplines, empowering you to master new skills, advance your
                    career, and bring your innovative ideas to life with expert guidance and
                    community support.
                </p>
            </div>
        </section>
    )
}