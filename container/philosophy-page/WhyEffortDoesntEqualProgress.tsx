"use client";
import { motion } from "framer-motion";
import { AlertCircle, Clock, BarChart3, Eye } from "lucide-react";

const coreIssues = [
	{
		icon: Clock,
		title: "They measure study hours",
		should: "They should measure learning quality",
	},
	{
		icon: BarChart3,
		title: "They track volume",
		should: "They should track mastery",
	},
	{
		icon: Eye,
		title: 'They rely on subjective feelings ("I think I\'m doing fine")',
		should: 'They need objective evidence ("Here\'s what your data shows")',
	},
];

export default function WhyEffortDoesntEqualProgress() {
	return (
		<section className="w-full bg-offWhite padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="max-w-[1600px] mx-auto padding-x">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center">
					<h2 className="sub-heading font-bold font-FoundersGrotesk text-darkBlue mb-6">
						Why Effort Doesn't Equal Progress
					</h2>
					<p className="paragraph text-grayBlue max-w-4xl mx-auto mb-8">
						Most ambitious aspirants face a painful reality: intense effort yields minimal results.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-8 text-center">
						The Core Issue
					</h3>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto text-center mb-12">
						The gap between effort and outcome exists because students track the wrong metrics.
					</p>
				</motion.div>

				<div className="space-y-6 max-w-5xl mx-auto">
					{coreIssues.map((issue, index) => {
						const Icon = issue.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primaryYellow/30 transition-all duration-300 hover:shadow-md">
								<div className="flex gap-5 items-start">
									<div className="flex-shrink-0">
										<div className="w-12 h-12 rounded-lg bg-primaryYellow/10 flex items-center justify-center">
											<Icon size={24} className="text-primaryYellow" />
										</div>
									</div>
									<div className="flex-1">
										<div className="mb-3">
											<p className="text-lg font-semibold font-FoundersGrotesk text-grayBlue mb-2">
												{issue.title}
											</p>
											<p className="text-lg font-semibold font-FoundersGrotesk text-primaryYellow">
												{issue.should}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

