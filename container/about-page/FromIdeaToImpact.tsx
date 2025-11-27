"use client";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Settings, Database, Target } from "lucide-react";

const transformations = [
	{
		layer: "Mindset",
		transformation: "From passive consumer of content → Strategic learner",
		icon: Brain,
	},
	{
		layer: "Process",
		transformation: "From chaos → Structured execution",
		icon: Settings,
	},
	{
		layer: "System",
		transformation: "From memory-based study → Data-backed performance tracking",
		icon: Database,
	},
	{
		layer: "Outcome",
		transformation: "From vague confidence → Readiness score and precision feedback",
		icon: Target,
	},
];

export default function FromIdeaToImpact() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-4">
						From Idea to Impact
					</h2>
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
						The Transformation Journey
					</h3>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto">
						Gestalty bridges the gap between effort and outcome—turning study time into measurable growth.
					</p>
				</motion.div>

				<div className="overflow-x-auto mb-8">
					<table className="w-full border-collapse min-w-[600px]">
						<thead>
							<tr className="border-b-2 border-primaryYellow">
								<th className="text-left py-4 px-6 text-xl font-bold font-FoundersGrotesk text-darkBlue">
									Layer
								</th>
								<th className="text-left py-4 px-6 text-xl font-bold font-FoundersGrotesk text-darkBlue">
									Transformation Achieved
								</th>
							</tr>
						</thead>
						<tbody>
							{transformations.map((item, index) => {
								const Icon = item.icon;
								return (
									<tr key={index} className="border-b border-grayBlue/20 hover:bg-beige/20 transition-colors">
										<td className="py-6 px-6">
											<div className="flex items-center gap-3">
												<Icon size={24} className="text-primaryYellow" />
												<span className="paragraph font-semibold text-darkBlue">
													{item.layer}
												</span>
											</div>
										</td>
										<td className="py-6 px-6">
											<div className="flex items-center gap-3">
												<ArrowRight size={20} className="text-grayBlue" />
												<p className="paragraph text-grayBlue">
													{item.transformation}
												</p>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

