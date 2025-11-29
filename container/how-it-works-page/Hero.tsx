"use client";
import { motion } from "framer-motion";
import { Rocket, Zap, TrendingUp } from "lucide-react";
import RoundButton from "@/components/RoundButton";

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
		<section className="w-full padding-x py-[120px] sm:py-[140px] lg:py-[160px] flex items-center justify-center bg-gradient-to-b from-offWhite via-lightBeige/50 to-offWhite neuron-pattern">
			<div className="max-w-[1200px] mx-auto text-center">
				<motion.div
					variants={heroAnimations.container}
					initial="initial"
					animate="animate"
					className="flex flex-col items-center gap-6"
				>
					{/* <motion.div
						variants={heroAnimations.item}
						className="flex items-center justify-center gap-4 mb-4"
					>
						<div className="bg-primaryYellow/10 rounded-full p-4">
							<Rocket size={40} className="text-primaryYellow" />
						</div>
						<div className="bg-darkBlue/10 rounded-full p-4">
							<TrendingUp size={40} className="text-darkBlue" />
						</div>
						<div className="bg-primaryYellow/10 rounded-full p-4">
							<Zap size={40} className="text-primaryYellow" />
						</div>
					</motion.div> */}
					<motion.h1
						variants={heroAnimations.item}
						className="text-5xl sm:text-6xl lg:text-7xl font-bold font-FoundersGrotesk text-darkBlue mb-6 leading-tight"
					>
						How It Works
					</motion.h1>
					<motion.p
						variants={heroAnimations.item}
						className="text-xl sm:text-2xl font-NeueMontreal text-primaryYellow font-semibold mb-4 max-w-3xl"
					>
						Your Success Journey with Gestalty
					</motion.p>
					<motion.p
						variants={heroAnimations.item}
						className="text-lg sm:text-xl font-NeueMontreal text-darkBlue/70 max-w-2xl leading-relaxed"
					>
						Unlock Exam Success Through Our Proven 4-Step Journey
					</motion.p>
					<motion.div
						variants={heroAnimations.item}
						className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-primaryYellow/20 border-2 border-primaryYellow/40 rounded-full shadow-sm"
					>
						<Zap size={20} className="text-primaryYellow" />
						<span className="text-sm font-NeueMontreal font-semibold text-darkBlue">
							AI-powered, science-backed system designed to maximize learning efficiency and exam readiness
						</span>
					</motion.div>
					<motion.div
						variants={heroAnimations.item}
						className="flex flex-wrap gap-4 mt-8 justify-center"
					>
						<RoundButton
							href="/signup"
							title="Start Free Trial"
							bgcolor="#fbc10d"
							style={{ color: "#19254c" }}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

