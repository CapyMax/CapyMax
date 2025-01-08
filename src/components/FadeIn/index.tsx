"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
 children: React.ReactNode;
 duration?: number | undefined;
 delay?: number | undefined;
 className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, duration = 0.5, delay = 0, className }) => {
 const [viewed, setViewed] = useState(false);
 const { ref, inView } = useInView({
   threshold: 0,
   delay,
 }); 

 useEffect(() => {
   if(inView && !viewed) {
     setViewed(true);
   }
 }, [inView, viewed])

 const fadeInVariants = {
   hidden: { opacity: 0, x: '15%' },
   visible: { opacity: 1, x: '0%' },
 };

 return (
   <motion.div
     initial="hidden"
     ref={ref}
     animate={inView || viewed ? "visible" : "hidden"}
     variants={fadeInVariants}
     transition={{ duration, delay, ease: 'easeInOut' }}
     className={className}
   >
     {children}
   </motion.div>
 );
};

export default FadeIn;