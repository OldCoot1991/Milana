import { ButtonLinkCardServices, CardServices, ContainerCards, ContainerSumAndButtons, RigthContainerCards, SumTextCardServices, TitleCardServices } from "../services/ui";
import Image from "next/image";
import img1 from "../services/images/img1.png"
import img2 from "../services/images/img2.png"
import img4 from "../services/images/img4.png"
import img5 from "../services/images/img5.png"
import img6 from "../services/images/img6.png"
import img8 from "../services/images/img8.png"
import { ButtonLinkServices } from "@/src/ui/ButtonLinkServices";


// Ваш массив с услугами
const services = [
    {
      id: 1,
      img: img1,
      title: "Узи вен нижних конечностей",
      price: "1 500 ₽",
      detailsLink: "http://example.com/details1"
    },
    {
      id: 2,
      img: img2,
      title: "Прием флеболога",
      price: "от 1 500 ₽",
      detailsLink: "http://example.com/details2"
    },
    {
      id: 3,
      img: img1,
      title: "Комплексная диагностика вен",
      price: "2 500 ₽",
      detailsLink: "http://example.com/details3"
    },
    {
        id: 4,
        img: img4,
        title: "Второе мнение (не позднее 3 месяцев)",
        price: "бесплатно",
        detailsLink: "http://example.com/details4"
    },
    {
        id: 5,
        img: img5,
        title: "Склеротерапия",
        price: "от 6 900 ₽",
        detailsLink: "http://example.com/details5"
    },
    {
        id: 6,
        img: img6,
        title: "Минифлебэктомия",
        price: "15 900 ₽",
        detailsLink: "http://example.com/details6"
    },
    {
        id: 7,
        img: img1,
        title: "Эндовенозная лазерная коагуляция (ЭВЛК, ЭВЛО)",
        price: "от 34 900 ₽",
        detailsLink: "http://example.com/details7"
    },
    {
        id: 8,
        img: img8,
        title: "Тотал ЭВЛК (1 конечности)",
        price: "49 900 ₽",
        detailsLink: "http://example.com/details8"
    }
];

export default function ArrayServicesList() {
    return (
        <ContainerCards>
            {services.map(service => (
                <CardServices key={service.id}>
                    <Image src={service.img} alt={service.title} className="flebol-img" />
                    <RigthContainerCards>
                        <TitleCardServices className="Manrope-Bold">
                            {service.title}
                        </TitleCardServices>
                        <ContainerSumAndButtons>
                            <SumTextCardServices className="Manrope-Bold">
                                {service.price}
                            </SumTextCardServices>
                            <ButtonLinkServices  href={service.detailsLink}>
                                Подробно
                            </ButtonLinkServices>
                        </ContainerSumAndButtons>
                    </RigthContainerCards>
                </CardServices>
            ))}
        </ContainerCards>
    );
}