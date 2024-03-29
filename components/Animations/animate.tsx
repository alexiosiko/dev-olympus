"use client"

import { useAnimate, motion } from "framer-motion"
import React from "react";

export default function Animate({ children, initial = { y: 100, opacity: 0 }, delay = 0.3, className }: { 
	children: React.ReactNode,
	initial?: {},
	delay?: number,
	className?: string,
}) {
	const [scope, animate] = useAnimate();

	return (
		<motion.div
			className={className}
			ref={scope}
			initial={initial}
			onViewportEnter={() => animate(scope.current, { y: 0, x: 0, opacity: 100}, { delay: delay})}
		>
			{children}
		</motion.div>
	)
}