import RSVP from "@/components/rsvp";
import TeamPanel from "@/components/team";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-7">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1
          id="home"
          className="text-center font-medium sm:text-6xl text-4xl py-10 text-pretty"
        >
          DATA SCIENCE NIGHT @ <span>U-M</span>
        </h1>
        <RSVP />
        <div
          id="about"
          className="flex flex-col text-center items-center my-10 max-w-screen-md"
        >
          <h1 className="font-regular sm:text-5xl text-3xl mb-8">Event</h1>
          <p className="mb-5">
            The Michigan Institute for Data Science&apos;s first Data Science
            Night spotlights MDST, MAISI and STATCOM&apos;s collaborative
            efforts, featuring projects from MDST and STATCOM, ranging from
            deepfake detection to nonprofit data analysis. It also includes an
            AI ethical simulation workshop by MAISI, underscoring the
            significance of ethics and responsible data use in data science.
          </p>
          <p className="text-xl font-bold">
            Join us on April 19th, 2024 at the Central Campus Classroom Building
            from 4:30 PM to 8:15 PM.
          </p>
          <Image
            className="my-10"
            src="flyer.png"
            alt="event flyer"
            width={400}
            height={900}
          />
        </div>
      </div>
      <TeamPanel />
      <footer className="border-t-2 px-5 flex flex-row justify-center align-middle pt-6 mt-10">
        <p className="md:text-xl text-md pr-10 font-bold">DSN @ U-M</p>
        <div className="w-48">
          <Image
            className="object-contain"
            src="https://michigandatascienceteam.github.io/expo/midas.png"
            alt="MIDAS logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </footer>
    </div>
  );
}
