import portrait from "@/../public/portrait.jpg";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="z-10 flex justify-center mt-16 basis-3/5 md:mt-32 md:order-2">
      <div className="relative z-0 hidden ml-20 lg:flex ">
        <Image
          alt="profile"
          src={portrait}
          className="rounded-t-full max-w-[300px] shadow-2xl shadow-black border-4 duration-500 border-blue border-double hover:brightness-75"
        />
      </div>
      <div className="flex lg:hidden">
        <Image
          alt="profile"
          src={portrait}
          className="rounded-t-full max-w-[200px] shadow-2xl shadow-black border-4 duration-500 border-blue border-double hover:brightness-75"
        />
      </div>
    </div>
  );
}
