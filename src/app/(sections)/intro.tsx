import Image from "next/image";
import { HiOutlineUserCircle } from "react-icons/hi2";
import NavBar from "~/components/nav-bar";
import Button from "~/components/button";
import DashboardImage from "~/assets/images/dashboard.png";

export default function Intro() {
  return (
    <div className="bg-[#E7F3F7]">
      <NavBar />
      <div className="max-w-maxAppWidth mx-auto h-fit">
        <div className="flex flex-col items-center gap-9 mx-auto pt-14">
          <div className="flex flex-col items-center gap-3 tabletAndBelow:gap-2 px-4">
            <h1 className="text-[3.7vw] laptopAndAbove:text-[3rem] tablet:text-[5vw] largeMobile:!text-[6vw] text-info-950 font-bold text-center leading-[4.5vw] laptopAndAbove:leading-[3.5rem] tablet:leading-[6.3vw] largeMobile:!leading-[7.5vw]">
              Unlocking data sharing in the <br /> Global South
            </h1>
            <p className="text-center text-info-800 text-base leading-6 tablet:text-xs largeMobile:!text-[3vw]">
              Providing the means to access and discover research data in the
              Global South
            </p>
          </div>
          <Button
            href={`${process.env.NEXT_PUBLIC_MAIN_APP_URL}`}
            className="w-fit gap-2 !px-16 tablet:!px-8 !rounded-2xl tablet:!rounded-xl largeMobile:!py-3"
          >
            <HiOutlineUserCircle className="text-lg largeMobile:text-base" />
            <span className="font-normal tablet:text-xs">Sign Up Now</span>
          </Button>
          <div className="overflow-hidden w-[80%] tablet:w-full px-4 aspect-[1/0.67] tablet:aspect-[1/0.6]">
            <div className="border-4 largeMobile:border-2 border-white rounded-[1.1rem] p-5 largeMobile:p-2 w-full bg-transparent">
              <Image
                src={DashboardImage}
                priority
                alt="Open South dashboard design"
                className="w-full shadow-md rounded-[1.1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
