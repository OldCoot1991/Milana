import TitleSelection from "@/app/ui/TitleSelection";
import {
  ContainerAboutUseContentTop,
  ContainerContentAboutUse,
  ContainerTextAboutUse,
} from "@/app/ui/AboutUseTopContent";
import { CardTopAboutUse } from "./CardTopAboutUse";
import TextP from "@/app/ui/TextP";
import {
  ContainerAboutUse,
  ContainerCard,
  SvgImage,
  TitleAboutUseCard,
} from "@/app/ui/AboutUse";
function AboutUseTopContent() {
  return (
    <ContainerContentAboutUse>
      <TitleSelection text={"Инновационный сосудистый центр «Док.Варикоз»"} />
      <ContainerAboutUseContentTop>
        <ContainerTextAboutUse>
          <TextP
            text={
              "В Инновационном сосудистом центре Док.Варикоз ведут прием высококвалифицированные специалисты в области сосудистой хирургии, флебологии. "
            }
          />
          <TextP
            text={
              "Мы позаботились о том, чтобы наши пациенты имели возможность проконсультироваться со специлистами из г. Ростов-на-Дону и пригласили высоковалифицированных специалистов по направлениям : психиатрия, аллергология-иммунология."
            }
          />
        </ContainerTextAboutUse>
        <CardTopAboutUse />
      </ContainerAboutUseContentTop>
      <ContainerAboutUse>
        <ContainerCard>
            <SvgImage className="img1" />
          <TitleAboutUseCard className="Manrope-Bold">лазерный метод</TitleAboutUseCard>
          <TextP
          textAlign="center"
            text={
              "безоперационное лечение варикоза"
            }
          />
        </ContainerCard>
        <ContainerCard>
        <SvgImage className="img2" />
          <TitleAboutUseCard className="Manrope-Bold">Хирургия 1 дня</TitleAboutUseCard>
          <TextP
          textAlign="center"
            text={
              "экспресс анализы и возможности проведения операций в день обращения без госпитализации"
            }
          />
        </ContainerCard>
        <ContainerCard>
        <SvgImage className="img3" />
          <TitleAboutUseCard className="Manrope-Bold">Грамотные специалисты</TitleAboutUseCard>
          <TextP
          textAlign="center"
            text={
              "лазерные хирурги"
            }
          />
        </ContainerCard>
      </ContainerAboutUse>
    </ContainerContentAboutUse>
  );
}

export default AboutUseTopContent;
