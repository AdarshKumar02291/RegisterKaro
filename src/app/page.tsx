import { Steps } from "./_components/Steps";
import { Blogs } from "./_components/Blogs";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Mobile } from "./_components/Mobile";
import { Services } from "./_components/Services";
import { About } from "./_components/About";
import { Video } from "./_components/Video";
import { Clients } from "./_components/Clients";
import Footer from "./_components/Footer";
import Works from "./_components/Works";
import Newsletter from "./_components/Newsletter";
import Numbers from "./_components/Numbers";

export default function Home() {
  return (
    <div className="max-w-[1540px] overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About></About>
      <Video></Video>
      <Clients></Clients>
      <Steps></Steps>
      <Blogs></Blogs>
      <Mobile></Mobile>
      <Numbers></Numbers>
      <Newsletter></Newsletter>
      <Works></Works>
      <Footer></Footer>
    </div>
  );
}
