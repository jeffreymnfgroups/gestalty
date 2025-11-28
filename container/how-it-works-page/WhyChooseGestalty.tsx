"use client";
import { motion } from "framer-motion";
import { Database, TrendingUp, Target, Users } from "lucide-react";

const benefits = [
	{
		title: "Data-Driven Personalization",
		description: "Every decision backed by your analytics",
		icon: Database,
	},
	{
		title: "Adaptive Learning",
		description: "Dynamic adjustments based on your progress",
		icon: TrendingUp,
	},
	{
		title: "Quality Focus",
		description: "Optimize learning effectiveness, not just time spent",
		icon: Target,
	},
	{
		title: "Continuous Expert Support",
		description: "Mentorship every step of the way",
		icon: Users,
	},
];

const benefitsAnimations = {
	container: {
		initial: { opacity: 0 },
		whileInView: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
		viewport: { once: true, margin: "-100px" },
	},
	item: {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		viewport: { once: true },
	},
};

export default function WhyChooseGestalty() {
	return (
		<section className="w-full padding-x py-20 sm:py-24 lg:py-32 bg-white">
			<div className="max-w-[1200px] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Why Choose Gestalty?
					</h2>
				</motion.div>

				<motion.div
					variants={benefitsAnimations.container}
					initial="initial"
					whileInView="whileInView"
					viewport={benefitsAnimations.container.viewport}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
				>
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;
						return (
							<motion.div
								key={benefit.title}
								variants={benefitsAnimations.item}
								className="bg-gradient-to-br from-lightBeige to-offWhite rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-darkBlue/5 hover:border-primaryYellow/30"
							>
								<div className="w-16 h-16 sm:w-20 sm:h-20 bg-primaryYellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primaryYellow" strokeWidth={2.5} />
								</div>
								<h3 className="text-lg sm:text-xl font-bold font-FoundersGrotesk text-darkBlue mb-2">
									{benefit.title}
								</h3>
								<p className="text-sm sm:text-base font-NeueMontreal text-darkBlue/70 leading-relaxed">
									{benefit.description}
								</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

