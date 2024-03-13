import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

export default function NavBar() {
  return (
    <nav className="bg-transparent flex items-center w-full justify-between p-4 px-8 max-w-maxAppWidth mx-auto">
      <Link href={"/"}>
        <Logo />
      </Link>

      <ul className="flex items-center gap-6 [&_a]:text-info-800">
        <li>
          <Link href={"#features"} className="hover:underline">
            Features
          </Link>
        </li>
        <li>
          <Link href={"#about"} className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href={"#publication"} className="hover:underline">
            Publication
          </Link>
        </li>
        <li>
          <Link href={"#contact"} className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>

      <Button className="!py-2" href={"#contact"}>
        <span className="font-normal">Contact us</span>
      </Button>
    </nav>
  );
}
