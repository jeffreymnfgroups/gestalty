"use client";
import { motion } from "framer-motion";
import { TrendingUp, Eye, BarChart3, CheckCircle, Award } from "lucide-react";

const provenOutcomes = [
	{
		icon: TrendingUp,
		title: "Enhanced Retention",
		description: "Significantly reduced forgetting through strategic revision protocols",
	},
	{
		icon: Eye,
		title: "Transparent Progress",
		description: "Real-time visibility into learning depth and quality",
	},
	{
		icon: BarChart3,
		title: "Data-Backed Decisions",
		description: "Strategic adjustments grounded in performance analytics",
	},
	{
		icon: CheckCircle,
		title: "Improved Compliance",
		description: "Higher revision adherence through accountability systems",
	},
	{
		icon: Award,
		title: "Superior Performance",
		description: "Measurable improvement in mock exams and assessments",
	},
];

export default function MentorshipProvenOutcomes() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Proven Outcomes
					</h2>
					<p className="paragraph text-offWhite/80 max-w-3xl mx-auto">
						When precision meets mentorship, results follow:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
					{provenOutcomes.map((outcome, index) => {
						const Icon = outcome.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-6 hover:border-primaryYellow/50 transition-all duration-300">
								<div className="mb-4">
									<div className="w-14 h-14 rounded-xl bg-primaryYellow/20 flex items-center justify-center mb-4">
										<Icon size={28} className="text-primaryYellow" />
									</div>
									<h4 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-3">
										{outcome.title}
									</h4>
									<p className="paragraph text-offWhite/80">
										{outcome.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

