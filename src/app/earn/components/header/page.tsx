"use client";
import React, { useContext, useEffect } from "react";
import StrategyCard from "./strategyCard";
import TextInfo from "./textInfo";
import { BackgroundContext } from "@/app/layout";

export default function EarnHeader() {
  const setBackgroundImage = useContext(BackgroundContext);
  useEffect(() => {
    console.log(setBackgroundImage);

    if (!setBackgroundImage) return;
    setBackgroundImage("true");
    return () => {
      setBackgroundImage(null);
    };
  }, [setBackgroundImage]);
  return (
    <div className="bg-[url('/earn-header-bg.png')] h-[304px]  bg-cover bg-center relative">
      <TextInfo></TextInfo>
      <StrategyCard></StrategyCard>
    </div>
  );
}
