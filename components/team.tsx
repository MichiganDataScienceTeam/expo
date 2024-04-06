import React from "react";
import Image from "next/image";
import Icon from "./icon";

interface IconJson {
  href: string;
  type: string;
}

interface Team {
  name: string;
  description: string;
  logo_path: string;
  icons: IconJson[];
}

const teams: Team[] = [
  {
    name: "Michigan Data Science Team",
    description:
      "Michigan Data Science Team (MDST) is the largest data science club at the University of Michigan, dedicated to equipping U-M students with the skills needed for data-driven careers.",
    logo_path: "/mdst.png",
    icons: [
      {
        href: "https://mdst.club/",
        type: "website",
      },
      {
        href: "https://www.linkedin.com/school/michigan-data-science-team/",
        type: "linkedin",
      },
      {
        href: "https://www.instagram.com/mdst_um/",
        type: "instagram",
      },
    ],
  },
  {
    name: "Statistics in the Community",
    description:
      "Statistics in the Community of Michigan (STATCOM) is a graduate student organization that provides statistical consulting services to local non-profit organizations.",
    logo_path: "/statcom.png",
    icons: [
      {
        href: "https://sph.umich.edu/biostat/statcom/",
        type: "website",
      },
      {
        href: "https://www.instagram.com/umichstats/?hl=en",
        type: "instagram",
      },
      {
        href: "https://x.com/statcom_um?t=4qxNoVnQqPbRbGZm1XfYhg&s=09",
        type: "twitter",
      },
    ],
  },
  {
    name: "Michigan AI Safety Initiative",
    description:
      "MAISI runs in-person cohorts of programs like AI Safety Fundamentals and Intro to ML Safety, as well as discussion meetings and social events. Both graduate and undergraduate students are welcome.",
    logo_path: "/maisi.png",
    icons: [
      {
        href: "https://maisi.club/",
        type: "website",
      },
      {
        href: "https://discord.com/invite/VWXBn2Yhxq",
        type: "discord",
      },
    ],
  },
];

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-none lg:auto-rows-max lg:grid-cols-1 p-5 border-2 rounded-lg text-center gap-2">
      <div className="flex justify-center">
        <Image
          className="lg:object-contain max-w-xs sm:block hidden"
          src={`https://michigandatascienceteam.github.io/expo/${team.logo_path}`}
          alt={team.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="lg:px-0 pl-3 lg:col-span-1 col-span-2">
        <h3 className="my-4 font-medium text-2xl">{team.name}</h3>
        <div className="flex flex-row justify-center gap-3 mb-3">
          {team.icons.map((icon, index) => (
            <a key={index} href={icon.href}>
              <Icon name={icon.type} />
            </a>
          ))}
        </div>
        <p className="font-light">{team.description}</p>
      </div>
    </div>
  );
}

export default function TeamPanel() {
  return (
    <div id="team" className="flex flex-col items-center align-middle">
      <h1 className="font-regular sm:text-5xl text-3xl mb-8">Clubs</h1>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-5 lg:max-w-screen-lg max-w-screen-sm">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
}
