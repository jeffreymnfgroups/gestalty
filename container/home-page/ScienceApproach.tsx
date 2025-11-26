"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Microscope, BookOpen, BarChart3 } from "lucide-react";

const principles = [
	{
		icon: Microscope,
		title: "Evidence-Based Methods",
		description: "Every feature is backed by cognitive science research and proven learning theories.",
	},
	{
		icon: BookOpen,
		title: "Spaced Repetition",
		description: "Optimized review schedules that enhance long-term memory retention.",
	},
	{
		icon: BarChart3,
		title: "Data-Driven Insights",
		description: "Track your progress with detailed analytics and personalized recommendations.",
	},
];

export default function ScienceApproach() {
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
						Built on Cognitive Science
					</h2>
					<p className="paragraph text-offWhite/80 max-w-3xl mx-auto">
						We don't guess what works. We use proven scientific principles to design learning experiences
						that maximize retention, comprehension, and performance.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{principles.map((principle, index) => {
						const Icon = principle.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8 hover:border-primaryYellow/50 transition-all duration-300 group">
								<div className="mb-6">
									<Icon
										size={40}
										className="text-primaryYellow group-hover:scale-110 transition-transform duration-300"
									/>
								</div>
								<h3 className="text-xl font-semibold font-FoundersGrotesk text-offWhite mb-3">
									{principle.title}
								</h3>
								<p className="paragraph text-offWhite/70">
									{principle.description}
								</p>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center">
					<Link
						href="/philosophy"
						className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primaryYellow text-primaryYellow font-semibold font-NeueMontreal rounded-full hover:bg-primaryYellow hover:text-darkBlue transition-all duration-300">
						<span>Learn About Our Science</span>
						<ArrowRight size={20} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

