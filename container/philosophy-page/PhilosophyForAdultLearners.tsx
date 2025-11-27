"use client";
import { motion } from "framer-motion";
import { Layout, BarChart3, TrendingUp, Target, User } from "lucide-react";

const requirements = [
	{
		icon: Layout,
		title: "Highly structured",
		description: "Clear frameworks, not vague advice",
	},
	{
		icon: BarChart3,
		title: "Evidence-driven",
		description: "Data-backed decisions, not guesswork",
	},
	{
		icon: TrendingUp,
		title: "Progress-visible",
		description: "See your growth in real time",
	},
	{
		icon: Target,
		title: "Self-motivating",
		description: "Build intrinsic drive through autonomy",
	},
	{
		icon: User,
		title: "Personalized",
		description: "Adapted to your pace and reality constraints",
	},
];

export default function PhilosophyForAdultLearners() {
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
						Philosophy for Adult Learners
					</h2>
					<p className="paragraph text-offWhite/80 max-w-4xl mx-auto mb-8">
						Adult learners preparing for competitive exams require a preparation system that is:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
					{requirements.map((requirement, index) => {
						const Icon = requirement.icon;
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
									{requirement.title}
								</h3>
								<p className="paragraph text-offWhite/80">
									{requirement.description}
								</p>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center">
					<div className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8">
						<p className="paragraph text-offWhite/90 text-lg italic">
							When learners begin to think like strategists, track like analysts, and adapt like top performers—success is no longer a mystery. It becomes a byproduct of execution.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

