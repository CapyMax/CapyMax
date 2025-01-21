import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Globe from "@/components/icons/Globe";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Tooltip } from '@/components/tooltip';

const socialLinks = [
  {
    link: "https://x.com/Capy_Max",
    icon: <Image src="/twitter.svg" alt="Twitter icon" width={16} height={16} className="w-8 h-8 max-md:w-[28px] max-md:h-[28px]" />,
    title: "Follow The Conversation.",
    label: "@capy_max",
  },
  {
    link: null,
    icon: <Image src="/telegram.svg" alt="Twitter icon" width={16} height={16} className="w-8 h-8 max-md:w-[28px] max-md:h-[28px]" />,
    title: "News And Updates.",
    label: "Telegram",
  },
];

export function SeventhSection() {
  return (
    <div className="w-full pb-[80px] max-md:pb-[32px]">
      <FadeIn className="text-center text-[32px] max-md:text-[20px] font-semibold mt-[60px] mb-[48px] max-md:mt-[32px] max-md:mb-[24px] mx-auto w-fit">Join the community</FadeIn>
      <Card className="flex max-md:flex-col max-md:w-[311px] mx-auto w-[800px] items-center gap-8 max-md:gap-[32px] p-8 max-md:p-[32px] bg-[#141414] rounded-3xl max-md:rounded-[24px]">
        {socialLinks.map((item, index) => (
          <React.Fragment key={item.label}>
            <CardContent className="flex flex-col gap-8 max-md:gap-[24px] flex-1 items-center">
              <div className="w-14 h-14 max-md:w-[48px] max-md:h-[48px] flex items-center justify-center bg-[#141414]">
                {item.icon}
              </div>

              <div className="flex flex-col gap-4 max-md:gap-[16px] w-full items-center">
                <p className="opacity-40 font-normal text-white text-sm max-md:text-[12px] text-center leading-[22.4px]">
                  {item.title}
                </p>

                {item.link ? (
                  <a href={item.link} target="_blank">
                    <Button
                      variant="outline"
                      className="w-[180px] max-md:w-[180px] h-10 max-md:h-[32px] justify-between px-4 max-md:px-[12px] rounded-full border-[#ffffff33] text-white bg-transparent hover:text-black hover:bg-white"
                    >
                      <span className="text-xs max-md:text-[12px] font-medium">{item.label}</span>
                      <Globe className="max-md:!w-[14px] max-md:!h-[14px]" />
                    </Button>
                  </a>
                ) : (
                  <Tooltip placement="top" content={<div className='rounded-full bg-[#F3F5F8] px-3 py-1 text-[12px] font-semibold'>COMING SOON...</div>}>
                    <Button
                      variant="outline"
                      className="w-[180px] max-md:w-[180px] h-10 max-md:h-[32px] justify-between px-4 max-md:px-[12px] rounded-full border-[#ffffff33] text-white bg-transparent hover:text-black hover:bg-white"
                    >
                      <span className="text-xs max-md:text-[12px] font-medium">{item.label}</span>
                      <Globe className="max-md:!w-[14px] max-md:!h-[14px]" />
                    </Button>
                  </Tooltip>
                )}
              </div>
            </CardContent>

            {index === 0 && (
              <>
                <Separator
                  orientation="vertical"
                  className="max-md:hidden h-[166px] opacity-[0.08] bg-white"
                />
                <Separator
                  orientation="horizontal"
                  className="hidden max-md:block max-md:w-[247px] opacity-[0.08] bg-white"
                />
              </>
            )}
          </React.Fragment>
        ))}
      </Card>
    </div>
  );
}