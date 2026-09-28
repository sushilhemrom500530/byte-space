import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import not_found_image from "@/assets/404.png"

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <h1>404 Not Found</h1>
            <Footer />
        </div>
    );
}