import TitleSelection from "@/app/ui/TitleSelection";
import { ContainerAboutUseContentTop, ContainerContentAboutUse, ContainerTextAboutUse } from "@/app/ui/AboutUseTopContent";
import Text from "@/app/ui/Text";
import { CardTopAboutUse } from "./CardTopAboutUse";


function AboutUseTopContent() {
    return (
        <ContainerContentAboutUse >
            <TitleSelection text={"Инновационный сосудистый центр «Док.Варикоз»"} />
            <ContainerAboutUseContentTop>
                <ContainerTextAboutUse>
                    <Text text={"В Инновационном сосудистом центре Док.Варикоз ведут прием высококвалифицированные специалисты в области сосудистой хирургии, флебологии. "} />
                    <Text text={"Мы позаботились о том, чтобы наши пациенты имели возможность проконсультироваться со специлистами из г. Ростов-на-Дону и пригласили высоковалифицированных специалистов по направлениям : психиатрия, аллергология-иммунология."} />
                </ContainerTextAboutUse>
                <CardTopAboutUse />
            </ContainerAboutUseContentTop>
        </ContainerContentAboutUse>
    )
}

export default AboutUseTopContent;