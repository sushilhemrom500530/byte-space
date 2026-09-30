import CourseDetails from "@/components/courses/details";


export default function CourseViewPage({ params }: { params: { courseId: string } }) {
    const courseId = params.courseId;
    return (
        <div className="pt-28 lg:pt-32 pb-20">
            <CourseDetails courseId={courseId} />
        </div>
    );
}