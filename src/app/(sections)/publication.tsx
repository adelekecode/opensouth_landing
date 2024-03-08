import Image from "next/image";
import SectionTitle from "~/components/section-title";
import DataSharingInAfrica from "~/assets/images/publications/data-sharing-in-africa.png";

const data = [
  {
    title: "Data sharing in Africa",
    body: "Abebe, R., Aruleba, K., Birhane, A., Kingsley, S., Obaido, G., Remy, S.L. and Sadagopan, S., 2021, March. Narratives and counternarratives on data sharing in Africa. In Proceedings of the 2021 ACM conference on fairness, accountability, and transparency (pp. 329-341).",
    image: DataSharingInAfrica,
  },
];

function Card({ title, body, image }: (typeof data)[0]) {
  return (
    <div className="grid grid-cols-[80px,1fr] gap-4">
      <figure className="w-full aspect-square rounded-md overflow-hidden">
        <Image src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="flex flex-col gap-1">
        <h4 className="text-primary-50 text-base font-semibold">{title}</h4>
        <p className="text-info-200 text-base">{body}</p>
      </div>
    </div>
  );
}

export default function Publication() {
  return (
    <div id="publication" className="p-8 py-16 bg-primary-900">
      <div className="mx-auto max-w-2xl flex flex-col gap-10">
        <header className="flex items-center justify-center">
          <SectionTitle className="text-white">Publications</SectionTitle>
        </header>
        <div>
          {data.map((item, index) => (
            <Card {...item} key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
