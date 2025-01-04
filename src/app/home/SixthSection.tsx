import React from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RoundedButton from "@/components/RoundedButton";


const faqData = [
  {
    question: "Where Do The Returns Of The Product Come From?",
    answer:
      "With the currently issued products, we invest your funds in various secure and mature financial projects, increasing liquidity to earn fees such as funding pool opening and closing fees, price impact fees, borrowing fees, and trading fees.",
  },
  {
    question: "My Investment Risks May Come From Where?",
    answer: "",
  },
  {
    question: "How Is The Platform's Fund Security Ensured?",
    answer: "",
  },
  {
    question: "Do You Have The Right To Take My Funds?",
    answer: "",
  },
  {
    question: "What Kind Of Returns Can I Expect?",
    answer: "",
  },
  {
    question: "When can I withdraw my funds?",
    answer: "",
  },
];

export function SixthSection() {
  return (
    <div className="relative !w-full h-[600px] bg-[#141414] overflow-hidden">
      <div className="flex flex-col w-[400px] items-start gap-6 absolute top-[54px] left-20">
        {/* <Badge
          variant="outline"
          className="bg-transparent border-[#ffffff1f] px-3 py-2 rounded-full"
        >
          <span className="text-xs text-[#ffffff99] tracking-[0.72px]">
            DEVELOPERS
          </span>
        </Badge> */}

        <RoundedButton className="text-[12px]">DEVELOPERS</RoundedButton>

        <h1 className="text-5xl font-medium text-white tracking-[2.40px] leading-[57.6px]">
          FAQ
        </h1>
      </div>

      <div className="flex flex-col w-[840px] items-start gap-3 absolute top-12 left-[520px]">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] font-medium text-white">
                    Q{index + 1}.{" "}
                  </span>
                  <span className="text-[16px] font-medium text-white">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent>
                  <p className="text-[14px] text-[#aab8c1] opacity-70 leading-[1.6]">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="absolute w-[354px] bottom-[-32px] left-0">
        <Image src="/section-6-bg.svg" alt="Decorative illustration" className="w-[488px] h-[207px]" width={488} height={207} />
      </div>
    </div>
  );
}
