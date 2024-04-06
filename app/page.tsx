import RSVP from "./rsvp";
import Navbar from "./navbar";
import TeamPanel from "./team";

export default function Home() {
  return (
    <div className="p-7">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-center font-medium text-6xl py-10 text-pretty">
          DATA SCIENCE NIGHT @ <span>U-M</span>
        </h1>
        <RSVP />
        <div id="about" className="mt-8 text-center max-w-screen-md">
          <h1 className="font-regular text-3xl">About Data Science Night</h1>
          <p>
            The Michigan Institute for Data Science&apos;s first Data Science
            Night spotlights MDST, MAISI and STATCOM&apos;s collaborative
            efforts, featuring projects from MDST and STATCOM, ranging from
            deepfake detection to nonprofit data analysis. It also includes an
            AI ethical simulation workshop by MAISI, underscoring the
            significance of ethics and responsible data use in data science.
          </p>
        </div>
      </div>
      <TeamPanel />
    </div>
  );
}
