"use client";
import { motion } from "framer-motion";
import { Eye, Target, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react";

const whatItDoes = [
	{
		icon: Eye,
		title: "Bringing awareness to blind spots",
		description: "See what you can't see on your own",
	},
	{
		icon: Target,
		title: "Encouraging deliberate learning",
		description: "Focus on quality over quantity",
	},
	{
		icon: TrendingUp,
		title: "Promoting intrinsic excellence",
		description: "Build habits that drive mastery",
	},
	{
		icon: BarChart3,
		title: "Converting abstract traits into data",
		description: "Turn critical thinking, discipline, and metacognition into trackable weekly behaviors",
	},
];

const results = [
	"Align learners with higher-order cognitive goals",
	"Support self-regulated learning (SRL) and deliberate practice",
	"Promote deep work, not just volume of study",
];

export default function LearningAcumenSystem() {
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
						What Is the Learning Acumen System?
					</h2>
					<p className="paragraph text-offWhite/80 max-w-4xl mx-auto mb-8">
						The Learning Acumen System is a high-order learning behavior tracker designed to measure, reinforce, and elevate learning quality by focusing not just on what is studied, but how it is learned, practiced, and retained.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-offWhite mb-8 text-center">
						What It Does
					</h3>
					<p className="paragraph text-offWhite/80 max-w-3xl mx-auto text-center mb-8">
						This system bridges subjective preparation with objective evidence by:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 max-w-5xl mx-auto">
						{whatItDoes.map((item, index) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-6 hover:border-primaryYellow/50 transition-all duration-300">
									<div className="mb-4">
										<Icon size={32} className="text-primaryYellow" />
									</div>
									<h4 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-2">
										{item.title}
									</h4>
									<p className="paragraph text-offWhite/80">
										{item.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-offWhite mb-6 text-center">
						The Result
					</h3>
					<p className="paragraph text-offWhite/80 text-center mb-8">
						Objective clarity on what's working and what needs correction—transforming effort into direction, and direction into predictable progress.
					</p>
					<div className="space-y-4">
						{results.map((result, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="flex items-start gap-3 bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-lg p-4">
								<CheckCircle2 size={24} className="text-primaryYellow flex-shrink-0 mt-1" />
								<p className="paragraph text-offWhite/90">
									{result}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

