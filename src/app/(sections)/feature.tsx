import Image from "next/image";
import SectionTitle from "~/components/section-title";
import MapImage from "~/assets/images/features/map.png";
import TopCreateDatasetImage from "~/assets/images/features/create-datasets/top.png";
import BottomCreateDatasetImage from "~/assets/images/features/create-datasets/bottom.png";
import CreateOrganizationImage from "~/assets/images/features/create-organization.png";

export default function Feature() {
  return (
    <section
      id="features"
      className="bg-[#F6F6F7] p-16 tabletAndBelow:px-6 largeMobile:!px-4"
    >
      <div className="flex flex-col gap-10 max-w-maxAppWidth mx-auto">
        <header className="flex items-center justify-center">
          <SectionTitle>Features</SectionTitle>
        </header>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl font-medium text-info-950 leading-10 text-center w-[65%] tabletAndBelow:w-full tablet:text-2xl largeMobile:!text-xl tablet:mb-4">
            Data sharing expands knowledge and contributes to a better science
          </h2>
          <div className="flex flex-col gap-12 [&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-8 [&>div]:tabletAndBelow:gap-4 [&>div]:items-center [&_*]:!text-info-950 [&>div]:tablet:flex [&>div]:tablet:flex-col-reverse [&>div>div]:tablet:self-start">
            <div>
              <div className="flex flex-col gap-3 largeMobile:gap-2">
                <h3 className="text-2xl tabletAndBelow:text-xl font-bold largeMobile:!text-lg">
                  Explore Data in the Global South
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-base tabletAndBelow:text-sm">
                    Explore data across several Global South countries with our
                    interactive map feature.
                  </p>
                  <hr className="w-[80%] h-[1.5px] bg-info-300" />
                  <ul className="flex flex-col gap-2 [&>li]:before:bg-primary-300 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:before:p-[4px] [&>li]:before:rounded-full [&_p]:text-base [&_p]:tabletAndBelow:text-sm">
                    <li>
                      <p>Map showing 100+ countries in the Global South.</p>
                    </li>
                    <li>
                      <p>Easy navigation.</p>
                    </li>
                    <li>
                      <p>
                        Pins to show the number of datasets related to a
                        country.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <Image
                src={MapImage}
                alt="picture of a map"
                className="w-full shadow-feat-img rounded-lg tablet:row-span-1"
              />
            </div>
            <div className="tablet:!flex-col">
              <div className="flex w-full flex-col gap-4">
                <Image
                  src={TopCreateDatasetImage}
                  alt="Top part of create-datasets page"
                  className="w-full shadow-feat-img rounded-lg"
                />
                <Image
                  src={BottomCreateDatasetImage}
                  alt="Bottom part of create-datasets page"
                  className="w-full shadow-feat-img rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3 largeMobile:gap-2">
                <h3 className="text-2xl tabletAndBelow:text-xl font-bold largeMobile:!text-lg">
                  Easy Dataset Curation
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-base tabletAndBelow:text-sm">
                    Here at Open South, you can create datasets easily by just
                    filling the required information. Preview your submission
                    and make adjustments as you please before uploading.
                  </p>
                  <hr className="w-[80%] h-[1.5px] bg-info-300" />
                  <ul className="flex flex-col gap-2 [&>li]:before:bg-primary-300 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:before:p-[4px] [&>li]:before:rounded-full [&_p]:text-base [&_p]:tabletAndBelow:text-sm">
                    <li>
                      <p>
                        Seamlessly create datasets and preview before uploading.
                      </p>
                    </li>
                    <li>
                      <p>
                        User-friendly experience from data input to completion.
                      </p>
                    </li>
                    <li>
                      <p>Easily view analytics for uploaded datasets.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3 largeMobile:gap-2">
                <h3 className="text-2xl tabletAndBelow:text-xl font-bold largeMobile:!text-lg">
                  Organization Dataset Curation
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-base tabletAndBelow:text-sm">
                    Streamline data management within your organization. Create
                    and organize datasets within specific organizational
                    structures, facilitating collaboration and efficiency.
                  </p>
                  <hr className="w-[80%] h-[1.5px] bg-info-300" />
                  <ul className="flex flex-col gap-2 [&>li]:before:bg-primary-300 [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:before:p-[4px] [&>li]:before:rounded-full [&_p]:text-base [&_p]:tabletAndBelow:text-sm">
                    <li>
                      <p>
                        Add and organise datasets within specific organisations.
                      </p>
                    </li>
                    <li>
                      <p>Create your own organisation for others to join.</p>
                    </li>
                    <li>
                      <p>Join organizations that pique your interest.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <Image
                src={CreateOrganizationImage}
                alt="create-organization page"
                className="w-full shadow-feat-img rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
