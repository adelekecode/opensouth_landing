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
        <div className="flex flex-col items-center gap-9 w-[75%] mx-auto pt-14">
          <div className="flex flex-col items-center gap-3">
            <h1 className="capitalize w-[70%] text-[3.2rem] text-info-950 font-bold text-center leading-[3.5rem]">
              Welcome to our premium open data platform
            </h1>
            <p className="text-center text-info-800 w-[55%] text-xl leading-6">
              Harnessing the power of open data to shape a brighter future for
              the Global South.
            </p>
          </div>
          <Button className="w-fit gap-2 !px-16 !rounded-2xl">
            <HiOutlineUserCircle className="text-lg" />
            <span className="font-normal">Sign Up Now</span>
          </Button>
          <div className="overflow-hidden w-full aspect-[1/0.69]">
            <div className="border-4 border-white rounded-[1.1rem] p-5 w-full bg-transparent">
              <Image
                src={DashboardImage}
                priority
                alt="Open South dashboard design"
                className="w-full shadow-md rounded-[1.1rem] min-h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
