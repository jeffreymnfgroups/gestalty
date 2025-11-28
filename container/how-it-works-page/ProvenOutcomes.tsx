"use client";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Smile } from "lucide-react";

const outcomes = [
	{
		stat: "85%",
		description: "boost in mock test scores within 2 months",
		icon: TrendingUp,
	},
	{
		stat: "40%",
		description: "reduction in wasted study time",
		icon: Clock,
	},
	{
		stat: "90%",
		description: "report higher confidence and clarity",
		icon: Smile,
	},
];

const outcomesAnimations = {
	container: {
		initial: { opacity: 0 },
		whileInView: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
		viewport: { once: true, margin: "-100px" },
	},
	item: {
		initial: { opacity: 0, scale: 0.9, y: 30 },
		whileInView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
		viewport: { once: true },
	},
};

export default function ProvenOutcomes() {
	return (
		<section className="w-full padding-x py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primaryYellow/10 via-primaryYellow/5 to-lightBeige">
			<div className="max-w-[1200px] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Proven Outcomes
					</h2>
				</motion.div>

				<motion.div
					variants={outcomesAnimations.container}
					initial="initial"
					whileInView="whileInView"
					viewport={outcomesAnimations.container.viewport}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
				>
					{outcomes.map((outcome, index) => {
						const Icon = outcome.icon;
						return (
							<motion.div
								key={outcome.stat}
								variants={outcomesAnimations.item}
								className="bg-white rounded-2xl p-8 sm:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primaryYellow/20 hover:border-primaryYellow/40"
							>
								<div className="w-20 h-20 sm:w-24 sm:h-24 bg-primaryYellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
									<Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primaryYellow" strokeWidth={2.5} />
								</div>
								<div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-FoundersGrotesk text-primaryYellow mb-4">
									{outcome.stat}
								</div>
								<p className="text-base sm:text-lg font-NeueMontreal text-darkBlue/80 leading-relaxed">
									{outcome.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

