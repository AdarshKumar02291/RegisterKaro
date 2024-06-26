import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { About } from "./_components/About";
import { Video } from "./_components/Video";
import { Clients } from "./_components/Clients";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <About></About>
      <Video></Video>
      <Clients></Clients>
    </div>
  );
}
