import Image from "next/image";
import Logo from "./logo";
import BIDS from "~/assets/images/partner-logos/bids.png";
import CHAI from "~/assets/images/partner-logos/chai.png";
import EAAMO from "~/assets/images/partner-logos/eaamo.png";

const license = [
  {
    src: "https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1",
    alt: "license (CC) icon",
  },
  {
    src: "https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1",
    alt: "license (BY) icon",
  },
  {
    src: "https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1",
    alt: "license (NC) icon",
  },
  {
    src: "https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1",
    alt: "license (ND) icon",
  },
];

export default function Footer() {
  return (
    <footer className="max-w-maxAppWidth mx-auto w-full px-6 tablet:px-0 divide-y border-zinc-200 flex flex-col">
      <div className="px-6 tablet:px-4 w-full flex items-center justify-center">
        <div className="w-full flex [@media(max-width:580px)]:grid [@media(max-width:580px)]:grid-cols-1 largeMobile:!grid-cols-1 largeMobile:gap-8 items-end justify-between gap-4 p-4 px-6 [@media(max-width:580px)]:px-4">
          <Logo
            className="w-40 [@media(max-width:580px)]:w-36 largeMobile:!w-32"
            priority
          />
          <div className="flex flex-col gap-4 max-w-[70%] [@media(max-width:580px)]:max-w-[none]">
            <p className="text-sm font-medium text-center">Our Partners</p>
            <div className="flex flex-wrap [@media(max-width:960px)]:grid [@media(max-width:960px)]:grid-cols-2 gap-6 largeMobile:flex largeMobile:flex-wrap [&_div]:flex [&_img]:w-[8rem]">
              <div className="justify-end">
                <a
                  href="https://humancompatible.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={CHAI} priority alt="CHAI logo" />
                </a>
              </div>
              <div className="justify-start">
                <a
                  href="https://bids.berkeley.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={BIDS} priority alt="BIDS logo" />
                </a>
              </div>
              <div className="justify-center [@media(max-width:960px)]:col-span-2 [@media(max-width:960px)]:pr-[20%] largeMobile:pr-0">
                <a
                  href="https://www.eaamo.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src={EAAMO}
                    alt="EAAMO logo"
                    priority
                    className="!h-[2.2rem]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 flex items-center py-3">
        <div className="flex gap-4 items-center [&>span]:h-4 [&>span]:w-[1px] [&>span]:rounded-full [&>span]:bg-zinc-300 [&>a]:text-xs flex-wrap">
          <a href={`${process.env.NEXT_PUBLIC_MAIN_APP_URL}/terms`}>
            Terms of Services
          </a>
          <span />
          <a href={`${process.env.NEXT_PUBLIC_MAIN_APP_URL}/privacy-policy`}>
            Privacy Policy
          </a>
          <span />
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-xs">Open South is licensed under</p>
            <a
              href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
              className="flex items-center gap-2 text-xs hover:underline text-orange-600 font-medium"
            >
              CC BY-NC-ND 4.0
            </a>
            <div className="flex items-center gap-1">
              {license.map((item, index) => (
                <Image
                  key={index + 1}
                  width={16}
                  height={16}
                  unoptimized
                  src={item.src}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
