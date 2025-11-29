"use client";
import { motion } from "framer-motion";
import { Brain, BarChart3, GraduationCap, Lightbulb, Users } from "lucide-react";

const disciplines = [
	{
		title: "Cognitive Science Principles",
		description: "How memory, attention, and learning actually work",
		icon: Brain,
	},
	{
		title: "Advanced Analytics & Predictive Modeling",
		description: "Statistical tools that forecast performance",
		icon: BarChart3,
	},
	{
		title: "Competency-Based Learning Structures",
		description: "Skill progression mapped to exam requirements",
		icon: GraduationCap,
	},
	{
		title: "Evidence-Backed Behavioral Nudges",
		description: "Anti-procrastination systems rooted in research",
		icon: Lightbulb,
	},
	{
		title: "Collaborative Ecosystems",
		description: "Mentor–student–parent communication systems",
		icon: Users,
	},
];

export default function DemonstratedExpertise() {
	return (
		<section className="w-full bg-offWhite py-20 lg:py-28 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Demonstrated Expertise & Credibility
					</h2>
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue mb-8">
						The Intelligence Behind Gestalty
					</h3>
					<p className="text-lg lg:text-xl text-grayBlue max-w-4xl mx-auto mb-16">
						Gestalty integrates multiple disciplines into one cohesive system:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 lg:gap-10">
					{disciplines.map((discipline, index) => {
						const Icon = discipline.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white border-2 border-darkBlue/10 rounded-2xl p-10 shadow-sm hover:border-primaryYellow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
								<div className="mb-6">
									<Icon
										className="w-14 h-14 text-primaryYellow"
									/>
								</div>
								<h3 className="text-2xl lg:text-3xl font-semibold font-FoundersGrotesk text-darkBlue mb-4">
									{discipline.title}
								</h3>
								<p className="text-lg leading-relaxed text-grayBlue">
									{discipline.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

