"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import { SixthSection } from "./SixthSection";
import { SeventhSection } from "./SeventhSection";
import { atHomePage } from "@/store/slice.ts/page";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(atHomePage());
  }, []);

  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SixthSection />
      <SeventhSection />
    </>
  );
}
