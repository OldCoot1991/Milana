import type { Metadata } from "next";
import { Container, ContainerDoctors } from "../ui/Doctors";
import TitleSelection from "../ui/TitleSelection";
import { ViewArrayListCardDoctor } from "../array/ViewArrayListCardDoctor";
import SwiperComponents from "../components/Swiper/Swiper";

export default function IndexPage() {
    return (
        <>
            <Container>
                <header>
                    <TitleSelection text={"Врачи клиники «Док.Варикоз»"} />
                </header>
                <main>
                        <SwiperComponents />
                </main>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "MedicalOrganization",
                        "name": "Сосудистый центр «Док.Варикоз»",
                        "department": ViewArrayListCardDoctor.map(doctor => ({
                            "@type": "Physician",
                            "name": doctor.name,
                            "description": doctor.profile,
                            "image": `URL_к_изображения/${doctor.image}.jpg`,
                            "medicalSpecialty": "Флеболог",
                            "alumniOf": {
                                "@type": "EducationalOrganization",
                                "name": "Медицинский университет"
                            }
                        }))
                    })}
                </script>
            </Container>
        </>
    );
}

export const metadata: Metadata = {
    title: "Врачи клиники «Док.Варикоз» — Профессионалы в области флебологии и сосудистой хирургии",
    description: "Узнайте о врачах клиники «Док.Варикоз», квалифицированных специалистах в области флебологии и сосудистой хирургии. Получите медицинскую помощь от опытных врачей.",
    keywords: "врачи, флебологи, сосудистые хирурги, Док.Варикоз"
};