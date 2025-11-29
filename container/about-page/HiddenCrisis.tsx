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
		<section className="w-full bg-offWhite py-20 lg:py-28 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-6 text-center">
						We Noticed: The Real Hidden Reasons Students Miss Success
					</h2>
					<p className="text-lg lg:text-xl text-grayBlue leading-relaxed max-w-5xl mx-auto text-center mb-12">
						Across streams—whether a Class 12 student preparing for NEET, a graduate aiming for UPSC or State PSC, or professionals targeting skill development—we observed the same recurring patterns:
					</p>
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue mb-12 text-center">
						The Six Critical Gaps
					</h3>
				</motion.div>

				<div className="space-y-8 mb-16 max-w-7xl mx-auto">
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
								<div className="bg-white border-2 border-darkBlue/10 rounded-2xl p-10 shadow-sm hover:border-primaryYellow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
									<div className="flex gap-6 items-start">
										{/* Icon and Number */}
										<div className="flex-shrink-0">
											<div className="w-14 h-14 rounded-xl bg-primaryYellow/10 flex items-center justify-center relative p-3">
												<Icon className="w-8 h-8 text-primaryYellow" />
											</div>
											<div className="mt-2 text-center">
												<span className="text-xs font-semibold text-primaryYellow">{gap.number}</span>
											</div>
										</div>

										{/* Content */}
										<div className="flex-1 min-w-0">
											<h3 className="text-2xl lg:text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-5">
												{gap.title}
											</h3>
											
											<ul className="space-y-3 mb-4">
												{gap.points.map((point, pointIndex) => (
													<li key={pointIndex} className="text-lg leading-relaxed text-grayBlue flex items-start gap-3">
														<span className="text-xl text-primaryYellow mt-1 flex-shrink-0">•</span>
														<span>{point}</span>
													</li>
												))}
											</ul>

											{gap.subPoints && (
												<ul className="space-y-2 mt-4 ml-4 border-l-2 border-primaryYellow/20 pl-4">
													{gap.subPoints.map((subPoint, subIndex) => (
														<li key={subIndex} className="text-grayBlue/80 text-base leading-relaxed">
															{subPoint}
														</li>
													))}
												</ul>
											)}

											{gap.conclusion && (
												<div className="mt-5 pt-4 border-t border-darkBlue/10">
													<p className="text-grayBlue text-base leading-relaxed italic">
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
					<div className="bg-white border-l-4 border-primaryYellow p-10 rounded-r-2xl shadow-sm">
						<div className="flex items-start gap-4">
							<Quote className="w-10 h-10 text-primaryYellow flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-2xl lg:text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-4">
									The Core Problem
								</h3>
								<p className="text-xl leading-relaxed text-grayBlue italic">
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

