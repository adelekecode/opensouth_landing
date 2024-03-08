import Link from "next/link";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import NotFoundIllustration from "~/assets/illustrations/404.png";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col flex-grow items-center justify-center gap-2 p-8">
      <figure className="w-[28%] tablet:w-[55%] largeMobile:!w-[70%]">
        <Image
          priority
          src={NotFoundIllustration}
          alt="Not found Illustration"
        />
      </figure>
      <p className="mt-3 mb-2 text-center largeMobile:text-sm">
        {
          "We couldn't find what you are looking for. Let's find a better place for you to go."
        }
      </p>
      <div className="flex items-center gap-8 mt-4">
        <Link href={"/"}>
          <IoArrowBack className="!fill-white largeMobile:!w-4" />
          <span>Go to Home</span>
        </Link>
      </div>
    </div>
  );
}