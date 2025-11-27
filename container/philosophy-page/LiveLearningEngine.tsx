"use client";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Calendar, Play, RefreshCw, Target } from "lucide-react";

const cycleSteps = [
	{
		icon: Calendar,
		title: "Plan",
		description: "Strategic scheduling and goal setting",
		color: "from-primaryYellow to-primaryYellow/70",
	},
	{
		icon: Play,
		title: "Act",
		description: "Execute with focused intention",
		color: "from-primaryYellow/80 to-primaryYellow/50",
	},
	{
		icon: RefreshCw,
		title: "Reflect",
		description: "Analyze performance and patterns",
		color: "from-primaryYellow/60 to-primaryYellow/30",
	},
	{
		icon: Target,
		title: "Adapt",
		description: "Optimize based on insights",
		color: "from-primaryYellow/40 to-primaryYellow/20",
	},
];

export default function LiveLearningEngine() {
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
						Live Learning Engine—Study Like a Cognitive Scientist
					</h2>
					<div className="max-w-3xl mx-auto mb-8">
						<div className="bg-darkBlue/5 border-l-4 border-primaryYellow p-6 rounded-r-xl">
							<div className="flex items-start gap-4">
								<Quote size={32} className="text-primaryYellow flex-shrink-0 mt-1" />
								<p className="paragraph text-grayBlue text-lg font-semibold italic">
									"What gets scheduled gets done. What gets tracked gets optimized."
								</p>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12">
					<h3 className="text-3xl font-bold font-FoundersGrotesk text-darkBlue mb-8 text-center">
						The Framework
					</h3>
					<p className="paragraph text-grayBlue max-w-3xl mx-auto text-center mb-12">
						A continuous cycle mirroring high-performance business operation:
					</p>
					
					{/* Circular/Flow Visualization */}
					<div className="max-w-4xl mx-auto">
						<div className="relative">
							{/* Desktop: Circular Layout */}
							<div className="hidden md:grid md:grid-cols-2 gap-8">
								{cycleSteps.map((step, index) => {
									const Icon = step.icon;
									return (
										<motion.div
											key={index}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.5, delay: index * 0.1 }}
											className="relative">
											<div className={`bg-gradient-to-br ${step.color} p-6 rounded-xl border-2 border-primaryYellow/30 hover:border-primaryYellow transition-all`}>
												<div className="flex items-center gap-4 mb-4">
													<div className="w-12 h-12 bg-darkBlue rounded-full flex items-center justify-center">
														<Icon size={24} className="text-primaryYellow" />
													</div>
													<h4 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue">
														{step.title}
													</h4>
												</div>
												<p className="paragraph text-darkBlue">
													{step.description}
												</p>
											</div>
											{index < cycleSteps.length - 1 && (
												<div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
													<ArrowRight size={24} className="text-primaryYellow" />
												</div>
											)}
										</motion.div>
									);
								})}
							</div>
							
							{/* Mobile: Linear Layout */}
							<div className="md:hidden space-y-6">
								{cycleSteps.map((step, index) => {
									const Icon = step.icon;
									return (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.5, delay: index * 0.1 }}
											className="relative">
											<div className={`bg-gradient-to-br ${step.color} p-6 rounded-xl border-2 border-primaryYellow/30`}>
												<div className="flex items-center gap-4 mb-4">
													<div className="w-12 h-12 bg-darkBlue rounded-full flex items-center justify-center">
														<Icon size={24} className="text-primaryYellow" />
													</div>
													<h4 className="text-2xl font-bold font-FoundersGrotesk text-darkBlue">
														{step.title}
													</h4>
												</div>
												<p className="paragraph text-darkBlue">
													{step.description}
												</p>
											</div>
											{index < cycleSteps.length - 1 && (
												<div className="flex justify-center my-4">
													<ArrowRight size={24} className="text-primaryYellow rotate-90" />
												</div>
											)}
										</motion.div>
									);
								})}
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center">
					<div className="bg-darkBlue/5 border border-primaryYellow/20 rounded-xl p-8">
						<p className="paragraph text-grayBlue text-lg">
							This Live Learning Engine uses data, feedback loops, and focused optimization to drive learning excellence.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

