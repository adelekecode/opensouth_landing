"use client";

import { useState } from "react";
import Image from "next/image";
import { Popover } from "@mui/material";
import socialIcons from "~/utils/social-icons";
import type { Team } from "~/types/global";

export default function ProfileCard({
  fullName,
  picture,
  role,
  socials,
}: Team) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  if (socials.length === 1) {
    return (
      <>
        <a
          className="w-full overflow-hidden rounded-xl border border-primary-500 flex flex-col"
          href={socials[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="w-full aspect-[1/0.8] overflow-hidden">
            <Image
              src={picture}
              className="w-full h-full object-cover"
              alt={fullName}
            />
          </figure>
          <div className="flex flex-col p-4 items-start">
            <h4 className="text-base text-start font-medium text-info-950">
              {fullName}
            </h4>
            <p className="text-sm text-start text-info-800">{role}</p>
          </div>
        </a>
      </>
    );
  }

  return (
    <>
      <button
        className="w-full overflow-hidden rounded-xl border border-primary-500 flex flex-col"
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <figure className="w-full aspect-[1/0.8] overflow-hidden">
          <Image
            src={picture}
            className="w-full h-full object-cover"
            alt={fullName}
          />
        </figure>
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
            for (const icon of socialIcons) {
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
