import { Container , ContainerContact, ContainerInfo, ContainerMap } from "@/app/ui/Address";
import TitleSelection from "@/app/ui/TitleSelection";
import Text from "@/app/ui/Text";
import SubText from "@/app/ui/Address/AddressSubText";
import MapContact from "@/app/ui/Address/MapContact";
import ContentLinkSoc from "@/app/ui/Address/ContentLinkSoc";


function AddressComponents () {
    return (
    <Container>
        <TitleSelection text={"Сосудистый центр «Док.Варикоз»"} />
        <ContainerInfo>
            <ContainerContact>
            <Text text={"Контактный телефон центра"}/>
            <SubText text={"+7 (900) 303-00-01"} />
            <Text text={"Наш адрес"}/>
            <SubText text={"г. Нальчик, Надречная улица, 44"} />
            <Text text={"Адрес электронной почты"}/>
            <SubText text={"Dok.varikoz@mail.ru"} />
            <Text text={"График работы"}/>
            <SubText text={"Пн-Вс 08:00 -  20:00"} />
            <ContentLinkSoc />
            </ContainerContact>
            <ContainerMap>
                <MapContact />
            </ContainerMap>
        </ContainerInfo>
    </Container>
)
}

export default AddressComponents;