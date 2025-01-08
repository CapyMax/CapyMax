import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Globe from "@/components/icons/Globe";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const socialLinks = [
  {
    icon: <Image src="/twitter.svg" alt="Twitter icon" width={16} height={16} className="w-8 h-8 text-white" />,
    title: "Follow The Conversation.",
    label: "@capy_max",
  },
  {
    icon: <Image src="/telegram.svg" alt="Twitter icon" width={16} height={16} className="w-8 h-8 text-white" />,
    title: "News And Updates.",
    label: "Telegram",
  },
];

export function SeventhSection() {
  return (
    <div className="w-full pb-[80px]">
      <FadeIn className="text-center text-[32px] font-semibold mt-[60px] mb-[48px] mx-auto w-[500px]">Join the community</FadeIn>
      <Card className="mx-auto flex w-[800px] items-center gap-8 p-8 bg-[#141414] rounded-3xl">
        {socialLinks.map((item, index) => (
          <React.Fragment key={item.label}>
            <CardContent className="flex flex-col gap-8 flex-1 items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#141414] rounded-[14px]">
                {item.icon}
              </div>

              <div className="flex flex-col gap-4 w-full items-center">
                <p className="opacity-40 font-normal text-white text-sm text-center leading-[22.4px]">
                  {item.title}
                </p>

                <Button
                  variant="outline"
                  className="w-[180px] h-10 justify-between px-4 rounded-[88px] border-[#ffffff33] text-white bg-transparent hover:text-black hover:bg-white"
                >
                  <span className="text-xs font-medium">{item.label}</span>
                  <Globe />
                </Button>
              </div>
            </CardContent>

            {index === 0 && (
              <Separator
                orientation="vertical"
                className="h-[166px] opacity-[0.08] bg-white"
              />
            )}
          </React.Fragment>
        ))}
      </Card>
    </div>
  );
}