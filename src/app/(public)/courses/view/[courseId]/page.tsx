import CourseDetails from "@/components/courses/details";
import { ICourseViewPageProps } from "@/components/courses/interface";


export default async function CourseViewPage({ params }: ICourseViewPageProps) {
    const { courseId } = await params;
    return <CourseDetails courseId={courseId} />;
}