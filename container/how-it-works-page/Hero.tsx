"use client";
import { motion } from "framer-motion";

const heroAnimations = {
	container: {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.7 } },
	},
	item: {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
	},
};

export default function Hero() {
	return (
		<section className="w-full padding-x py-[120px] sm:py-[140px] lg:py-[160px] flex items-center justify-center bg-gradient-to-b from-offWhite to-lightBeige">
			<div className="max-w-[1200px] mx-auto text-center">
				<motion.div
					variants={heroAnimations.container}
					initial="initial"
					animate="animate"
					className="flex flex-col items-center gap-6"
				>
					<motion.h1
						variants={heroAnimations.item}
						className="text-5xl sm:text-6xl lg:text-7xl font-bold font-FoundersGrotesk text-darkBlue mb-6 leading-tight"
					>
						How It Works
					</motion.h1>
					<motion.p
						variants={heroAnimations.item}
						className="text-xl sm:text-2xl font-NeueMontreal text-darkBlue/70 mb-4 max-w-3xl"
					>
						Your Success Journey with Gestalty
					</motion.p>
					<motion.p
						variants={heroAnimations.item}
						className="text-lg sm:text-xl font-NeueMontreal text-darkBlue/60 max-w-2xl leading-relaxed"
					>
						Unlock Exam Success Through Our Proven 4-Step Journey
					</motion.p>
					<motion.div
						variants={heroAnimations.item}
						className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primaryYellow/20 border border-primaryYellow/40 rounded-full"
					>
						<span className="text-sm font-NeueMontreal font-semibold text-darkBlue">
							AI-powered, science-backed system designed to maximize learning efficiency and exam readiness
						</span>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

