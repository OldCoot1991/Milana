import type { Metadata } from "next";
import { Container, ContainerDoctors } from "../ui/Doctors";
import TitleSelection from "../ui/TitleSelection";
import ListCardDoctor from "../items/Doctor";

export default function IndexPage() {
  return (
    <Container>
        <TitleSelection text={"Врачи клиники «Док.Варикоз»"} />
        <ContainerDoctors>
          <ListCardDoctor />
        </ContainerDoctors>
    </Container>
  );
}

export const metadata: Metadata = {
  title: "",
};
