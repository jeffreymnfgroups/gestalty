"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Target, TrendingUp, BookOpen, Users, Zap } from "lucide-react";

const features = [
	{
		icon: Brain,
		title: "AI-Guided Learning",
		description: "Personalized study paths powered by cognitive science",
		color: "text-primaryYellow",
	},
	{
		icon: Target,
		title: "Performance Tracking",
		description: "Real-time analytics to optimize your preparation",
		color: "text-primaryYellow",
	},
	{
		icon: TrendingUp,
		title: "Adaptive Assessments",
		description: "Smart tests that adjust to your learning pace",
		color: "text-primaryYellow",
	},
	{
		icon: BookOpen,
		title: "Science-Based Curriculum",
		description: "Content designed using proven learning methodologies",
		color: "text-primaryYellow",
	},
	{
		icon: Users,
		title: "Expert Mentorship",
		description: "Guidance from top educators and cognitive scientists",
		color: "text-primaryYellow",
	},
	{
		icon: Zap,
		title: "Efficient Study Plans",
		description: "Optimized schedules that maximize retention",
		color: "text-primaryYellow",
	},
];

export default function FeaturesPreview() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Everything You Need to Excel
					</h2>
					<p className="paragraph text-grayBlue max-w-2xl">
						Built for serious aspirants who demand more than traditional study methods.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="science-card p-6 rounded-xl cursor-pointer group">
								<div className="mb-4">
									<Icon
										size={32}
										className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}
									/>
								</div>
								<h3 className="text-xl font-semibold font-FoundersGrotesk text-darkBlue mb-2">
									{feature.title}
								</h3>
								<p className="paragraph text-grayBlue">
									{feature.description}
								</p>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center">
					<Link
						href="/features"
						className="inline-flex items-center gap-2 px-8 py-4 bg-primaryYellow text-darkBlue font-semibold font-NeueMontreal rounded-full hover:scale-105 transition-transform duration-300 glow-yellow-hover">
						<span>Explore All Features</span>
						<ArrowRight size={20} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

