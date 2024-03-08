import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className }: Props) {
  return (
    <div className="border rounded-full py-2 w-fit px-6 flex justify-center items-center">
      <p className={twMerge("text-xl !font-Marhey text-info-900", className)}>
        {children}
      </p>
    </div>
  );
}
