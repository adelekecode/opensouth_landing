import type { StaticImageData } from "next/image";

export type Team = {
  fullName: string;
  picture: StaticImageData;
  role?: string;
  socials: {
    name: string;
    link: string;
  }[];
};
