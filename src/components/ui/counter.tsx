'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
};

export default Counter;