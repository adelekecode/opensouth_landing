"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from "./logo";
import Button from "./button";

const links = [
  {
    to: "#features",
    text: "Features",
  },
  {
    to: "#about",
    text: "About",
  },
  {
    to: "#publication",
    text: "Publication",
  },
  {
    to: "#contact",
    text: "Contact",
  },
];

export default function NavBar() {
  const [showDrawer, setShowDrawer] = useState(false);

  function closeDrawer() {
    setShowDrawer(false);
  }

  return (
    <>
      <nav className="bg-transparent flex items-center w-full justify-between p-4 px-8 max-w-maxAppWidth mx-auto largeMobile:px-4">
        <Link href={"/"}>
          <Logo className="largeMobile:w-[7rem]" />
        </Link>

        <ul className="flex items-center gap-6 [&_a]:text-info-800 tablet:hidden">
          {links.map((item, index) => (
            <li key={index + 1}>
              <Link href={item.to} className="hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="!py-2 tablet:!hidden" href={"#contact"}>
          <span className="font-normal">Contact us</span>
        </Button>
        <IconButton
          onClick={() => setShowDrawer((prev) => !prev)}
          className="md:!hidden"
        >
          <IoMenu />
        </IconButton>
      </nav>

      <Drawer open={showDrawer} onClose={closeDrawer}>
        <aside className="[@media(min-width:768px)]:hidden w-[350px] largeMobile:w-[290px] mediumMobile:!w-[250px] relative pt-24 pb-16 px-4 flex flex-col items-center gap-8 justify-between h-full">
          <IconButton
            className="w-fit !absolute !top-[16px] !right-[16px]"
            onClick={() => {
              setShowDrawer(false);
            }}
          >
            <IoClose className="text-zinc-800" />
          </IconButton>
          <ul className="flex flex-col gap-8 [&_a]:text-info-800 items-center">
            {links.map((item, index) => (
              <li key={index + 1}>
                <Link href={item.to} onClick={closeDrawer}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="!py-2 w-[200px]"
            href={"#contact"}
            onClick={closeDrawer}
          >
            <span className="font-normal">Contact us</span>
          </Button>
        </aside>
      </Drawer>
    </>
  );
}
