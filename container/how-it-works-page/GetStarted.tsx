"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const ctaAnimations = {
	container: {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
		viewport: { once: true, margin: "-100px" },
	},
	item: {
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		viewport: { once: true },
	},
};

const ctaButtons = [
	{ text: "Begin Your Assessment", href: "/contact" },
	{ text: "Schedule Your Mentor Call", href: "/contact" },
	{ text: "Explore Your Dashboard", href: "/contact" },
];

export default function GetStarted() {
	return (
		<section className="w-full padding-x py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-lightBeige to-offWhite">
			<div className="max-w-[1200px] mx-auto">
				<motion.div
					variants={ctaAnimations.container}
					initial="initial"
					whileInView="whileInView"
					viewport={ctaAnimations.container.viewport}
					className="bg-gradient-to-br from-darkBlue via-darkBlue/95 to-grayBlue rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl"
				>
					<motion.h2
						variants={ctaAnimations.item}
						className="text-3xl sm:text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-white mb-6"
					>
						Get Started Today
					</motion.h2>
					<motion.p
						variants={ctaAnimations.item}
						className="text-lg sm:text-xl font-NeueMontreal text-offWhite/90 mb-8 max-w-2xl mx-auto leading-relaxed"
					>
						Join thousands who have transformed their exam prep with Gestalty's proven methodology
					</motion.p>

					<motion.div
						variants={ctaAnimations.item}
						className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center flex-wrap"
					>
						{ctaButtons.map((button, index) => (
							<Link
								key={button.text}
								href={button.href}
								className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primaryYellow text-darkBlue text-sm sm:text-base font-semibold font-NeueMontreal rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] glow-yellow-hover flex items-center gap-2"
								style={{
									boxShadow: "0 6px 24px rgba(251, 193, 13, 0.35)",
								}}
							>
								<span className="relative z-10">{button.text}</span>
								<ArrowUpRight
									size={16}
									className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
								/>
							</Link>
						))}
					</motion.div>

					<motion.div
						variants={ctaAnimations.item}
						className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 text-offWhite/80"
					>
						<div className="flex items-center gap-2">
							<CheckCircle size={18} className="text-primaryYellow flex-shrink-0" strokeWidth={2.5} />
							<span className="text-sm sm:text-base font-NeueMontreal">Science-Backed Methods</span>
						</div>
						<div className="flex items-center gap-2">
							<CheckCircle size={18} className="text-primaryYellow flex-shrink-0" strokeWidth={2.5} />
							<span className="text-sm sm:text-base font-NeueMontreal">Expert Mentorship</span>
						</div>
						<div className="flex items-center gap-2">
							<CheckCircle size={18} className="text-primaryYellow flex-shrink-0" strokeWidth={2.5} />
							<span className="text-sm sm:text-base font-NeueMontreal">Proven Results</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

