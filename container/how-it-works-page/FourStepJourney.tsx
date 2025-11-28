"use client";
import { motion } from "framer-motion";
import { UserPlus, Target, BookOpen, CheckCircle2 } from "lucide-react";

const steps = [
	{
		number: 1,
		title: "Seed Your Success—Create Profile & Assess",
		icon: UserPlus,
		items: [
			"Set up your personalized profile",
			"Complete a comprehensive assessment to identify knowledge baseline, learning style, and exam goals",
			"Unlock strengths and target areas for improvement",
		],
	},
	{
		number: 2,
		title: "Grow with Expert Guidance—Set SMART Goals & Roadmap",
		icon: Target,
		items: [
			"Get matched with an expert mentor by AI",
			"Define SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound",
			"Develop a personalized study roadmap: weekly schedules, revision cycles, and practice tests",
		],
	},
	{
		number: 3,
		title: "Master the Material—Learn with Real-Time Insights",
		icon: BookOpen,
		items: [
			"Engage in adaptive, AI-driven learning",
			"Monitor progress through interactive dashboards",
			"Focus on weak areas with targeted practice and maintain study streaks",
		],
	},
	{
		number: 4,
		title: "Achieve Exam Readiness—Revise and Finalize Preparation",
		icon: CheckCircle2,
		items: [
			"Implement focused revision strategies",
			"Take simulated mock tests with detailed feedback",
			"Build confidence and finalize readiness for exam day",
		],
	},
];

const stepAnimations = {
	container: {
		initial: { opacity: 0 },
		whileInView: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
		viewport: { once: true, margin: "-100px" },
	},
	item: {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
		viewport: { once: true },
	},
};

export default function FourStepJourney() {
	return (
		<section className="w-full padding-x py-20 sm:py-24 lg:py-32 bg-lightBeige">
			<div className="max-w-[1200px] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Your Exam Success Journey: Clear 4-Step Pathway
					</h2>
				</motion.div>

				<motion.div
					variants={stepAnimations.container}
					initial="initial"
					whileInView="whileInView"
					viewport={stepAnimations.container.viewport}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
				>
					{steps.map((step, index) => {
						const Icon = step.icon;
						return (
							<motion.div
								key={step.number}
								variants={stepAnimations.item}
								className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-darkBlue/5"
							>
								<div className="flex items-start gap-4 mb-4">
									<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primaryYellow/20 rounded-full flex items-center justify-center">
										<Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primaryYellow" strokeWidth={2.5} />
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-2">
											<span className="text-sm font-bold text-primaryYellow bg-primaryYellow/10 px-2 py-1 rounded">
												Step {step.number}
											</span>
										</div>
										<h3 className="text-xl sm:text-2xl font-bold font-FoundersGrotesk text-darkBlue mb-3">
											{step.title}
										</h3>
									</div>
								</div>
								<ul className="space-y-2 ml-16 sm:ml-18">
									{step.items.map((item, itemIndex) => (
										<li key={itemIndex} className="flex items-start gap-2 text-darkBlue/70 font-NeueMontreal">
											<span className="text-primaryYellow mt-1.5">•</span>
											<span className="text-sm sm:text-base leading-relaxed">{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

