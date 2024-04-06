import SectionTitle from "~/components/section-title";
import ProfileCard from "~/components/about/profile-card";

//? data
import leadershipTeam from "../../utils/data/team/leadership-team";
import advisoryTeam from "../../utils/data/team/advisory-team";
import contributors from "~/utils/data/team/contributors";
import collaborators from "~/utils/data/team/collaborators";

const teams = [
  { title: "Leadership", data: leadershipTeam },
  { title: "Collaborators", data: collaborators },
  { title: "Contributors", data: contributors },
  { title: "Advisory", data: advisoryTeam },
];

export default function About() {
  return (
    <div id="about" className="bg-[#E7F3F7] p-8 py-16 tablet:px-4">
      <div className="flex flex-col gap-10 max-w-maxAppWidth mx-auto">
        <header className="flex items-center justify-center">
          <SectionTitle>About</SectionTitle>
        </header>
        <div className="flex flex-col gap-10">
          <p className="text-info-900 largeMobile:text-sm">
            At Open South, we are committed to the principles of openness and
            transparency. All the data available on Open South is freely
            downloadable, enabling easy sharing and utilization by our users. We
            firmly believe in the power of collaboration and the transformative
            impact it can have on societies. By encouraging the sharing of data,
            we promote interdisciplinary research, evidence-based
            decision-making, and innovation across multiple sectors.
          </p>
          {teams.map((team, index) => (
            <div className="flex flex-col gap-6" key={index + 1}>
              <header className="flex flex-col">
                <h2 className="text-xl font-medium text-info-950 largeMobile:text-lg">
                  {team.title}
                </h2>
                <span className="w-12 h-[2px] bg-primary-500 rounded-full" />
              </header>
              <main className="grid laptopAndAbove:grid-cols-4 grid-cols-3 tablet:grid-cols-2 [@media(width<=500px)]:!grid-cols-1 gap-4 ">
                {team.data.map((item, index) => (
                  <ProfileCard {...item} key={index + 1} />
                ))}
              </main>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
