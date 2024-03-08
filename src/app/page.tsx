import Footer from "~/components/footer";
import Contact from "./(sections)/contact";
import Publication from "./(sections)/publication";

export default function Home() {
  return (
    <main className="flex flex-col w-full flex-grow justify-between gap-4">
      <div className="flex-grow">
        <Publication />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
