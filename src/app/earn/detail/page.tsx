"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { atHomePage } from "@/store/slice.ts/page";
import OperationsFn from "./components/operationsCard";
import StrategyCard from "./components/stratrgyCard";
const EarnDetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(atHomePage());
  }, []);
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="px-[80px] bg-[#EEF1F3]">
      <div
        className="py-[17.5px] flex items-center cursor-pointer"
        onClick={handleBack}
      >
        {" "}
        <Image
          src="/back-icon.svg"
          alt="token"
          width={20}
          height={20}
          style={{ width: "20px", height: "20px" }}
        />
        <span className="text-[#798186] font-[400] text-[14px]"> back</span>
      </div>
      <div className="flex items-start">
        <StrategyCard></StrategyCard>
        <OperationsFn></OperationsFn>
      </div>
    </div>
  );
};
export default EarnDetailPage;
