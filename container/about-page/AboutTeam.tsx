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
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Our Team — The Minds Behind Gestalty
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
						A Multidisciplinary Powerhouse
					</h3>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto mb-8">
						We are a diverse group of experts united by a common mission:
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-6 mb-12">
					{teamCategories.map((category, index) => {
						const Icon = category.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="science-card p-6 rounded-xl text-center">
								<div className="mb-4 flex justify-center">
									<Icon size={40} className="text-primaryYellow" />
								</div>
								<h3 className="text-lg font-semibold font-FoundersGrotesk text-darkBlue mb-2">
									{category.title}
								</h3>
								<p className="small-text text-grayBlue">
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
					className="max-w-4xl mx-auto bg-darkBlue/5 border-l-4 border-primaryYellow p-8 rounded-r-xl">
					<div className="flex items-start gap-4">
						<Quote size={32} className="text-primaryYellow flex-shrink-0 mt-1" />
						<div>
							<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
								Our Unifying Belief
							</h3>
							<p className="paragraph text-grayBlue italic text-lg">
								"Every learner deserves a system that makes their mind stronger, not just their notes longer."
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

