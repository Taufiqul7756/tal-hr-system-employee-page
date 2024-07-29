import Image from "next/image";
import busy from "../../../public/images/busy.png";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex items-center bg-basic px-5 rounded-md">
      <div className="flex items-center justify-center bg-activeBtn text-black text-xl font-bold py-1 px-2 mr-6 ml-2 ">
        Hi
      </div>
      <div className="h-full py-12 px-5 border-l-2 border-dotted border-white mx-4"></div>

      <div className="flex-grow flex flex-col justify-center text-white">
        <div className="text-xl font-bold">Today</div>
        <div className="text-3xl font-bold">July 29, 2024 </div>
      </div>
      <div className=" absolute left-[800px] top-[105px] ">
        <Image
          src={busy}
          width={230}
          height={200}
          alt="Busy"
          layout="cover"
          objectFit="fit"
        />
      </div>
      <div className="flex items-center justify-center flex-col  text-white p-4 ml-4">
        <div className="text-sm font-bold">Clock in</div>
        <Button className="bg-white text-black font-bold px-4 py-2 rounded mt-2">
          Start
        </Button>
      </div>
    </div>
  );
}
