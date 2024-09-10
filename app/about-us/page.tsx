import type { Metadata } from "next";
import AboutUseTopContent from "../components/AboutUseTopContent";
import { Container } from "../ui/AboutUseTopContent";

export default function IndexPage() {
  return (
    <Container>
      <AboutUseTopContent />
    </Container>
  );
}

export const metadata: Metadata = {
  title: "",
};
