// "use client";

// import { ElementRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "~/components/section-title";
import data from "~/utils/data/publications";

//? Border bg dot
//? container bg dot

function Card({ body, image, date, title, versions }: (typeof data)[0]) {
  // const containerRef = useRef<ElementRef<"div">>(null);

  // const [numOfDots, setNumOfDots] = useState(0);

  // useEffect(() => {
  //   if (containerRef.current) {
  //     console.log("dhdbf");

  //     const containerHeight = containerRef.current.clientHeight;
  //     console.log(containerHeight, containerHeight);
  //     const dotsPer100Pixels = 2;
  //     const calculatedNumDots =
  //       Math.floor(containerHeight / 10) * dotsPer100Pixels;

  //     console.log(calculatedNumDots, calculatedNumDots);

  //     setNumOfDots(calculatedNumDots);
  //   }
  // }, []);

  return (
    <div className="flex gap-4 h-fit">
      <h3 className="text-sm font-medium text-white">{date}</h3>
      {/* <div className="h-fit flex flex-col gap-1 items-center">
        <span className="p-1 rounded-full h-fit bg-primary-300" />
        <div className="h-fit flex flex-col gap-1">
          {[...Array(numOfDots)].map((_, index) => (
            <span
              className="size-[4px] rounded-full bg-gray-50"
              key={index + 1}
            />
          ))}
        </div>
      </div> */}
      <div className="grid grid-cols-[40px,1fr] gap-4 pb-8 [@media(max-width:560px)]:grid-cols-1 [@media(max-width:560px)]:gap-2">
        <figure className="w-full [@media(max-width:560px)]:w-[40px]">
          <Image src={image} alt={title} className="w-full object-contain" />
        </figure>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-primary-50 text-sm font-semibold">{title}</h4>
            <p className="text-info-200 text-sm">{body}</p>
          </div>
          {versions && (
            <div className="flex items-center px-3 gap-4 flex-wrap">
              {versions.map((item, index) => (
                <a
                  key={index + 1}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Publication() {
  return (
    <div
      id="publication"
      className="p-8 py-16 [@media(max-width:560px)]:px-4 bg-primary-900"
    >
      <div className="mx-auto max-w-2xl flex flex-col gap-10">
        <header className="flex items-center justify-center">
          <SectionTitle className="text-white">Publications</SectionTitle>
        </header>
        <div className="flex flex-col">
          {data.map((item, index) => (
            <Card {...item} key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
