import Image from "next/image";
import company_1 from "@/assets/company/logoipsum.png";
import company_2 from "@/assets/company/logoipsum-2.png";
import company_3 from "@/assets/company/logoipsum-3.png";
import company_4 from "@/assets/company/logoipsum-4.png";
import company_5 from "@/assets/company/logoipsum-5.png";

const companies = [
    { id: 1, name: "Logoipsum", logo: company_1 },
    { id: 2, name: "Logoipsum", logo: company_2 },
    { id: 3, name: "Logoipsum", logo: company_3 },
    { id: 4, name: "Logoipsum", logo: company_4 },
    { id: 5, name: "Logoipsum", logo: company_5 },
];

export default function ShareHolderSection() {
    return (
        <section className="w-full bg-[#F5F5F6] py-12 lg:py-[55px] select-none">
            <div className="custom-container">
                <div className="flex items-center justify-center sm:justify-between flex-wrap gap-8 sm:gap-6 md:gap-8 lg:gap-12">
                    {companies.map((company) => (
                        <div
                            key={company.id}
                            className="flex items-center justify-center cursor-pointer"
                        >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                className="h-7 sm:h-[29px] w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}