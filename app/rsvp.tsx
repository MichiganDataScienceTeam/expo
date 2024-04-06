import Image from "next/image";

export default function RSVP() {
  return (
    <div className="bg-sky-400 grid grid-cols-10 p-6 max-w-screen-sm mt-6 mx-6 gap-1">
      <div className="text-left col-span-9">
        <h1 className=" font-medium text-5xl mb-3">RSVP</h1>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/rsvp.jpg" alt="RSVP" width={1200} height={1000} />
          <div className="flex flex-col justify-between">
            <p className="text-lg sm:block hidden">
              Join us for a fun night full of data science, free food, and free
              prizes
            </p>
            <div>
              <h3 className="font-medium text-2xl">April 19 | 4:30 PM </h3>
              <h3 className="font-medium text-2xl">CCCB</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="border-3 border-black flex flex-col justify-center">
        <button className="bg-sky-500 text-white p-3 rounded-lg rotate-90 w-max">
          RSVP
        </button>
      </div>
    </div>
  );
}
