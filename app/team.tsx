import React from "react";
import Image from "next/image";

interface Icon {
  href: string;
  img_path: string;
}

export interface Team {
  name: string;
  description: string;
  logo_path: string;
  icons: Icon[];
}

const teams: Team[] = [
  {
    name: "Michigan Data Science Team",
    description:
      "Michigan Data Science Team (MDST) is the largest data science club at the University of Michigan, dedicated to equipping U-M students with the skills needed for future data-driven careers.",
    logo_path: "/mdst.png",
    icons: [
      {
        href: "https://mdst.club/",
        img_path: "/mdst_logo.jpg",
      },
      {
        href: "https://www.linkedin.com/school/michigan-data-science-team/mycompany/",
        img_path: "/linkedin.png",
      },
      {
        href: "https://www.instagram.com/um-mdst/",
        img_path: "/instagram.png",
      },
    ],
  },
  {
    name: "Statistics in the Community",
    description:
      "Statistics in the Community of Michigan (STATCOM) is a student organization that provides statistical consulting services to local non-profit organizations.",
    logo_path: "/statcom.png",
    icons: [
      {
        href: "https://sph.umich.edu/biostat/statcom/",
        img_path: "/statcom.png",
      },
      {
        href: "https://www.instagram.com/umichstats/?hl=en",
        img_path: "/instagram.png",
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
        img_path: "/maisi.png",
      },
      {
        href: "https://discord.com/invite/VWXBn2Yhxq",
        img_path: "/discord.png",
      },
    ],
  },
];

function Icon({ icon }: { icon: Icon }) {
  return (
    <a href={icon.href}>
      <Image src={icon.img_path} alt={icon.href} width={45} height={45} />
    </a>
  );
}

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 lg:auto-rows-max lg:grid-cols-1 p-5 bg-gray-700 text-center gap-2">
      <Image
        className="lg:object-contain sm:block hidden"
        src={team.logo_path}
        alt={team.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
      <div className="lg:px-0 pl-3 lg:col-span-1 col-span-2">
        <h3 className="my-3 font-medium text-2xl">{team.name}</h3>
        <div className="flex flex-row justify-center gap-3 mb-3">
          {team.icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))}
        </div>
        <p className="font-light">{team.description}</p>
      </div>
    </div>
  );
}

export default function TeamPanel() {
  return (
    <div className="flex flex-col items-center mt-7 align-middle">
      <h1 className="font-regular text-3xl">Who We Are</h1>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-5 mt-4 lg:max-w-screen-lg max-w-screen-sm">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
}
