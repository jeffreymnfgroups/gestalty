"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
	value: number;
	suffix?: string;
	prefix?: string;
	decimals?: number;
	className?: string;
}

export default function AnimatedCounter({
	value,
	suffix = "",
	prefix = "",
	decimals = 0,
	className = "",
}: AnimatedCounterProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		damping: 50,
		stiffness: 100,
	});
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		const unsubscribe = springValue.on("change", (latest) => {
			setDisplayValue(Number(latest.toFixed(decimals)));
		});
		return () => unsubscribe();
	}, [springValue, decimals]);

	return (
		<motion.span ref={ref} className={className}>
			{prefix}
			{displayValue.toLocaleString()}
			{suffix}
		</motion.span>
	);
}

