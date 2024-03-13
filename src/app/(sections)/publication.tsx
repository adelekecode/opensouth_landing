import Image from "next/image";
import SectionTitle from "~/components/section-title";
import DataSharingInAfrica from "~/assets/images/publications/data-sharing-in-africa.png";

const data = [
  {
    title: "Data sharing in Africa",
    body: "Abebe, R., Aruleba, K., Birhane, A., Kingsley, S., Obaido, G., Remy, S.L. and Sadagopan, S., 2021, March. Narratives and counternarratives on data sharing in Africa. In Proceedings of the 2021 ACM conference on fairness, accountability, and transparency (pp. 329-341).",
    image: DataSharingInAfrica,
    date: "2023",
    versions: [
      {
        name: "[Forbes version]",
        link: "https://www.forbes.com/sites/aparnadhinakaran/2021/05/06/if-data-is-the-new-oil-what-happening-to-its-precious-new-source/?sh=793d98e75fee&s=08",
      },
      {
        name: "[PLSC version]",
        link: "https://privacyscholars.org/plsc-history/plsc-2020/",
      },
      {
        name: "[VentureBeat version]",
        link: "https://venturebeat.com/business/ai-researchers-detail-obstacles-to-data-sharing-in-africa/",
      },
      {
        name: "[PML4DC@ICLR2020 version]",
        link: "https://pml4dc.github.io/iclr2020/program/pml4dc_14.html",
      },
    ],
  },
];

function Card({ title, body, image, date, versions }: (typeof data)[0]) {
  return (
    <div className="flex gap-4">
      <h3 className="text-sm font-medium text-white">{date}</h3>
      <div className="grid grid-cols-[50px,1fr] gap-4 [@media(max-width:560px)]:grid-cols-1 [@media(max-width:560px)]:gap-2">
        <figure className="w-full [@media(max-width:560px)]:w-[50px] aspect-square">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </figure>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-primary-50 text-sm font-semibold">{title}</h4>
            <p className="text-info-200 text-sm">{body}</p>
          </div>
          {versions && (
            <div className="flex items-center px-3 gap-4 flex-wrap">
              {versions.map((item, index) => (
                <a
                  key={index + 1}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Publication() {
  return (
    <div
      id="publication"
      className="p-8 py-16 [@media(max-width:560px)]:px-4 bg-primary-900"
    >
      <div className="mx-auto max-w-2xl flex flex-col gap-10">
        <header className="flex items-center justify-center">
          <SectionTitle className="text-white">Publications</SectionTitle>
        </header>
        <div className="flex flex-col gap-8">
          {data.map((item, index) => (
            <Card {...item} key={index + 2} />
          ))}
        </div>
      </div>
    </div>
  );
}
