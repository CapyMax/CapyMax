import React from 'react'
import Image from 'next/image'

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/FadeIn';
import { Tooltip } from '@/components/tooltip';


const securityData = [
  {
    title: "OPEN SOURCE",
    description:
      "Allow Developers Worldwide To Engage In Continuous Peer Review And Improvement",
    buttons: [
      {
        icon: <Image src="/github.svg" alt="github" className="h-6 w-6 max-md:!h-[24px] max-md:!w-[24px]" width={24} height={24} />,
        label: "Github",
      },
    ],
  },
  {
    title: "TRANSPARENT PUBLICITY",
    description:
      "Invest In Security, Including Audits, Bug Bounties, And Expert Reviews.",
  },
  {
    title: "SECURITY AUDITS",
    description: "Simple Functionality With Security Audits For Every Update",
    buttons: [
      {
        label: "Audit Report",
        icon: null
      }
    ],
  },
]

export default function FourthSection() {
  return (
    <div className='relative !w-full h-[1230px] max-md:h-[1224px] overflow-hidden'>
      <Image src="/section-4-bg.png" alt="section-4-bg" className="max-md:hidden absolute translate-y-[-365px] !w-full !h-[2048px]" width={1440} height={2048} />
      <Image src="/section-4-bg-mobile.png" alt="section-4-bg" className="hidden max-md:block absolute !w-full max-md:h-[1224px]" width={375} height={1224} />
      <FadeIn className='absolute top-[262px] left-[460px] max-md:top-[235px] max-md:left-[41px] w-[540px] max-md:w-[293px] z-1 text-[32px] max-md:text-[20px] text-white text-center'>
        <div>Supports one-click deposits and withdrawals, </div>
        <div>allowing you to easily enjoy </div>
        <div>multi-strategy, multi-chain returns.</div>
      </FadeIn>
      <div className="flex flex-col w-[1280px] items-start gap-12 max-md:gap-[32px] absolute top-[800px] left-[80px] z-1 max-md:w-[311px] max-md:top-[641px] max-md:left-[32px]">
        <div className="flex flex-col items-start gap-[24px] max-md:gap-[12px] w-full">
          <Badge variant="outline" className="rounded-full px-3 py-2 max-md:px-[12px] max-md:py-[12px]">
            <span className="text-xs max-md:text-[12px] text-muted-foreground tracking-[0.72px] uppercase">
              Reliable
            </span>
          </Badge>

          <FadeIn className="text-[32px] max-md:text-[20px] leading-[38.4px] max-md:leading-[24px] font-medium">
            Security and transparency
          </FadeIn>
        </div>

        <div className="grid grid-cols-3 max-md:flex max-md:flex-col gap-[42px] max-md:gap-[32px] w-full">
          {securityData.map((section, index) => (
            <div key={section.title} className='flex max-md:flex-col gap-[42px] max-md:gap-[32px]'>
              <Card className="border-none shadow-none">
                <CardContent className="p-0 space-y-8">
                  <h3 className="font-semibold text-2xl max-md:text-[16px] leading-7 max-md:leading-[16px]">
                    {section.title}
                  </h3>

                  <div className="space-y-4 max-md:space-y-[12px]">
                    <p className="text-sm max-md:text-[14px] leading-[22.4px] max-md:leading-[1.5] opacity-40">
                      {section.description}
                    </p>

                    {section.buttons && (
                      <div className="flex gap-3 max-md:gap-[12px]">
                        {section.buttons.map((button, buttonIndex) => (
                          <Tooltip key={buttonIndex} placement='top' content={<div className='rounded-full bg-[#F3F5F8] px-3 py-1 text-[12px] font-semibold'>COMING SOON...</div>}>
                            <Button
                              variant="outline"
                              className="h-10 max-md:h-[40px] max-md:w-[100px] rounded-full hover:bg-[#EEF1F3] flex items-center justify-center"
                            >
                              {button.icon}
                              <span className="text-xs max-md:text-[12px] leading-[1]">{button.label}</span>
                            </Button>
                          </Tooltip>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              {index < securityData.length - 1 && (
                <>
                  <Separator orientation="vertical" className="block max-md:hidden h-52" />
                  <Separator orientation="horizontal" className="h-[1px] max-md:w-[311px] max-md:block hidden" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
