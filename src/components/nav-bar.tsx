"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import Logo from "./logo";
import Button from "./button";

export default function NavBar() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <nav className="bg-transparent flex items-center w-full justify-between p-4 px-8 max-w-maxAppWidth mx-auto largeMobile:px-4">
        <Link href={"/"}>
          <Logo className="largeMobile:w-[7rem]" />
        </Link>

        <ul className="flex items-center gap-6 [&_a]:text-info-800 tablet:hidden">
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

      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <aside>
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
        </aside>
      </Drawer>
    </>
  );
}
