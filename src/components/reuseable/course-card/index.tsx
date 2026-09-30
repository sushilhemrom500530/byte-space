import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiImage } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { ICourseCard } from "@/types";

interface CourseCardProps extends Partial<ICourseCard> {
    data?: ICourseCard;
}

export default function CourseCard(props: CourseCardProps) {
    const course = props.data ? { ...props.data, ...props } : props;

    const {
        title,
        author,
        authorPrefix,
        authorUrl,
        rating,
        level,
        studentsCount,
        avatars,
        price,
        priceSuffix,
        image,
        imageAlt,
        tags,
        lessons,
        duration,
        comments,
        url,
        className = "",
    } = course;

    const displayTags: string[] =
        tags && tags.length > 0
            ? tags
            : ([lessons, duration, comments].filter(Boolean) as string[]);

    const displayPrice =
        price !== undefined && price !== null
            ? typeof price === "number"
                ? `$${price}`
                : price.toString().startsWith("$")
                    ? price
                    : `$${price}`
            : "";

    const displayAvatars = avatars || [];

    const cardContent = (
        <div
            className={`!w-full bg-white rounded-[24px] border border-[#E5E7EB] p-4 sm:p-4.5 transition-all duration-300 ${url ? "hover:border-neutral-300 cursor-pointer" : "cursor-default"
                } ${className}`}
        >
            <div className="relative w-full aspect-[363/205] rounded-[20px] overflow-hidden bg-neutral-100 mb-4 select-none">
                {image ? (
                    <Image
                        src={image}
                        alt={imageAlt || title || "Course thumbnail"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 396px"
                        className={`object-cover transition-transform duration-500 ${url ? "group-hover:scale-[1.02]" : ""
                            }`}
                        priority={false}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 bg-neutral-100 gap-1">
                        <FiImage className="w-8 h-8 stroke-[1.5]" />
                    </div>
                )}

                {displayTags.length > 0 && (
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
                        {displayTags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-white/70 backdrop-blur-md text-[#242528] text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full shadow-xs whitespace-nowrap"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between gap-2">
                {title && (
                    <h3
                        className={`text-xl font-bold text-[#111827] tracking-tight truncate ${url ? "group-hover:text-primary transition-colors" : ""
                            }`}
                    >
                        {title}
                    </h3>
                )}

                {rating !== undefined && rating !== null && (
                    <div className="flex items-center gap-1.5 shrink-0 text-[#71717A]">
                        <span className="text-base font-normal text-neutral-600">
                            {typeof rating === "number" ? rating.toFixed(1) : rating}
                        </span>
                        <FaStar className="w-3.5 h-3.5 text-[#D4D4D8]" />
                    </div>
                )}
            </div>

            {author && (
                <div className="mt-1 mb-4 flex items-center gap-1 text-sm text-[#71717A]">
                    {authorPrefix && <span>{authorPrefix}</span>}
                    {authorUrl && !url ? (
                        <Link
                            href={authorUrl}
                            className="text-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {author}
                        </Link>
                    ) : (
                        <span className="text-primary hover:underline cursor-pointer">
                            {author}
                        </span>
                    )}
                </div>
            )}

            <div className="flex items-center justify-between gap-2 my-3">
                {level && (
                    <div className="flex items-center gap-1.5 bg-[#F4F4F5] text-[#52525B] text-xs font-medium px-3.5 py-1.5 rounded-full">
                        <MdSignalCellularAlt className="w-3.5 h-3.5 text-[#52525B]" />
                        <span>{level}</span>
                    </div>
                )}

                {(displayAvatars.length > 0 || studentsCount) && (
                    <div className="flex items-center">
                        <div className="flex -space-x-1.5 sm:-space-x-2">
                            {displayAvatars.slice(0, 4).map((av: StaticImageData | string, idx: number) => (
                                <div
                                    key={idx}
                                    className="w-8 h-8 rounded-full overflow-hidden relative shrink-0"
                                    style={{ zIndex: idx }}
                                >
                                    <Image
                                        src={av}
                                        alt="Student avatar"
                                        fill
                                        sizes="32px"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            {studentsCount && (
                                <div
                                    className="w-8 h-8 rounded-full bg-secondary text-black text-xs font-medium flex items-center justify-center shrink-0"
                                    style={{ zIndex: 10 }}
                                >
                                    {studentsCount}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {displayPrice && (
                <div className="mt-4 flex items-baseline">
                    <span className="text-primary font-bold text-2xl tracking-tight">
                        {displayPrice}
                    </span>
                    {priceSuffix && (
                        <span className="text-[#71717A] text-xs font-normal ml-0.5">
                            {priceSuffix}
                        </span>
                    )}
                </div>
            )}
        </div>
    );

    if (url) {
        return (
            <Link href={url} className="group block w-full no-underline focus:outline-hidden">
                {cardContent}
            </Link>
        );
    }

    return <div className="group block w-full select-none">{cardContent}</div>;
}