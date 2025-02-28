import type { Metadata } from "next";
import {
  ButtomDownload,
  Container,
  ContainerDocument,
  ContainerDocumentsContent,
  TitleDocuments,
  ButtonLook,
} from "../ui/Documents";
import TitleSelection from "../ui/TitleSelection";
import TextP from "../ui/TextP";
import Image from "next/image";
import minzdrav from "../ui/Documents/minzdrav.svg";
import rospotrebnadzor from "../ui/Documents/rospotrebnadzor.svg";

export default function IndexPage() {
  return (
    <Container>
      <div style={{padding: "0px 10px"}}>
      <TitleSelection text={"Лицензии и сертификаты"} />
      <ContainerDocumentsContent>
        <TitleDocuments className="title-documents Manrope-Bold">
          Договор об оказании платных медицинских услуг
        </TitleDocuments>
        <ContainerDocument className="document-container">
          <ButtonLook
            className="img-button-look"
            aria-label="Просмотреть документ"
          />
          <ButtomDownload
            className="img-button"
            aria-label="Скачать документ"
          />
        </ContainerDocument>
      </ContainerDocumentsContent>
      <section className="government-organizations">
        <TitleDocuments className="title-documents Manrope-Bold">
          Государственные организации
        </TitleDocuments>
        <TextP
          text={
            "Медицинская организация является объектом государственного контроля и надзора большого числа государственных и/или муниципальных органов, к которым относятся, в частности:"
          }
        />
        <div className="container-card-documents-global">
          <div className="container-card-documents">
            <Image
              src={rospotrebnadzor}
              alt="Федеральная служба по надзору в сфере защиты прав потребителей"
              className="document-image"
            />
            <h1 className="title-card-documents Manrope-Bold">
              {
                "Управление Федеральной службы по надзору в сфере защиты прав потребителей"
              }
            </h1>
            <div>
              <div className="contact-info">
                <span className="contact-label Manrope-Regular">Сайт:</span>
                <a
                  href="https://www.rospotrebnadzor.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link Manrope-Regular"
                >
                  https://www.rospotrebnadzor.ru
                </a>
              </div>
              <div className="contact-info">
                <span className="contact-label Manrope-Regular">Телефон:</span>
                <a href="tel:84999732690" className="contact-link Manrope-Regular">
                  8 (499) 973-26-90
                </a>
              </div>
            </div>
          </div>
          <div className="container-card-documents">
            <Image
              src={minzdrav}
              alt="Министерство здравоохранения РФ"
              className="document-image"
            />
            <h1 className="title-card-documents Manrope-Bold">{"Министерство здравоохранения РФ"}</h1>
            <div>
              <div className="contact-info">
                <span className="contact-label Manrope-Regular ">Сайт:</span>
                <a
                  href="https://minzdrav.gov.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link Manrope-Regular"
                >
                  https://minzdrav.gov.ru
                </a>
              </div>
              <div className="contact-info">
                <span className="contact-label Manrope-Regular">Телефон:</span>
                <a href="tel:84956272400" className="contact-link Manrope-Regular">
                  8 (495) 627-24-00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: "Лицензии и сертификаты - Медицинская организация",
  description:
    "Информация о лицензиях и сертификатах медицинской организации, а также контактные данные государственных организаций.",
  keywords:
    "лицензии, сертификаты, медицинские услуги, государственные организации, контактные данные",
  robots: "index, follow",
};
