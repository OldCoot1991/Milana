import type { Metadata } from "next";
import { ButtomDownload, Container, ContainerDocument, ContainerDocumentsContent , TitleDocuments , ButtonLook} from "../ui/Documents";
import TitleSelection from "../ui/TitleSelection";
import TitleViewSelection from "../ui/TitleViewDoctor";

export default function IndexPage() {
  return (
    <Container>
      <TitleSelection text={"Лицензии и сертификаты"} />
      <ContainerDocumentsContent>
        <TitleDocuments className="Manrope-Bold">Договор об оказании платных медицинских услуг</TitleDocuments>
        <ContainerDocument>
          <ButtonLook className="img-button-look" /> 
        <ButtomDownload className="img-button" />
        </ContainerDocument>
      </ContainerDocumentsContent>
    </Container>
  );
}

export const metadata: Metadata = {
  title: "",
};
