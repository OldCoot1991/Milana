import FooterLayout from "@/app/ui/footer";
import { ContainerLeft } from "@/app/ui/footer/ContainerLeft";
import { ContainerRigth } from "@/app/ui/footer/ContainerRigth";
import FooterLogo from "@/app/ui/footer/FooterLogo";
import ButtonTel from "./ButtonTel";
import { listLinkFooterMenu } from "@/app/items/FooterListManuLink";

const Footer = () => {
  return (
    <FooterLayout>
      <ContainerLeft>
        <FooterLogo />
        <ButtonTel />
      </ContainerLeft>
      <ContainerRigth>{listLinkFooterMenu}</ContainerRigth>
    </FooterLayout>
  );
};

export default Footer;
