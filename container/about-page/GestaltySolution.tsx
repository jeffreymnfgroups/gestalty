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
		<section className="w-full bg-darkBlue padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-offWhite mb-4">
						Gestalty — The System We Built
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-offWhite mb-6">
						Our Core Framework
					</h3>
					<p className="paragraph text-offWhite/80 mb-6">
						Gestalty emerged from a simple recognition: competitive exam preparation deserves better than guesswork and generic advice.
					</p>
					<p className="paragraph text-offWhite/80">
						We built a platform that tracks high-order learning behaviors—the psychological and cognitive patterns that truly influence outcomes. By blending psychology, pedagogy, and data analytics, we created a system that maps preparation and progress into clear, measurable, and meaningful indicators.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-offWhite mb-6">
						How Quantification Transforms Learning
					</h3>
					<p className="paragraph text-offWhite/80 mb-6">
						This system streamlines your learning by transforming subjective feelings into:
					</p>
					<ul className="space-y-4 mb-8">
						{quantificationBenefits.map((benefit, index) => (
							<li key={index} className="flex items-start gap-3">
								<CheckCircle2 size={24} className="text-primaryYellow flex-shrink-0 mt-1" />
								<p className="paragraph text-offWhite/80">{benefit}</p>
							</li>
						))}
					</ul>
					<p className="paragraph text-offWhite/80 mb-6">
						This system empowers your learning because it:
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<div className="overflow-x-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr className="border-b-2 border-primaryYellow/30">
									<th className="text-left py-4 px-6 text-xl font-bold font-FoundersGrotesk text-offWhite">
										Transformation
									</th>
									<th className="text-left py-4 px-6 text-xl font-bold font-FoundersGrotesk text-offWhite">
										Impact
									</th>
								</tr>
							</thead>
							<tbody>
								{transformations.map((item, index) => (
									<tr key={index} className="border-b border-primaryYellow/10 hover:bg-primaryYellow/5 transition-colors">
										<td className="py-4 px-6 paragraph font-semibold text-offWhite">
											{item.transformation}
										</td>
										<td className="py-4 px-6 paragraph text-offWhite/80">
											{item.impact}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-offWhite/5 backdrop-blur-sm border border-primaryYellow/20 rounded-xl p-8">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-offWhite mb-6">
						Beyond Content Mastery
					</h3>
					<p className="paragraph text-offWhite/80 mb-4">
						Gestalty makes students accountable not just for completing the syllabus, but for how they learn—consistently, effectively, and with real self-awareness.
					</p>
					<p className="paragraph text-offWhite/80">
						Evidence-backed nudges, meaningful mentorship, and transparent insights help learners course-correct weeks in advance.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

