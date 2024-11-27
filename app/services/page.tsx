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
import Image from "next/image";
import img1 from "./images/Group.png";
import ArrayServicesList from "../array/ArratServicesList";

export default function IndexPage() {
  return (
    <div className="container-serv">
      <TitleSelection text={"Услуги и цены"} />
      <SubTitleServices className="Manrope-Bold">Флебология</SubTitleServices>
      <ArrayServicesList />
      <SubTitleServices className="Manrope-Bold">Психиатрия</SubTitleServices>
      <SubTitleServices className="Manrope-Bold">
        Аллергология-иммунология, пульмонология
      </SubTitleServices>
    </div>
  );
}

export const metadata: Metadata = {
  title: "",
};
