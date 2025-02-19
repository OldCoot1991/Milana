import type { Metadata } from "next";
import Banner from "./components/Banner";
import MainTopAboutUse from "./components/MainAboutUse.tsx";
import { Container, ContainerDoctors } from "./ui/Doctors";
import TitleSelection from "./ui/TitleSelection";
import IFrame from "./ui/Address/IframeMaip";
import SwiperComponents from "./components/Swiper/Swiper";
import News from "./components/News/News";

export default function IndexPage() {
  return (
    <div>
      <Banner />
      <MainTopAboutUse />
      <News />
      <Container>
        <TitleSelection text={"Услуги"} />
        <TitleSelection text={"Врачи клиники «Док.Варикоз»"} />
        <SwiperComponents />
        <TitleSelection text={"Адрес и контакты"} />
        <IFrame src="https://yandex.ru/map-widget/v1/org/dok_varikoz/77813633340/?ll=43.626610%2C43.480327&z=17"></IFrame>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Клиника Док.Варикоз",
  icons: "/favicon.ico",
};
