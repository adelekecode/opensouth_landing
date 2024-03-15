"use client";

import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { twMerge } from "tailwind-merge";

export default function Button({
  loading,
  variant = "contained",
  className,
  sx,
  ...props
}: LoadingButtonProps) {
  return (
    <LoadingButton
      variant={variant}
      className={twMerge(
        `flex justify-center items-center !normal-case !text-[0.9rem] !p-3 !px-4 !rounded-md`,
        loading && `opacity-40 !cursor-not-allowed !shadow-none`,
        `${className}`
      )}
      {...props}
      sx={{
        "&.MuiButton-outlinedPrimary": {
          color: "#0e82bb !important",
          borderColor: "#0e82bb !important",
        },
        ...sx,
      }}
      loading={loading}
      disableElevation
    >
      <>{props.children}</>
    </LoadingButton>
  );
}
