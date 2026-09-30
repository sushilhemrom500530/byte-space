import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import not_found_image from "@/assets/404.png";
import Footer from "@/components/footer";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full relative flex flex-col justify-between overflow-x-hidden select-none bg-primary bg-grid-pattern">

            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 relative z-10 mt-40">
                <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
                    <div className="relative w-full max-w-[480px] sm:max-w-[620px] md:max-w-[700px] lg:max-w-[750px] pointer-events-none select-none">
                        <Image
                            src={not_found_image}
                            alt="404"
                            priority
                            className="w-full h-auto object-contain mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
                        />
                    </div>

                    <div className="relative flex flex-col items-center text-center -mt-4 md:-mt-10">
                        <h1 className="text-3xl sm:text-5xl md:text-[56px] lg:text-[62px] font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.12]">
                            The page you are looking
                            <br />
                            for doesn’t exist
                        </h1>

                        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-[15px] text-[#C4D0F8] font-normal tracking-normal max-w-md sm:max-w-lg mx-auto">
                            Try to use a correct url or go back to homepage to start again
                        </p>

                        <Link
                            href="/"
                            className="mt-6 sm:mt-7 inline-flex items-center justify-center rounded-full bg-secondary px-7 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-[#111111] hover:bg-secondary/80 [transition:0.3s]"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>

            {/* Bottom Spacer to balance Navbar vertically */}
            <div className="h-[71px] pointer-events-none" aria-hidden="true" />

            <Footer />
        </div>
    );
}