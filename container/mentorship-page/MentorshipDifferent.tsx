"use client";
import { motion } from "framer-motion";
import { Brain, Target, Shield, BarChart3 } from "lucide-react";

const learningArchitecture = [
	{
		icon: Brain,
		title: "Cognitive Progression Tracking",
		description: "Monitors your journey from basic Recall → Understanding → Application → Analysis → Evaluation",
	},
	{
		icon: Target,
		title: "Self-Regulation Development",
		description: "Guides you through the complete learning cycle—Forethought → Performance → Reflection",
	},
	{
		icon: Shield,
		title: "Bias Elimination",
		description: "Counters the Illusion of Progress, Planning Fallacy, and Overconfidence Bias by converting feelings into measurable metrics",
	},
	{
		icon: BarChart3,
		title: "Depth Accountability",
		description: "Ensures you're accountable not just for what you complete, but how well you complete it",
	},
];

export default function MentorshipDifferent() {
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
						What Makes Our Mentorship Different
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-primaryYellow mb-6">
						Science-Backed Learning Architecture
					</h3>
					<p className="paragraph text-offWhite/80 max-w-4xl mx-auto">
						Our platform doesn't just track progress—it transforms how you learn:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
					{learningArchitecture.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300">
								<div className="mb-6">
									<div className="w-16 h-16 rounded-xl bg-primaryYellow/20 flex items-center justify-center mb-4">
										<Icon size={32} className="text-primaryYellow" />
									</div>
									<h4 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-3">
										{feature.title}
									</h4>
									<p className="paragraph text-offWhite/80">
										{feature.description}
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

