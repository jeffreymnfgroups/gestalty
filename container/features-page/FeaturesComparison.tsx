"use client";
import { motion } from "framer-motion";

const comparisonData = [
	{
		feature: "Effort Logging",
		studentBenefit: "Balanced learning stages",
		impact: "68% better progress vs. reading-only approach",
	},
	{
		feature: "Statistical Feedback",
		studentBenefit: "Calibrated effort to outcomes",
		impact: "Eliminate wasted study time",
	},
	{
		feature: "Revision Reminders",
		studentBenefit: "Optimal review timing",
		impact: "≥80% compliance reduces forgetting dramatically",
	},
	{
		feature: "Quality Metrics",
		studentBenefit: "Focus on depth, not duration",
		impact: "Measure understanding, not just hours",
	},
	{
		feature: "Cognitive Tracking",
		studentBenefit: "Self-awareness of learning patterns",
		impact: "Identify and correct ineffective strategies",
	},
	{
		feature: "Multi-Layer Dashboards",
		studentBenefit: "Connected support ecosystem",
		impact: "Coordinated guidance from mentors and parents",
	},
];

export default function FeaturesComparison() {
	return (
		<section className="w-full bg-beige/20 padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						Features vs. Benefits Comparison
					</h2>
					<p className="paragraph text-grayBlue max-w-2xl mx-auto">
						See how each feature translates into tangible benefits and measurable impact.
					</p>
				</motion.div>

				<div className="bg-offWhite rounded-xl overflow-hidden shadow-lg border-2 border-grayBlue/20">
					<div className="overflow-x-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr className="border-b-2 border-darkBlue/20">
									<th className="p-6 text-left font-semibold font-FoundersGrotesk text-darkBlue bg-primaryYellow/10 border-r border-grayBlue/20">
										Feature
									</th>
									<th className="p-6 text-left font-semibold font-FoundersGrotesk text-darkBlue bg-primaryYellow/20 border-r border-grayBlue/20">
										Student Benefit
									</th>
									<th className="p-6 text-left font-semibold font-FoundersGrotesk text-darkBlue bg-primaryYellow/10">
										Impact
									</th>
								</tr>
							</thead>
							<tbody>
								{comparisonData.map((row, index) => (
									<motion.tr
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										className="border-b border-grayBlue/10 hover:bg-primaryYellow/5 transition-colors">
										<td className="p-6 paragraph font-semibold text-darkBlue border-r border-grayBlue/10">
											{row.feature}
										</td>
										<td className="p-6 paragraph text-darkBlue border-r border-grayBlue/10">
											{row.studentBenefit}
										</td>
										<td className="p-6 paragraph text-grayBlue">
											{row.impact}
										</td>
									</motion.tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}

