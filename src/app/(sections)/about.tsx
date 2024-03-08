"use client";

import { useState } from "react";
import Image from "next/image";
import { Popover } from "@mui/material";
import SectionTitle from "~/components/section-title";
import leadershipTeam from "../_lib/team/leadership-team";
import advisoryTeam from "../_lib/team/advisory-team";
import socialIcons from "../_lib/social-icons";

function ProfileCard({
  fullName,
  picture,
  role,
  socials,
}: (typeof leadershipTeam)[0]) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <button
        className="w-full overflow-hidden rounded-xl border border-primary-500"
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <Image src={picture} className="w-full" alt={fullName} />
        <div className="flex flex-col p-4 items-start">
          <h4 className="text-base text-start font-medium text-info-950">
            {fullName}
          </h4>
          <p className="text-sm text-start text-info-800">{role}</p>
        </div>
      </button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <div className="flex items-center p-2 gap-4">
          {socials.map((item, index) => {
            for (let icon of socialIcons) {
              if (item.name === icon.name) {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index + 1}
                  >
                    <Image
                      width={24}
                      height={24}
                      src={icon.icon}
                      alt={icon.name}
                    />
                  </a>
                );
              }
            }
          })}
        </div>
      </Popover>
    </>
  );
}

export default function About() {
  return (
    <div id="about" className="bg-[#E7F3F7] p-8 py-16 tablet:px-4">
      <div className="flex flex-col gap-10 max-w-maxAppWidth mx-auto">
        <header className="flex items-center justify-center">
          <SectionTitle>About</SectionTitle>
        </header>
        <div className="flex flex-col gap-10">
          <div className="[&_p]:text-info-900">
            <p>
              At Open South, we believe that access to data is a fundamental
              driver of progress. We recognize the immense potential that lies
              within the rich tapestry of information and knowledge that exists
              in the Global South. Our platform serves as a gateway to unlock
              this potential by providing a comprehensive repository of open
              data.
            </p>
            <p>
              We are committed to the principles of openness and transparency.
              All the data available on Open South is freely downloadable,
              enabling easy sharing and utilization by our users. We firmly
              believe in the power of collaboration and the transformative
              impact it can have on societies. By encouraging the sharing of
              data, we promote interdisciplinary research, evidence-based
              decision-making, and innovation across multiple sectors.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <header className="flex flex-col">
              <h2 className="text-xl font-medium text-info-950">
                Leadership Team
              </h2>
              <span className="w-12 h-[2px] bg-primary-500 rounded-full" />
            </header>
            <main className="grid grid-cols-4 [@media(widt>=560px)and(width<=768px)]:!grid-cols-2 tabletAndBelow:grid-cols-3 [@media(width<=560px)]:!grid-cols-1 gap-4 ">
              {leadershipTeam.map((item, index) => (
                <ProfileCard {...item} key={index + 1} />
              ))}
            </main>
          </div>
          <div className="flex flex-col gap-6">
            <header className="flex flex-col">
              <h2 className="text-xl font-medium text-info-950">
                Advisory Team
              </h2>
              <span className="w-12 h-[2px] bg-primary-500 rounded-full" />
            </header>
            <main className="grid grid-cols-4 gap-4">
              {advisoryTeam.map((item, index) => (
                <ProfileCard {...item} key={index + 1} />
              ))}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
