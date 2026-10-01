import { testimonialsData } from "@/components/home/testimonials/data";
import TestimonialCard from "@/components/reuseable/testimonial-card";
import center_yellow from "@/assets/center-yellow.png";
import right_yellow from "@/assets/right-yellow.png";
import left_blue from "@/assets/left-blue.png";

export default function TestimonialsSection() {
    return (
        <section
            style={{
                "--left-blue": `url('${left_blue.src}')`,
                "--right-yellow": `url('${right_yellow.src}')`,
                "--center-yellow": `url('${center_yellow.src}')`,
            } as React.CSSProperties}
            className="testimonials-glow relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 select-none"
        >
            <div className="testimonials-center-glow relative z-10 custom-container">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12 mb-12 sm:mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18]">
                            Discover What Our <br className="hidden sm:inline" />
                            Community Is Saying
                        </h2>
                    </div>
                    <div className="max-w-xl">
                        <p className="common-description">
                            At ByteSpace, our vibrant community of learners and creators is at the
                            heart of what we do. Hear directly from those who have experienced the
                            transformative journey of learning and creating on our platform. Explore
                            testimonials that reflect the diverse perspectives of enthusiastic learners
                            and accomplished creators.
                        </p>
                    </div>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
                    {testimonialsData.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            name={item.name}
                            role={item.role}
                            avatar={item.avatar}
                            quote={item.quote}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}