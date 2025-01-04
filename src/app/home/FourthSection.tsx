import React from 'react'
import Image from 'next/image'
import { Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';


const securityData = [
  {
    title: "OPEN SOURCE",
    description:
      "Allow Developers Worldwide To Engage In Continuous Peer Review And Improvement",
    buttons: [
      {
        icon: <Github className="h-6 w-6" />,
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
      },
      {
        label: "公司logo",
        icon: null
      },
    ],
  },
]

export default function FourthSection() {
  return (
    <div className='relative !w-full h-[1230px] overflow-hidden'>
      <Image src="/section-4-bg.png" alt="section-4-bg" className="absolute translate-y-[-365px] !w-full !h-[2048px]" width={1440} height={2048} />
      <div className='absolute top-[262px] left-[460px] w-[520px] z-1 text-[32px] text-white text-center'>
        <div>Supports one-click deposits and withdrawals, </div>
        <div>allowing you to easily enjoy </div>
        <div>multi-strategy, multi-chain returns.</div>
      </div>
      <div className="flex flex-col w-full max-w-[1280px] items-start gap-12 absolute top-[800px] left-[80px] z-1">
        <div className="flex flex-col items-start gap-[24px] w-full">
          <Badge variant="outline" className="rounded-full px-3 py-2">
            <span className="text-xs text-muted-foreground tracking-[0.72px] uppercase">
              Reliable
            </span>
          </Badge>

          <h2 className="text-[32px] leading-[38.4px] font-medium">
            Security and transparency
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-[42px] w-full">
          {securityData.map((section, index) => (
            <div key={section.title} className='flex gap-[42px]'>
              <Card className="border-none shadow-none">
                <CardContent className="p-0 space-y-8">
                  <h3 className="font-semibold text-2xl leading-7">
                    {section.title}
                  </h3>

                  <div className="space-y-4">
                    <p className="text-sm leading-[22.4px] opacity-40">
                      {section.description}
                    </p>

                    {section.buttons && (
                      <div className="flex gap-3">
                        {section.buttons.map((button, buttonIndex) => (
                          <Button
                            key={buttonIndex}
                            variant="outline"
                            className="h-10 rounded-[88px]"
                          >
                            {button.icon}
                            <span className="text-xs">{button.label}</span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              {index < securityData.length - 1 && (
                  <Separator orientation="vertical" className="h-52" />
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
