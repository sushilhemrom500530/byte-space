import CourseDetails from "@/components/courses/details";

interface CourseViewPageProps {
    params: Promise<{ courseId: string }>;
}

export default async function CourseViewPage({ params }: CourseViewPageProps) {
    const { courseId } = await params;
    return <CourseDetails courseId={courseId} />;
}