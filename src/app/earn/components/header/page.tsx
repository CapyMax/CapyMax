"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import StrategyCard from "./strategyCard";
import TextInfo from "./textInfo";
import { atEarnPage } from "@/store/slice.ts/page";
export default function EarnHeader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(atEarnPage());
  }, []);
  return (
    <div className="bg-[url('/earn-header-bg.png')] h-[304px]  bg-cover bg-center relative">
      <TextInfo></TextInfo>
      <StrategyCard></StrategyCard>
    </div>
  );
}
