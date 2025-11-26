"use client";
import { motion } from "framer-motion";

const achievements = [
	"Rahul just achieved 95th percentile in mock test",
	"Priya scored 98% in her latest assessment",
	"Amit completed 1000+ practice questions",
	"Sarah improved her rank by 200 positions",
	"Karan achieved top 5% in NEET preparation",
];

export default function SocialProofTicker() {
	return (
		<div className="w-full overflow-hidden border-t border-secondry/10 py-3">
			<motion.div
				className="flex gap-8 whitespace-nowrap"
				animate={{
					x: [0, -50 * achievements.length + "%"],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear",
				}}>
				{[...achievements, ...achievements].map((achievement, index) => (
					<div
						key={index}
						className="flex items-center gap-2 text-sm text-secondry/70 font-NeueMontreal">
						<span className="w-2 h-2 bg-heroPrimary rounded-full animate-pulse" />
						{achievement}
					</div>
				))}
			</motion.div>
		</div>
	);
}

