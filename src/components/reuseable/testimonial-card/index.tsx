import Image from "next/image";
import { ITestimonialCardProps } from "@/types";

export default function TestimonialCard({
    name,
    role,
    quote,
    avatar,
    className = "",
}: ITestimonialCardProps) {
    return (
        <div
            className={`bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 border border-neutral-100/90 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 select-none ${className}`}
        >
            <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative shrink-0">
                    <Image
                        src={avatar}
                        alt={name}
                        fill
                        sizes="56px"
                        className="object-cover"
                    />
                </div>

                <div className="mt-4">
                    <h4 className="text-base sm:text-xl font-semibold text-black leading-tight">
                        {name}
                    </h4>
                    <p className="text-sm sm:text-sm text-primary mt-1">
                        {role}
                    </p>
                </div>

                <p className="mt-4 text-sm sm:text-base text-color leading-relaxed font-normal">
                    {quote}
                </p>
            </div>
        </div>
    );
}
