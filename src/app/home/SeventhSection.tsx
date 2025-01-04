import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";


const communityItems = [
  {
    icon: <Image src="/telegram.svg" alt="File icon" width={16} height={16} className="w-8 h-8 text-white" />,
    title: "News And Updates.",
    buttonText: "Telegram",
    iconBg: "bg-black",
  },
  {
    icon: <Image src="/twitter.svg" alt="Twitter icon" width={16} height={16} className="w-8 h-8 text-white" />,
    title: "Follow The Conversation.",
    buttonText: "X. Com",
    iconBg: "bg-black",
  },
  {
    icon: <Image src="/mail.svg" alt="Mail icon" width={16} height={16} className="w-8 h-8 text-white" />,
    title: "Send Us An Email",
    buttonText: "Xxxxxxxxx. Com",
    iconBg: "bg-black",
  },
];

export function SeventhSection() {
  return (
    <div className="w-full max-!w-full px-20 py-[60px]">
      <div className="flex flex-col items-center gap-12 max-w-[1280px] mx-auto">
        <h1 className="text-[32px] leading-[38.4px] font-medium text-black text-center">
          Join the community
        </h1>

        <Card className="w-full bg-black rounded-3xl">
          <CardContent className="flex items-center gap-8 p-8">
            {communityItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex-1">
                  <div className="flex flex-col items-start gap-8">
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-[14px] ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>

                    <div className="flex flex-col items-start gap-4 w-full">
                      <p className="opacity-40 text-white text-sm leading-[22.4px]">
                        {item.title}
                      </p>

                      <div className="flex w-[180px] h-10 items-center justify-between px-4 rounded-[88px] border border-[#ffffff33]">
                        <span className="text-white text-xs font-medium">
                          {item.buttonText}
                        </span>
                        <Image src="/network.png" alt="Arrow up right" width={16} height={16} className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                {index < communityItems.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="bg-white/20 h-auto"
                  />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
