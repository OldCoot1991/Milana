import type { Metadata } from "next";
import Banner from "./components/Banner";
import MainTopAboutUse from "./components/MainAboutUse.tsx";
import { Container, ContainerDoctors } from "./ui/Doctors";
import TitleSelection from "./ui/TitleSelection";
import ListCardDoctor from "./items/Doctor";

export default function IndexPage() {
  return (
    <div >
      <Banner />
      <MainTopAboutUse />
      <Container>
        <TitleSelection text={"Врачи клиники «Док.Варикоз»"} />
        <ContainerDoctors>
          <ListCardDoctor />
        </ContainerDoctors>
    </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "",
};
