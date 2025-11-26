"use client";
import { motion } from "framer-motion";
import { BookOpen, Microscope, BarChart3 } from "lucide-react";

const researchAreas = [
	{
		icon: BookOpen,
		title: "Educational Psychology",
		description: "We draw from research in educational psychology, including the work of cognitive scientists like Hermann Ebbinghaus, Robert Bjork, and John Sweller on memory, learning, and cognitive load theory.",
	},
	{
		icon: Microscope,
		title: "Neuroscience",
		description: "Our understanding of neural plasticity and how the brain forms and strengthens connections informs our adaptive learning algorithms and personalized study schedules.",
	},
	{
		icon: BarChart3,
		title: "Data-Driven Optimization",
		description: "We continuously analyze learning data from thousands of students to refine our algorithms, ensuring our methods remain at the cutting edge of educational effectiveness.",
	},
];

export default function PhilosophyResearch() {
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
						Our Scientific Foundation
					</h2>
					<p className="paragraph text-offWhite/80 max-w-3xl mx-auto">
						Gestalty is built on a foundation of rigorous research and continuous validation.
						We stay current with the latest findings in cognitive science and educational technology.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{researchAreas.map((area, index) => {
						const Icon = area.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300">
								<div className="mb-6">
									<Icon
										size={40}
										className="text-primaryYellow"
									/>
								</div>
								<h3 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-4">
									{area.title}
								</h3>
								<p className="paragraph text-offWhite/80">
									{area.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

