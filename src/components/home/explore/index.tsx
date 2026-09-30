import Image from "next/image";
import design from "@/assets/explore/design.svg";
import development from "@/assets/explore/development.svg";
import it_and_software from "@/assets/explore/it-and-software.svg";
import business from "@/assets/explore/business.svg";
import marketing from "@/assets/explore/marketing.svg";
import photography from "@/assets/explore/photography.svg";

const categories = [
    {
        id: 1,
        name: "Design",
        icon: design,
    },
    {
        id: 2,
        name: "Development",
        icon: development,
    },
    {
        id: 3,
        name: "IT & Software",
        icon: it_and_software,
    },
    {
        id: 4,
        name: "Business",
        icon: business,
    },
    {
        id: 5,
        name: "Marketing",
        icon: marketing,
    },
    {
        id: 6,
        name: "Photography",
        icon: photography,
    },
];

export default function ExploreSection() {
    return (
        <section className="w-full bg-white py-14 sm:py-16 lg:py-20 select-none">
            <div className="custom-container">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
                    <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-neutral-950 tracking-tight leading-tight">
                        Explore Diverse Learning Paths at Bytespace
                    </h2>
                    <p className="common-description mt-3 sm:mt-4 max-w-2xl mx-auto">
                        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-[30px] justify-items-center">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="w-full aspect-square flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-[18px] sm:rounded-[24px] border border-[#DADCDE] cursor-pointer select-none group"
                        >
                            <div className="w-[45px] h-[45px] sm:w-[46px] sm:h-[46px] relative shrink-0">
                                <Image
                                    src={category.icon}
                                    alt={category.name}
                                    width={46}
                                    height={46}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="mt-3.5 text-sm sm:text-[15px] font-medium text-neutral-900 group-hover:text-black transition-colors text-center leading-tight">
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}