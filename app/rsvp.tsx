import Image from "next/image";

export default function RSVP() {
  return (
    <div>
      <h1 className="text-center font-medium text-6xl bg-slate-400">RSVP</h1>
      <Image src="/rsvp.jpg" alt="RSVP" width={800} height={600} />
    </div>
  );
}
