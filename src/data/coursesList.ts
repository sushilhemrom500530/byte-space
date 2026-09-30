import { ICourseCard } from "@/types";
import learnFigmaImg from "@/assets/skills/figma.jpg";
import digitalAssetsImg from "@/assets/skills/digital-assets.jpg";
import bigDataImg from "@/assets/skills/big-data.jpg";
import balancingImg from "@/assets/skills/balancing.jpg";
import moneyManageImg from "@/assets/skills/money-manage.jpg";
import startupIdeaImg from "@/assets/skills/startup-success.jpg";
import student1 from "@/assets/avatars/student-1.png";
import student2 from "@/assets/avatars/student-2.png";
import student3 from "@/assets/avatars/student-3.png";
import student4 from "@/assets/avatars/student-4.png";

const defaultAvatars = [student1, student2, student3, student4];

export const courseTags = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
];

const baseCourses = [
    {
        title: "Learn Figma from Basic",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: defaultAvatars,
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: learnFigmaImg,
        url: "/courses/learn-figma-from-basic",
        category: "UI/UX Design",
    },
    {
        title: "Build Digital Asset",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: defaultAvatars,
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: digitalAssetsImg,
        url: "/courses/build-digital-asset",
        category: "Marketing",
    },
    {
        title: "the Power of Big Data",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: defaultAvatars,
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: bigDataImg,
        url: "/courses/power-of-big-data",
        category: "Social Media",
    },
    {
        title: "Balancing Productivity and Life",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: defaultAvatars,
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: balancingImg,
        url: "/courses/balancing-productivity",
        category: "Drawing & Painting",
    },
    {
        title: "Mastering Money Management",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: defaultAvatars,
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: moneyManageImg,
        url: "/courses/mastering-money-management",
        category: "Creative Marketing",
    },
    {
        title: "From Idea to Startup Success",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: defaultAvatars,
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: startupIdeaImg,
        url: "/courses/from-idea-to-startup",
        category: "Animation",
    },
];

// Generate 75 course items (15 items per page for 5 full pages of pagination)
export const allCoursesList: (ICourseCard & { category: string })[] = Array.from(
    { length: 75 },
    (_, index) => {
        const base = baseCourses[index % baseCourses.length];
        const assignedCategory =
            courseTags[(index % (courseTags.length - 1)) + 1] || base.category;

        return {
            ...base,
            id: index + 1,
            url: `/courses/view/${index + 1}`,
            category: assignedCategory,
        };
    }
);
