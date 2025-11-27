"use client";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Brain, Target, BarChart3, Heart } from "lucide-react";

const outcomes = [
	{
		icon: CheckCircle2,
		title: "Retention Mastery",
		description: "Reduction in forgetting rate with ≥80% compliance to revision alerts",
	},
	{
		icon: TrendingUp,
		title: "Test Score Growth",
		description: "20–40% improvement in mock performance after 2–3 cycles",
	},
	{
		icon: Brain,
		title: "Self-Regulated Learning",
		description: "Students internalize reflection and planning habits",
	},
	{
		icon: Target,
		title: "Focus Shift",
		description: "Increased time spent on weak/high-yield areas",
	},
	{
		icon: BarChart3,
		title: "Completion Accuracy",
		description: "Lower false sense of completion due to tracked engagement",
	},
	{
		icon: Heart,
		title: "Cognitive Resilience",
		description: "Fewer burnouts and higher bounce-back rates",
	},
];

export default function ExpectedOutcomes() {
	return (
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-6">
						Expected Outcomes: What You'll Achieve
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{outcomes.map((outcome, index) => {
						const Icon = outcome.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-6 hover:border-primaryYellow/50 transition-all duration-300">
								<div className="mb-4">
									<Icon size={32} className="text-primaryYellow" />
								</div>
								<h3 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-3">
									{outcome.title}
								</h3>
								<p className="paragraph text-offWhite/80">
									{outcome.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

