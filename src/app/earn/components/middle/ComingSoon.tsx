import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="bg-white flex-1  rounded-[24px] px-[20px] flex justify-center items-center">
      <Image
        src="/earn-soon-bg.png"
        alt="Market Making Hedge"
        width={359}
        height={236}
        style={{ width: "100%", height: "auto" }}
      ></Image>
    </div>
  );
}
