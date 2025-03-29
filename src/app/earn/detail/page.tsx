"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { atHomePage } from "@/store/slice.ts/page";
import OperationsFn from "./operationsCard";
const EarnDetailPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(atHomePage());
  }, []);

  return (
    <div className="relative px-[80px] h-[100vh] bg-[#EEF1F3]">
      <OperationsFn></OperationsFn>
    </div>
  );
};
export default EarnDetailPage;
