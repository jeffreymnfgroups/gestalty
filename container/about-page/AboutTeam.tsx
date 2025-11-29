"use client";
import { motion } from "framer-motion";
import { User, Brain, Code, GraduationCap, BookOpen, Users, Quote } from "lucide-react";

const teamCategories = [
	{
		title: "Learning Scientists",
		description: "who understand cognition, memory, and skill acquisition",
		icon: Brain,
	},
	{
		title: "Data Scientists & Engineers",
		description: "who turn insights into actionable metrics",
		icon: Code,
	},
	{
		title: "Educators",
		description: "who know the realities of competitive exams",
		icon: GraduationCap,
	},
	{
		title: "Product Designers",
		description: "who build intuitive, student-first experiences",
		icon: BookOpen,
	},
	{
		title: "Mentors",
		description: "who guide aspirants with empathy and evidence",
		icon: Users,
	},
];

export default function AboutTeam() {
	return (
		<section className="w-full bg-white py-20 lg:py-28 border-t-2 border-darkBlue/10 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Our Team — The Minds Behind Gestalty
					</h2>
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue mb-8">
						A Multidisciplinary Powerhouse
					</h3>
					<p className="text-lg lg:text-xl text-grayBlue max-w-4xl mx-auto mb-16">
						We are a diverse group of experts united by a common mission:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-8 lg:gap-10 mb-12">
					{teamCategories.map((category, index) => {
						const Icon = category.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-lightBeige border-2 border-primaryYellow/40 rounded-2xl p-8 text-center shadow-sm hover:border-primaryYellow hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
								<div className="mb-5 flex justify-center">
									<Icon className="w-14 h-14 text-primaryYellow mx-auto" />
								</div>
								<h3 className="text-xl lg:text-2xl font-semibold font-FoundersGrotesk text-darkBlue mb-3">
									{category.title}
								</h3>
								<p className="text-base lg:text-lg text-grayBlue leading-relaxed">
									{category.description}
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
					className="max-w-4xl mx-auto bg-lightBeige border-l-4 border-primaryYellow p-10 rounded-r-2xl">
					<div className="flex items-start gap-4">
						<Quote className="w-12 h-12 text-primaryYellow flex-shrink-0 mt-1" />
						<div>
							<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-5">
								Our Unifying Belief
							</h3>
							<p className="text-xl lg:text-2xl text-grayBlue italic leading-relaxed">
								"Every learner deserves a system that makes their mind stronger, not just their notes longer."
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

