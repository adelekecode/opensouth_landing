type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <div className="border rounded-full py-2 w-fit px-6 flex justify-center items-center">
      <p className="font-medium text-xl !font-Marhey text-info-900">
        {children}
      </p>
    </div>
  );
}
