"use client";
import { motion } from "framer-motion";
import { Target, BookOpen, Brain, AlertCircle, Eye, BarChart3, Quote } from "lucide-react";

const criticalGaps = [
	{
		number: "1",
		title: "Effort Without Strategy",
		icon: Target,
		points: [
			"Students were studying intensely, but not strategically",
			"Hard work was abundant; smart work was missing",
		],
	},
	{
		number: "2",
		title: "Information Overload",
		icon: BookOpen,
		points: [
			"Deviation from the syllabus caused information fragmentation",
			"Over-reliance on multiple sources created confusion instead of mastery",
		],
	},
	{
		number: "3",
		title: "Shallow Learning",
		icon: Brain,
		points: [
			"Minimal synthesis, review, or consolidation",
			"Weak recall and superficial understanding became the norm",
		],
	},
	{
		number: "4",
		title: "Unaddressed Psychological Barriers",
		icon: AlertCircle,
		points: [
			"Fear, overwhelm, and self-doubt went unrecognized",
			"These silent forces eroded performance day by day",
		],
	},
	{
		number: "5",
		title: "Invisible Learning Behaviors",
		icon: Eye,
		points: [
			"Students' critical learning traits went unnoticed and unassessed:",
		],
		subPoints: [
			"Confidence levels",
			"Recall strength",
			"Study consistency",
			"Conceptual clarity",
			"Analytical depth",
		],
		conclusion: "These invisible behaviors make or break exam success, yet no system captured them",
	},
	{
		number: "6",
		title: "Unmeasured Progress",
		icon: BarChart3,
		points: [
			"Learning remained invisible—no way to track syllabus completion",
			"Habits were fragmented, leading to inconsistency",
			"Confidence fluctuated wildly, creating constant self-doubt",
			"Progress couldn't be quantified, making improvement unclear",
		],
	},
];

export default function HiddenCrisis() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-8 text-center">
						We Noticed: The Real Hidden Reasons Students Miss Success
					</h2>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto text-center mb-12">
						Across streams—whether a Class 12 student preparing for NEET, a graduate aiming for UPSC or State PSC, or professionals targeting skill development—we observed the same recurring patterns:
					</p>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-8 text-center">
						The Six Critical Gaps
					</h3>
				</motion.div>

				<div className="space-y-6 mb-16 max-w-6xl mx-auto">
					{criticalGaps.map((gap, index) => {
						const Icon = gap.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								className="relative">
								<div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primaryYellow/30 transition-all duration-300 hover:shadow-md">
									<div className="flex gap-5 items-start">
										{/* Icon and Number */}
										<div className="flex-shrink-0">
											<div className="w-12 h-12 rounded-lg bg-primaryYellow/10 flex items-center justify-center relative">
												<Icon size={20} className="text-primaryYellow" />
											</div>
											<div className="mt-2 text-center">
												<span className="text-xs font-semibold text-gray-400">{gap.number}</span>
											</div>
										</div>

										{/* Content */}
										<div className="flex-1 min-w-0">
											<h3 className="text-xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
												{gap.title}
											</h3>
											
											<ul className="space-y-2.5 mb-4">
												{gap.points.map((point, pointIndex) => (
													<li key={pointIndex} className="text-grayBlue text-[15px] leading-relaxed flex items-start gap-2.5">
														<span className="text-primaryYellow mt-1.5 flex-shrink-0 text-xs">•</span>
														<span>{point}</span>
													</li>
												))}
											</ul>

											{gap.subPoints && (
												<ul className="space-y-2 mt-4 ml-4 border-l-2 border-primaryYellow/20 pl-4">
													{gap.subPoints.map((subPoint, subIndex) => (
														<li key={subIndex} className="text-grayBlue/80 text-sm leading-relaxed">
															{subPoint}
														</li>
													))}
												</ul>
											)}

											{gap.conclusion && (
												<div className="mt-5 pt-4 border-t border-gray-200">
													<p className="text-grayBlue text-sm leading-relaxed italic">
														{gap.conclusion}
													</p>
												</div>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto">
					<div className="bg-darkBlue/5 border-l-4 border-primaryYellow p-8 rounded-r-xl">
						<div className="flex items-start gap-4">
							<Quote size={32} className="text-primaryYellow flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
									The Core Problem
								</h3>
								<p className="paragraph text-grayBlue italic text-lg">
									"Students weren't just battling the syllabus—they were battling uncertainty, inconsistency, and the invisible pressure that comes with high-stakes exams."
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

