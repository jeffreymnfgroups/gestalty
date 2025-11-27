"use client";
import { motion } from "framer-motion";
import { Brain, Repeat, Target, TrendingUp } from "lucide-react";
import { ScienceCard } from "@/components";

const principles = [
	{
		icon: Brain,
		title: "Spaced Repetition",
		description: "We use the spacing effect - a cognitive phenomenon where information is better retained when learning sessions are spaced out over time. Our algorithm optimizes review intervals based on your forgetting curve.",
	},
	{
		icon: Repeat,
		title: "Active Recall",
		description: "Instead of passive reading, we emphasize active retrieval practice. This strengthens neural pathways and dramatically improves long-term memory retention compared to re-reading.",
	},
	{
		icon: Target,
		title: "Interleaved Practice",
		description: "We mix different topics and question types rather than blocking similar problems together. This challenging approach leads to better transfer of learning and improved problem-solving skills.",
	},
	{
		icon: TrendingUp,
		title: "Metacognitive Strategies",
		description: "We help you understand how you learn best. Through self-assessment and reflection, you develop better study strategies and become a more effective learner.",
	},
];

export default function PhilosophyPrinciples() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Cognitive Learning Principles
					</h2>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto">
						Our platform is built on four foundational principles of cognitive science that
						have been proven to maximize learning effectiveness.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8">
					{principles.map((principle, index) => {
						const Icon = principle.icon;
						return (
							<ScienceCard
								key={index}
								title={principle.title}
								description={principle.description}
								icon={<Icon size={40} />}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

