"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  textClassName?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, textClassName }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  
  // Accelerate the reveal to finish by 70% of the scroll container
  const adjustedProgress = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 flex h-[50%] items-center bg-transparent"
        }
      >
        <p
          className={cn(
            "flex flex-wrap",
            textClassName
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={adjustedProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  // Add a subtle blur transition
  const filter = useTransform(progress, range, ["blur(2px)", "blur(0px)"])
  
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      {/* Ghost text with fixed low opacity */}
      <span className="absolute opacity-10 text-black dark:text-white">{children}</span>
      {/* Revealed text with full opacity and transition */}
      <motion.span
        style={{ opacity: opacity, filter: filter }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  )
}
