import Image from "next/image";
import { Avatar } from "@mui/material";
import SectionTitle from "~/components/section-title";
import ReviewBg from "~/assets/images/review-bg.png";
import reviews from "../../utils/data/reviews";

function Card({
  body,
  fullName,
  location,
  occupation,
  photo,
}: (typeof reviews)[0]) {
  return (
    <div className="flex flex-col gap-3 bg-white border border-info-100 rounded-2xl p-5 pb-8">
      <div className="flex items-center gap-3">
        <Avatar
          sx={{
            width: 50,
            height: 50,
          }}
        >
          <Image
            src={photo}
            alt={`${fullName} photo`}
            className="w-full h-full object-contain"
          />
        </Avatar>
        <div className="flex flex-col">
          <h6 className="text-info-950 text-base font-medium">{fullName}</h6>
          <p className="text-info-800 text-sm">
            <span>{occupation}</span>, <span>{location}</span>
          </p>
        </div>
      </div>
      <p className="text-sm text-info-900 leading-6">{body}</p>
    </div>
  );
}

export default function Review() {
  return (
    <div className="flex flex-col gap-10 max-w-maxAppWidth mx-auto h-fit p-8 py-16 tablet:px-4 relative overflow-hidden">
      <Image
        src={ReviewBg}
        alt="background design"
        className="absolute -z-10"
      />
      <header className="flex items-center justify-center">
        <SectionTitle>What Users Say About Us</SectionTitle>
      </header>
      <h1 className="w-[70%] self-center text-4xl text-center font-medium text-info-950">
        Why don’t you see what users have to say about us?
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {reviews.map((item, index) => (
          <Card {...item} key={index + 1} />
        ))}
      </div>
    </div>
  );
}
