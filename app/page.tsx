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
        <div className="main_services">
          <div className="flebologia">
            <h3 className="flebologia__text Manrope-Medium">Флебология</h3>
            <ul className="flebologia__list">
              <li className="Manrope-Regular">
                Комплексная диагностика вен ( прием сосудистого хирурга +узи вен
                обеих нижних конечностей ) – 3 000 ₽
              </li>
              <li className="Manrope-Regular">
                Повторный прием сосудистого хирурга 1000 ₽
              </li>
              <li className="Manrope-Regular">
                Второе мнение (при наличии узи и заключения от другого доктора
                не позднее 3 месяцев)- бесплатно.
              </li>
              <li className="Manrope-Regular">
                Склеротерапия 8 000 ₽ - 1 сеанс
              </li>
              <li className="Manrope-Regular">
                Курс склеротерапии из 4 сеансов – 28 900 ₽
              </li>
              <li className="Manrope-Regular">
                Эндовенозная лазерная коагуляция 1 ствола подкожной вены 34 900
                ₽
              </li>
              <li className="Manrope-Regular">
                Эндовенозная лазерная коагуляция 2 стволов подкожных вен 49 900
                ₽
              </li>
              <li className="Manrope-Regular">
                Тотал ЭВЛК 1 конечности 49 900 ₽
              </li>
              <li className="Manrope-Regular">Минифлебэктомия 15 900 ₽</li>
            </ul>
          </div>
          <div className="service_psichologii_and_allergy">
            <div className="container_1">
              <h3 className="flebologia__text Manrope-Medium">Психиатрия</h3>
              <ul className="flebologia__list">
                <li className="Manrope-Regular">
                  Прием врача психиатра 5 000 ₽
                </li>
              </ul>
            </div>
            <div className="container_2 ">
              <h3 className="flebologia__text Manrope-Medium">
                Аллергология - иммунология, пульмонология
              </h3>
              <ul className="flebologia__list">
                <li className="Manrope-Regular">
                  Прием врача пульмонолога, аллерголога- иммунолога – 5 000 ₽
                </li>
              </ul>
            </div>
          </div>
        </div>
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
