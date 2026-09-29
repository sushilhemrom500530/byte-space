import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiImage } from "react-icons/fi";
import { ICourseCard } from "@/types";
import learnFigmaImg from "@/assets/skills/figma.jpg";
import student1 from "@/assets/users/alex.png";
import student2 from "@/assets/avatars/student-2.png";
import student3 from "@/assets/avatars/student-3.png";
import student4 from "@/assets/avatars/student-4.png";

export const defaultCourseAvatars: (StaticImageData | string)[] = [
    student1,
    student2,
    student3,
    student4,
];

interface CourseCardProps extends Partial<ICourseCard> {
    data?: ICourseCard;
}

export default function CourseCard(props: CourseCardProps) {
    const course = props.data ? { ...props.data, ...props } : props;

    const {
        title = "Learn Figma from Basic",
        author = "purepearl studio",
        authorPrefix = "by",
        authorUrl,
        rating = 4.5,
        level = "Beginner",
        studentsCount = "26+",
        avatars = defaultCourseAvatars,
        price = "$25",
        priceSuffix = "/lifetime",
        image = learnFigmaImg,
        imageAlt,
        tags,
        lessons = "17 Lessons",
        duration = "2 hours 16 mins",
        comments = "59 Comments",
        url,
        className = "",
    } = course;

    const displayTags: string[] =
        tags && tags.length > 0
            ? tags
            : ([lessons, duration, comments].filter(Boolean) as string[]);

    const displayPrice =
        typeof price === "number"
            ? `$${price}`
            : price?.toString().startsWith("$")
                ? price
                : `$${price}`;

    const displayAvatars =
        avatars && avatars.length > 0 ? avatars : defaultCourseAvatars;

    const cardContent = (
        <div
            className={`w-full max-w-[396px] bg-white rounded-[28px] border border-[#E5E7EB] p-4 sm:p-4.5 transition-all duration-300 ${url ? "hover:border-neutral-300 hover:shadow-xl cursor-pointer" : "cursor-default"
                } ${className}`}
        >
            <div className="relative w-full aspect-[363/205] rounded-[20px] overflow-hidden bg-neutral-100 mb-4 select-none">
                {image ? (
                    <Image
                        src={image}
                        alt={imageAlt || title}
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

                {/* floating pill badges */}
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
                <h3
                    className={`text-xl font-bold text-[#111827] tracking-tight truncate ${url ? "group-hover:text-primary transition-colors" : ""
                        }`}
                >
                    {title}
                </h3>

                {rating !== undefined && rating !== null && (
                    <div className="flex items-center gap-1.5 shrink-0 text-[#71717A]">
                        <span className="text-base font-normal text-neutral-600">
                            {typeof rating === "number" ? rating.toFixed(1) : rating}
                        </span>
                        <svg
                            className="w-4 h-4 text-[#9CA3AF] fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Author */}
            <div className="mt-1 mb-4 flex items-center gap-1 text-sm text-[#71717A]">
                <span>{authorPrefix}</span>
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

            <div className="flex items-center justify-between gap-2 my-3">
                <div className="flex items-center gap-1.5 bg-[#F4F4F5] text-[#52525B] text-xs font-medium px-3.5 py-1.5 rounded-full">
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="text-[#52525B]"
                    >
                        <rect x="2" y="9" width="3" height="5" rx="0.75" />
                        <rect x="6.5" y="5.5" width="3" height="8.5" rx="0.75" />
                        <rect x="11" y="2" width="3" height="12" rx="0.75" />
                    </svg>
                    <span>{level}</span>
                </div>

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
            </div>

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
        </div>
    );

    if (url) {
        return (
            <Link href={url} className="group block no-underline focus:outline-hidden">
                {cardContent}
            </Link>
        );
    }

    return <div className="group block select-none">{cardContent}</div>;
}