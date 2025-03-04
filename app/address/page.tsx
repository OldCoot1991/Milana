import AddressComponents from "../components/Address";
import Head from "next/head";
interface Metadata {
  title: string;
  description: string;
  keywords: string;
}
export default function IndexPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "Сосудистый центр «Док.Варикоз»",
            telephone: "+7 (900) 303-00-01",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Надречная улица, 44",
              addressLocality: "Нальчик",
              addressRegion: "КБР",
              postalCode: "360006",
              addressCountry: "RU",
            },
            email: "Dok.varikoz@mail.ru",
            openingHours: "Mo-Su 08:00-20:00",
          })}
        </script>
      </Head>
      <AddressComponents />
    </>
  );
}

export const metadata: Metadata = {
  title: "Сосудистый центр «Док.Варикоз» - Контактная информация",
  description:
    "Контактная информация сосудистого центра «Док.Варикоз»: адрес, телефон, график работы.",
  keywords: "сосудистый центр, лечение варикоза, Нальчик, здоровье",
};
