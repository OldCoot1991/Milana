import { Container, ContainerContact, ContainerInfo, ContainerMap } from "@/app/ui/Address";
import TitleSelection from "@/app/ui/TitleSelection";
import Text from "@/app/ui/Text";
import SubText from "@/app/ui/Address/AddressSubText";
import MapContact from "@/app/ui/Address/MapContact";
import ContentLinkSoc from "@/app/ui/Address/ContentLinkSoc";
import Head from "next/head";

function AddressComponents() {
    return (
        <>
            <Head>
                <title>Сосудистый центр «Док.Варикоз» - Контактная информация</title>
                <meta name="description" content="Контактная информация сосудистого центра «Док.Варикоз»: адрес, телефон, график работы." />
                <meta name="keywords" content="сосудистый центр, лечение варикоза, Нальчик, здоровье" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Сосудистый центр «Док.Варикоз»",
                        "telephone": "+7 (900) 303-00-01",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Надречная улица, 44",
                            "addressLocality": "Нальчик",
                            "addressRegion": "КБР",
                            "postalCode": "360006",
                            "addressCountry": "RU"
                        },
                        "email": "Dok.varikoz@mail.ru",
                        "openingHours": "Mo-Su 08:00-20:00",
                    })}
                </script>
            </Head>
            <Container>
                <TitleSelection text={"Сосудистый центр «Док.Варикоз»"} />
                <ContainerInfo>
                    <ContainerContact>
                        <Text  text={"Контактный телефон центра"} />
                        <SubText text={"+7 (900) 303-00-01"} />
                        <Text text={"Наш адрес"} />
                        <SubText text={"г. Нальчик, Надречная улица, 44"} />
                        <Text text={"Адрес электронной почты"} />
                        <SubText text={"Dok.varikoz@mail.ru"} />
                        <Text text={"График работы"} />
                        <SubText text={"Пн-Вс 08:00 - 20:00"} />
                        <ContentLinkSoc />
                    </ContainerContact>
                    <ContainerMap>
                        <MapContact />
                    </ContainerMap>
                </ContainerInfo>
            </Container>
        </>
    );
}

export default AddressComponents;