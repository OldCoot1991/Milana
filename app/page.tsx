import type { Metadata } from "next";
import Banner from "./components/Banner";

export default function IndexPage() {
  return (
    <div >
      <Banner />
    </div>
  );
}

export const metadata: Metadata = {
  title: "",
};
