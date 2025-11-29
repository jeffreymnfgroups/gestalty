"use client";
import { motion } from "framer-motion";
import { Brain, BarChart3, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const transformations = [
	{
		transformation: "Demystifies Learning",
		impact: 'Converts "I feel prepared" into "I\'m 47% prepared"',
	},
	{
		transformation: "Creates Visible Accountability",
		impact: "Numbers reflect your efforts and missed revisions",
	},
	{
		transformation: "Enables Course Correction",
		impact: "Spots hidden weaknesses early—weeks before exams, not last-minute surprises",
	},
];

const quantificationBenefits = [
	"Comparable metrics: Track your progress against standards",
	"Actionable insights: Know exactly what to improve",
	"Predictive indicators: Anticipate challenges before they derail you",
];

export default function GestaltySolution() {
	return (
		<section className="w-full bg-darkBlue py-20 lg:py-28 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-offWhite mb-8">
						Gestalty — The System We Built
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-offWhite mb-6">
						Our Core Framework
					</h3>
					<p className="text-lg lg:text-xl text-offWhite/80 leading-relaxed mb-6">
						Gestalty emerged from a simple recognition: competitive exam preparation deserves better than guesswork and generic advice.
					</p>
					<p className="text-lg lg:text-xl text-offWhite/80 leading-relaxed">
						We built a platform that tracks high-order learning behaviors—the psychological and cognitive patterns that truly influence outcomes. By blending psychology, pedagogy, and data analytics, we created a system that maps preparation and progress into clear, measurable, and meaningful indicators.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-offWhite mb-6">
						How Quantification Transforms Learning
					</h3>
					<p className="text-lg lg:text-xl text-offWhite/80 leading-relaxed mb-6">
						This system streamlines your learning by transforming subjective feelings into:
					</p>
					<ul className="space-y-4 mb-8">
						{quantificationBenefits.map((benefit, index) => (
							<li key={index} className="flex items-start gap-3">
								<CheckCircle2 className="w-7 h-7 text-primaryYellow flex-shrink-0 mt-1" />
								<p className="text-lg text-offWhite/80">{benefit}</p>
							</li>
						))}
					</ul>
					<p className="text-lg lg:text-xl text-offWhite/80 leading-relaxed mb-6">
						This system empowers your learning because it:
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<div className="bg-white/5 border-2 border-primaryYellow/20 rounded-2xl overflow-hidden p-2">
						<div className="overflow-x-auto">
							<table className="w-full border-collapse">
								<thead>
									<tr className="bg-primaryYellow/10">
										<th className="text-left py-5 px-6 text-xl lg:text-2xl font-bold font-FoundersGrotesk text-offWhite">
											Transformation
										</th>
										<th className="text-left py-5 px-6 text-xl lg:text-2xl font-bold font-FoundersGrotesk text-offWhite">
											Impact
										</th>
									</tr>
								</thead>
								<tbody>
									{transformations.map((item, index) => (
										<tr key={index} className="border-b border-primaryYellow/10 hover:bg-white/5 transition-colors">
											<td className="py-5 px-6 text-lg font-semibold text-offWhite">
												{item.transformation}
											</td>
											<td className="py-5 px-6 text-lg text-offWhite/80">
												{item.impact}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-white/10 border-2 border-primaryYellow/30 rounded-2xl p-10">
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-offWhite mb-5">
						Beyond Content Mastery
					</h3>
					<p className="text-xl text-offWhite/80 leading-relaxed mb-4">
						Gestalty makes students accountable not just for completing the syllabus, but for how they learn—consistently, effectively, and with real self-awareness.
					</p>
					<p className="text-xl text-offWhite/80 leading-relaxed">
						Evidence-backed nudges, meaningful mentorship, and transparent insights help learners course-correct weeks in advance.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

