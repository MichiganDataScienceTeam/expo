import Image from "next/image";

export default function RSVP() {
  return (
    <div className="bg-neutral-200 grid sm:grid-cols-10 grid-cols-5 p-6 max-w-screen-sm mt-6 mx-6 gap-3 text-black">
      <div className="text-left sm:col-span-9 col-span-4">
        <h1 className=" font-medium text-5xl mb-3">RSVP</h1>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://michigandatascienceteam.github.io/expo/rsvp.jpg"
            alt="RSVP"
            width={1200}
            height={1000}
          />
          <div className="flex flex-col justify-between">
            <p className="text-lg sm:block hidden">
              Join us for a fun night full of data science, free food, and free
              prizes
            </p>
            <div>
              <h3 className="font-medium sm:text-2xl text-md">
                April 19 @ 4:30 PM
              </h3>
              <h3 className="font-medium sm:text-2xl text-md">CCCB</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="border-3 border-black flex flex-col justify-center">
        <a
          href="https://tinyurl.com/ds-night-um"
          className="bg-neutral-300 text-black p-3 rounded-lg inline-block w-max hover:bg-black hover:text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          RSVP Here
        </a>
      </div>
    </div>
  );
}
