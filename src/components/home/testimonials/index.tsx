import TestimonialCard from "@/components/reuseable/testimonial-card";
import sarahImg from "@/assets/users/sarah.png";
import jamesImg from "@/assets/users/james.png";
import alexImg from "@/assets/users/alex.png";

const testimonialsData = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: sarahImg,
        quote:
            '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
        id: 2,
        name: "James L.",
        role: "Lifelong Learner",
        avatar: jamesImg,
        quote:
            '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
        id: 3,
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: alexImg,
        quote:
            '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 select-none">
            <div className="absolute -top-32 -right-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-[#D4FB20]/25 rounded-full blur-[100px] pointer-events-none -z-0" />
            <div className="absolute -bottom-32 -left-20 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] bg-primary/15 rounded-full blur-[100px] pointer-events-none -z-0" />

            <div className="relative z-10 custom-container">
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