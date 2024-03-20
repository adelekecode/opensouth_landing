import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import _logo from "~/assets/logo.svg";

type Props = Omit<ImageProps, "src" | "alt" | "className"> & {
  className?: string;
};

export default function Logo({ className = "", ...props }: Props) {
  return (
    <Image
      {...props}
      src={_logo}
      alt="Open-South-logo"
      priority
      className={twMerge(`w-[8rem]`, `${className}`)}
    />
  );
}
