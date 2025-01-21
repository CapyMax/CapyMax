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
    question: "Where do the returns of the product come from?",
    answer:
      "Through the currently issued products, we invest your funds in various secure and mature financial projects, enhancing liquidity to earn fees such as trading fees, funding fees, borrowing fees, and liquidation fees.",
  },
  {
    question: "My investment risks may come from where?",
    answer: "The main risks come from the price decline of native tokens (excluding USDC) or losses due to contract attacks.",
  },
  {
    question: "How is the platform's fund security ensured?",
    answer: "Please note that all on-chain products carry risks. We will control risks as much as possible and continue enhancing security measures. We commit that every product update will be re-examined by security audit agencies/experts.",
  },
  {
    question: "Do you have the right to take my funds?",
    answer: "We do not have the authority to take your funds. We will only invest them in areas of the market that offer the best risk-reward balance.",
  },
  {
    question: "What kind of returns can I expect?",
    answer: "Generally, you can earn returns that exceed most similar products, while taking on the same level of risk. The specific returns depend on the product strategy.",
  },
  {
    question: "When can I withdraw my funds?",
    answer: "It depends on the product strategy and transaction rules. Typically, the withdrawal process will be completed, and the funds will reach your account within 7 days.",
  },
];

export function SixthSection() {
  return (
    <div className="relative w-full h-[600px] max-md:h-auto max-md:p-[32px] max-md:pb-[133px] bg-[#141414] overflow-hidden">
      <div className="flex flex-col w-[400px] items-start gap-6 max-md:gap-[12px] absolute max-md:static top-[54px] left-20">
        <RoundedButton>DEVELOPERS</RoundedButton>

        <h1 className="text-5xl max-md:text-[20px] font-medium text-white tracking-[2.40px] leading-[57.6px] max-md:leading-[28.8px]">
          FAQ
        </h1>
      </div>

      <div className="max-md:mt-[12px] max-md:w-full max-md:static w-[840px] absolute top-12 left-[520px]">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="hover:text-[#798186] max-md:hover:text-white text-white text-left">
                  <span className="inline text-[28px] max-md:text-[18px] font-medium">
                    Q{index + 1}.{" "}
                  </span>
                  <span className="inline text-[16px] max-md:text-[12px] font-medium">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent>
                  <p className="text-[14px] max-md:text-[12px] text-[#aab8c1] opacity-70 leading-[1.6]">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="block max-md:hidden absolute w-[355px] bottom-[-32px] left-0">
        <Image src="/section-6-bg.svg" alt="Decorative illustration" className="w-[488px] h-[207px]" width={488} height={207} />
      </div>

      <div className="absolute bottom-0 left-0 hidden max-md:block">
        <Image src="/section-6-bg-mobile.svg" alt="Decorative illustration" className="max-md:w-[224px] max-md:h-[90px]" width={224} height={90} />
      </div>
    </div>
  );
}
