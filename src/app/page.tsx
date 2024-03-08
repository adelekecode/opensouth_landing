import Footer from "~/components/footer";
import Contact from "./(sections)/contact";
import Publication from "./(sections)/publication";
import Intro from "./(sections)/intro";
import About from "./(sections)/about";
import Review from "./(sections)/review";

export default function Home() {
  return (
    <main className="flex flex-col w-full flex-grow justify-between gap-4">
      <div className="flex-grow">
        <Intro />
        <About />
        <Review />
        <Publication />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
