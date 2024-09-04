import type { Metadata } from "next";
import Banner from "./components/Banner";
import MainTopAboutUse from "./components/MainAboutUse.tsx";

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
