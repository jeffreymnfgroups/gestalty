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
		<section className="w-full bg-offWhite py-20 lg:py-28 rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="text-4xl lg:text-5xl font-bold font-FoundersGrotesk text-darkBlue mb-6">
						From Idea to Impact
					</h2>
					<h3 className="text-3xl lg:text-4xl font-bold font-FoundersGrotesk text-darkBlue mb-8">
						The Transformation Journey
					</h3>
					<p className="text-lg lg:text-xl text-grayBlue max-w-4xl mx-auto">
						Gestalty bridges the gap between effort and outcome—turning study time into measurable growth.
					</p>
				</motion.div>

				<div className="bg-white border-2 border-darkBlue/10 rounded-2xl overflow-hidden shadow-md mb-8">
					<div className="overflow-x-auto">
						<table className="w-full border-collapse min-w-[600px]">
							<thead>
								<tr className="bg-lightBeige/50 border-b-2 border-primaryYellow">
									<th className="text-left py-5 px-6 text-xl lg:text-2xl font-bold font-FoundersGrotesk text-darkBlue">
										Layer
									</th>
									<th className="text-left py-5 px-6 text-xl lg:text-2xl font-bold font-FoundersGrotesk text-darkBlue">
										Transformation Achieved
									</th>
								</tr>
							</thead>
							<tbody>
								{transformations.map((item, index) => {
									const Icon = item.icon;
									return (
										<tr key={index} className="border-b border-darkBlue/10 hover:bg-lightBeige/30 transition-colors">
											<td className="py-6 px-6">
												<div className="flex items-center gap-3">
													<Icon className="w-8 h-8 text-primaryYellow" />
													<span className="text-lg lg:text-xl font-semibold text-darkBlue">
														{item.layer}
													</span>
												</div>
											</td>
											<td className="py-6 px-6">
												<div className="flex items-center gap-3">
													<ArrowRight className="w-6 h-6 text-grayBlue" />
													<p className="text-base lg:text-lg text-grayBlue">
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
			</div>
		</section>
	);
}

