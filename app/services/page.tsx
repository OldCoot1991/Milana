import type { Metadata } from "next";
import TitleSelection from "../ui/TitleSelection";
import {
  SubTitleServices,
  CardServices,
  TitleCardServices,
  ContainerCards,
  ContainerSumAndButtons,
  SumTextCardServices,
  ButtonLinkCardServices,
  RigthContainerCards,
} from "./ui";

export default function IndexPage() {
  return (
    <div>
      <TitleSelection text={"Услуги и цены"} />
      <SubTitleServices className="Manrope-Bold">Флебология</SubTitleServices>
      <ContainerCards>
        <CardServices>
          <RigthContainerCards>
            <TitleCardServices className="Manrope-Bold">
              Узи вен нижних конечностей
            </TitleCardServices>
            <ContainerSumAndButtons>
              <SumTextCardServices className="Manrope-Bold">
                1 500 ₽
              </SumTextCardServices>
              <ButtonLinkCardServices className="Manrope-Medium" target="_blank">
                Подробно
              </ButtonLinkCardServices>
              </ContainerSumAndButtons>
          </RigthContainerCards>
      </CardServices>
    </ContainerCards><SubTitleServices className="Manrope-Bold">Психиатрия</SubTitleServices><SubTitleServices className="Manrope-Bold">
        Аллергология-иммунология, пульмонология
      </SubTitleServices>
    </div>
  );
}

export const metadata: Metadata = {
  title: "",
};
