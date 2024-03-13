import Footer from "~/components/footer";
import Contact from "./(sections)/contact";
import Publication from "./(sections)/publication";
import Intro from "./(sections)/intro";
import About from "./(sections)/about";
import Feature from "./(sections)/feature";

export default function Home() {
  return (
    <main className="flex flex-col w-full flex-grow justify-between gap-4">
      <div className="flex-grow">
        <Intro />
        <Feature />
        <About />
        <Publication />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
