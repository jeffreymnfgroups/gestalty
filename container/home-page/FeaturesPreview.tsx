"use client";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const solutions = [
	{
		problem: "Inadequate Study Planning",
		impact: "Underestimating syllabus size leads to rushed coverage and cramming",
		solution: "Split Syllabus Engine: Breaks down syllabi into daily/weekly custom chunks",
		problemGradient: "from-red-500/20 to-orange-500/10",
		problemBorder: "border-red-500/30",
		problemIcon: "text-red-500",
	},
	{
		problem: "Lack of Focus & Consistency",
		impact: "Distractions and procrastination cause inconsistent study, leading to knowledge gaps, lower retention, and reduced productivity.",
		solution: "Progress Tracking: Real-time stage-wise analytics pinpoint your journey",
		problemGradient: "from-orange-500/20 to-yellow-500/10",
		problemBorder: "border-orange-500/30",
		problemIcon: "text-orange-500",
	},
	{
		problem: "Weak Study Techniques & Retention",
		impact: "Passive learning leads to surface-level understanding and weak problem-solving",
		solution: "Strategic Revision Reminders: Scheduled by proven spaced-repetition models for maximum retention",
		problemGradient: "from-yellow-500/20 to-amber-500/10",
		problemBorder: "border-yellow-500/30",
		problemIcon: "text-yellow-500",
	},
	{
		problem: "Fragmented & Unsystematic Learning",
		impact: "Fragmentation disrupts focused, organized, and efficient learning.",
		solution: "Consistency Mapping: Visual charts and heatmaps reveal time, effort, and deviations",
		problemGradient: "from-amber-500/20 to-primaryYellow/10",
		problemBorder: "border-amber-500/30",
		problemIcon: "text-amber-500",
	},
	{
		problem: "Misalignment Between Effort & Outcomes",
		impact: "Wasted effort results in slow improvement and discouraging outcomes",
		solution: "AI Feedback Loop: Statistical tools calibrate effort with actual outcomes",
		problemGradient: "from-primaryYellow/20 to-lime-500/10",
		problemBorder: "border-primaryYellow/30",
		problemIcon: "text-primaryYellow",
	},
	{
		problem: "Mental Health & Motivation Issues",
		impact: "Anxiety, burnout, and low motivation harm results",
		solution: "Cognitive Inertia Detector: ML algorithms spot resistance early and keep you on track",
		problemGradient: "from-lime-500/20 to-green-500/10",
		problemBorder: "border-lime-500/30",
		problemIcon: "text-lime-500",
	},
];

export default function FeaturesPreview() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative">
			<div className="max-w-[1600px] mx-auto padding-x">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold font-FoundersGrotesk text-darkBlue mb-4 tracking-[-0.02em] leading-[1.1]">
						The Gestalty Difference: From Guesswork to Precision
					</h2>
					<p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium font-NeueMontreal text-grayBlue max-w-3xl mx-auto leading-[1.6]">
						Experience the transformation from chaotic learning to structured, science-driven preparation.
					</p>
				</motion.div>

				{/* Diagnostic Lens Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-12">
					<div className="mb-8 text-center">
						<h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold font-FoundersGrotesk text-darkBlue mb-2">
							The Problems We Solve — From Chaos to Clarity
						</h3>
						<p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium font-NeueMontreal text-primaryYellow italic">
							Mapping Aspirants' Challenges, Consequences, and Tailored Gestalty Solutions
						</p>
					</div>

					{/* Clean Comparison Table - All Devices */}
					<div className="overflow-x-auto rounded-xl shadow-lg">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							<table className="w-full border-collapse bg-white rounded-lg overflow-hidden" style={{ minWidth: '750px' }}>
								<thead>
									<tr>
										{/* Problem Header */}
										<th className="px-6 py-4 bg-gray-50 border-b-2 border-gray-300 text-left">
											<div className="flex items-center gap-2">
												<AlertCircle size={18} className="text-gray-700 flex-shrink-0" />
												<span className="text-sm lg:text-base xl:text-lg font-bold font-FoundersGrotesk text-darkBlue uppercase tracking-wide">
													Problem
												</span>
											</div>
										</th>
										{/* Impact Header */}
										<th className="px-6 py-4 bg-gray-50 border-b-2 border-gray-300 text-left">
											<div className="flex items-center gap-2">
												<ArrowRight size={18} className="text-gray-700 flex-shrink-0" />
												<span className="text-sm lg:text-base xl:text-lg font-bold font-FoundersGrotesk text-darkBlue uppercase tracking-wide">
													Impact
												</span>
											</div>
										</th>
										{/* Solution Header - Highlighted */}
										<th className="px-6 py-4 bg-green-50 border-b-2 border-green-300 text-left">
											<div className="flex items-center gap-2">
												<CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
												<span className="text-sm lg:text-base xl:text-lg font-bold font-FoundersGrotesk text-darkBlue uppercase tracking-wide">
													Gestalty Solution
												</span>
											</div>
										</th>
									</tr>
								</thead>
								<tbody>
									{solutions.map((item, index) => (
										<motion.tr
											key={index}
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, margin: "-50px" }}
											transition={{ 
												duration: 0.4, 
												delay: index * 0.05,
												ease: [0.33, 1, 0.68, 1]
											}}
											className={`border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50/70 ${
												index % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
											}`}>
											{/* Problem Cell */}
											<td className="px-6 py-4 align-top" style={{ minWidth: '220px' }}>
												<div className="text-sm lg:text-base xl:text-lg font-semibold font-FoundersGrotesk text-darkBlue leading-relaxed">
													{item.problem}
												</div>
											</td>
											{/* Impact Cell */}
											<td className="px-6 py-4 align-top" style={{ minWidth: '250px' }}>
												<div className="text-sm lg:text-base xl:text-lg font-NeueMontreal text-grayBlue leading-relaxed">
													{item.impact}
												</div>
											</td>
											{/* Solution Cell - Highlighted */}
											<td className="px-6 py-4 align-top bg-green-50/60" style={{ minWidth: '280px' }}>
												<div className="text-sm lg:text-base xl:text-lg font-semibold font-FoundersGrotesk text-darkBlue leading-relaxed">
													{item.solution}
												</div>
											</td>
										</motion.tr>
									))}
								</tbody>
							</table>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

