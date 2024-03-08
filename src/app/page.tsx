import Footer from "~/components/footer";
import Contact from "./(sections)/contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full flex-grow justify-between gap-4">
      <div className="flex-grow">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
