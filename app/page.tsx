import Image from "next/image";
import RSVP from "./rsvp";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-medium text-6xl">
        Data Science Night @ U-M
      </h1>
      <RSVP />
    </div>
  );
}
