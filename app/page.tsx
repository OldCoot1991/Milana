import type { Metadata } from "next";
import Banner from "./components/Banner";
import MainTopAboutUse from "./ui/mainAboutUse";

export default function IndexPage() {
  return (
    <div >
      <Banner />
      <MainTopAboutUse />
    </div>
  );
}

export const metadata: Metadata = {
  title: "",
};
