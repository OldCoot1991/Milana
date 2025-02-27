import TitleSelection from "@/app/ui/TitleSelection";
import {
  ContainerAboutUseContentBottom,
  ContainerAboutUseContentTop,
  ContainerContentAboutUse,
  ContainerTextAboutUse,
} from "@/app/ui/AboutUseTopContent";
import { CardBottomAboutUse, CardTopAboutUse } from "./CardTopAboutUse";
import TextP from "@/app/ui/TextP";
import {
  ContainerAboutUse,
  ContainerCard,
  SvgImage,
  TitleAboutUseCard,
} from "@/app/ui/AboutUse";
import Image from "next/image";
import img1 from "../../ui/AboutUse/image/img1.png";
import img2 from "../../ui/AboutUse/image/img2.png";
import img3 from "../../ui/AboutUse/image/img3.png";
import img4 from "../../ui/AboutUse/image/img4.png";
import img5 from "../../ui/AboutUse/image/img5.png";
function AboutUseTopContent() {
  return (
    <>
      <ContainerContentAboutUse>
        <TitleSelection text={"Инновационный сосудистый центр «Док.Варикоз»"} />
        <ContainerAboutUseContentTop>
          <ContainerTextAboutUse>
            <TextP
              text={
                "В Инновационном сосудистом центре Док.Варикоз ведут прием высококвадифицированные специалисты в области сосудистой хирургии, флебологии. "
              }
            />
            <TextP
              text={`Осуществляется консультативный прием врачей по специльностям "Психиатрия", "Аллергология-иммунология", "Неврология".`}
            />
            <TextP
              text={`Мы позаботились о том, чтобы наши пациенты имели возможность проконсультироваться со специлистами из г. Ростов-на-Дону и пригласили высоковалифицированных специалистов по направлениям : психиатрия, аллергология-иммунология.`}
            />
          </ContainerTextAboutUse>
          <CardTopAboutUse />
        </ContainerAboutUseContentTop>
        <ContainerAboutUse>
          <ContainerCard>
            <SvgImage className="img1" />
            <TitleAboutUseCard className="Manrope-Bold">
              лазерный метод
            </TitleAboutUseCard>
            <TextP
              textAlign="center"
              text={"безоперационное лечение варикоза"}
            />
          </ContainerCard>
          <ContainerCard>
            <SvgImage className="img2" />
            <TitleAboutUseCard className="Manrope-Bold">
              Хирургия 1 дня
            </TitleAboutUseCard>
            <TextP
              textAlign="center"
              text={
                "экспресс анализы и возможности проведения операций в день обращения без госпитализации"
              }
            />
          </ContainerCard>
          <ContainerCard>
            <SvgImage className="img3" />
            <TitleAboutUseCard className="Manrope-Bold">
              Грамотные специалисты
            </TitleAboutUseCard>
            <TextP textAlign="center" text={"лазерные хирурги"} />
          </ContainerCard>
        </ContainerAboutUse>

        <ContainerAboutUseContentBottom>
          <CardBottomAboutUse />
          <ContainerTextAboutUse>
            <TextP
              text={`В Сосудистом центре "Док.Варикоз" мы обеспечиваем индивидуальный подход и гарантируем качественное лечение. Для нас важно, чтобы каждый пациент нашего Центра получил квалифицированную помощь, которая поможет избавиться от венозных патологий.`}
            />

            <TextP
              text={`В рамках амбулаторной хирургии врачи-флеболги нашего центра  проводят операции с применением малоинвазивных методик, что позволяет уменьшить область вмешательства, снизить травмирование тканей и максимально сократить сроки реабилитации. Пациенты центра не только уходят домой в день операции, но могут вернуться сразу на рабочее место.`}
            />

            <TextP
              text={`Зона ожидания в центре оснащена так, чтобы каждый пациент и сопровождающий проводили время с комфортом.`}
            />
          </ContainerTextAboutUse>
        </ContainerAboutUseContentBottom>
      </ContainerContentAboutUse>
      <div className="container-about-use-bottom-image">
        <Image className="image-about-use-1" src={img1} alt={""} />
        <div className="container-about-use-2">
          <div className="sub_container-about-use">
            <Image className="image-about-use-2" src={img2} alt={""} />
            <Image className="image-about-use-2" src={img3} alt={""} />
          </div>
          <div className="sub_container-about-use">
            <Image className="image-about-use-2" src={img4} alt={""} />
            <Image className="image-about-use-2" src={img5} alt={""} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUseTopContent;
